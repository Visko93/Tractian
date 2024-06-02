enum Status {
    operating = 'operating',
    inactive = 'inactive',
    warning = 'warning',
    unknown = 'unknown'
}

function StatusBadge({ status }: { status: Status }) {
    switch (status) {
        case 'operating':
            return <div className='status-badge status-badge--active'></div>;
        case 'inactive':
            return <div className='status-badge status-badge--inactive'></div>;
        case 'warning':
            return <div className='status-badge status-badge--warning'></div>;
        default:
            return <div className='status-badge status-badge--unknown'></div>;
    }
}

export { StatusBadge, Status };