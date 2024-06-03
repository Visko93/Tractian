import { Asset, Location } from "./types";

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

function companyTreeMapper (assets: Asset[], locations: Location[]) {
    if (!assets || !locations) return new Map();
    let parsedData: Map<string, Asset | Location> = new Map();

    let assetMap = iterateOverChildren<Asset>(assets);
    let locationMap = iterateOverChildren<Location>(locations);

    for (const asset of assetMap.values()) {
        if (asset.locationId) {
            locationMap.get(asset.locationId)?.children.push(asset);
        }
    }
        
    parsedData = locationMap;
    return parsedData;
}
export { companyTreeMapper };