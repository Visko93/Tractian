import { useEffect, useState } from 'react';
import { Asset, Location } from '@/utils/treeView/types';
import { Icons } from '../common/Icons';
import { Leaf } from './Leaf';
import { useViewerContext } from '@/context/viewerContext';

interface TreeNodeProps {
    node: Asset | Location;
    depth: number;
}
const TreeNode: React.FC<TreeNodeProps> = ({ node, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const { select, selectedAsset } = useViewerContext();
    useEffect(() => {
        document.documentElement.style.setProperty('--indent', depth.toString());
    }, [depth])
    // if there is the property locationId in the node  , it isn't a location
    const isLocation = !('locationId' in node);
    const isComponent = () => {
        if ('sensorId' in node && node.sensorId !== null) {
            return true
        }
        if ('status' in node && node.status !== null) {
            return true
        }
        return false
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const hasChildren = node.children && node.children.length > 0;
    const Icon = isLocation ? Icons.localization : isComponent() ? Icons.component : Icons.asset;
    const Chevron = hasChildren ? isExpanded ? Icons.chevronDown : Icons.chevronRight : null;
    const isSelected = selectedAsset && selectedAsset.id === node.id;
    return (
        <div className='tree'>
            <Leaf
                onClick={
                    isComponent() ? () => { select(node as Asset) } : toggleExpand
                }
                className={`treeLeaf ${isSelected ? 'active' : ''}`}
                style={{
                    cursor: 'pointer',
                    paddingLeft: `${16}px`
                }}

            >
                {Chevron && <Chevron size={16} />}
                <Icon
                    width={22}
                    fill={isComponent() ? 'transparent' : 'hsla(212, 100%, 56%, 1)'}
                    stroke={isSelected ? 'white' : 'hsla(212, 100%, 56%, 1)'}
                    strokeWidth={isLocation ? 0.25 : 0.75}
                    style={{ marginRight: 4 }} />
                {node.name}
            </Leaf>
            {isExpanded && node.children && node.children.length > 0 && (
                <ul role='group' className='treeNode'
                    style={{
                        paddingLeft: `${depth * 16}px`,
                    }}
                >
                    {node.children.map(child => (
                        <TreeNode key={child.id} node={child} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export { TreeNode };