# NativeScript Zendesk Chat UI

Exposes Zendesk Chat SDK for [iOS](https://developer.zendesk.com/embeddables/docs/ios-chat-sdk/introduction) and [Android](https://developer.zendesk.com/embeddables/docs/android-chat-sdk/introduction).


## Installation

Describe your plugin installation steps. Ideally it would be something like:

```typescript
tns plugin add nativescript-zendesk-chat-ui
```

## Usage 

	
```typescript
ZendeskChatUi.initialize(key); // your key here
ZendeskChatUi.startChat(); // start a chat
```

## API

### ZendeskChatUi
    
| Method | Default | Description |
| --- | --- | --- |
| startChat(chatConfig?: ChatConfig) | null | Start a chat with a chat configuration. |
| initialize(accountKey: string) | null | your zendesk chat account key. required.
| trackEvent(eventDescription: string) | null | track event.

| Property | Default | Description |
| --- | --- | --- |
| visitorInfo: VisitorInfo | null | set user's the email, name, phone number, note. |
| chatOverlayEnabled: boolean | true | hide the chat overlay. iOS only|

### VisitorInfo
```
export interface VisitorInfo {
  name?: string;
  email?: string;
  phoneNumber?: string;
  note?: string;
}
```

### ChatConfig 

```
export interface ChatConfig {
  department?: string;
  tags?: string[];
  uploadAttachmentsEnabled?: boolean; // ios only
  preChatDataRequirements?: { // required fields the user will have to fill
    department: PreChatDataRequirement;
    email: PreChatDataRequirement;
    message: PreChatDataRequirement;
    name: PreChatDataRequirement;
    phone: PreChatDataRequirement;
  };
}
```

### PreChatDataRequirement

```
export enum PreChatDataRequirement {
  NotRequired = 0,
  Optional = 1,
  Required = 2,
  OptionalEditable = 3,
  RequiredEditable = 4
}
```

## Customization

For customization, please refer to the [iOS](https://developer.zendesk.com/embeddables/docs/ios-chat-sdk/customization) and [Android](https://developer.zendesk.com/embeddables/docs/android-chat-sdk/customization) documentation.

## License

Apache License Version 2.0, January 2004
