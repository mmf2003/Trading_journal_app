import "./MetricCard.css";

type MetricCardProps = {
    title: string;
    value: string;
    change?: string;
    trend?: "positive" | "negative" | "neutral";
};

export function MetricCard({ title, value, change, trend = "neutral" }: MetricCardProps) {
    return (
        <article className="metric-card">
            <p className="metric-card__title">{title}</p>

            <strong className="metric-card__value">{value}</strong>

            {change && (
                <span className={`metric-card__change metric-card__change--${trend}`}>
                    {change}
                </span>
            )}
        </article>
    );
}
