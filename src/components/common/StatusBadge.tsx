enum Status {
    operating = 'operating',
    inactive = 'inactive',
    warning = 'warning',
    unknown = 'unknown'
}

function StatusBadge({ status }: { status: Status }) {
    switch (status) {
        case 'operating':
            return <div className='statusBadge active'></div>;
        case 'inactive':
            return <div className='statusBadge inactive'></div>;
        case 'warning':
            return <div className='statusBadge warning'></div>;
        default:
            return <div className='statusBadge unknown'></div>;
    }
}

export { StatusBadge, Status };