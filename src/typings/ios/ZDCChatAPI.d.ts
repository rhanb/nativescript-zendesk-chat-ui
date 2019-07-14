declare class ZDCAPIConfig extends NSObject {
  static alloc(): ZDCAPIConfig; // inherited from NSObject

  static new(): ZDCAPIConfig; // inherited from NSObject

  department: string;

  tags: NSArray<any>;

  visitorPathOne: string;

  visitorPathTwo: string;

  visitorPathTwoUrl: string;
}

declare class ZDCChatAPI extends NSObject {
  static alloc(): ZDCChatAPI; // inherited from NSObject

  static instance(): ZDCChatAPI;

  static new(): ZDCChatAPI; // inherited from NSObject

  readonly accountKey: string;

  readonly agentMessageCount: number;

  readonly agents: NSDictionary<string, ZDCChatAgent>;

  readonly chatStatus: ZDCChatSessionStatus;

  readonly connectionStatus: ZDCConnectionStatus;

  readonly departments: NSArray<string>;

  readonly fileSendingEnabled: boolean;

  readonly isAccountOnline: boolean;

  readonly livechatLog: NSArray<ZDCChatEvent>;

  readonly offlineMessagePending: boolean;

  readonly profile: ZDCChatProfile;

  visitorInfo: ZDCVisitorInfo;

  addObserverForAccountEvents(target: any, selector: string): void;

  addObserverForAgentEvents(target: any, selector: string): void;

  addObserverForChatLogEvents(target: any, selector: string): void;

  addObserverForConnectionEvents(target: any, selector: string): void;

  addObserverForTimeoutEvents(target: any, selector: string): void;

  addObserverForUploadEvents(target: any, selector: string): void;

  appendNote(note: string): void;

  clearPushToken(): void;

  emailTranscript(email: string): void;

  endChat(): void;

  removeObserverForAccountEvents(target: any): void;

  removeObserverForAgentEvents(target: any): void;

  removeObserverForChatLogEvents(target: any): void;

  removeObserverForConnectionEvents(target: any): void;

  removeObserverForTimeoutEvents(target: any): void;

  removeObserverForUploadEvents(target: any): void;

  resendChatMessage(event: ZDCChatEvent): void;

  sendChatMessage(message: string): void;

  sendChatRating(rating: ZDCChatRating): void;

  sendChatRatingComment(comment: string): void;

  sendOfflineMessage(message: string): void;

  setNote(note: string): void;

  setPushToken(token: NSData): void;

  startChatWithAccountKey(accountKey: string): void;

  startChatWithAccountKeyConfig(accountKey: string, config: ZDCAPIConfig): void;

  trackEvent(event: string): void;

  uploadFileWithDataName(data: NSData, fileName: string): void;

  uploadFileWithPathName(path: string, fileName: string): void;

  uploadImageName(image: UIImage, fileName: string): void;
}

declare class ZDCChatAgent extends NSObject {
  static alloc(): ZDCChatAgent; // inherited from NSObject

  static new(): ZDCChatAgent; // inherited from NSObject

  agentId: string;

  avatarURL: string;

  displayName: string;

  title: string;

  typing: boolean;
}

declare class ZDCChatAttachment extends ZDCChatFile {
  static alloc(): ZDCChatAttachment; // inherited from NSObject

  static new(): ZDCChatAttachment; // inherited from NSObject

  fileSize: number;

  thumbnailURL: string;

  url: string;

  download(): void;
}

declare class ZDCChatEvent extends NSObject {
  static alloc(): ZDCChatEvent; // inherited from NSObject

  static new(): ZDCChatEvent; // inherited from NSObject

  attachment: ZDCChatAttachment;

  displayName: string;

  eventId: string;

  fileUpload: ZDCChatUpload;

  firstMessage: boolean;

  leadMessage: boolean;

  message: string;

  nickname: string;

  options: NSMutableArray<any>;

  rating: ZDCChatRating;

  ratingComment: string;

  selectedOptionIndex: number;

  timestamp: number;

  type: ZDCChatEventType;

  verified: boolean;

  visitorQueue: number;
}

declare const enum ZDCChatEventType {
  Unknown = 0,

  MemberJoin = 1,

  MemberLeave = 2,

  SystemMessage = 3,

  TriggerMessage = 4,

  AgentMessage = 5,

  VisitorMessage = 6,

  VisitorUpload = 7,

  AgentUpload = 8,

  Rating = 9,

  RatingComment = 10
}

declare class ZDCChatFile extends NSObject {
  static alloc(): ZDCChatFile; // inherited from NSObject

  static derivefileExtension(fileName: string): string;

  static mimeTypeForDataAndFileExtension(
    data: NSData,
    fileExtension: string
  ): string;

  static new(): ZDCChatFile; // inherited from NSObject

  data: NSData;

  errorType: ZDCTransferError;

  fileName: string;

  image: UIImage;

  mimeType: string;

  path: string;

  status: ZDCFileTransferStatus;

  isPresentableImage(): boolean;
}

declare class ZDCChatProfile extends NSObject {
  static alloc(): ZDCChatProfile; // inherited from NSObject

  static new(): ZDCChatProfile; // inherited from NSObject

  displayName: string;

  email: string;

  machineId: string;

  nickname: string;

  sessionId: string;
}

declare const enum ZDCChatRating {
  Unrated = 0,

  None = 1,

  Good = 2,

  Bad = 3
}

declare const enum ZDCChatSessionStatus {
  Inactive = 0,

  Connected = 1,

  Chatting = 2,

  TimedOut = 3
}

declare class ZDCChatUpload extends ZDCChatFile implements ZDCProgressMonitor {
  static alloc(): ZDCChatUpload; // inherited from NSObject

  static new(): ZDCChatUpload; // inherited from NSObject

  static validUploadFilePathImageFileNameAndFileSize(
    data: NSData,
    path: string,
    image: UIImage,
    filename: string,
    fileSize: number
  ): boolean;

  chatIO: any;

  fileExtension: string;

  fileSize: number;

  progress: number;

  progressListener: ZDCUploadDelegate;

  uploadURL: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: {
    IO: any;
    fileData: NSData;
    filePath: string;
    image: UIImage;
    fileName: string;
    andFileSize: number;
  });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithIOFileDataFilePathImageFileNameAndFileSize(
    chatIO: any,
    data: NSData,
    path: string,
    image: UIImage,
    filename: string,
    fileSize: number
  ): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ): any;

  resend(): void;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  setProgress(progress: number): void;
}

declare const enum ZDCConnectionStatus {
  Uninitialized = 0,

  Connecting = 1,

  Connected = 2,

  Closed = 3,

  Disconnected = 4,

  NoConnection = 5
}

declare const enum ZDCEmailTranscriptAction {
  Prompt = 0,

  NeverSend = 1
}

declare const enum ZDCFileTransferStatus {
  Pending = 0,

  Transfering = 1,

  Complete = 2,

  Error = 3
}

declare class ZDCLog extends NSObject {
  static alloc(): ZDCLog; // inherited from NSObject

  static enable(enabled: boolean): void;

  static new(): ZDCLog; // inherited from NSObject

  static setLogLevel(level: ZDCLogLevel): void;
}

declare const enum ZDCLogLevel {
  Error = 0,

  Warn = 1,

  Info = 2,

  Debug = 3,

  Verbose = 4
}

interface ZDCProgressMonitor extends NSObjectProtocol {
  setProgress?(progress: number): void;
}
declare var ZDCProgressMonitor: {
  prototype: ZDCProgressMonitor;
};

declare const enum ZDCTransferError {
  ErrorNone = 0,

  ErrorType = 1,

  ErrorSize = 2,

  ErrorAccess = 3,

  ErrorInvalid = 4,

  ErrorFailed = 5,

  FileSendingDisabled = 6,

  ErrorUnknown = 1000
}

interface ZDCUploadDelegate extends NSObjectProtocol {
  progressUpdate(progress: number): void;
}
declare var ZDCUploadDelegate: {
  prototype: ZDCUploadDelegate;
};

declare class ZDCVisitorInfo extends NSObject {
  static alloc(): ZDCVisitorInfo; // inherited from NSObject

  static new(): ZDCVisitorInfo; // inherited from NSObject

  email: string;

  name: string;

  phone: string;

  shouldPersist: boolean;

  constructor(o: { IO: any });

  addNote(note: string): void;

  initWithIO(chatIO: any): this;
}

declare var ZDC_CHAT_UI_DID_LAYOUT: string;

declare var ZDC_CHAT_UI_DID_LOAD: string;

declare var ZDC_CHAT_UI_WILL_UNLOAD: string;

declare var ZDC_NOTIFICATION_FILE_UPLOAD: string;
