interface Asset {
    id: string;
    locationId: string | null;
    name: string;
    parentId: string | null;
    sensorType: string | null;
    status: string | null;
    gatewayId?: string;
    sensorId?: string;
    children?: Asset[];
}

interface Location {
    id: string;
    name: string;
    parentId: string | null;
    children?: Asset[] | Location[];
}

interface Company {
    id: string;
    name: string;
}

interface Filter {
    energySensor: boolean;
    criticalSensor: boolean;
    text?: string;
}


export type { Asset, Location, Company, Filter}