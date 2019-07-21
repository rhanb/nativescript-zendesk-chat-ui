import { ChatConfig, VisitorInfo as IVisitorInfo } from "./zendesk-chat-ui.common";

export class ZendeskChatUi {
  public static initialize(accountKey: string) {
    ZDCChat.initializeWithAccountKey(accountKey);
  }

  public static startChat(sessionConfig?: ChatConfig) {
    if (!!sessionConfig) {
      ZDCChat.startChat((nativeSessionConfig: ZDCConfig) => {
        const {
          department,
          tags,
          uploadAttachmentsEnabled,
          preChatDataRequirements
        } = sessionConfig;

        if (!!department) {
          nativeSessionConfig.department = department;
        }

        if (!!tags && tags.length > 0) {
          const nativeTags: NSMutableArray<string> = NSMutableArray.array();
          for (const t of tags) {
            nativeTags.addObject(t);
          }
          nativeSessionConfig.tags = nativeTags;
        }

        if (!!uploadAttachmentsEnabled) {
          nativeSessionConfig.uploadAttachmentsEnabled = uploadAttachmentsEnabled;
        }

        if (!!preChatDataRequirements) {
          nativeSessionConfig.preChatDataRequirements.department = preChatDataRequirements.department as any;
          nativeSessionConfig.preChatDataRequirements.email = preChatDataRequirements.email as any;
          nativeSessionConfig.preChatDataRequirements.message = preChatDataRequirements.message as any;
          nativeSessionConfig.preChatDataRequirements.name = preChatDataRequirements.name as any;
          nativeSessionConfig.preChatDataRequirements.phone = preChatDataRequirements.phone as any;
        }

      });
    } else {
      ZDCChat.startChat(null);
    }
  }

  public static set visitorInfo(visitorInfo: IVisitorInfo) {
    const nativeVisitorInfo = ZDCVisitorInfo.new();
    if (!!visitorInfo.name) {
      nativeVisitorInfo.name = visitorInfo.name;
    }

    if (!!visitorInfo.email) {
      nativeVisitorInfo.email = visitorInfo.email;
    }

    if (!!visitorInfo.phoneNumber) {
      nativeVisitorInfo.phone = visitorInfo.phoneNumber;
    }

    if (!!visitorInfo.note) {
      nativeVisitorInfo.addNote(visitorInfo.note);
    }

    ZDCChat.updateVisitor(nativeVisitorInfo.self);
  }

  public static trackEvent(eventDescription: string) {
    (ZDCChat.instance().api as any).trackEvent(eventDescription);
  }

  public static set chatOverlayEnabled(enabled: boolean) {
    ZDCChat.instance().overlay.setEnabled(enabled);
  }
}
