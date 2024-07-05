import { main as visitorMain } from "./visitor/main.js";

const argument = process.argv[2];

switch (argument) {
	case "visitor": {
		visitorMain();
		break;
	}
	case undefined: {
		console.error("Visitor argument has not been provided"); 
		break;
	}
	default: {
		console.error("Unsupported argument was passed")
		break;
	}
}