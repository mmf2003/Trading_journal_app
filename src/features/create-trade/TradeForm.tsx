import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import "./TradeForm.css";

const tradeSchema = z.object({
    symbol: z.string().trim().min(2, "Enter at least 2 characters").max(20, "Symbol is too long"),

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

    openedAt: z.string().min(1, "Open date is required"),

    closedAt: z.string().min(1, "Close date is required"),

    strategy: z.string().trim().optional(),

    notes: z.string().trim().max(1000, "Notes are too long").optional(),
});

type TradeFormValues = z.infer<typeof tradeSchema>;

export function TradeForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TradeFormValues>({
        resolver: zodResolver(tradeSchema),

        defaultValues: {
            symbol: "",
            direction: "long",
            strategy: "",
            notes: "",
        },
    });

    function handleCreateTrade(data: TradeFormValues) {
        console.log("Trade form data:", data);
    }

    return (
        <form className="trade-form" onSubmit={handleSubmit(handleCreateTrade)} noValidate>
            <div className="trade-form__header">
                <div>
                    <p className="trade-form__eyebrow">Trade management</p>
                    <h2>Add new trade</h2>
                    <p>Record the key details of your completed trade.</p>
                </div>

                <button className="trade-form__submit" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save trade"}
                </button>
            </div>

            <div className="trade-form__grid">
                <div className="trade-form__field">
                    <label htmlFor="symbol">Instrument</label>

                    <input id="symbol" type="text" placeholder="XAUUSD" {...register("symbol")} />

                    {errors.symbol && (
                        <span className="trade-form__error">{errors.symbol.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="direction">Direction</label>

                    <select id="direction" {...register("direction")}>
                        <option value="long">Long</option>
                        <option value="short">Short</option>
                    </select>

                    {errors.direction && (
                        <span className="trade-form__error">{errors.direction.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="entryPrice">Entry price</label>

                    <input
                        id="entryPrice"
                        type="number"
                        step="any"
                        placeholder="3350.50"
                        {...register("entryPrice", {
                            valueAsNumber: true,
                        })}
                    />

                    {errors.entryPrice && (
                        <span className="trade-form__error">{errors.entryPrice.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="exitPrice">Exit price</label>

                    <input
                        id="exitPrice"
                        type="number"
                        step="any"
                        placeholder="3375.20"
                        {...register("exitPrice", {
                            valueAsNumber: true,
                        })}
                    />

                    {errors.exitPrice && (
                        <span className="trade-form__error">{errors.exitPrice.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="positionSize">Position size</label>

                    <input
                        id="positionSize"
                        type="number"
                        step="any"
                        placeholder="1"
                        {...register("positionSize", {
                            valueAsNumber: true,
                        })}
                    />

                    {errors.positionSize && (
                        <span className="trade-form__error">{errors.positionSize.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="stopLoss">Stop loss</label>

                    <input
                        id="stopLoss"
                        type="number"
                        step="any"
                        placeholder="3338.00"
                        {...register("stopLoss", {
                            valueAsNumber: true,
                        })}
                    />

                    {errors.stopLoss && (
                        <span className="trade-form__error">{errors.stopLoss.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="takeProfit">Take profit</label>

                    <input
                        id="takeProfit"
                        type="number"
                        step="any"
                        placeholder="3380.00"
                        {...register("takeProfit", {
                            valueAsNumber: true,
                        })}
                    />

                    {errors.takeProfit && (
                        <span className="trade-form__error">{errors.takeProfit.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="strategy">Strategy</label>

                    <input
                        id="strategy"
                        type="text"
                        placeholder="Turtle Soup"
                        {...register("strategy")}
                    />

                    {errors.strategy && (
                        <span className="trade-form__error">{errors.strategy.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="openedAt">Opened at</label>

                    <input id="openedAt" type="datetime-local" {...register("openedAt")} />

                    {errors.openedAt && (
                        <span className="trade-form__error">{errors.openedAt.message}</span>
                    )}
                </div>

                <div className="trade-form__field">
                    <label htmlFor="closedAt">Closed at</label>

                    <input id="closedAt" type="datetime-local" {...register("closedAt")} />

                    {errors.closedAt && (
                        <span className="trade-form__error">{errors.closedAt.message}</span>
                    )}
                </div>

                <div className="trade-form__field trade-form__field--full">
                    <label htmlFor="notes">Notes</label>

                    <textarea
                        id="notes"
                        rows={6}
                        placeholder="Describe the setup, execution and result..."
                        {...register("notes")}
                    />

                    {errors.notes && (
                        <span className="trade-form__error">{errors.notes.message}</span>
                    )}
                </div>
            </div>
        </form>
    );
}
