import React from "react";
import { Icons } from "../common/Icons";
import { Status, StatusBadge } from "../common/StatusBadge";
import { DragAndDropImage } from "./DropInput";
import { useViewerContext } from "@/context/viewerContext";
import { getAssetStatus } from "@/utils";

interface StackedDataProps {
    title: string | null;
    name?: string;
    icon?: React.ReactNode;
}
function StackedData({ name, title, icon }: StackedDataProps) {
    return (
        <div className="stacked__data">
            <h4 className="stacked__title">{title ?? ""}</h4>
            <div className="stacked__name" >
                {icon}
                <p>{name}</p>
            </div>
        </div>
    );

}

export function Viewer() {
    const { selectedAsset } = useViewerContext();
    console.log(selectedAsset);
    const onDrop = (files: File) => {
        console.log(files);
    }
    if (!selectedAsset) {
        return (
            <div className="viewer">
                <div className="viewer__title">
                    <h1>Selecione um Ativo</h1>
                </div>
            </div>
        );
    }
    return (
        <div className="viewer">
            <div className="viewer__title">
                <h1>{selectedAsset.name}</h1>
                <StatusBadge status={getAssetStatus(selectedAsset.status)} />
            </div>
            <div className="viewer__content">
                <div className="viewer__main">
                    <DragAndDropImage onDrop={onDrop} />
                    <div className="viewer__data">
                        <StackedData title="Tipo de Equipamento" name="Motor" />
                        <StackedData title="Responsaveis" name="Mecanica" />
                    </div>
                </div>
                <div className="viewer__devices">
                    <StackedData title="Sensor" name={selectedAsset.id} icon={<Icons.sensor />} />
                    <StackedData title="Receptor" name={selectedAsset.gatewayId} icon={<Icons.router />} />
                </div>
            </div>
        </div>
    );
}
