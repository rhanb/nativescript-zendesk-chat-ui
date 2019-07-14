
declare class ZDCAccountOfflineCell extends ZDCChatTimedOutCell {

	static alloc(): ZDCAccountOfflineCell; // inherited from NSObject

	static appearance(): ZDCAccountOfflineCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCAccountOfflineCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCAccountOfflineCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAccountOfflineCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCAccountOfflineCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAccountOfflineCell; // inherited from UIAppearance

	static new(): ZDCAccountOfflineCell; // inherited from NSObject
}

declare class ZDCAgentAttachmentCell extends ZDCAgentChatCell {

	static alloc(): ZDCAgentAttachmentCell; // inherited from NSObject

	static appearance(): ZDCAgentAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCAgentAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCAgentAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAgentAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCAgentAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAgentAttachmentCell; // inherited from UIAppearance

	static new(): ZDCAgentAttachmentCell; // inherited from NSObject

	activityIndicatorViewStyle: number;

	attachmentImage: UIImageView;

	filenameLabel: UILabel;

	spinner: UIActivityIndicatorView;
}

declare class ZDCAgentChatCell extends ZDCVisitorChatCell {

	static alloc(): ZDCAgentChatCell; // inherited from NSObject

	static appearance(): ZDCAgentChatCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCAgentChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCAgentChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAgentChatCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCAgentChatCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAgentChatCell; // inherited from UIAppearance

	static new(): ZDCAgentChatCell; // inherited from NSObject

	author: UILabel;

	authorColor: UIColor;

	authorFont: UIFont;

	authorHeight: number;

	avatar: ZDCChatAvatar;

	avatarHeight: number;

	avatarLeftInset: number;
}

declare class ZDCAgentTypingCell extends ZDCChatCell {

	static alloc(): ZDCAgentTypingCell; // inherited from NSObject

	static appearance(): ZDCAgentTypingCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCAgentTypingCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCAgentTypingCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAgentTypingCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCAgentTypingCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCAgentTypingCell; // inherited from UIAppearance

	static new(): ZDCAgentTypingCell; // inherited from NSObject

	avatar: ZDCChatAvatar;

	dots: ZDCTypingDots;
}

declare class ZDCChat extends NSObject {

	static alloc(): ZDCChat; // inherited from NSObject

	static clearPushToken(): void;

	static didReceiveRemoteNotification(userInfo: NSDictionary<any, any>): void;

	static endChat(): void;

	static initializeWithAccountKey(accountKey: string): void;

	static instance(): ZDCChat;

	static minimiseChat(): void;

	static new(): ZDCChat; // inherited from NSObject

	static setPushToken(token: NSData): void;

	static startChat(sessionConfig: (p1: ZDCConfig) => void): void;

	static startChatInWithConfig(navController: UINavigationController, configOverride: (p1: ZDCConfig) => void): void;

	static updateVisitor(visitorConfig: (p1: interop.Pointer | interop.Reference<number>) => void): void;

	api: ZDCChatUI;

	chatViewController: ZDCChatViewController;

	hidesBottomBarWhenPushed: boolean;

	offlineMessageHandler: ZDCOfflineMessageHandler;

	overlay: ZDCChatOverlayDelegate;

	shouldResumeOnLaunch: boolean;

	readonly unreadMessagesCount: number;
}

declare class ZDCChatAvatar extends ZDUExternalImage {

	static alloc(): ZDCChatAvatar; // inherited from NSObject

	static appearance(): ZDCChatAvatar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCChatAvatar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCChatAvatar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatAvatar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCChatAvatar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatAvatar; // inherited from UIAppearance

	static new(): ZDCChatAvatar; // inherited from NSObject

	defaultAvatarImage: UIImage;
}

declare const enum ZDCChatBackgroundAnchor {

	Center = 0,

	Top = 1
}

declare class ZDCChatCell extends UITableViewCell {

	static alloc(): ZDCChatCell; // inherited from NSObject

	static appearance(): ZDCChatCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCChatCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatCell; // inherited from UIAppearance

	static new(): ZDCChatCell; // inherited from NSObject

	actionDelegate: ZDCChatCellActionDelegate;

	event: ZDCChatEvent;

	eventError: boolean;

	agentUpdate(agent: ZDCChatAgent): void;

	agentsTypingLastEvent(agents: NSArray<any> | any[], lastEvent: ZDCChatEvent): void;

	animateToError(): void;

	animateToOk(): void;

	animateUserAction(info: NSDictionary<any, any>): void;

	appearanceDef(sel: string, defaultVal: any): any;

	attachmentImageSizeWithMaxSize(event: ZDCChatEvent, maxSize: number): CGSize;

	heightForEventGivenWidth(event: ZDCChatEvent, width: number): number;

	layout(): void;

	layoutForStatusError(): void;

	layoutForStatusOk(): void;

	prepareWithEvent(event: ZDCChatEvent): void;

	setupAppearance(): void;
}

interface ZDCChatCellActionDelegate extends NSObjectProtocol {

	editRatingComment(ratingEvent: ZDCChatEvent): void;

	eventHasTimedOut(event: ZDCChatEvent): boolean;

	fileUpdated(event: ZDCChatEvent): void;

	optionSelected(event: ZDCChatEvent): void;

	resendMessage(event: ZDCChatEvent): void;

	setChatRatingTo(ratingEvent: ZDCChatEvent, newRating: ZDCChatRating): void;

	sizeOfStringUsingFontForWidth(string: string, font: UIFont, width: number): number;

	viewAttachmentImageFromView(image: UIImage, imageView: UIImageView): void;

	viewDocumentForEvent(event: ZDCChatEvent): void;
}
declare var ZDCChatCellActionDelegate: {

	prototype: ZDCChatCellActionDelegate;
};

declare class ZDCChatOverlay extends UIView implements UIGestureRecognizerDelegate, ZDCChatOverlayDelegate {

	static alloc(): ZDCChatOverlay; // inherited from NSObject

	static appearance(): ZDCChatOverlay; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCChatOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCChatOverlay; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatOverlay; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCChatOverlay; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatOverlay; // inherited from UIAppearance

	static new(): ZDCChatOverlay; // inherited from NSObject

	alignment: number;

	enabled: boolean;

	insets: NSValue;

	messageCountColor: UIColor;

	messageCountFont: UIFont;

	overlayBackgroundImage: UIImage;

	overlayTintColor: UIColor;

	typingIndicatorColor: UIColor;

	typingIndicatorDiameter: number;

	typingIndicatorHighlightColor: UIColor;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	activate(): void;

	active(): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	hide(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	remove(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setEnabled(enabled: boolean): void;

	show(): void;
}

interface ZDCChatOverlayDelegate extends NSObjectProtocol {

	activate(): void;

	active(): boolean;

	hide(): void;

	remove(): void;

	setEnabled(enabled: boolean): void;

	show(): void;
}
declare var ZDCChatOverlayDelegate: {

	prototype: ZDCChatOverlayDelegate;
};

declare class ZDCChatTimedOutCell extends ZDCChatCell {

	static alloc(): ZDCChatTimedOutCell; // inherited from NSObject

	static appearance(): ZDCChatTimedOutCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCChatTimedOutCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCChatTimedOutCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatTimedOutCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCChatTimedOutCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatTimedOutCell; // inherited from UIAppearance

	static new(): ZDCChatTimedOutCell; // inherited from NSObject

	chatMessage: UILabel;

	textFont: UIFont;

	textInsets: NSValue;
}

declare class ZDCChatUI extends UIView {

	static alloc(): ZDCChatUI; // inherited from NSObject

	static appearance(): ZDCChatUI; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCChatUI; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCChatUI; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatUI; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCChatUI; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatUI; // inherited from UIAppearance

	static new(): ZDCChatUI; // inherited from NSObject

	backChatButtonImage: string;

	backgroundImageView: UIImageView;

	cancelChatButtonImage: string;

	chatBackgroundAnchor: number;

	chatBackgroundColor: UIColor;

	chatBackgroundImage: string;

	chatView: ZDCChatView;

	delegate: ZDCChatUIController;

	endChatButtonImage: string;

	formView: ZDCPreChatFormView;

	insetProvider: ZDCInsetProvider;

	loadingErrorView: ZDCLoadingErrorView;

	loadingView: ZDCLoadingView;

	offlineForm: ZDCOfflineMessageView;

	state: ZDCChatUIState;

	constructor(o: { frame: CGRect; andDelegate: ZDCChatUIController; });

	activate(): void;

	end(): void;

	initWithFrameAndDelegate(frame: CGRect, delegate: ZDCChatUIController): this;

	minimise(): void;

	sendOfflineMessage(): void;

	showOfflineForm(): void;
}

interface ZDCChatUIController extends NSObjectProtocol {

	dismiss(): void;

	dismissToast(): void;

	enableOfflineMessageSendButton(enabled: boolean): void;

	presentIn(navController: UINavigationController): void;

	showConnectionToast(): void;

	showReconnectingToast(): void;

	stateTransitionTo(state: ZDCChatUIState): void;
}
declare var ZDCChatUIController: {

	prototype: ZDCChatUIController;
};

declare const enum ZDCChatUIState {

	Loading = 0,

	NoConnection = 1,

	CouldNotConnect = 2,

	NoAgents = 3,

	OfflineForm = 4,

	PreChatForm = 5,

	Chat = 6,

	ChatTimedOut = 7
}

declare class ZDCChatView extends UIView implements UINavigationControllerDelegate, UIPopoverControllerDelegate, UITableViewDataSource, UITableViewDelegate, UITextViewDelegate, ZDCTextEntryViewDelegate {

	static alloc(): ZDCChatView; // inherited from NSObject

	static appearance(): ZDCChatView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCChatView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCChatView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCChatView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCChatView; // inherited from UIAppearance

	static new(): ZDCChatView; // inherited from NSObject

	chatBackgroundColor: UIColor;

	readonly chatController: any;

	readonly table: UITableView;

	readonly textEntryView: ZDCTextEntryView;

	timedOut: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; withController: any; });

	activate(): void;

	attachButtonPressed(): void;

	class(): typeof NSObject;

	clearTextEntry(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithFrameWithController(frame: CGRect, controller: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	popoverControllerDidDismissPopover(popoverController: UIPopoverController): void;

	popoverControllerShouldDismissPopover(popoverController: UIPopoverController): boolean;

	popoverControllerWillRepositionPopoverToRectInView(popoverController: UIPopoverController, rect: interop.Pointer | interop.Reference<CGRect>, view: interop.Pointer | interop.Reference<UIView>): void;

	registerClassForCellReuseIdentifier(cellClass: typeof NSObject, identifier: string): void;

	reload(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToLast(animated: boolean): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	sendButtonPressed(): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ZDCChatViewController extends ZDUViewController implements ZDCChatUIController, ZDCInsetProvider {

	static alloc(): ZDCChatViewController; // inherited from NSObject

	static new(): ZDCChatViewController; // inherited from NSObject

	chatUI: ZDCChatUI;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	bottomLayoutGuide(): UILayoutSupport;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismiss(): void;

	dismissToast(): void;

	enableOfflineMessageSendButton(enabled: boolean): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentIn(navController: UINavigationController): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	showConnectionToast(): void;

	showReconnectingToast(): void;

	stateTransitionTo(state: ZDCChatUIState): void;

	topLayoutGuide(): UILayoutSupport;
}

declare class ZDCConfig extends NSObject {

	static alloc(): ZDCConfig; // inherited from NSObject

	static new(): ZDCConfig; // inherited from NSObject

	connectionTimeout: number;

	department: string;

	emailTranscriptAction: number;

	preChatDataRequirements: ZDCPreChatData;

	reconnectionTimeout: number;

	tags: NSArray<string>;

	uploadAttachmentsEnabled: boolean;

	visitorPathOne: string;

	visitorPathTwo: string;
}

declare class ZDCFormCell extends UITableViewCell {

	static alloc(): ZDCFormCell; // inherited from NSObject

	static appearance(): ZDCFormCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCFormCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCFormCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCFormCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCell; // inherited from UIAppearance

	static new(): ZDCFormCell; // inherited from NSObject

	delegate: ZDCFormCellDelegate;

	textFont: UIFont;

	textFrame: UIView;

	textFrameBackgroundColor: UIColor;

	textFrameBorderColor: UIColor;

	textFrameCornerRadius: number;

	textFrameErrorBorderColor: UIColor;

	textFrameInsets: NSValue;

	textInsets: NSValue;

	type: ZDCFormCellType;

	appearanceDef(sel: string, defaultVal: any): any;

	heightForTextGivenWidth(text: string, width: number): number;

	prepareWithTextForTypeWithDelegateHighlightError(text: string, type: ZDCFormCellType, delegate: ZDCFormCellDelegate, highlight: boolean): void;

	setupAppearance(): void;

	setupTextFrame(): void;
}

interface ZDCFormCellDelegate extends NSObjectProtocol {

	goToNextType(currentType: ZDCFormCellType): void;

	scrollToType(type: ZDCFormCellType): void;

	updatedValueForType(value: string, type: ZDCFormCellType): void;
}
declare var ZDCFormCellDelegate: {

	prototype: ZDCFormCellDelegate;
};

declare class ZDCFormCellDepartment extends ZDCFormCell implements UIActionSheetDelegate {

	static alloc(): ZDCFormCellDepartment; // inherited from NSObject

	static appearance(): ZDCFormCellDepartment; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCFormCellDepartment; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCFormCellDepartment; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCellDepartment; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCFormCellDepartment; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCellDepartment; // inherited from UIAppearance

	static new(): ZDCFormCellDepartment; // inherited from NSObject

	actionSheet: UIActionSheet;

	departmentButton: UIButton;

	departmentLabel: UILabel;

	icon: ZDCTriangleView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionSheetCancel(actionSheet: UIActionSheet): void;

	actionSheetClickedButtonAtIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetDidDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	actionSheetWillDismissWithButtonIndex(actionSheet: UIActionSheet, buttonIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPresentActionSheet(actionSheet: UIActionSheet): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPresentActionSheet(actionSheet: UIActionSheet): void;
}

declare class ZDCFormCellMessage extends ZDCFormCell implements UITextViewDelegate {

	static alloc(): ZDCFormCellMessage; // inherited from NSObject

	static appearance(): ZDCFormCellMessage; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCFormCellMessage; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCFormCellMessage; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCellMessage; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCFormCellMessage; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCellMessage; // inherited from UIAppearance

	static new(): ZDCFormCellMessage; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ZDCFormCellSingleLine extends ZDCFormCell implements UITextFieldDelegate {

	static alloc(): ZDCFormCellSingleLine; // inherited from NSObject

	static appearance(): ZDCFormCellSingleLine; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCFormCellSingleLine; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCFormCellSingleLine; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCellSingleLine; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCFormCellSingleLine; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCFormCellSingleLine; // inherited from UIAppearance

	static new(): ZDCFormCellSingleLine; // inherited from NSObject

	textField: UITextField;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare const enum ZDCFormCellType {

	Name = 0,

	Email = 1,

	Phone = 2,

	Department = 3,

	Message = 4
}

declare const enum ZDCFormDataStatus {

	Ok = 0,

	Incomplete = 1,

	Invalid = 2
}

interface ZDCInsetProvider extends NSObjectProtocol {

	bottomLayoutGuide(): UILayoutSupport;

	topLayoutGuide(): UILayoutSupport;
}
declare var ZDCInsetProvider: {

	prototype: ZDCInsetProvider;
};

declare class ZDCJoinLeaveCell extends ZDCChatCell {

	static alloc(): ZDCJoinLeaveCell; // inherited from NSObject

	static appearance(): ZDCJoinLeaveCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCJoinLeaveCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCJoinLeaveCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCJoinLeaveCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCJoinLeaveCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCJoinLeaveCell; // inherited from UIAppearance

	static new(): ZDCJoinLeaveCell; // inherited from NSObject

	msg: UILabel;

	textFont: UIFont;

	textInsets: NSValue;
}

declare class ZDCLoadingErrorView extends UIView {

	static alloc(): ZDCLoadingErrorView; // inherited from NSObject

	static appearance(): ZDCLoadingErrorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCLoadingErrorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCLoadingErrorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCLoadingErrorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCLoadingErrorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCLoadingErrorView; // inherited from UIAppearance

	static new(): ZDCLoadingErrorView; // inherited from NSObject

	buttonBackgroundColor: UIColor;

	buttonFont: UIFont;

	buttonImage: string;

	buttonTitleColor: UIColor;

	delegate: ZDCChatUIController;

	errorBackgroundColor: UIColor;

	icon: UIImageView;

	iconImage: string;

	message: UILabel;

	messageColor: UIColor;

	messageFont: UIFont;

	offlineMessageButton: UIButton;

	title: UILabel;

	titleColor: UIColor;

	titleFont: UIFont;

	constructor(o: { cantConnectWithFrame: CGRect; andDelegate: ZDCChatUIController; });

	constructor(o: { noAgentsWithFrame: CGRect; andDelegate: ZDCChatUIController; });

	constructor(o: { noConnectionWithFrame: CGRect; });

	initCantConnectWithFrameAndDelegate(frame: CGRect, delegate: ZDCChatUIController): this;

	initNoAgentsWithFrameAndDelegate(frame: CGRect, delegate: ZDCChatUIController): this;

	initNoConnectionWithFrame(frame: CGRect): this;
}

declare class ZDCLoadingView extends UIView {

	static alloc(): ZDCLoadingView; // inherited from NSObject

	static appearance(): ZDCLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCLoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCLoadingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCLoadingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCLoadingView; // inherited from UIAppearance

	static new(): ZDCLoadingView; // inherited from NSObject

	loadingBackgroundColor: UIColor;

	loadingLabel: UILabel;

	loadingLabelFont: UIFont;

	loadingLabelTextColor: UIColor;

	spinner: UIActivityIndicatorView;

	hide(): void;

	show(): void;
}

declare class ZDCOfflineMessageHandler extends NSObject {

	static alloc(): ZDCOfflineMessageHandler; // inherited from NSObject

	static new(): ZDCOfflineMessageHandler; // inherited from NSObject

	static offlineHandlerWithMessageButtonText(noAgentsMessage: string, noAgentsButtonText: string): ZDCOfflineMessageHandler;

	noAgentsButtonText: string;

	noAgentsMessage: string;
}

declare class ZDCOfflineMessageView extends UIView implements UITableViewDataSource, UITableViewDelegate, UITextViewDelegate, ZDCFormCellDelegate {

	static alloc(): ZDCOfflineMessageView; // inherited from NSObject

	static appearance(): ZDCOfflineMessageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCOfflineMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCOfflineMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCOfflineMessageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCOfflineMessageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCOfflineMessageView; // inherited from UIAppearance

	static new(): ZDCOfflineMessageView; // inherited from NSObject

	emailText: string;

	formBackgroundColor: UIColor;

	formTable: UITableView;

	messageText: string;

	nameText: string;

	phoneText: string;

	selectedDepartment: string;

	submittingOverlay: UIView;

	submittingSpinner: UIActivityIndicatorView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; withController: any; andMessage: string; });

	animateFromSubmitting(): void;

	animateToSubmitting(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	formComplete(): boolean;

	goToNextType(currentType: ZDCFormCellType): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithFrameWithControllerAndMessage(frame: CGRect, controller: any, message: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToType(type: ZDCFormCellType): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	updatedValueForType(value: string, type: ZDCFormCellType): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare const enum ZDCOverlayAlignment {

	BottomLeft = 0,

	TopLeft = 1,

	TopRight = 2,

	BottomRight = 3
}

declare class ZDCPreChatData extends NSObject {

	static alloc(): ZDCPreChatData; // inherited from NSObject

	static new(): ZDCPreChatData; // inherited from NSObject

	department: ZDCPreChatDataRequirement;

	email: ZDCPreChatDataRequirement;

	message: ZDCPreChatDataRequirement;

	name: ZDCPreChatDataRequirement;

	phone: ZDCPreChatDataRequirement;
}

declare const enum ZDCPreChatDataRequirement {

	NotRequired = 0,

	Optional = 1,

	Required = 2,

	OptionalEditable = 3,

	RequiredEditable = 4
}

declare class ZDCPreChatFormView extends UIView implements UITableViewDataSource, UITableViewDelegate, UITextViewDelegate, ZDCFormCellDelegate {

	static alloc(): ZDCPreChatFormView; // inherited from NSObject

	static appearance(): ZDCPreChatFormView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCPreChatFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCPreChatFormView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCPreChatFormView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCPreChatFormView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCPreChatFormView; // inherited from UIAppearance

	static fieldValidValueFormRowsRequirement(type: ZDCFormCellType, currentValue: string, rows: NSArray<any> | any[], requirement: ZDCPreChatDataRequirement): ZDCFormDataStatus;

	static new(): ZDCPreChatFormView; // inherited from NSObject

	readonly chatController: any;

	emailText: string;

	formBackgroundColor: UIColor;

	formTable: UITableView;

	messageText: string;

	nameText: string;

	phoneText: string;

	selectedDepartment: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; withController: any; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	formComplete(): boolean;

	goToNextType(currentType: ZDCFormCellType): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithFrameWithController(frame: CGRect, controller: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareForm(): void;

	registerClassForCellReuseIdentifier(cellClass: typeof NSObject, identifier: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToType(type: ZDCFormCellType): void;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	updatedValueForType(value: string, type: ZDCFormCellType): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ZDCRatingCell extends ZDCVisitorChatCell {

	static alloc(): ZDCRatingCell; // inherited from NSObject

	static appearance(): ZDCRatingCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCRatingCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCRatingCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCRatingCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCRatingCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCRatingCell; // inherited from UIAppearance

	static new(): ZDCRatingCell; // inherited from NSObject

	badRatingButton: UIButton;

	cellToTitleMargin: number;

	commentButton: UIButton;

	editCommentButtonHeight: number;

	goodRatingButton: UIButton;

	leaveCommentTitleColor: UIColor;

	ratingButtonSize: number;

	ratingButtonToCommentMargin: number;

	titleColor: UIColor;

	titleFont: UIFont;

	titleLabel: UILabel;

	titleToButtonsMargin: number;
}

declare class ZDCSystemTriggerCell extends ZDCChatCell {

	static alloc(): ZDCSystemTriggerCell; // inherited from NSObject

	static appearance(): ZDCSystemTriggerCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCSystemTriggerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCSystemTriggerCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCSystemTriggerCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCSystemTriggerCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCSystemTriggerCell; // inherited from UIAppearance

	static new(): ZDCSystemTriggerCell; // inherited from NSObject

	chatMessage: UILabel;

	textFont: UIFont;

	textInsets: NSValue;
}

declare class ZDCTextEntryView extends UIView {

	static alloc(): ZDCTextEntryView; // inherited from NSObject

	static appearance(): ZDCTextEntryView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCTextEntryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCTextEntryView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCTextEntryView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCTextEntryView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCTextEntryView; // inherited from UIAppearance

	static new(): ZDCTextEntryView; // inherited from NSObject

	areaBackgroundColor: UIColor;

	attachButton: UIButton;

	attachButtonImage: string;

	delegate: ZDCTextEntryViewDelegate;

	sendButton: UIButton;

	sendButtonImage: string;

	textEntryBackgroundColor: UIColor;

	textEntryBorderColor: UIColor;

	textEntryColor: UIColor;

	textEntryFont: UIFont;

	textViewBackground: UIView;

	topBorder: UIView;

	topBorderColor: UIColor;

	preferredHeight(): number;
}

interface ZDCTextEntryViewDelegate extends NSObjectProtocol {

	attachButtonPressed(): void;

	sendButtonPressed(): void;
}
declare var ZDCTextEntryViewDelegate: {

	prototype: ZDCTextEntryViewDelegate;
};

declare class ZDCTriangleView extends UIView {

	static alloc(): ZDCTriangleView; // inherited from NSObject

	static appearance(): ZDCTriangleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCTriangleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCTriangleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCTriangleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCTriangleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCTriangleView; // inherited from UIAppearance

	static new(): ZDCTriangleView; // inherited from NSObject

	color: UIColor;
}

declare class ZDCTypingDots extends UIView {

	static alloc(): ZDCTypingDots; // inherited from NSObject

	static appearance(): ZDCTypingDots; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCTypingDots; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCTypingDots; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCTypingDots; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCTypingDots; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCTypingDots; // inherited from UIAppearance

	static new(): ZDCTypingDots; // inherited from NSObject

	readonly animating: boolean;

	dotColor: UIColor;

	dotHighlightColor: UIColor;

	constructor(o: { height: number; });

	initWithHeight(height: number): this;

	startAnimating(): void;

	stopAnimating(): void;
}

declare class ZDCVisitorAttachmentCell extends ZDCVisitorChatCell implements ZDCUploadDelegate {

	static alloc(): ZDCVisitorAttachmentCell; // inherited from NSObject

	static appearance(): ZDCVisitorAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCVisitorAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCVisitorAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCVisitorAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCVisitorAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCVisitorAttachmentCell; // inherited from UIAppearance

	static new(): ZDCVisitorAttachmentCell; // inherited from NSObject

	activityIndicatorViewStyle: number;

	attachmentImage: UIImageView;

	progressBar: UIView;

	progressBarColor: UIColor;

	spinner: UIActivityIndicatorView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	progressUpdate(progress: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDCVisitorChatCell extends ZDCChatCell {

	static alloc(): ZDCVisitorChatCell; // inherited from NSObject

	static appearance(): ZDCVisitorChatCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDCVisitorChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDCVisitorChatCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCVisitorChatCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDCVisitorChatCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDCVisitorChatCell; // inherited from UIAppearance

	static new(): ZDCVisitorChatCell; // inherited from NSObject

	bubble: UIButton;

	bubbleBorderColor: UIColor;

	bubbleColor: UIColor;

	bubbleCornerRadius: number;

	bubbleInsets: NSValue;

	textAlignment: number;

	textFont: UIFont;

	textInsets: NSValue;

	unsentIconLeftMargin: number;

	unsentMessageIcon: UIImageView;

	unsentMessageLabel: UILabel;

	unsentMessageTopMargin: number;

	unsentTextColor: UIColor;

	unsentTextFont: UIFont;
}

declare var ZDC_AVATAR_HEIGHT: number;

declare var ZDC_AVATAR_LEFT_INSET: number;

declare var ZDC_AVATAR_TOP_INSET: number;

declare var ZDC_CHATCELL_AGENT: string;

declare var ZDC_CHATCELL_AGENT_ATTACH: string;

declare var ZDC_CHATCELL_JOINLEAVE: string;

declare var ZDC_CHATCELL_OFFLINE: string;

declare var ZDC_CHATCELL_OPTIONS: string;

declare var ZDC_CHATCELL_RATING: string;

declare var ZDC_CHATCELL_SYSTEM_TRIGGER: string;

declare var ZDC_CHATCELL_TIMEOUT: string;

declare var ZDC_CHATCELL_TYPING: string;

declare var ZDC_CHATCELL_VISITOR: string;

declare var ZDC_CHATCELL_VISITOR_ATTACH: string;

declare var ZDC_CHAT_BUBBLE_AGENT_RIGHT_MARGIN: number;

declare var ZDC_CHAT_BUBBLE_AUTHOR_HEIGHT: number;

declare var ZDC_CHAT_BUBBLE_BOTTOM_MARGIN: number;

declare var ZDC_CHAT_BUBBLE_BOTTOM_PADDING: number;

declare var ZDC_CHAT_BUBBLE_CORNER_RADIUS: number;

declare var ZDC_CHAT_BUBBLE_LEAD_MESSAGE_MARGIN: number;

declare var ZDC_CHAT_BUBBLE_LEFT_MARGIN: number;

declare var ZDC_CHAT_BUBBLE_LEFT_MARGIN_AGENT: number;

declare var ZDC_CHAT_BUBBLE_LEFT_PADDING: number;

declare var ZDC_CHAT_BUBBLE_RIGHT_MARGIN: number;

declare var ZDC_CHAT_BUBBLE_RIGHT_PADDING: number;

declare var ZDC_CHAT_BUBBLE_TOP_MARGIN: number;

declare var ZDC_CHAT_BUBBLE_TOP_PADDING: number;

declare var ZDC_DEFAULT_BROKEN_FILE_ICON_IMAGE: string;

declare var ZDC_DEFAULT_FORM_CELL_HEIGHT: number;

declare var ZDC_DEFAULT_UNSENT_ICON_IMAGE: string;

declare var ZDC_DEFAULT_UNSENT_ICON_LEFT_MARGIN: number;

declare var ZDC_DEFAULT_UNSENT_MSG_TOP_MARGIN: number;

declare var ZDC_FORMCELL_DEPARTMENT: string;

declare var ZDC_FORMCELL_MESSAGE: string;

declare var ZDC_FORMCELL_SINGLELINE: string;

declare var ZDC_TEXTENTRY_MINIMUM_HEIGHT: number;

declare var ZDC_TYPING_CELL_HEIGHT: number;

declare var ZDC_TYPING_CELL_HEIGHT_WITH_AVATAR: number;

declare class ZDUExternalImage extends UIImageView implements ZDUImageRequestDelegate {

	static alloc(): ZDUExternalImage; // inherited from NSObject

	static appearance(): ZDUExternalImage; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDUExternalImage; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDUExternalImage; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDUExternalImage; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDUExternalImage; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ZDUExternalImage; // inherited from UIAppearance

	static new(): ZDUExternalImage; // inherited from NSObject

	url: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	imageDownloaded(img: UIImage): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	maskWithCircle(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface ZDUImageRequestDelegate extends NSObjectProtocol {

	imageDownloaded(img: UIImage): void;
}
declare var ZDUImageRequestDelegate: {

	prototype: ZDUImageRequestDelegate;
};

declare class ZDUViewController extends UIViewController {

	static alloc(): ZDUViewController; // inherited from NSObject

	static new(): ZDUViewController; // inherited from NSObject

	static presentViewControllerRequiresNavController(viewController: UIViewController, requiresNav: boolean): void;

	static topViewController(): UIViewController;

	static topViewControllerWithRootViewController(rootViewController: UIViewController): UIViewController;

	contentView: UIView;

	keyboardHeight: number;

	requiresNavBar: boolean;

	toastHeight: number;

	bottomViewOffset(): number;

	dismissActiveToast(animated: boolean): void;

	keyboardDidShow(aNotification: NSNotification): void;

	keyboardWillHide(aNotification: NSNotification): void;

	registerForKeyboardNotifications(): void;

	topViewOffset(): number;

	viewWillBeDismissed(): void;
}
