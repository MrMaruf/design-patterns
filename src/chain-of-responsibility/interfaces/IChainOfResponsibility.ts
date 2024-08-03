import { SupportTicket } from "../models/support-ticket.js";

export interface IChainOfResponsibility {
    setNext(next: IChainOfResponsibility): void;
    handleTicket(supportTicket: SupportTicket): void;
}