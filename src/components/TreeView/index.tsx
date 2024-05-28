import type { Asset, Location } from "@/utils/treeView/types";
import { TreeNode } from "./Node";
import { SearchInput } from "./SearchInput";

interface TreeViewProps {
    data: Map<string, Asset | Location>
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
    return (
        <>
            <div className="treeView" >
                <SearchInput />
                {data && Array.from(data.values()).map(node => (
                    <ul key={node.id} style={{ width: '100%' }}>
                        <TreeNode node={node} depth={0} />
                    </ul>
                ))}
            </div>
        </>
    );
};

export { TreeView }