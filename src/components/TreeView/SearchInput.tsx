import { Icons } from "../common/Icons";

export function SearchInput() {

    return (
        <div className="search-input">
            <input type="search" placeholder="Buscar Ativo ou Local" className="search-input__field" />
            <Icons.search
                width={14}
                height={14}
                className="search-input__icon"
            />
        </div>
    );
}
