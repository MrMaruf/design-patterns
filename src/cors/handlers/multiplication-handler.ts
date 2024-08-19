import { IMathHandler } from "../interfaces/i-math-handler.js";
import { StringMethods } from "../string-methods.js";

export class MultiplicationHandler implements IMathHandler {
	private nextHandler: IMathHandler | null = null;

	public setNext(handler: IMathHandler): void {
		this.nextHandler = handler;
	}

	public handle(expression: string): number {
		if (expression.includes('*')) {
			const newExpression = this.handleMultiplication(expression);
			console.log("MultiplicationHandler: ", newExpression);
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

	private handleMultiplication(expression: string): string {
		let newExpression = expression;
		while (newExpression.includes('*')) {
			const [firstNumber, secondNumber] = newExpression.split('*');
			const firstParsed = StringMethods.getLastNumberInString(firstNumber);
			const secondParsed = StringMethods.getFirstNumberInString(secondNumber);
			const newResult = firstParsed * secondParsed;
			const previousStringPiece = `${firstParsed}*${secondParsed}`;
			newExpression = newExpression.replace(previousStringPiece, newResult.toString());
		}
		return newExpression;
	}
}