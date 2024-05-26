import { useState } from "react";
import { TreeView } from "@/components/TreeView";
import { Viewer } from "@/components/Viewer";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Buttons";
import { Header } from "@/components/common/Header";
import mock from "@/assets/api-data.json";
import { companyTreeMapper } from "@/utils/treeView/ index";

export function Home() {
    const [selectedCompany, setSelectedCompany] = useState<string>(mock.companies[0].id);
    const companiesOptions = mock.companies
    const data = companyTreeMapper(mock);

    return (
        <div>
            <Header
                current={selectedCompany}
                companies={companiesOptions}
                setCompany={setSelectedCompany}
            />
            <section className="dashboard">
                {/* Top Section */}
                <section className="dashboard__top">
                    <Breadcrumbs
                        company="Apex Unit"
                    />
                    <div >
                        <Button label="Sensor de Energia" variant="outline" />
                        <Button label="Critico" variant="outline" style={{ marginLeft: 8 }} />
                    </div>
                </section>
                {/* Main Section */}
                <section className="dashboard__main">
                    <TreeView
                        data={data[selectedCompany]}
                    />
                    <Viewer />
                </section>
            </section>
        </div>
    );
}
