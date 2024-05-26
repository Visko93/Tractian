import { Icons } from "../common/Icons";

export function SearchInput() {

    return (
        <div className="searchInput">
            <input type="search" placeholder="Buscar Ativo ou Local" />
            <Icons.search
                width={14}
                height={14}
                className="searchIcon"
            />
        </div>
    );
}
