import type { Asset, Location } from "@/utils/treeView/types";
import { TreeNode } from "./Node";

interface TreeViewProps {
    data: Map<string, Asset | Location>
}

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
    return (
        <div>
            {Array.from(data.values()).map(node => (
                <ul key={node.id}>
                    <TreeNode node={node} />
                </ul>
            ))}
        </div>
    );
};

export { TreeView }