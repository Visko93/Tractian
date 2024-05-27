import { Status } from "@/components/common/StatusBadge";

export function getAssetStatus(status: string | null) {
    switch (status) {
        case "active":
            return Status.active;
        case "alert":
            return Status.warning;
        case "warning":
            return Status.warning;
        default:
            return Status.inactive;
    }
}