import { BillingSupportHandler } from "./traditional/handlers/billing-support-handler.js";
import { GeneralInquiryHandler } from "./traditional/handlers/general-inquiry-handler.js";
import { TechnicalSupportHandler } from "./traditional/handlers/technical-support-handler.js";
import { IssueType } from "./traditional/models/enums/issue-type.js";
import { Status } from "./traditional/models/enums/status.js";
import { SupportTicket } from "./traditional/models/support-ticket.js";
import { main as sequentialChainExecution } from "./sequential/main.js";
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
const traditionalChainExecution = () => {
	const billingHandler = new BillingSupportHandler();
	const technicalHandler = new TechnicalSupportHandler();
	const generalInquiryHandler = new GeneralInquiryHandler();

	billingHandler.setNext(technicalHandler);
	technicalHandler.setNext(generalInquiryHandler);

	const billingTicket: SupportTicket = {
		id: 1,
		customer_name: "Tester 1",
		description: "Billing didn't pass",
		status: Status.Unknown,
		issue_type: IssueType.Billing,
	};

	const technicalTicket: SupportTicket = {
		id: 2,
		customer_name: "Tester 2",
		description: "Product blinking red",
		status: Status.Unknown,
		issue_type: IssueType.Technical,
	};

	const generalTicket: SupportTicket = {
		id: 3,
		customer_name: "Tester 3",
		description: "Why is the product so expensive?",
		status: Status.Unknown,
		issue_type: IssueType.General_Inquiry,
	};

	const tickets = [billingTicket, technicalTicket, generalTicket];

	for (const ticket of tickets) {
		billingHandler.handleTicket(ticket);
	}
};
