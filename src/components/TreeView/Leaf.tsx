import { ComponentPropsWithoutRef } from "react";

type LeafProps = ComponentPropsWithoutRef<'li'> & {
    onClick: () => void;
};
function Leaf({ children, onClick, ...rest }: LeafProps) {
    return (
        <li  {...rest} onClick={onClick}>
            {children}
        </li>
    );
}

export { Leaf };