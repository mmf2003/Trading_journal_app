import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { AnalyticsPage } from "../../pages/analytics/AnalyticsPage";
import { DashboardPage } from "../../pages/dashboard/DashboardPage";
import { LoginPage } from "../../pages/login/LoginPage";
import { RegisterPage } from "../../pages/register/RegisterPage";
import { TradesPage } from "../../pages/trades/TradesPage";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route element={<MainLayout />}>
                <Route index element={<Navigate to="/dashboard" replace />} />

                <Route path="/dashboard" element={<DashboardPage />} />

                <Route path="/trades" element={<TradesPage />} />

                <Route path="/analytics" element={<AnalyticsPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}