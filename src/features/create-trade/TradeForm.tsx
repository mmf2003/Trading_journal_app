import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { calculateTrade } from "../../entities/trade/lib/calculateTrade";
import { tradeSchema } from "../../entities/trade/model/tradeSchema";
import type { TradeFormValues } from "../../entities/trade/model/types";

import "./TradeForm.css";

export function TradeForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<TradeFormValues>({
        resolver: zodResolver(tradeSchema),
        defaultValues: {
            symbol: "",
            direction: "long",
            commission: 0,
            strategy: "",
            notes: "",
        },
    });

    function handleCreateTrade(data: TradeFormValues) {
        const calculations = calculateTrade(data);

        const trade = {
            ...data,
            ...calculations,
        };

        console.log("Created trade:", trade);
    }

    function handleResetForm() {
        reset({
            symbol: "",
            direction: "long",
            commission: 0,
            strategy: "",
            notes: "",
        });
    }

    return (
        <form className="trade-form" onSubmit={handleSubmit(handleCreateTrade)} noValidate>
            <header className="trade-form__header">
                <div className="trade-form__heading">
                    <p className="trade-form__eyebrow">Trade management</p>

                    <h2>Add new trade</h2>

                    <p className="trade-form__description">
                        Record the execution, risk management and additional information about your
                        completed trade.
                    </p>
                </div>

                <div className="trade-form__actions">
                    <button
                        className="trade-form__button trade-form__button--secondary"
                        type="button"
                        onClick={handleResetForm}
                        disabled={isSubmitting}
                    >
                        Clear
                    </button>

                    <button
                        className="trade-form__button trade-form__button--primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Saving..." : "Save trade"}
                    </button>
                </div>
            </header>

            <section className="trade-form__section">
                <div className="trade-form__section-header">
                    <div className="trade-form__section-icon">01</div>

                    <div>
                        <h3>Trade details</h3>
                        <p>Enter the instrument, direction and execution details.</p>
                    </div>
                </div>

                <div className="trade-form__grid">
                    <div className="trade-form__field">
                        <label htmlFor="symbol">Instrument</label>

                        <input
                            id="symbol"
                            type="text"
                            placeholder="XAUUSD"
                            autoComplete="off"
                            {...register("symbol")}
                        />

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
                        <label htmlFor="commission">Commission</label>

                        <input
                            id="commission"
                            type="number"
                            min="0"
                            step="any"
                            placeholder="0"
                            {...register("commission", {
                                valueAsNumber: true,
                            })}
                        />

                        {errors.commission && (
                            <span className="trade-form__error">{errors.commission.message}</span>
                        )}
                    </div>
                </div>
            </section>

            <section className="trade-form__section">
                <div className="trade-form__section-header">
                    <div className="trade-form__section-icon">02</div>

                    <div>
                        <h3>Risk management</h3>
                        <p>Define the protection and target levels for the trade.</p>
                    </div>
                </div>

                <div className="trade-form__grid">
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
                </div>
            </section>

            <section className="trade-form__section">
                <div className="trade-form__section-header">
                    <div className="trade-form__section-icon">03</div>

                    <div>
                        <h3>Trade context</h3>
                        <p>Add the strategy, execution time and personal notes.</p>
                    </div>
                </div>

                <div className="trade-form__grid">
                    <div className="trade-form__field">
                        <label htmlFor="strategy">Strategy</label>

                        <input
                            id="strategy"
                            type="text"
                            placeholder="Turtle Soup"
                            autoComplete="off"
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
                            rows={5}
                            placeholder="Describe the setup, execution and result..."
                            {...register("notes")}
                        />

                        {errors.notes && (
                            <span className="trade-form__error">{errors.notes.message}</span>
                        )}
                    </div>
                </div>
            </section>

            <footer className="trade-form__footer">
                <p>Review the entered information before saving the trade.</p>

                <div className="trade-form__actions">
                    <button
                        className="trade-form__button trade-form__button--secondary"
                        type="button"
                        onClick={handleResetForm}
                        disabled={isSubmitting}
                    >
                        Clear form
                    </button>

                    <button
                        className="trade-form__button trade-form__button--primary"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Saving..." : "Save trade"}
                    </button>
                </div>
            </footer>
        </form>
    );
}
