import { AddHandler } from "./handlers/add-handler.js";
import { ExponentialHandler } from "./handlers/exponential-handler.js";
import { MinusCoverHandler } from "./handlers/minus-cover-handler.js";
import { MultiplicationHandler } from "./handlers/multiplication-handler.js";
import { PureNumberHandler } from "./handlers/pure-number-handler.js";


const exponentialHandler = new ExponentialHandler();
const pureNumberHandler = new PureNumberHandler();
const minusCoverHandler = new MinusCoverHandler();
const addHandler = new AddHandler();
const multiplicationHandler = new MultiplicationHandler();

minusCoverHandler.setNext(exponentialHandler);
exponentialHandler.setNext(multiplicationHandler);
multiplicationHandler.setNext(addHandler);
addHandler.setNext(pureNumberHandler);


const examples = [
	"2^3",
	"125",
	"-2^3+5*14^2",
	"2^-3",
	"-15",
	"2+3",
	"2+3*4",
	"2+3*4-5",
];

const expectedResults = [
	8,
	125,
	-1966,
	0.125,
	-15,
	5,
	14,
	7,
];

export function main(): void {
	for (const example of examples) {
		const result = minusCoverHandler.handle(example);
		console.log(`Result for ${example} = ${result}; Expected: ${expectedResults[examples.indexOf(example)]}`);
	}
}