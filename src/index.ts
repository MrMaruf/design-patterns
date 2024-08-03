import { main as visitorMain } from "./visitor/main.js";
import { main as iteratorMain } from "./iterator/main.js";
import {main as chainOfResponsibilityMain} from "./chain-of-responsibility/main.js"

const argument = process.argv[2];

console.info("Passed argument: ", argument);

switch (argument) {
    case "visitor": {
        visitorMain();
        break;
    }
    case "iterator": {
        iteratorMain();
        break;
    }
    case "chain-of-responsibility": {
        chainOfResponsibilityMain();
        break;
    }
    case undefined: {
        console.error("Visitor argument has not been provided");
        break;
    }
    default: {
        console.error("Unsupported argument was passed");
        break;
    }
}
