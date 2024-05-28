import { Status } from "@/components/common/StatusBadge";

export function getAssetStatus(status: string | null) {
    switch (status) {
        case "operating":
            return Status.operating;
        case "alert":
            return Status.warning;
        case "warning":
            return Status.warning;
        default:
            return Status.inactive;
    }
}