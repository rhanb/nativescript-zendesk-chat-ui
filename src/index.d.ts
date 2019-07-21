export declare enum PreChatDataRequirement {
  NotRequired = 0,
  Optional = 1,
  Required = 2,
  OptionalEditable = 3,
  RequiredEditable = 4
}
export interface ChatConfig {
  department?: string;
  tags?: string[];
  uploadAttachmentsEnabled?: boolean;
  preChatDataRequirements?: {
      department: PreChatDataRequirement;
      email: PreChatDataRequirement;
      message: PreChatDataRequirement;
      name: PreChatDataRequirement;
      phone: PreChatDataRequirement;
  };
}
export interface VisitorInfo {
  name?: string;
  email?: string;
  phoneNumber?: string;
  note?: string;
}
export declare class ZendeskChatUi {
  static initialize(accountKey: string): void;
  static startChat(sessionConfig?: ChatConfig): void;
  static visitorInfo: VisitorInfo;
  static trackEvent(eventDescription: string): void;
  static chatOverlayEnabled: boolean;
}
