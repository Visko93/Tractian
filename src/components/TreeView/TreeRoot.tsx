import { useState } from 'react';
import { Icons } from '../common/Icons';

type TreeNodeData = {
    name: string;
    type: 'node' | 'leaf';
    children?: TreeNodeData[];
};

interface TreeNodeProps {
    node: TreeNodeData;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const isComponent = node.type === 'leaf';
    return (
        <li >
            <div onClick={toggleExpand} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                {node.children && (
                    isExpanded ? <Icons.chevronDown size={16} /> : <Icons.chevronRight size={16} />
                )}
                <span className={node.type} style={{ marginLeft: node.children ? 4 : 20 }}>
                    {isComponent && <Icons.component style={{ marginRight: 4 }} width={18} height={18} />}
                    {!isComponent && <Icons.localization style={{ marginRight: 4 }} width={18} height={18} />}
                    {node.name}
                </span>
            </div>
            {node.children && isExpanded && (
                <ul>
                    {node.children.map((child, index) => (
                        <TreeNode key={index} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

interface TreeRootProps {
    data: TreeNodeData;
}

export const TreeRoot: React.FC<TreeRootProps> = ({ data }) => {
    return (
        <ul style={{
            padding: 0,
        }}>
            <TreeNode node={data} />
        </ul>
    );
};
