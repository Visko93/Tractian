import React, { useState } from 'react';
import { Asset, Location } from '@/utils/treeView/types';
import { Icons } from '../common/Icons';

// Define the props for the TreeNode component
interface TreeNodeProps {
    node: Asset | Location;
}

// TreeNode component to render each node in the tree
const TreeNode: React.FC<TreeNodeProps> = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const isLocation = (node as Location).id === undefined;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <li>
            <div onClick={toggleExpand} style={{ cursor: 'pointer' }}>
                {isExpanded ? <Icons.chevronDown size={16} /> : <Icons.chevronRight size={16} />}
                {isLocation ? <Icons.localization width={16} /> : <Icons.component width={16} />}
                {node.name}
            </div>
            {isExpanded && node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};


export { TreeNode };