import * as React from 'react';

type BreadcrumbsProps = React.ComponentPropsWithoutRef<'div'> & {
    company: string;
}

export function Breadcrumbs({ company, ...props }: BreadcrumbsProps) {

    return (
        <div className="breadcrumbs" {...props}>
            <span className='breadcrumbs__item'>Ativos</span>
            <span className='breadcrumbs__separator'></span>
            <span className='breadcrumbs__item-active'>{company}</span>
        </div>
    );
}
