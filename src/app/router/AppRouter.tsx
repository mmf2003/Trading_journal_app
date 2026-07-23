import { Navigate, Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { AnalyticsPage } from "../../pages/analytics/AnalyticsPage";
import { DashboardPage } from "../../pages/dashboard/DashboardPage";
import { LoginPage } from "../../pages/login/LoginPage";
import { RegisterPage } from "../../pages/register/RegisterPage";
import { TradesPage } from "../../pages/trades/TradesPage";
import { CalendarPage } from "../../pages/calendar/CalendarPage";
import { SettingsPage } from "../../pages/settings/SettingsPage";
import { StrategiesPage } from "../../pages/strategies/StrategiesPage";
import { TradeCreatePage } from "../../pages/trade-create/TradeCreatePage";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route element={<MainLayout />}>
                <Route index element={<Navigate to="/dashboard" replace />} />

                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/trades" element={<TradesPage />} />
                <Route path="/trades/new" element={<TradeCreatePage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/strategies" element={<StrategiesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}
