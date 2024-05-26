import { SearchInput } from "./SearchInput";
import { TreeRoot } from "./TreeRoot";

export function TreeView() {

    return (
        <div className="treeView">
            <SearchInput />
            <TreeRoot />
        </div>
    );
}
