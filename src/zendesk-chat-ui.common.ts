export enum PreChatDataRequirement {
  NotRequired = 0,
  Optional = 1,
  Required = 2,
  OptionalEditable = 3,
  RequiredEditable = 4
}

export interface ChatConfig {
  department?: string;
  tags?: string[];
  uploadAttachmentsEnabled?: boolean; // ios only
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
