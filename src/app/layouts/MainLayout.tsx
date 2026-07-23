import { Outlet } from "react-router-dom";

import { Header } from "../../widgets/header/Header";
import { Sidebar } from "../../widgets/sidebar/Sidebar";

import "./MainLayout.css";

export function MainLayout() {
    return (
        <div className="app-layout">
            <Sidebar />

            <div className="app-layout__content">
                <Header />

                <main className="app-layout__main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}