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
                {Array.from(data.values()).map(node => (
                    <ul key={node.id} >
                        <TreeNode node={node} depth={0} />
                    </ul>
                ))}
            </div>
        </>
    );
};

export { TreeView }