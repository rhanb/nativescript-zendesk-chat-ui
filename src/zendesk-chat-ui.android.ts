import { Common, ChatConfig } from "./zendesk-chat-ui.common";
import { topmost } from "tns-core-modules/ui/frame";

const { ZopimChat } = com.zopim.android.sdk.api;
const { ZopimChatActivity } = com.zopim.android.sdk.prechat;
const { VisitorInfo } = com.zopim.android.sdk.model;

export class ZendeskChatUi extends Common {
  public static initialize(accountKey: string) {
    ZopimChat.init(accountKey);

    const visitorInfo = new VisitorInfo.Builder()
      .name("Visitor name")
      .email("visitor@example.com")
      .phoneNumber("0123456789")
      .build();

    ZopimChat.setVisitorInfo(visitorInfo);
  }

  public static startChat(sessionConfig?: ChatConfig) {
    ZopimChatActivity.startActivity(
      topmost().android.activity,
      (sessionConfig as any) ? (sessionConfig as any) : null
    );
  }
}
