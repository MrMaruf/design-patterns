import { IssueType } from "./enums/issue-type.js";
import { Status } from "./enums/status.js";

export type SupportTicket = {
    id: number;
    description: string;
    customer_name: string;
    issue_type: IssueType;
    status: Status;
}