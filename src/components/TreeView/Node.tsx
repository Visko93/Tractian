import { useState } from 'react';
import { Asset, Location } from '@/utils/treeView/types';
import { Icons } from '../common/Icons';
import { Leaf } from './Leaf';

interface TreeNodeProps {
    node: Asset | Location;
    depth: number;
}
const TreeNode: React.FC<TreeNodeProps> = ({ node, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // if there is the property locationId in the node, it isn't a location
    const isLocation = !('locationId' in node);
    const isComponent = ('sensorType' in node) || ('status' in node);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const hasChildren = node.children && node.children.length > 0;
    const Icon = isLocation ? Icons.localization : isComponent ? Icons.asset : Icons.component;
    const Chevron = hasChildren ? isExpanded ? Icons.chevronDown : Icons.chevronRight : null;
    return (
        <>
            <Leaf onClick={toggleExpand} style={{ cursor: 'pointer', marginLeft: hasChildren ? '' : 16, paddingLeft: `${depth * 16}px` }}>
                {Chevron && <Chevron size={16} />}
                <Icon width={14} fill="hsla(212, 100%, 56%, 1)" style={{ marginRight: 2 }} />
                {node.name}
            </Leaf>
            {isExpanded && node.children && node.children.length > 0 && (
                <ul role='group' className='treeNode'>
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </>
    );
};

export { TreeNode };