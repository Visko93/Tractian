import { useState } from "react";
import { TreeView } from "@/components/TreeView";
import { Viewer } from "@/components/Viewer";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Buttons";
import { Header } from "@/components/common/Header";
import { companyTreeMapper } from "@/utils/treeView/ index";
import { useQuery } from "@tanstack/react-query";
import { Company } from "@/utils/treeView/types";
import { getCompanies } from "@/services/companies";
import { getCompanyLocations } from "@/services/locations";
import { getCompanyAssets } from "@/services/assets";
import { useFilter } from '@/hooks/useFilter'

export function Home() {
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const [criticalSensor, setCriticalSensor] = useState(false);
    const [energySensor, setEnergySensor] = useState(false);
    const [search, setSearch] = useState("");

    const { data: companies } = useQuery<Company[]>({
        queryKey: ["companies"],
        queryFn: async () => await getCompanies()
            .then((data) => {
                if (!selectedCompany) {
                    setSelectedCompany(data[0].id)
                }
                return data
            })
    })

    const { data: assets } = useQuery({
        queryKey: ["assets", selectedCompany],
        queryFn: async () => await getCompanyAssets(selectedCompany)
    })

    const { data: locations } = useQuery({
        queryKey: ["locations", selectedCompany],
        queryFn: async () => await getCompanyLocations(selectedCompany)
    })
    const { filteredData: { assets: filteredAssets, locations: filteredLocations }, isLoading } = useFilter({
        energySensor,
        criticalSensor,
        text: search,
        assets: assets,
        locations: locations
    });

    const data = companyTreeMapper(filteredAssets, filteredLocations);
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
                        company={companies.find((company) => company.id === selectedCompany)?.name || ""}
                    />
                    <div >
                        <Button label="Sensor de Energia" variant={energySensor ? 'outline-active' : 'outline'}
                            onClick={() => setEnergySensor(!energySensor)}
                        />
                        <Button label="Critico" variant={criticalSensor ? 'outline-active' : 'outline'}
                            onClick={() => setCriticalSensor(!criticalSensor)}
                            style={{ marginLeft: 8 }} />
                    </div>
                </section>
                {/* Main Section */}
                <section className="dashboard__main">
                    <TreeView
                        data={data}
                        search={search}
                        onSearch={(value: string) => setSearch(value)}
                        loading={!locations || !assets || isLoading}
                    />
                    <Viewer />
                </section>
            </section>
        </div>
    );
}
