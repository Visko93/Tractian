import logo from "@/assets/logo.png"
import { Button } from "../Buttons";

interface HeaderProps {
    current: string;
    setCompany: (id: string) => void;
    companies: { id: string, name: string }[];
}

export function Header({ current, companies, setCompany }: HeaderProps) {
    const onCompanyChange = (id: string) => {
        setCompany(id);
    }
    return (
        <header className="header">
            <img src={logo} alt="TRACTIAN writen in white in capital letters" />
            <div className="header__buttons">
                {/* {new Array(3).fill(0).map((_, index) => (
                    <Button key={index} label={`Button ${index + 1}`} variant="default" />
                ))} */}
                {companies.map((company) => (
                    <Button
                        key={company.id}
                        label={company.name}
                        variant={company.id === current ? "default-active" : "default"}
                        onClick={() => onCompanyChange(company.id)}
                    />
                ))}
            </div>
        </header>
    );
}
