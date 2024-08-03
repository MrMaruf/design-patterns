import { IChainOfResponsibility } from "../interfaces/IChainOfResponsibility.js";
import { IssueType } from "../models/enums/issue-type.js";
import { Status } from "../models/enums/status.js";
import { SupportTicket } from "../models/support-ticket.js";

export class BillingSupportHandler implements IChainOfResponsibility {
    private nextHandler: IChainOfResponsibility | null = null;

    setNext(next: IChainOfResponsibility): void {
        this.nextHandler = next;
    }

    handleTicket(supportTicket: SupportTicket): void {
        if (supportTicket.issue_type === IssueType.Billing) {
            console.log(`Ticket ${supportTicket.id} handled by billing department`);
            supportTicket.status = Status.Done;
            return;
        }

        if (!this.nextHandler) {
            throw new Error("No handler found for this issue type");
        }
        
        supportTicket.status = Status.Pending;
        console.log(`Couldn't handle ticket ${supportTicket.id} in billing department`)
        this.nextHandler.handleTicket(supportTicket);
    }
}