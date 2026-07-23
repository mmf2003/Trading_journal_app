import { MetricCard } from "../../shared/ui/metric-card/MetricCard";
import "./DashboardPage.css";
import { Link } from "react-router-dom";

const dashboardMetrics = [
    {
        title: "Total P&L",
        value: "$4,280",
        change: "+12.4% this month",
        trend: "positive" as const,
    },
    {
        title: "Win Rate",
        value: "61.8%",
        change: "+3.2% vs last month",
        trend: "positive" as const,
    },
    {
        title: "Total Trades",
        value: "84",
        change: "18 trades this month",
        trend: "neutral" as const,
    },
    {
        title: "Profit Factor",
        value: "1.87",
        change: "+0.14 improvement",
        trend: "positive" as const,
    },
    {
        title: "Average Risk/Reward",
        value: "1:2.4",
        change: "Target: 1:2",
        trend: "positive" as const,
    },
    {
        title: "Max Drawdown",
        value: "-8.6%",
        change: "Within risk limit",
        trend: "negative" as const,
    },
];

export function DashboardPage() {
    return (
        <section className="dashboard-page">
            <div className="dashboard-page__intro">
                <div>
                    <h2>Performance overview</h2>
                    <p>Review your trading results, risk and account performance.</p>
                </div>

                <Link className="dashboard-page__button" to="/trades/new">
                    Add trade
                </Link>
            </div>

            <div className="dashboard-page__metrics">
                {dashboardMetrics.map((metric) => (
                    <MetricCard
                        key={metric.title}
                        title={metric.title}
                        value={metric.value}
                        change={metric.change}
                        trend={metric.trend}
                    />
                ))}
            </div>
        </section>
    );
}
