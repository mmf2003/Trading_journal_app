import type {
    TradeCalculations,
    TradeFormValues,
} from "../model/types";

function round(value: number, decimals = 2): number {
    const multiplier = 10 ** decimals;

    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

export function calculateTrade(
    trade: TradeFormValues,
): TradeCalculations {
    const directionMultiplier = trade.direction === "long" ? 1 : -1;

    const priceDifference =
        (trade.exitPrice - trade.entryPrice) * directionMultiplier;

    const grossPnl = priceDifference * trade.positionSize;

    const netPnl = grossPnl - trade.commission;

    const positionValue = trade.entryPrice * trade.positionSize;

    const resultPercent =
        positionValue > 0 ? (netPnl / positionValue) * 100 : 0;

    const stopDistance = Math.abs(trade.entryPrice - trade.stopLoss);

    const riskAmount = stopDistance * trade.positionSize;

    const rewardDistance = Math.abs(
        trade.takeProfit - trade.entryPrice,
    );

    const riskReward =
        stopDistance > 0 ? rewardDistance / stopDistance : null;

    const openedAt = new Date(trade.openedAt);
    const closedAt = new Date(trade.closedAt);

    const durationMinutes =
        !Number.isNaN(openedAt.getTime()) &&
        !Number.isNaN(closedAt.getTime())
            ? Math.max(
                  0,
                  Math.round(
                      (closedAt.getTime() - openedAt.getTime()) / 60_000,
                  ),
              )
            : 0;

    return {
        grossPnl: round(grossPnl),
        netPnl: round(netPnl),
        resultPercent: round(resultPercent),
        riskAmount: round(riskAmount),
        riskReward:
            riskReward === null ? null : round(riskReward),
        durationMinutes,
    };
}