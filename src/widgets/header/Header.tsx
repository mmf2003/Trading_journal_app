import { useLocation } from "react-router-dom";
import "./Header.css";

const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/trades": "Trades",
    "/trades/new": "Add Trade",
    "/analytics": "Analytics",
    "/calendar": "Trading Calendar",
    "/strategies": "Strategies",
    "/settings": "Settings",
};

export function Header() {
    const location = useLocation();

    const title = pageTitles[location.pathname] ?? "Trading Journal";

    return (
        <header className="header">
            <div>
                <p className="header__eyebrow">Trading performance</p>
                <h1 className="header__title">{title}</h1>
            </div>

            <button className="header__profile" type="button">
                <span className="header__avatar">A</span>

                <span className="header__user">
                    <strong>Alexandr</strong>
                    <small>Trader</small>
                </span>
            </button>
        </header>
    );
}
