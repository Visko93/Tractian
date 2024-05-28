import { useState } from "react";
import { TreeView } from "@/components/TreeView";
import { Viewer } from "@/components/Viewer";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Buttons";
import { Header } from "@/components/common/Header";
import { companyTreeMapper } from "@/utils/treeView/ index";
import { useQuery } from "@tanstack/react-query";
import { URL_API } from "@/services/client";
import axios from "axios";
import { Company } from "@/utils/treeView/types";

export function Home() {
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const { data: companies } = useQuery<Company[]>({
        queryKey: ["companies"],
        queryFn: () => axios
            .get(URL_API + "/companies")
            .then((res) =>
                res.data,
                (e) => { throw new Error(e) }
            )
            .then((data) => {
                if (!selectedCompany) {
                    setSelectedCompany(data[0].id)
                }
                return data
            })
    })

    const { data: assets } = useQuery({
        queryKey: ["assets", selectedCompany],
        queryFn: () => axios
            .get(URL_API + `/companies/${selectedCompany}/assets`)
            .then((res) =>
                res.data,
                (e) => { throw new Error(e) }
            )
    })

    const { data: locations } = useQuery({
        queryKey: ["locations", selectedCompany],
        queryFn: () => axios
            .get(URL_API + `/companies/${selectedCompany}/locations`)
            .then((res) =>
                res.data,
                (e) => { throw new Error(e) }
            )
    })
    console.log(assets, locations)
    const data = companyTreeMapper(assets, locations);
    console.debug('TreeView', data);

    if (!companies) return
    return (
        <div>
            <Header
                current={selectedCompany}
                companies={companies}
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
                        data={data}
                    />
                    <Viewer />
                </section>
            </section>
        </div>
    );
}
