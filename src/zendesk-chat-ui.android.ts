import {
  ChatConfig,
  VisitorInfo as IVisitorInfo
} from "./zendesk-chat-ui.common";
import { topmost } from "tns-core-modules/ui/frame";

const { ZopimChat } = com.zopim.android.sdk.api;
const { ZopimChatActivity } = com.zopim.android.sdk.prechat;
const { VisitorInfo } = com.zopim.android.sdk.model;
const { PreChatForm } = com.zopim.android.sdk.prechat;
const { SessionConfig } = ZopimChat;

const nativePreChatFormField = {
  0: PreChatForm.Field.NOT_REQUIRED,
  1: PreChatForm.Field.OPTIONAL,
  2: PreChatForm.Field.REQUIRED,
  3: PreChatForm.Field.OPTIONAL_EDITABLE,
  4: PreChatForm.Field.REQUIRED_EDITABLE
};

export class ZendeskChatUi {
  public static initialize(accountKey: string) {
    ZopimChat.init(accountKey);
  }

  public static set visitorInfo(visitorInfo: IVisitorInfo) {
    let nativeVisitorInfo = new VisitorInfo.Builder();
    if (!!visitorInfo.name) {
      nativeVisitorInfo = nativeVisitorInfo.name(visitorInfo.name);
    }

    if (!!visitorInfo.email) {
      nativeVisitorInfo = nativeVisitorInfo.email(visitorInfo.email);
    }

    if (!!visitorInfo.phoneNumber) {
      nativeVisitorInfo = nativeVisitorInfo.phoneNumber(
        visitorInfo.phoneNumber
      );
    }

    if (!!visitorInfo.note) {
      nativeVisitorInfo = nativeVisitorInfo.note(visitorInfo.note);
    }

    ZopimChat.setVisitorInfo(nativeVisitorInfo.build());
  }

  public static startChat(sessionConfig?: ChatConfig) {
    const {
      department,
      tags,
      preChatDataRequirements
    } = sessionConfig;

    const nativeSessionConfig =  new SessionConfig();

    if (!!department) {
      nativeSessionConfig.department(department);
    }

    if (!!tags && tags.length > 0) {
      const nativeTags = new java.util.ArrayList<string>();
      for (const t in tags) {
        nativeTags.add(t);
      }
      nativeSessionConfig.tags(nativeTags.toArray());
    }

    if (!!preChatDataRequirements) {
      let nativePreChatForm = new PreChatForm.Builder();
      if (!!preChatDataRequirements.department) {
        nativePreChatForm = nativePreChatForm.department(
          nativePreChatFormField[preChatDataRequirements.department]
        );
      }

      if (!!preChatDataRequirements.email) {
        nativePreChatForm = nativePreChatForm.email(
          nativePreChatFormField[preChatDataRequirements.email]
        );
      }

      if (!!preChatDataRequirements.message) {
        nativePreChatForm = nativePreChatForm.message(
          nativePreChatFormField[preChatDataRequirements.message]
        );
      }

      if (!!preChatDataRequirements.name) {
        nativePreChatForm = nativePreChatForm.name(
          nativePreChatFormField[preChatDataRequirements.name]
        );
      }

      if (!!preChatDataRequirements.phone) {
        nativePreChatForm = nativePreChatForm.phoneNumber(
          nativePreChatFormField[preChatDataRequirements.phone]
        );
      }

      nativeSessionConfig.preChatForm(nativePreChatForm.build());
    }

    ZopimChatActivity.startActivity(
      topmost().android.activity,
      nativeSessionConfig
    );
  }

  public static trackEvent(eventDescription: string) {
    ZopimChat.trackEvent(eventDescription);
  }
}
