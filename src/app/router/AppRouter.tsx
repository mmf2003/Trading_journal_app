import { Navigate, Route, Routes } from "react-router-dom";
import { AnalyticsPage } from "../../pages/analytics/AnalyticsPage";
import { DashboardPage } from "../../pages/dashboard/DashboardPage";
import { LoginPage } from "../../pages/login/LoginPage";
import { RegisterPage } from "../../pages/register/RegisterPage";
import { TradesPage } from "../../pages/trades/TradesPage";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/trades" element={<TradesPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}