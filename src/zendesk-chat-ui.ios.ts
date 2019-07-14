import { Common, ChatConfig } from "./zendesk-chat-ui.common";

export class ZendeskChatUi extends Common {
  public static initialize(accountKey: string) {
    ZDCChat.initializeWithAccountKey(accountKey);
  }

  public static startChat(sessionConfig?: ChatConfig) {
    if (sessionConfig) {
      ZDCChat.startChat(nativeSessionConfig => {
        Object.keys(sessionConfig).forEach(key => {
          if (!!sessionConfig[key]) {
            nativeSessionConfig.setValueForKey(sessionConfig[key], key);
          }
        });
      });
    } else {
      ZDCChat.startChat(null);
    }
  }
}
