import { IMathHandler } from "../interfaces/i-math-handler.js";

export class MinusCoverHandler {
	private nextHandler: IMathHandler | null = null;

	public setNext(handler: IMathHandler): void {
		this.nextHandler = handler;
	}

	public handle(expression: string): number {
		const newExpression = expression.replaceAll(/(?<=\d)-(?=\d)/g, "+-");
		return this.handleNext(newExpression);
	}

	private handleNext(expression: string): number {
		if (!this.nextHandler) {
			throw new Error("No handler found.");
		}
		return this.nextHandler.handle(expression);
	}
}