import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const navigationItems = [
    {
        label: "Dashboard",
        path: "/dashboard",
    },
    {
        label: "Trades",
        path: "/trades",
    },
    {
        label: "Analytics",
        path: "/analytics",
    },
    {
        label: "Calendar",
        path: "/calendar",
    },
    {
        label: "Strategies",
        path: "/strategies",
    },
    {
        label: "Settings",
        path: "/settings",
    },
];

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
                <span className="sidebar__logo-mark">TJ</span>

                <div>
                    <strong>Trading Journal</strong>
                    <span>Performance tracker</span>
                </div>
            </div>

            <nav className="sidebar__navigation">
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar__link sidebar__link--active"
                                : "sidebar__link"
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}