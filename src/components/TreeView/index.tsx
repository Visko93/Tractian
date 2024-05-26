import { SearchInput } from "./SearchInput";
import { TreeRoot } from "./TreeRoot";

export function TreeView() {

    return (
        <div className="treeView">
            <SearchInput />
            <TreeRoot
                data={{
                    name: 'PRODUCTION AREA - RAW MATERIAL',
                    type: 'node',
                    children: [
                        {
                            name: 'Machinery House',
                            type: 'node',
                            children: [
                                {
                                    name: 'MOTORS H12D',
                                    type: 'node',
                                    children: [
                                        { name: 'MOTORS H12D - Stage 1', type: 'leaf' },
                                        { name: 'MOTORS H12D - Stage 2', type: 'leaf' }
                                    ]
                                }
                            ]
                        }
                    ]
                }}
            />
        </div>
    );
}
