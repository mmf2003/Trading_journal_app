export type TradeDirection = "long" | "short";

export type TradeFormValues = {
    symbol: string;
    direction: TradeDirection;
    entryPrice: number;
    exitPrice: number;
    positionSize: number;
    stopLoss: number;
    takeProfit: number;
    commission: number;
    openedAt: string;
    closedAt: string;
    strategy?: string;
    notes?: string;
};

export type TradeCalculations = {
    grossPnl: number;
    netPnl: number;
    resultPercent: number;
    riskAmount: number;
    riskReward: number | null;
    durationMinutes: number;
};