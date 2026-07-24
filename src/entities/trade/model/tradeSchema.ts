import { z } from "zod";

export const tradeSchema = z
    .object({
        symbol: z
            .string()
            .trim()
            .min(2, "Enter at least 2 characters")
            .max(20, "Symbol is too long")
            .transform((value) => value.toUpperCase()),

        direction: z.enum(["long", "short"]),

        entryPrice: z
            .number({
                error: "Entry price is required",
            })
            .positive("Entry price must be greater than 0"),

        exitPrice: z
            .number({
                error: "Exit price is required",
            })
            .positive("Exit price must be greater than 0"),

        positionSize: z
            .number({
                error: "Position size is required",
            })
            .positive("Position size must be greater than 0"),

        stopLoss: z
            .number({
                error: "Stop loss is required",
            })
            .positive("Stop loss must be greater than 0"),

        takeProfit: z
            .number({
                error: "Take profit is required",
            })
            .positive("Take profit must be greater than 0"),

        commission: z
            .number({
                error: "Commission is required",
            })
            .min(0, "Commission cannot be negative"),

        openedAt: z.string().min(1, "Open date is required"),

        closedAt: z.string().min(1, "Close date is required"),

        strategy: z.string().trim().optional(),

        notes: z.string().trim().max(1000, "Notes are too long").optional(),
    })
    .superRefine((trade, context) => {
        const openedAt = new Date(trade.openedAt);
        const closedAt = new Date(trade.closedAt);

        if (
            !Number.isNaN(openedAt.getTime()) &&
            !Number.isNaN(closedAt.getTime()) &&
            closedAt <= openedAt
        ) {
            context.addIssue({
                code: "custom",
                path: ["closedAt"],
                message: "Close date must be later than open date",
            });
        }

        if (trade.direction === "long") {
            if (trade.stopLoss >= trade.entryPrice) {
                context.addIssue({
                    code: "custom",
                    path: ["stopLoss"],
                    message: "For a Long trade, stop loss must be below entry price",
                });
            }

            if (trade.takeProfit <= trade.entryPrice) {
                context.addIssue({
                    code: "custom",
                    path: ["takeProfit"],
                    message: "For a Long trade, take profit must be above entry price",
                });
            }
        }

        if (trade.direction === "short") {
            if (trade.stopLoss <= trade.entryPrice) {
                context.addIssue({
                    code: "custom",
                    path: ["stopLoss"],
                    message: "For a Short trade, stop loss must be above entry price",
                });
            }

            if (trade.takeProfit >= trade.entryPrice) {
                context.addIssue({
                    code: "custom",
                    path: ["takeProfit"],
                    message: "For a Short trade, take profit must be below entry price",
                });
            }
        }
    });