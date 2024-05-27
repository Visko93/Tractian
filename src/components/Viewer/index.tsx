import React from "react";
import { Icons } from "../common/Icons";
import { Status, StatusBadge } from "../common/StatusBadge";
import { DragAndDropImage } from "./DropInput";

interface StackedDataProps {
    title: string;
    name: string;
    icon?: React.ReactNode;
}
function StackedData({ name, title, icon }: StackedDataProps) {
    return (
        <div className="stacked__data">
            <h4 className="stacked__title">{title}</h4>
            <div>
                {icon}
                <span className="stacked__name">{name}</span>
            </div>
        </div>
    );

}

export function Viewer() {
    const onDrop = (files: FileList) => {
        console.log(files);
    }
    return (
        <div className="viewer">
            <div className="viewer__title">
                <h1>MOTOR RT COAL AF01</h1>
                <StatusBadge status={Status.active} />
            </div>
            <div className="viewer__main">
                <div></div>
                <div>
                    <StackedData title="Tipo de Equipamento" name="Motor" />
                    <StackedData title="Responsaveis" name="Mecanica" />
                </div>
                <DragAndDropImage onDrop={onDrop} />

            </div>
            <div className="viewer__devices">
                <StackedData title="Sensor" name="HIO4510" icon={<Icons.component />} />
                <StackedData title="Receptor" name="EUH4R27" icon={<Icons.component />} />
            </div>
        </div>
    );
}
