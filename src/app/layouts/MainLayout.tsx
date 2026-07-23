import { Outlet } from "react-router-dom";

export function MainLayout() {
    return (
        <div>
            <h2>Header</h2>

            <main>
                <aside>Sidebar</aside>

                <section>
                    <Outlet />
                </section>
            </main>
        </div>
    );
}