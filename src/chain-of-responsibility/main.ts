import { BillingSupportHandler } from "./traditional/handlers/billing-support-handler.js";
import { GeneralInquiryHandler } from "./traditional/handlers/general-inquiry-handler.js";
import { TechnicalSupportHandler } from "./traditional/handlers/technical-support-handler.js";
import { IssueType } from "./traditional/models/enums/issue-type.js";
import { Status } from "./traditional/models/enums/status.js";
import { SupportTicket } from "./traditional/models/support-ticket.js";
import { main as sequentialChainExecution } from "./sequential/main.js";
import { main as traditionalChainExecution } from "./traditional/main.js";
export function main(): void {
	const argument = process.argv[3];

	console.info("Passed argument: ", argument);

	switch (argument) {
		case "traditional": {
			traditionalChainExecution();
			break;
		}
		case "sequential": {
			sequentialChainExecution();
		}
	}
}

