import { Observable } from "tns-core-modules/data/observable";
import { ZendeskChatUi } from "nativescript-zendesk-chat-ui";
import { key } from '../../../secrets';

export class HomeViewModel extends Observable {
    constructor() {
        super();

        (ZendeskChatUi as any).initialize(key);

        (ZendeskChatUi as any).startChat();
    }
}
