import * as React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    label: string,
    variant: "default" | "outline" | "default-active",
    icon?: React.ReactElement,
};

export function Button({ icon: Icon, label, variant, ...props }: ButtonProps) {
    return (
        <button className={`button button--${variant}`} {...props}>
            {Icon && Icon}
            {label}
        </button>
    );
}
