export interface IMathHandler {
	setNext(handler: IMathHandler): void;
	handle(expression: string): number;
}