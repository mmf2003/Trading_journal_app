import "./Header.css";

export function Header() {
    return (
        <header className="header">
            <div>
                <p className="header__eyebrow">Trading performance</p>
                <h1 className="header__title">Dashboard</h1>
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