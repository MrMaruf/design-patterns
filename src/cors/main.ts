import { ExponentialHandler } from "./handlers/exponential-handler.js";
import { MinusCoverHandler } from "./handlers/minus-cover-handler.js";
import { PureNumberHandler } from "./handlers/pure-number-handler.js";


const exponentialHandler = new ExponentialHandler();
const pureNumberHandler = new PureNumberHandler();
const minusCoverHandler = new MinusCoverHandler();

minusCoverHandler.setNext(exponentialHandler);
exponentialHandler.setNext(pureNumberHandler);

const examples = [
	"2^3",
	"125",
	"-2^3",
	"2^-3",
	"-15"
];

for (const example of examples) {
	const result = exponentialHandler.handle(example);
	console.log(`Result for ${example} = ${result}`);
}