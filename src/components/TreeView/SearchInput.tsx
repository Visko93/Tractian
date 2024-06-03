import { ComponentPropsWithoutRef } from "react";
import { Icons } from "../common/Icons";

type SearchInputProps = ComponentPropsWithoutRef<"input"> & {
    containerStyle?: React.CSSProperties;
}

export function SearchInput({ containerStyle, ...rest }: SearchInputProps) {

    return (
        <div className="search-input" style={containerStyle}>
            <input type="search" placeholder="Buscar Ativo ou Local" className="search-input__field" {...rest} />
            <Icons.search
                width={14}
                height={14}
                className="search-input__icon"
            />
        </div>
    );
}
