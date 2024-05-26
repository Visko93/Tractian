import { Asset, Location, TreeNodeData } from "./types";

function getParent (data: Asset | Location) {
    return data.parentId;
}
function iterateOverChildren<T extends Asset | Location>(data: Array<T>) {
    let map = new Map(data.map((item) => [item.id, {...item, children: [] as T[]}]));
    for (const item of map.values()) {
        const parent = getParent(item);
        if (parent) {
            map.get(parent)?.children.push(item);
            map.delete(item.id);
        }
    }
    return map;
}
function companyTreeMapper (data: TreeNodeData) {
    const { companies, ...rest } = data;
    const companiesMap = new Map(companies.map((company) => [company.id, rest[company.id]]));
    let parsedData: {[key: string]: Map<string, Asset | Location>} = {}
    for (const [company, {assets, locations}] of companiesMap) {

       let assetMap = iterateOverChildren<Asset>(assets);
        let locationMap = iterateOverChildren<Location>(locations);

        for (const asset of assetMap.values()) {
            if (asset.locationId) {
                locationMap.get(asset.locationId)?.children.push(asset);
            }
        }
        
        parsedData[company] = locationMap;
    }
    return parsedData;
}
export { companyTreeMapper };