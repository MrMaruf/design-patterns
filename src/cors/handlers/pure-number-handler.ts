import { IMathHandler } from "../interfaces/i-math-handler.js";
import { StringMethods } from "../string-methods.js";

export class PureNumberHandler implements IMathHandler {

	public setNext(handler: IMathHandler): void {
		throw new Error("Should be last handler.");
	}

	public handle(expression: string): number {
		const parsedExpression = Number(expression.trim());
		if (isNaN(parsedExpression)) {
			throw new Error("Expression is not a number.");
		}
		return parsedExpression;
	}
}