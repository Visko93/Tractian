import type { Asset, Location } from "@/utils/treeView/types";
import { TreeNode } from "./Node";
import { SearchInput } from "./SearchInput";

interface TreeViewProps {
    data: Map<string, Asset | Location>
    search: string;
    loading: boolean;
    onSearch: (value: string) => void;
}

const TreeView: React.FC<TreeViewProps> = ({ data, search, loading, onSearch }) => {
    return (
        <div className="tree-view" >
            <SearchInput
                value={search}
                onChange={(e) => onSearch(e.target.value)}
            />
            {loading && <div>Loading...</div>}
            {data && !loading && Array.from(data.values()).map(node => (
                <ul key={node.id} style={{ width: '100%' }}>
                    <TreeNode node={node} depth={0} />
                </ul>
            ))}
        </div>
    );
};

export { TreeView }