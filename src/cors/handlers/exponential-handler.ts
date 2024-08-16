import { IMathHandler } from "../interfaces/i-math-handler.js";
import { StringMethods } from "../string-methods.js";

type ExponentialDTO = {
	base: number;
	exponent: number;
}

export class ExponentialHandler implements IMathHandler {
	private nextHandler: IMathHandler | null = null;

	public setNext(handler: IMathHandler): void {
		this.nextHandler = handler;
	}

	public handle(expression: string): number {
		if (expression.includes('^')) {
			const newExpression = this.handleExponential(expression);
			return this.handleNext(newExpression);
		}

		return this.handleNext(expression);
	}

	private handleNext(expression: string): number {
		if (!this.nextHandler) {
			throw new Error("No handler found.");
		}
		return this.nextHandler.handle(expression);
	}

	private handleExponential(expression: string): string {
		let newExpression = expression;
		while (newExpression.includes('^')) {
			const [base, exponent] = expression.split('^');
			const baseNumber = StringMethods.getLastNumberInString(base);
			const exponentNumber = StringMethods.getFirstNumberInString(exponent);
			const newResult = Math.pow(baseNumber, exponentNumber);
			const previousStringPiece = `${base}^${exponent}`;
			newExpression = newExpression.replace(previousStringPiece, newResult.toString());
		}
		return newExpression;
	}
}