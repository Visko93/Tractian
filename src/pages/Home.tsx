import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Buttons";
import { Header } from "@/components/common/Header";

export function Home() {

    return (
        <main>
            <Header />
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
                <section></section>
            </section>
        </main>
    );
}
