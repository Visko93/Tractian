import logo from "@/assets/logo.png"
import { Button } from "../Buttons";

export function Header() {

    return (
        <header className="header">
            <img src={logo} alt="TRACTIAN writen in white in capital letters" />
            <div className="header__buttons">
                {new Array(3).fill(0).map((_, index) => (
                    <Button key={index} label={`Button ${index + 1}`} variant="default" />
                ))}
            </div>
        </header>
    );
}
