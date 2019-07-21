import { ZendeskChatUi } from "nativescript-zendesk-chat-ui";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { isIOS } from "tns-core-modules/platform";

import { HomeViewModel } from "./home-view-model";
import { key } from "../../../secrets";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;

    ZendeskChatUi.initialize(key);

    if (isIOS) {
        ZendeskChatUi.chatOverlayEnabled = false;
    }

    ZendeskChatUi.visitorInfo = {
        name: "JB",
        email: "aniel.jeanbaptiste@gmail.com",
        phoneNumber: "+33600000000",
        note: "A super nice note"
    };

    page.bindingContext = new HomeViewModel();
}

export function startChat() {
    ZendeskChatUi.startChat();
}
