export class StringMethods {
	static getLastNumberInString(str: string): number {
		const strNumbers = str.split(/[^-0-9]+/);
		const lastNumber = strNumbers[strNumbers.length - 1];
		const parsedNumber = parseFloat(lastNumber);
		return parsedNumber;
	}

	static getFirstNumberInString(str: string): number {	
		const strNumbers = str.split(/[^-0-9]+/);
		const firstNumber = strNumbers[0];
		const parsedNumber = parseFloat(firstNumber);
		return parsedNumber;
	}
}