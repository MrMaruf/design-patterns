import { BillingSupportHandler } from "./handlers/billing-support-handler.js";
import { GeneralInquiryHandler } from "./handlers/general-inquiry-handler.js";
import { TechnicalSupportHandler } from "./handlers/technical-support-handler.js";
import { IssueType } from "./models/enums/issue-type.js";
import { Status } from "./models/enums/status.js";
import { SupportTicket } from "./models/support-ticket.js";

export function main(): void {

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
        issue_type: IssueType.Billing
    }

    const technicalTicket: SupportTicket = {
        id: 2,
        customer_name: "Tester 2",
        description: "Product blinking red",
        status: Status.Unknown,
        issue_type: IssueType.Technical
    }

    const generalTicket: SupportTicket = {
        id: 3,
        customer_name: "Tester 3",
        description: "Why is the product so expensive?",
        status: Status.Unknown,
        issue_type: IssueType.General_Inquiry
    }

    const tickets = [billingTicket, technicalTicket, generalTicket];

    for (const ticket of tickets) {
        billingHandler.handleTicket(ticket)
    }
}