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
			console.log("ExponentialHandler: ", newExpression);
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
			console.log("Pre newExpression: ", newExpression);
			const [base, exponent] = newExpression.split('^');
			console.log("base: ", base);
			console.log("exponent: ", exponent);
			const baseNumber = StringMethods.getLastNumberInString(base);
			console.log("baseNumber: ", baseNumber);
			const exponentNumber = StringMethods.getFirstNumberInString(exponent);
			console.log("exponentNumber: ", exponentNumber);
			const newResult = Math.pow(baseNumber, exponentNumber);
			const previousStringPiece = `${baseNumber}^${exponentNumber}`;
			newExpression = newExpression.replace(previousStringPiece, newResult.toString());
			console.log("newExpression: ", newExpression);
		}
		return newExpression;
	}
}