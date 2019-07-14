/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module zendesk {
		export module belvedere {
			export class Belvedere {
				public static class: java.lang.Class<com.zendesk.belvedere.Belvedere>;
				public oneOrMoreSourceAvailable(): boolean;
				public showDialog(param0: globalAndroid.support.v4.app.FragmentManager): void;
				public getFileRepresentation(param0: string): com.zendesk.belvedere.BelvedereResult;
				public getFilesFromActivityOnResult(param0: number, param1: number, param2: globalAndroid.content.Intent, param3: com.zendesk.belvedere.BelvedereCallback<java.util.List<com.zendesk.belvedere.BelvedereResult>>): void;
				public isFunctionalityAvailable(param0: com.zendesk.belvedere.BelvedereSource): boolean;
				public clear(): void;
				public grantPermissionsForUri(param0: globalAndroid.content.Intent, param1: globalAndroid.net.Uri): void;
				public getBelvedereIntents(): java.util.List<com.zendesk.belvedere.BelvedereIntent>;
				public revokePermissionsForUri(param0: globalAndroid.net.Uri): void;
				public static from(param0: globalAndroid.content.Context): com.zendesk.belvedere.BelvedereConfig.Builder;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export abstract class BelvedereCallback<E>  extends java.lang.Object {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereCallback<any>>;
				public success(param0: E): void;
				public cancel(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereConfig {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereConfig>;
			}
			export module BelvedereConfig {
				export class Builder {
					public static class: java.lang.Class<com.zendesk.belvedere.BelvedereConfig.Builder>;
					public build(): com.zendesk.belvedere.Belvedere;
					public withCameraRequestCode(param0: number, param1: number): com.zendesk.belvedere.BelvedereConfig.Builder;
					public withGalleryRequestCode(param0: number): com.zendesk.belvedere.BelvedereConfig.Builder;
					public withCustomLogger(param0: com.zendesk.belvedere.BelvedereLogger): com.zendesk.belvedere.BelvedereConfig.Builder;
					public withSource(param0: native.Array<com.zendesk.belvedere.BelvedereSource>): com.zendesk.belvedere.BelvedereConfig.Builder;
					public withAllowMultiple(param0: boolean): com.zendesk.belvedere.BelvedereConfig.Builder;
					public withContentType(param0: string): com.zendesk.belvedere.BelvedereConfig.Builder;
					public withDebug(param0: boolean): com.zendesk.belvedere.BelvedereConfig.Builder;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereDialog {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereDialog>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public onStart(): void;
				public static showDialog(param0: globalAndroid.support.v4.app.FragmentManager, param1: java.util.List<com.zendesk.belvedere.BelvedereIntent>): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
			export module BelvedereDialog {
				export class Adapter extends globalAndroid.widget.ArrayAdapter<com.zendesk.belvedere.BelvedereIntent> {
					public static class: java.lang.Class<com.zendesk.belvedere.BelvedereDialog.Adapter>;
					public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
				}
				export class AttachmentSource {
					public static class: java.lang.Class<com.zendesk.belvedere.BelvedereDialog.AttachmentSource>;
					public getDrawable(): number;
					public getText(): string;
					public static from(param0: com.zendesk.belvedere.BelvedereIntent, param1: globalAndroid.content.Context): com.zendesk.belvedere.BelvedereDialog.AttachmentSource;
				}
				export class StartActivity {
					public static class: java.lang.Class<com.zendesk.belvedere.BelvedereDialog.StartActivity>;
					/**
					 * Constructs a new instance of the com.zendesk.belvedere.BelvedereDialog$StartActivity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						startActivity(param0: com.zendesk.belvedere.BelvedereIntent): void;
						getContext(): globalAndroid.content.Context;
					});
					public constructor();
					public startActivity(param0: com.zendesk.belvedere.BelvedereIntent): void;
					public getContext(): globalAndroid.content.Context;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereFileProvider {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereFileProvider>;
				public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereImagePicker {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereImagePicker>;
				public oneOrMoreSourceAvailable(param0: globalAndroid.content.Context): boolean;
				public isFunctionalityAvailable(param0: com.zendesk.belvedere.BelvedereSource, param1: globalAndroid.content.Context): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereIntent {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereIntent>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.zendesk.belvedere.BelvedereIntent>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: globalAndroid.content.Intent, param1: number, param2: com.zendesk.belvedere.BelvedereSource, param3: string);
				public getIntent(): globalAndroid.content.Intent;
				public open(param0: globalAndroid.support.v4.app.Fragment): void;
				public getSource(): com.zendesk.belvedere.BelvedereSource;
				public describeContents(): number;
				public getRequestCode(): number;
				public getPermission(): string;
				public open(param0: globalAndroid.app.Activity): void;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereLogger {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereLogger>;
				/**
				 * Constructs a new instance of the com.zendesk.belvedere.BelvedereLogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					d(param0: string, param1: string): void;
					w(param0: string, param1: string): void;
					e(param0: string, param1: string): void;
					e(param0: string, param1: string, param2: java.lang.Throwable): void;
					setLoggable(param0: boolean): void;
				});
				public constructor();
				public e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public setLoggable(param0: boolean): void;
				public w(param0: string, param1: string): void;
				public e(param0: string, param1: string): void;
				public d(param0: string, param1: string): void;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereResolveUriTask extends globalAndroid.os.AsyncTask<globalAndroid.net.Uri,java.lang.Void,java.util.List<com.zendesk.belvedere.BelvedereResult>> {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereResolveUriTask>;
				public doInBackground(param0: native.Array<globalAndroid.net.Uri>): java.util.List<com.zendesk.belvedere.BelvedereResult>;
				public onPostExecute(param0: java.util.List<com.zendesk.belvedere.BelvedereResult>): void;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereResult {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereResult>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.zendesk.belvedere.BelvedereResult>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getUri(): globalAndroid.net.Uri;
				public describeContents(): number;
				public getFile(): java.io.File;
				public constructor(param0: java.io.File, param1: globalAndroid.net.Uri);
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereSharedPreferences {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereSharedPreferences>;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereSource {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereSource>;
				public static Camera: com.zendesk.belvedere.BelvedereSource;
				public static Gallery: com.zendesk.belvedere.BelvedereSource;
				public static valueOf(param0: string): com.zendesk.belvedere.BelvedereSource;
				public static values(): native.Array<com.zendesk.belvedere.BelvedereSource>;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BelvedereStorage {
				public static class: java.lang.Class<com.zendesk.belvedere.BelvedereStorage>;
			}
			export module BelvedereStorage {
				export class IntentPermissions {
					public static class: java.lang.Class<com.zendesk.belvedere.BelvedereStorage.IntentPermissions>;
					/**
					 * Constructs a new instance of the com.zendesk.belvedere.BelvedereStorage$IntentPermissions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class BuildConfig {
				public static class: java.lang.Class<com.zendesk.belvedere.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class DefaultLogger extends com.zendesk.belvedere.BelvedereLogger {
				public static class: java.lang.Class<com.zendesk.belvedere.DefaultLogger>;
				public e(param0: string, param1: string, param2: java.lang.Throwable): void;
				public setLoggable(param0: boolean): void;
				public w(param0: string, param1: string): void;
				public e(param0: string, param1: string): void;
				public d(param0: string, param1: string): void;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module belvedere {
			export class PermissionUtil {
				public static class: java.lang.Class<com.zendesk.belvedere.PermissionUtil>;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module collection {
			export class CountedSet<E>  extends java.util.Set<any> {
				public static class: java.lang.Class<com.zendesk.collection.CountedSet<any>>;
				public static NOT_FOUND: number;
				public contains(param0: any): boolean;
				public addAll(param0: java.util.Collection<any>): boolean;
				public toArray(param0: native.Array<any>): native.Array<any>;
				public iterator(): java.util.Iterator<any>;
				public retainAll(param0: java.util.Collection<any>): boolean;
				public constructor();
				public size(): number;
				public toArray(): native.Array<any>;
				public containsAll(param0: java.util.Collection<any>): boolean;
				public add(param0: any): boolean;
				public removeAll(param0: java.util.Collection<any>): boolean;
				public clear(): void;
				public constructor(param0: number);
				public isEmpty(): boolean;
				public getCount(param0: any): number;
				public remove(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module func {
			export class ZFunc1<Param1, Return>  extends java.lang.Object {
				public static class: java.lang.Class<com.zendesk.func.ZFunc1<any,any>>;
				/**
				 * Constructs a new instance of the com.zendesk.func.ZFunc1<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: Param1): Return;
				});
				public constructor();
				public apply(param0: Param1): Return;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module func {
			export class ZFunc2<Param1, Param2, Return>  extends java.lang.Object {
				public static class: java.lang.Class<com.zendesk.func.ZFunc2<any,any,any>>;
				/**
				 * Constructs a new instance of the com.zendesk.func.ZFunc2<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: Param1, param1: Param2): Return;
				});
				public constructor();
				public apply(param0: Param1, param1: Param2): Return;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module logger {
			export class Logger {
				public static class: java.lang.Class<com.zendesk.logger.Logger>;
				public static e(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static d(param0: string, param1: string, param2: native.Array<any>): void;
				public static e(param0: string, param1: com.zendesk.service.ErrorResponse): void;
				public static i(param0: string, param1: string, param2: native.Array<any>): void;
				public static d(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static w(param0: string, param1: string, param2: native.Array<any>): void;
				public static w(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static removeAllLogAppender(): void;
				public static isLoggable(): boolean;
				public static v(param0: string, param1: string, param2: native.Array<any>): void;
				public static v(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static setLoggable(param0: boolean): void;
				public static i(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
				public static e(param0: string, param1: string, param2: native.Array<any>): void;
				public static addLogAppender(param0: com.zendesk.logger.Logger.LogAppender): void;
			}
			export module Logger {
				export class Android extends com.zendesk.logger.Logger.LogAppender {
					public static class: java.lang.Class<com.zendesk.logger.Logger.Android>;
					public log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class Java extends com.zendesk.logger.Logger.LogAppender {
					public static class: java.lang.Class<com.zendesk.logger.Logger.Java>;
					public log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class LogAppender {
					public static class: java.lang.Class<com.zendesk.logger.Logger.LogAppender>;
					/**
					 * Constructs a new instance of the com.zendesk.logger.Logger$LogAppender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
					});
					public constructor();
					public log(param0: com.zendesk.logger.Logger.Priority, param1: string, param2: string, param3: java.lang.Throwable): void;
				}
				export class Priority {
					public static class: java.lang.Class<com.zendesk.logger.Logger.Priority>;
					public static VERBOSE: com.zendesk.logger.Logger.Priority;
					public static DEBUG: com.zendesk.logger.Logger.Priority;
					public static INFO: com.zendesk.logger.Logger.Priority;
					public static WARN: com.zendesk.logger.Logger.Priority;
					public static ERROR: com.zendesk.logger.Logger.Priority;
					public static valueOf(param0: string): com.zendesk.logger.Logger.Priority;
					public static values(): native.Array<com.zendesk.logger.Logger.Priority>;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module logger {
			export class LoggerHelper {
				public static class: java.lang.Class<com.zendesk.logger.LoggerHelper>;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class CancellableCompositeZendeskCallback<T>  extends com.zendesk.service.ZendeskCallback<any> {
				public static class: java.lang.Class<com.zendesk.service.CancellableCompositeZendeskCallback<any>>;
				public remove(param0: com.zendesk.service.SafeZendeskCallback<any>): void;
				public onSuccess(param0: any): void;
				public cancel(): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
				public add(param0: com.zendesk.service.SafeZendeskCallback<any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ErrorResponse {
				public static class: java.lang.Class<com.zendesk.service.ErrorResponse>;
				/**
				 * Constructs a new instance of the com.zendesk.service.ErrorResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isNetworkError(): boolean;
					isConversionError(): boolean;
					isHTTPError(): boolean;
					getReason(): string;
					getStatus(): number;
					getUrl(): string;
					getResponseBody(): string;
					getResponseBodyType(): string;
					getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				});
				public constructor();
				public static NON_HTTP_ERROR: number;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public getResponseBody(): string;
				public getResponseBodyType(): string;
				public getReason(): string;
				public getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				public getStatus(): number;
				public isHTTPError(): boolean;
				public getUrl(): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ErrorResponseAdapter extends com.zendesk.service.ErrorResponse {
				public static class: java.lang.Class<com.zendesk.service.ErrorResponseAdapter>;
				public getResponseBody(): string;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public isNetworkError(): boolean;
				public getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				public getStatus(): number;
				public getUrl(): string;
				public constructor(param0: string);
				public isConversionError(): boolean;
				public constructor();
				public getResponseBodyType(): string;
				public getReason(): string;
				public static fromException(param0: java.lang.Throwable): com.zendesk.service.ErrorResponse;
				public isHTTPError(): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class Header {
				public static class: java.lang.Class<com.zendesk.service.Header>;
				public hashCode(): number;
				public getValue(): string;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class HttpConstants {
				public static class: java.lang.Class<com.zendesk.service.HttpConstants>;
				/**
				 * Constructs a new instance of the com.zendesk.service.HttpConstants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static APPLICATION_JSON: string;
				public static HTTP_LENGTH_REQUIRED: number;
				public static HTTP_RESET: number;
				public static HTTP_VERSION: number;
				public static HTTP_PRECON_FAILED: number;
				public static HTTP_CLIENT_TIMEOUT: number;
				public static HTTP_SEE_OTHER: number;
				public static HTTP_BAD_REQUEST: number;
				public static HTTP_ACCEPTED: number;
				public static HTTP_NOT_ACCEPTABLE: number;
				public static HTTP_PROXY_AUTH: number;
				public static HTTP_BLOCKED: number;
				public static HTTP_REQ_TOO_LONG: number;
				public static HTTP_BAD_GATEWAY: number;
				public static HTTP_MOVED_PERM: number;
				public static HTTP_NO_CONTENT: number;
				public static HTTP_GATEWAY_TIMEOUT: number;
				public static HTTP_PAYMENT_REQUIRED: number;
				public static HTTP_NOT_MODIFIED: number;
				public static HTTP_BAD_METHOD: number;
				public static HTTP_NOT_AUTHORITATIVE: number;
				public static HTTP_UNPROCESSABLE_ENTITY: number;
				public static HTTP_INTERNAL_ERROR: number;
				public static HTTP_USE_PROXY: number;
				public static HTTP_UNAVAILABLE: number;
				public static HTTP_OK: number;
				public static HTTP_ENTITY_TOO_LARGE: number;
				public static USER_AGENT_HEADER: string;
				public static HTTP_MOVED_TEMP: number;
				public static HTTP_GONE: number;
				public static AUTHORIZATION_HEADER: string;
				public static ACCEPT_HEADER: string;
				public static HTTP_FORBIDDEN: number;
				public static HTTP_NOT_IMPLEMENTED: number;
				public static HTTP_UNAUTHORIZED: number;
				public static HTTP_UNSUPPORTED_TYPE: number;
				public static HTTP_NOT_FOUND: number;
				public static HTTP_PARTIAL: number;
				public static HTTP_CONFLICT: number;
				public static HTTP_MULT_CHOICE: number;
				public static HTTP_CREATED: number;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class RetrofitErrorResponse extends com.zendesk.service.ErrorResponse {
				public static class: java.lang.Class<com.zendesk.service.RetrofitErrorResponse>;
				public getResponseBody(): string;
				/** @deprecated */
				public isNetworkError(): boolean;
				/** @deprecated */
				public isConversionError(): boolean;
				public static response(param0: retrofit2.Response): com.zendesk.service.RetrofitErrorResponse;
				public isNetworkError(): boolean;
				public getResponseHeaders(): java.util.List<com.zendesk.service.Header>;
				public static throwable(param0: java.lang.Throwable): com.zendesk.service.RetrofitErrorResponse;
				public getStatus(): number;
				public getUrl(): string;
				public isConversionError(): boolean;
				public getResponseBodyType(): string;
				public getReason(): string;
				public isHTTPError(): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class RetrofitZendeskCallbackAdapter<E, F>  extends retrofit2.Callback<any> {
				public static class: java.lang.Class<com.zendesk.service.RetrofitZendeskCallbackAdapter<any,any>>;
				public static DEFAULT_EXTRACTOR: com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>;
				public constructor(param0: com.zendesk.service.ZendeskCallback<any>);
				public constructor(param0: com.zendesk.service.ZendeskCallback<any>, param1: com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>);
				public onFailure(param0: retrofit2.Call<any>, param1: java.lang.Throwable): void;
				public onResponse(param0: retrofit2.Call<any>, param1: retrofit2.Response<any>): void;
			}
			export module RetrofitZendeskCallbackAdapter {
				export class DefaultExtractor<E>  extends com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any> {
					public static class: java.lang.Class<com.zendesk.service.RetrofitZendeskCallbackAdapter.DefaultExtractor<any>>;
					public extract(param0: any): any;
				}
				export class RequestExtractor<E, F>  extends java.lang.Object {
					public static class: java.lang.Class<com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor<any,any>>;
					/**
					 * Constructs a new instance of the com.zendesk.service.RetrofitZendeskCallbackAdapter$RequestExtractor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extract(param0: E): F;
					});
					public constructor();
					public extract(param0: E): F;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class SafeZendeskCallback<T>  extends com.zendesk.service.ZendeskCallback<any> {
				public static class: java.lang.Class<com.zendesk.service.SafeZendeskCallback<any>>;
				public constructor(param0: com.zendesk.service.ZendeskCallback<any>);
				public onSuccess(param0: any): void;
				public static from(param0: com.zendesk.service.ZendeskCallback<any>): com.zendesk.service.SafeZendeskCallback<any>;
				public cancel(): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export abstract class ZendeskCallback<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.zendesk.service.ZendeskCallback<any>>;
				public onSuccess(param0: T): void;
				public onError(param0: com.zendesk.service.ErrorResponse): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ZendeskDateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
				public static class: java.lang.Class<com.zendesk.service.ZendeskDateTypeAdapter>;
				public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
				public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module service {
			export class ZendeskException {
				public static class: java.lang.Class<com.zendesk.service.ZendeskException>;
				public constructor(param0: retrofit2.Response);
				public errorResponse(): com.zendesk.service.ErrorResponse;
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: com.zendesk.service.ErrorResponse);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class BooleanUtils {
				public static class: java.lang.Class<com.zendesk.util.BooleanUtils>;
				public static isTrue(param0: java.lang.Boolean): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class CollectionUtils {
				public static class: java.lang.Class<com.zendesk.util.CollectionUtils>;
				public static unmodifiableList(param0: java.util.List): java.util.List;
				public static mapKeys(param0: java.util.Map, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static isNotEmpty(param0: native.Array<any>): boolean;
				public static copyOf(param0: java.util.List): java.util.List;
				public static map(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.List;
				public static mapValues(param0: java.util.Map, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static findFirst(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): any;
				public static filter(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.List;
				public static isEmpty(param0: native.Array<any>): boolean;
				public static groupingBy(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static isEmpty(param0: java.util.Collection): boolean;
				public static equalsByContents(param0: java.util.Collection, param1: java.util.Collection): boolean;
				public static copyOf(param0: java.util.Map): java.util.Map;
				public static getOrDefault(param0: java.util.Map, param1: any, param2: any): any;
				public static appendOrReplace(param0: java.util.Collection, param1: any, param2: com.zendesk.func.ZFunc2<any,any,any>): java.util.List;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>, param1: number): native.Array<number>;
				public static combineLists(param0: native.Array<java.util.List>): java.util.List;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>): native.Array<number>;
				public static map(param0: java.util.Map, param1: com.zendesk.func.ZFunc1<any,any>, param2: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static isNotEmpty(param0: java.util.Collection): boolean;
				public static filter(param0: java.util.Map, param1: com.zendesk.func.ZFunc2<any,any,any>): java.util.Map;
				public static associate(param0: java.util.Collection, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map;
				public static ensureEmpty(param0: java.util.List): java.util.List;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class ColorUtils {
				public static class: java.lang.Class<com.zendesk.util.ColorUtils>;
				public static LOG_TAG: string;
				public static apiColorToAndroidColor(param0: string): java.lang.Integer;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class DateUtils {
				public static class: java.lang.Class<com.zendesk.util.DateUtils>;
				public static isToday(param0: java.util.Date): boolean;
				public static isYesterday(param0: java.util.Date): boolean;
				public static deserialiseFromISO8601(param0: string): java.util.Date;
				public static getBeginOfDay(param0: java.util.Date): java.util.Date;
				public static isSameDay(param0: java.util.Date, param1: java.util.Date): boolean;
				public static serialiseToISO8601(param0: java.util.Date): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class DigestUtils {
				public static class: java.lang.Class<com.zendesk.util.DigestUtils>;
				public static md5(param0: string): string;
				public static sha512(param0: string): string;
				public static sha384(param0: string): string;
				public static sha1(param0: string): string;
				public constructor();
				public static sha256(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class FileUtils {
				public static class: java.lang.Class<com.zendesk.util.FileUtils>;
				public static humanReadableFileSize(param0: java.lang.Long): string;
				public static humanReadableFileSize(param0: java.lang.Long, param1: boolean): string;
				public static getFileExtension(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class LocaleUtil {
				public static class: java.lang.Class<com.zendesk.util.LocaleUtil>;
				public static forLanguageTag(param0: string): java.util.Locale;
				public static toLanguageTag(param0: java.util.Locale): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class MimeUtils {
				public static class: java.lang.Class<com.zendesk.util.MimeUtils>;
				public static hasMimeType(param0: string): boolean;
				public static hasExtension(param0: string): boolean;
				public static guessMimeTypeFromExtension(param0: string): string;
				public static guessExtensionFromMimeType(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class NumberFormatUtil {
				public static class: java.lang.Class<com.zendesk.util.NumberFormatUtil>;
				public static format(param0: number): string;
				public static format(param0: number, param1: com.zendesk.util.NumberFormatUtil.SuffixFormatDelegate): string;
			}
			export module NumberFormatUtil {
				export class NumberSuffix {
					public static class: java.lang.Class<com.zendesk.util.NumberFormatUtil.NumberSuffix>;
					public static NONE: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static KILO: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static MEGA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static GIGA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static TERA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static PETA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static EXA: com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static valueOf(param0: string): com.zendesk.util.NumberFormatUtil.NumberSuffix;
					public static values(): native.Array<com.zendesk.util.NumberFormatUtil.NumberSuffix>;
					public getSuffix(): string;
				}
				export class SuffixFormatDelegate {
					public static class: java.lang.Class<com.zendesk.util.NumberFormatUtil.SuffixFormatDelegate>;
					/**
					 * Constructs a new instance of the com.zendesk.util.NumberFormatUtil$SuffixFormatDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getSuffix(param0: com.zendesk.util.NumberFormatUtil.NumberSuffix): string;
					});
					public constructor();
					public getSuffix(param0: com.zendesk.util.NumberFormatUtil.NumberSuffix): string;
				}
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class ObjectUtils {
				public static class: java.lang.Class<com.zendesk.util.ObjectUtils>;
				public static getOrDefault(param0: any, param1: any): any;
				public static toString(param0: any, param1: string): string;
				public static getOrDefault(param0: java.util.concurrent.Callable, param1: any): any;
				public static checkNonNull(param0: native.Array<any>): boolean;
				public static toString(param0: any): string;
				public static hash(param0: native.Array<any>): number;
				public static hashCode(param0: any): number;
				public static equals(param0: any, param1: any): boolean;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class RegexUtils {
				public static class: java.lang.Class<com.zendesk.util.RegexUtils>;
				public static escape(param0: string): string;
			}
		}
	}
}

declare module com {
	export module zendesk {
		export module util {
			export class StringUtils {
				public static class: java.lang.Class<com.zendesk.util.StringUtils>;
				public static EMPTY_STRING: string;
				public static LINE_SEPARATOR: string;
				public static ensureEmpty(param0: string): string;
				public static toCsvString(param0: java.util.List<string>): string;
				public static toCsvString(param0: native.Array<string>): string;
				public static capitalize(param0: string): string;
				public static toDateInIsoFormat(param0: java.util.Date): string;
				public static isNumeric(param0: string): boolean;
				public static toCsvStringNumber(param0: native.Array<java.lang.Number>): string;
				public static toCsvStringNumber(param0: java.util.List<any>): string;
				public static startsWithIdeographic(param0: string): boolean;
				public static isEmpty(param0: string): boolean;
				public static toCsvString(param0: native.Array<number>): string;
				public static escapeEcmaScript(param0: string): string;
				public static fromCsv(param0: string): java.util.List<string>;
				public static hasLength(param0: string): boolean;
				public static hasLengthMany(param0: native.Array<string>): boolean;
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export class BuildConfig {
					public static class: java.lang.Class<com.zopim.android.sdk.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static SDK_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module anim {
					export abstract class AnimationListenerAdapter {
						public static class: java.lang.Class<com.zopim.android.sdk.anim.AnimationListenerAdapter>;
						public constructor();
						public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
						public onAnimationEnd(param0: globalAndroid.view.animation.Animation): void;
						public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module anim {
					export class AnimatorPack {
						public static class: java.lang.Class<com.zopim.android.sdk.anim.AnimatorPack>;
						public constructor();
						public static crossfade(param0: globalAndroid.view.View, param1: globalAndroid.view.View, param2: globalAndroid.animation.Animator.AnimatorListener, param3: globalAndroid.animation.Animator.AnimatorListener): globalAndroid.animation.AnimatorSet;
						public static fadeIn(param0: globalAndroid.view.View): globalAndroid.animation.Animator;
						public static scale(param0: globalAndroid.view.View, param1: number, param2: number): globalAndroid.animation.AnimatorSet;
						public static fadeOut(param0: globalAndroid.view.View): globalAndroid.animation.Animator;
						public static slideInSequentially(param0: com.zopim.android.sdk.anim.AnimatorPack.Direction, param1: number, param2: boolean, param3: boolean, param4: native.Array<globalAndroid.view.View>): globalAndroid.animation.Animator;
						public static slideOutSequentially(param0: com.zopim.android.sdk.anim.AnimatorPack.Direction, param1: number, param2: boolean, param3: boolean, param4: native.Array<globalAndroid.view.View>): globalAndroid.animation.Animator;
						public static slideOut(param0: globalAndroid.view.View, param1: com.zopim.android.sdk.anim.AnimatorPack.Direction): globalAndroid.animation.Animator;
						public static crossfade(param0: globalAndroid.view.View, param1: globalAndroid.view.View): globalAndroid.animation.AnimatorSet;
						public static slideIn(param0: globalAndroid.view.View, param1: com.zopim.android.sdk.anim.AnimatorPack.Direction): globalAndroid.animation.Animator;
					}
					export module AnimatorPack {
						export class Direction {
							public static class: java.lang.Class<com.zopim.android.sdk.anim.AnimatorPack.Direction>;
							public static LEFT: com.zopim.android.sdk.anim.AnimatorPack.Direction;
							public static TOP: com.zopim.android.sdk.anim.AnimatorPack.Direction;
							public static RIGHT: com.zopim.android.sdk.anim.AnimatorPack.Direction;
							public static BOTTOM: com.zopim.android.sdk.anim.AnimatorPack.Direction;
							public static values(): native.Array<com.zopim.android.sdk.anim.AnimatorPack.Direction>;
							public static valueOf(param0: string): com.zopim.android.sdk.anim.AnimatorPack.Direction;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export abstract class ApiConfigBuilder<T>  extends java.io.Serializable {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ApiConfigBuilder<any>>;
						public visitorPathOne(param0: string): any;
						public visitorPathTwo(param0: string): any;
						public department(param0: string): any;
						public tags(param0: native.Array<string>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class AttachmentManager extends com.zopim.android.sdk.data.observers.ChatLogObserver {
						public static class: java.lang.Class<com.zopim.android.sdk.api.AttachmentManager>;
						public update(param0: java.util.Observable, param1: any): void;
						public update(param0: java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class BreadcrumbsApi {
						public static class: java.lang.Class<com.zopim.android.sdk.api.BreadcrumbsApi>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.BreadcrumbsApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sendEvents(param0: native.Array<com.zopim.android.sdk.breadcrumbs.Event>): void;
						});
						public constructor();
						public sendEvents(param0: native.Array<com.zopim.android.sdk.breadcrumbs.Event>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class BuildConfig {
						public static class: java.lang.Class<com.zopim.android.sdk.api.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public static SDK_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class Chat extends com.zopim.android.sdk.api.ChatApi {
						public static class: java.lang.Class<com.zopim.android.sdk.api.Chat>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.Chat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getConfig(): com.zopim.android.sdk.api.ChatConfig;
							getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
							hasEnded(): boolean;
							resetTimeout(): void;
							send(param0: string): void;
							send(param0: java.io.File): void;
							resend(param0: string): void;
							sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
							sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
							sendChatComment(param0: string): void;
							emailTranscript(param0: string): boolean;
							endChat(): void;
							disconnect(): void;
							setDepartment(param0: string): void;
							setPhoneNumber(param0: string): void;
							setName(param0: string): void;
							setEmail(param0: string): void;
							setNote(param0: string): void;
							addNote(param0: string): void;
						});
						public constructor();
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public setDepartment(param0: string): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resetTimeout(): void;
						public hasEnded(): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						public getConfig(): com.zopim.android.sdk.api.ChatConfig;
						public getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatApi extends com.zopim.android.sdk.api.ChatApiCommands {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatApi>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ChatApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
							hasEnded(): boolean;
							resetTimeout(): void;
							send(param0: string): void;
							send(param0: java.io.File): void;
							resend(param0: string): void;
							sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
							sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
							sendChatComment(param0: string): void;
							emailTranscript(param0: string): boolean;
							endChat(): void;
							disconnect(): void;
							setDepartment(param0: string): void;
							setPhoneNumber(param0: string): void;
							setName(param0: string): void;
							setEmail(param0: string): void;
							setNote(param0: string): void;
							addNote(param0: string): void;
						});
						public constructor();
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public setDepartment(param0: string): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resetTimeout(): void;
						public hasEnded(): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						public getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatApiCommands {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatApiCommands>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ChatApiCommands interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							send(param0: string): void;
							send(param0: java.io.File): void;
							resend(param0: string): void;
							sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
							sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
							sendChatComment(param0: string): void;
							emailTranscript(param0: string): boolean;
							endChat(): void;
							disconnect(): void;
							setDepartment(param0: string): void;
							setPhoneNumber(param0: string): void;
							setName(param0: string): void;
							setEmail(param0: string): void;
							setNote(param0: string): void;
							addNote(param0: string): void;
						});
						public constructor();
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public setDepartment(param0: string): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatApiConfig {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatApiConfig>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ChatApiConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDepartment(): string;
							getTags(): native.Array<string>;
							getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
						});
						public constructor();
						public getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
						public getTags(): native.Array<string>;
						public getDepartment(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatClient extends com.zopim.android.sdk.api.ZopimChatApi implements com.zopim.android.sdk.api.BreadcrumbsApi {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatClient>;
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public sendEvents(param0: native.Array<com.zopim.android.sdk.breadcrumbs.Event>): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resetTimeout(): void;
						public hasEnded(): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						/** @deprecated */
						public setDepartment(param0: string): void;
						public getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatClient_LifecycleAdapter {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatClient_LifecycleAdapter>;
						public callMethods(param0: any, param1: any, param2: boolean, param3: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export abstract class ChatCommunication implements com.zopim.android.sdk.api.ChatApiCommands, com.zopim.android.sdk.api.BreadcrumbsApi {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatCommunication>;
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public setDepartment(param0: string): void;
						public sendEvents(param0: native.Array<com.zopim.android.sdk.breadcrumbs.Event>): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatConfig extends com.zopim.android.sdk.api.ChatApiConfig {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatConfig>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ChatConfig interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getPreChatForm(): com.zopim.android.sdk.prechat.PreChatForm;
							getEmailTranscript(): com.zopim.android.sdk.prechat.EmailTranscript;
							isFileSendingEnabled(): boolean;
							getDepartment(): string;
							getTags(): native.Array<string>;
							getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
						});
						public constructor();
						public getPreChatForm(): com.zopim.android.sdk.prechat.PreChatForm;
						public getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
						public isFileSendingEnabled(): boolean;
						public getTags(): native.Array<string>;
						public getEmailTranscript(): com.zopim.android.sdk.prechat.EmailTranscript;
						public getDepartment(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatSession {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatSession>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ChatSession interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							<clinit>(): void;
						});
						public constructor();
						public static ACTION_CHAT_FOREGROUND: string;
						public static DEFAULT_CHAT_SESSION_TIMEOUT: number;
						public static ACTION_CHAT_APP_BACKGROUND: string;
						public static DEFAULT_RECONNECT_TIMEOUT: number;
						public static ACTION_CHAT_APP_FOREGROUND: string;
						public static ACTION_CHAT_INITIALIZATION_TIMEOUT: string;
						public static ACTION_CHAT_BACKGROUND: string;
						public static DEFAULT_CHAT_INITIALIZATION_TIMEOUT: number;
						public static ACTION_CHAT_SESSION_TIMEOUT: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ChatState {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ChatState>;
						public static INITIALIZING: com.zopim.android.sdk.api.ChatState;
						public static INITIALIZED: com.zopim.android.sdk.api.ChatState;
						public static STARTED: com.zopim.android.sdk.api.ChatState;
						public static DISCONNECTED: com.zopim.android.sdk.api.ChatState;
						public static ENDING: com.zopim.android.sdk.api.ChatState;
						public static ENDED: com.zopim.android.sdk.api.ChatState;
						public static UNKNOWN: com.zopim.android.sdk.api.ChatState;
						public static valueOf(param0: string): com.zopim.android.sdk.api.ChatState;
						public static values(): native.Array<com.zopim.android.sdk.api.ChatState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ConfigBuilder<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ConfigBuilder<any>>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ConfigBuilder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							preChatForm(param0: com.zopim.android.sdk.prechat.PreChatForm): T;
							emailTranscript(param0: com.zopim.android.sdk.prechat.EmailTranscript): T;
							fileSending(param0: boolean): T;
						});
						public constructor();
						public emailTranscript(param0: com.zopim.android.sdk.prechat.EmailTranscript): T;
						public fileSending(param0: boolean): T;
						public preChatForm(param0: com.zopim.android.sdk.prechat.PreChatForm): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class DownloadHttpRequest extends com.zopim.android.sdk.api.HttpRequest {
						public static class: java.lang.Class<com.zopim.android.sdk.api.DownloadHttpRequest>;
						public setRequestListener(param0: com.zopim.android.sdk.api.RegisteredCallback<java.io.File>): void;
						public downloadFile(param0: java.net.URL, param1: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ErrorResponse {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ErrorResponse>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ErrorResponse interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getKind(): com.zopim.android.sdk.api.ErrorResponse.Kind;
							getReason(): string;
							getStatus(): number;
							getUrl(): string;
							getResponseBody(): string;
							getResponseBodyType(): string;
						});
						public constructor();
						public static NON_HTTP_ERROR: number;
						public getResponseBody(): string;
						public getResponseBodyType(): string;
						public getUrl(): string;
						public getReason(): string;
						public getKind(): com.zopim.android.sdk.api.ErrorResponse.Kind;
						public getStatus(): number;
					}
					export module ErrorResponse {
						export class Kind {
							public static class: java.lang.Class<com.zopim.android.sdk.api.ErrorResponse.Kind>;
							public static HTTP: com.zopim.android.sdk.api.ErrorResponse.Kind;
							public static NETWORK: com.zopim.android.sdk.api.ErrorResponse.Kind;
							public static UNEXPECTED: com.zopim.android.sdk.api.ErrorResponse.Kind;
							public static values(): native.Array<com.zopim.android.sdk.api.ErrorResponse.Kind>;
							public static valueOf(param0: string): com.zopim.android.sdk.api.ErrorResponse.Kind;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ErrorResponseImpl extends com.zopim.android.sdk.api.ErrorResponse {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ErrorResponseImpl>;
						public getResponseBody(): string;
						public getResponseBodyType(): string;
						public getUrl(): string;
						public getReason(): string;
						public toString(): string;
						public getKind(): com.zopim.android.sdk.api.ErrorResponse.Kind;
						public getStatus(): number;
					}
					export module ErrorResponseImpl {
						export class Builder {
							public static class: java.lang.Class<com.zopim.android.sdk.api.ErrorResponseImpl.Builder>;
							public responseBodyType(param0: string): com.zopim.android.sdk.api.ErrorResponseImpl.Builder;
							public kind(param0: com.zopim.android.sdk.api.ErrorResponse.Kind): com.zopim.android.sdk.api.ErrorResponseImpl.Builder;
							public responseBody(param0: string): com.zopim.android.sdk.api.ErrorResponseImpl.Builder;
							public reason(param0: string): com.zopim.android.sdk.api.ErrorResponseImpl.Builder;
							public status(param0: number): com.zopim.android.sdk.api.ErrorResponseImpl.Builder;
							public url(param0: string): com.zopim.android.sdk.api.ErrorResponseImpl.Builder;
							public build(): com.zopim.android.sdk.api.ErrorResponseImpl;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class FileDownloader extends globalAndroid.os.AsyncTask<globalAndroid.util.Pair<java.net.URL,java.io.File>,java.lang.Void,java.io.File> {
						public static class: java.lang.Class<com.zopim.android.sdk.api.FileDownloader>;
						public setRequestListener(param0: com.zopim.android.sdk.api.RegisteredCallback<java.io.File>): void;
						public doInBackground(param0: native.Array<globalAndroid.util.Pair<java.net.URL,java.io.File>>): java.io.File;
						public onPostExecute(param0: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class FileTransfers {
						public static class: java.lang.Class<com.zopim.android.sdk.api.FileTransfers>;
						public static INSTANCE: com.zopim.android.sdk.api.FileTransfers;
						public static values(): native.Array<com.zopim.android.sdk.api.FileTransfers>;
						public findFile(param0: string): java.io.File;
						public static valueOf(param0: string): com.zopim.android.sdk.api.FileTransfers;
					}
					export module FileTransfers {
						export class Info {
							public static class: java.lang.Class<com.zopim.android.sdk.api.FileTransfers.Info>;
							public file: java.io.File;
							public status: com.zopim.android.sdk.api.FileTransfers.Status;
						}
						export class Status {
							public static class: java.lang.Class<com.zopim.android.sdk.api.FileTransfers.Status>;
							public static UNKNOWN: com.zopim.android.sdk.api.FileTransfers.Status;
							public static SCHEDULED: com.zopim.android.sdk.api.FileTransfers.Status;
							public static STARTED: com.zopim.android.sdk.api.FileTransfers.Status;
							public static COMPLETED: com.zopim.android.sdk.api.FileTransfers.Status;
							public static FAILED: com.zopim.android.sdk.api.FileTransfers.Status;
							public static valueOf(param0: string): com.zopim.android.sdk.api.FileTransfers.Status;
							public static values(): native.Array<com.zopim.android.sdk.api.FileTransfers.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class FileUploader extends globalAndroid.os.AsyncTask<globalAndroid.util.Pair<java.io.File,java.net.URL>,java.lang.Integer,java.lang.Void> {
						public static class: java.lang.Class<com.zopim.android.sdk.api.FileUploader>;
						public setRequestListener(param0: com.zopim.android.sdk.api.RegisteredCallback<java.lang.Void>): void;
						public onProgressUpdate(param0: native.Array<java.lang.Integer>): void;
						public onPostExecute(param0: java.lang.Void): void;
						public doInBackground(param0: native.Array<globalAndroid.util.Pair<java.io.File,java.net.URL>>): java.lang.Void;
						public setProgressListener(param0: com.zopim.android.sdk.api.HttpRequest.ProgressListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class HttpRequest {
						public static class: java.lang.Class<com.zopim.android.sdk.api.HttpRequest>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.HttpRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							<clinit>(): void;
						});
						public constructor();
						public static CHARSET: string;
						public static REQUEST_TIMEOUT: number;
						public static MAX_BUFFER_SIZE: number;
					}
					export module HttpRequest {
						export class ProgressListener {
							public static class: java.lang.Class<com.zopim.android.sdk.api.HttpRequest.ProgressListener>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.api.HttpRequest$ProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onProgressUpdate(param0: number): void;
							});
							public constructor();
							public onProgressUpdate(param0: number): void;
						}
						export class Status {
							public static class: java.lang.Class<com.zopim.android.sdk.api.HttpRequest.Status>;
							public static SUCCESS: com.zopim.android.sdk.api.HttpRequest.Status;
							public static REDIRECT: com.zopim.android.sdk.api.HttpRequest.Status;
							public static CLIENT_ERROR: com.zopim.android.sdk.api.HttpRequest.Status;
							public static SERVER_ERROR: com.zopim.android.sdk.api.HttpRequest.Status;
							public static UNKNOWN: com.zopim.android.sdk.api.HttpRequest.Status;
							public static getStatus(param0: number): com.zopim.android.sdk.api.HttpRequest.Status;
							public static valueOf(param0: string): com.zopim.android.sdk.api.HttpRequest.Status;
							public static values(): native.Array<com.zopim.android.sdk.api.HttpRequest.Status>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class MonitoredUploadHttpRequest extends com.zopim.android.sdk.api.HttpRequest {
						public static class: java.lang.Class<com.zopim.android.sdk.api.MonitoredUploadHttpRequest>;
						public upload(param0: java.io.File, param1: java.net.URL): void;
						public setRequestListener(param0: com.zopim.android.sdk.api.RegisteredCallback<java.lang.Void>): void;
						public setProgressListener(param0: com.zopim.android.sdk.api.HttpRequest.ProgressListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ObservableTrigger {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ObservableTrigger>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.api.ObservableTrigger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							trigger(): void;
						});
						public constructor();
						public trigger(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export abstract class RegisteredCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.zopim.android.sdk.api.RegisteredCallback<any>>;
						public unregister(): void;
						public isRegistered(): boolean;
						public onSuccess(param0: T): void;
						public onError(param0: com.zopim.android.sdk.api.ErrorResponse): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ServiceUtils {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ServiceUtils>;
						public static stopForegroundService(param0: globalAndroid.app.Service): void;
						public constructor();
						public static startAsForegroundServiceIfNeeded(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						public static startForegroundIfNeeded(param0: globalAndroid.app.Service, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class Tls12SocketFactory {
						public static class: java.lang.Class<com.zopim.android.sdk.api.Tls12SocketFactory>;
						public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
						public static enableTls12(param0: javax.net.ssl.HttpsURLConnection): javax.net.ssl.HttpsURLConnection;
						public createSocket(param0: string, param1: number): java.net.Socket;
						public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
						public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
						public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
						public getSupportedCipherSuites(): native.Array<string>;
						public constructor(param0: javax.net.ssl.SSLSocketFactory);
						public getDefaultCipherSuites(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class UninitializedChat extends com.zopim.android.sdk.api.UninitializedChatApi implements com.zopim.android.sdk.api.Chat {
						public static class: java.lang.Class<com.zopim.android.sdk.api.UninitializedChat>;
						public constructor();
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public setDepartment(param0: string): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resetTimeout(): void;
						public hasEnded(): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						public getConfig(): com.zopim.android.sdk.api.ChatConfig;
						public getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class UninitializedChatApi extends com.zopim.android.sdk.api.ChatApi {
						public static class: java.lang.Class<com.zopim.android.sdk.api.UninitializedChatApi>;
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public setDepartment(param0: string): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resetTimeout(): void;
						public hasEnded(): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						public getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class WebBinder extends com.zopim.android.sdk.api.ChatCommunication {
						public static class: java.lang.Class<com.zopim.android.sdk.api.WebBinder>;
						public clearPushToken(): void;
						public sendChatComment(param0: string): void;
						public emailTranscript(param0: string): boolean;
						public setName(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public setPushToken(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public endChat(): void;
						public send(param0: string): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public setDepartment(param0: string): void;
						public sendEvents(param0: native.Array<com.zopim.android.sdk.breadcrumbs.Event>): void;
						public setEmail(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						public sendChatButtonClicked(): void;
					}
					export module WebBinder {
						export class TeardownRunnable {
							public static class: java.lang.Class<com.zopim.android.sdk.api.WebBinder.TeardownRunnable>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export class ZopimChat extends com.zopim.android.sdk.api.Chat {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ZopimChat>;
						public emailTranscript(param0: string): boolean;
						public static setPushToken(param0: string): void;
						public setPhoneNumber(param0: string): void;
						public static clearPushToken(): void;
						public endChat(): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public static start(param0: globalAndroid.support.v4.app.FragmentActivity): com.zopim.android.sdk.api.Chat;
						public static trackEvent(param0: string): void;
						public setEmail(param0: string): void;
						public resetTimeout(): void;
						public hasEnded(): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						public static resume(param0: globalAndroid.support.v4.app.FragmentActivity): com.zopim.android.sdk.api.Chat;
						/** @deprecated */
						public static getDataSource(): com.zopim.android.sdk.data.DataSource;
						/** @deprecated */
						public static getReconnectTimeout(): java.lang.Long;
						public getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
						public sendChatComment(param0: string): void;
						public setName(param0: string): void;
						public setNote(param0: string): void;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public send(param0: string): void;
						public setDepartment(param0: string): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public getConfig(): com.zopim.android.sdk.api.ChatConfig;
						/** @deprecated */
						public static getInitializationTimeout(): java.lang.Long;
						public static init(param0: string): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
						public static setVisitorInfo(param0: com.zopim.android.sdk.model.VisitorInfo): void;
					}
					export module ZopimChat {
						export class DefaultConfig extends com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<com.zopim.android.sdk.api.ZopimChat.DefaultConfig> implements com.zopim.android.sdk.api.ConfigBuilder<com.zopim.android.sdk.api.ZopimChat.DefaultConfig>  {
							public static class: java.lang.Class<com.zopim.android.sdk.api.ZopimChat.DefaultConfig>;
							public emailTranscript(param0: com.zopim.android.sdk.prechat.EmailTranscript): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
							public fileSending(param0: boolean): any;
							public sessionTimeout(param0: number): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
							public preChatForm(param0: com.zopim.android.sdk.prechat.PreChatForm): any;
							public emailTranscript(param0: com.zopim.android.sdk.prechat.EmailTranscript): any;
							public initializationTimeout(param0: number): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
							public sessionTimeout(param0: number): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
							public initializationTimeout(param0: number): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
							public preChatForm(param0: com.zopim.android.sdk.prechat.PreChatForm): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
							public disableVisitorInfoStorage(): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
							public fileSending(param0: boolean): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
							public reconnectTimeout(param0: number): com.zopim.android.sdk.api.ZopimChat.DefaultConfig;
							public reconnectTimeout(param0: number): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
							public disableVisitorInfoStorage(): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
						}
						export class SessionConfig extends com.zopim.android.sdk.api.ZopimChatApi.SessionConfig<com.zopim.android.sdk.api.ZopimChat.SessionConfig> implements com.zopim.android.sdk.api.ConfigBuilder<com.zopim.android.sdk.api.ZopimChat.SessionConfig>  {
							public static class: java.lang.Class<com.zopim.android.sdk.api.ZopimChat.SessionConfig>;
							public constructor();
							public visitorPathTwo(param0: string): com.zopim.android.sdk.api.ZopimChat.SessionConfig;
							public fileSending(param0: boolean): any;
							public emailTranscript(param0: com.zopim.android.sdk.prechat.EmailTranscript): com.zopim.android.sdk.api.ZopimChat.SessionConfig;
							public visitorPathOne(param0: string): any;
							public visitorPathTwo(param0: string): any;
							public preChatForm(param0: com.zopim.android.sdk.prechat.PreChatForm): any;
							public emailTranscript(param0: com.zopim.android.sdk.prechat.EmailTranscript): any;
							public preChatForm(param0: com.zopim.android.sdk.prechat.PreChatForm): com.zopim.android.sdk.api.ZopimChat.SessionConfig;
							public visitorPathOne(param0: string): com.zopim.android.sdk.api.ZopimChat.SessionConfig;
							public department(param0: string): com.zopim.android.sdk.api.ZopimChat.SessionConfig;
							public build(param0: globalAndroid.support.v4.app.FragmentActivity): com.zopim.android.sdk.api.ChatApi;
							public tags(param0: native.Array<string>): any;
							public tags(param0: native.Array<string>): com.zopim.android.sdk.api.ZopimChat.SessionConfig;
							public build(param0: globalAndroid.support.v4.app.FragmentActivity): com.zopim.android.sdk.api.Chat;
							public fileSending(param0: boolean): com.zopim.android.sdk.api.ZopimChat.SessionConfig;
							public department(param0: string): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module api {
					export abstract class ZopimChatApi implements com.zopim.android.sdk.api.ChatApi, com.zopim.android.sdk.api.ChatSession {
						public static class: java.lang.Class<com.zopim.android.sdk.api.ZopimChatApi>;
						public static getInitializationTimeout(): java.lang.Long;
						public emailTranscript(param0: string): boolean;
						public static setPushToken(param0: string): void;
						public static getPushToken(): string;
						public setPhoneNumber(param0: string): void;
						public static clearPushToken(): void;
						public endChat(): void;
						public addNote(param0: string): void;
						public disconnect(): void;
						public static trackEvent(param0: string): void;
						public setEmail(param0: string): void;
						public resetTimeout(): void;
						public hasEnded(): boolean;
						public resend(param0: string): void;
						public send(param0: java.io.File): void;
						public static start(param0: globalAndroid.support.v4.app.FragmentActivity): com.zopim.android.sdk.api.ChatApi;
						public getConfig(): com.zopim.android.sdk.api.ChatApiConfig;
						public constructor();
						public sendChatComment(param0: string): void;
						public setName(param0: string): void;
						public setNote(param0: string): void;
						public static getReconnectTimeout(): java.lang.Long;
						public sendChatRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						public static resume(param0: globalAndroid.support.v4.app.FragmentActivity): com.zopim.android.sdk.api.ChatApi;
						public static getDataSource(): com.zopim.android.sdk.data.DataSource;
						public send(param0: string): void;
						public setDepartment(param0: string): void;
						public static onMessageReceived(param0: com.zopim.android.sdk.model.PushData): void;
						public sendOfflineMessage(param0: string, param1: string, param2: string): boolean;
						public static setVisitorInfo(param0: com.zopim.android.sdk.model.VisitorInfo): void;
						public static init(param0: string): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
					}
					export module ZopimChatApi {
						export class DefaultConfig<T>  extends com.zopim.android.sdk.api.ApiConfigBuilder<any> {
							public static class: java.lang.Class<com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>>;
							public constructor();
							public initializationTimeout(param0: number): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
							/** @deprecated */
							public build(): java.lang.Void;
							public sessionTimeout(param0: number): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
							public reconnectTimeout(param0: number): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
							public disableVisitorInfoStorage(): com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig<any>;
						}
						export class SessionConfig<T>  extends com.zopim.android.sdk.api.ApiConfigBuilder<any> {
							public static class: java.lang.Class<com.zopim.android.sdk.api.ZopimChatApi.SessionConfig<any>>;
							public constructor();
							public visitorPathOne(param0: string): any;
							public visitorPathTwo(param0: string): any;
							public build(param0: globalAndroid.support.v4.app.FragmentActivity): com.zopim.android.sdk.api.ChatApi;
							public tags(param0: native.Array<string>): any;
							public department(param0: string): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module attachment {
					export class FileExtension {
						public static class: java.lang.Class<com.zopim.android.sdk.attachment.FileExtension>;
						public static JPG: com.zopim.android.sdk.attachment.FileExtension;
						public static JPEG: com.zopim.android.sdk.attachment.FileExtension;
						public static PNG: com.zopim.android.sdk.attachment.FileExtension;
						public static GIF: com.zopim.android.sdk.attachment.FileExtension;
						public static PDF: com.zopim.android.sdk.attachment.FileExtension;
						public static TXT: com.zopim.android.sdk.attachment.FileExtension;
						public static UNKNOWN: com.zopim.android.sdk.attachment.FileExtension;
						public static getExtension(param0: java.io.File): com.zopim.android.sdk.attachment.FileExtension;
						public static valueOf(param0: string): com.zopim.android.sdk.attachment.FileExtension;
						public getValue(): string;
						public static valueOfExtension(param0: string): com.zopim.android.sdk.attachment.FileExtension;
						public static values(): native.Array<com.zopim.android.sdk.attachment.FileExtension>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module breadcrumbs {
					export class ConcurrentBoundedQueue<E>  extends com.zopim.android.sdk.util.CircularQueue<any> {
						public static class: java.lang.Class<com.zopim.android.sdk.breadcrumbs.ConcurrentBoundedQueue<any>>;
						public toArray(param0: native.Array<any>): native.Array<any>;
						public addAll(param0: java.util.Collection<any>): void;
						public offer(param0: any): void;
						public contains(param0: any): boolean;
						public poll(): any;
						public isEmpty(): boolean;
						public clear(): void;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module breadcrumbs {
					export class Event {
						public static class: java.lang.Class<com.zopim.android.sdk.breadcrumbs.Event>;
						public constructor(param0: string, param1: number);
						public getTimestamp(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public constructor(param0: string);
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module breadcrumbs {
					export class Events {
						public static class: java.lang.Class<com.zopim.android.sdk.breadcrumbs.Events>;
						public constructor();
						public static getQueue(): com.zopim.android.sdk.util.CircularQueue<com.zopim.android.sdk.breadcrumbs.Event>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentAttachmentHolder extends com.zopim.android.sdk.chatlog.AgentHolder<com.zopim.android.sdk.model.items.AgentAttachment> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentAttachmentHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.AgentAttachment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentAttachmentItem extends com.zopim.android.sdk.model.items.AgentAttachment implements com.zopim.android.sdk.chatlog.FirstItem, com.zopim.android.sdk.chatlog.LeadItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentAttachmentItem>;
						public setLeadItem(param0: boolean): void;
						public isFirstItem(): boolean;
						public update(param0: com.zopim.android.sdk.model.items.AgentAttachment): void;
						public update(param0: any): void;
						public setFirstItem(param0: boolean): void;
						public isLeadItem(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export abstract class AgentHolder<T>  extends globalAndroid.support.v7.widget.RecyclerView.ViewHolder implements com.zopim.android.sdk.chatlog.ViewBinder<any>  {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentHolder<any>>;
						public avatarView: globalAndroid.widget.ImageView;
						public nameView: globalAndroid.widget.TextView;
						public bind(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentMessageHolder extends com.zopim.android.sdk.chatlog.AgentHolder<com.zopim.android.sdk.model.items.AgentMessage> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentMessageHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.AgentMessage): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentMessageItem extends com.zopim.android.sdk.model.items.AgentMessage implements com.zopim.android.sdk.chatlog.FirstItem, com.zopim.android.sdk.chatlog.LeadItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentMessageItem>;
						public setLeadItem(param0: boolean): void;
						public update(param0: com.zopim.android.sdk.model.items.AgentMessage): void;
						public isFirstItem(): boolean;
						public update(param0: any): void;
						public setFirstItem(param0: boolean): void;
						public isLeadItem(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentOptionsHolder extends com.zopim.android.sdk.chatlog.AgentHolder<com.zopim.android.sdk.model.items.AgentOptions> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentOptionsHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.AgentOptions): void;
					}
					export module AgentOptionsHolder {
						export class OptionClickListener {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentOptionsHolder.OptionClickListener>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.chatlog.AgentOptionsHolder$OptionClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onClick(param0: string): void;
							});
							public constructor();
							public onClick(param0: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentOptionsItem extends com.zopim.android.sdk.model.items.AgentOptions implements com.zopim.android.sdk.chatlog.FirstItem, com.zopim.android.sdk.chatlog.LeadItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentOptionsItem>;
						public setLeadItem(param0: boolean): void;
						public isFirstItem(): boolean;
						public update(param0: com.zopim.android.sdk.model.items.AgentOptions): void;
						public update(param0: any): void;
						public setFirstItem(param0: boolean): void;
						public isLeadItem(): boolean;
						public setDisabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentTypingHolder extends com.zopim.android.sdk.chatlog.AgentHolder<com.zopim.android.sdk.model.items.AgentTyping> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentTypingHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.AgentTyping): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class AgentTypingItem extends com.zopim.android.sdk.model.items.AgentTyping implements com.zopim.android.sdk.chatlog.LeadItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.AgentTypingItem>;
						public setLeadItem(param0: boolean): void;
						public update(param0: com.zopim.android.sdk.model.items.AgentTyping): void;
						public update(param0: any): void;
						public isLeadItem(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ChatEventHolder extends globalAndroid.support.v7.widget.RecyclerView.ViewHolder implements com.zopim.android.sdk.chatlog.ViewBinder<com.zopim.android.sdk.model.items.ChatEvent>  {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ChatEventHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.ChatEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ChatLogAdapter extends globalAndroid.support.v7.widget.RecyclerView.Adapter<globalAndroid.support.v7.widget.RecyclerView.ViewHolder> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ChatLogAdapter>;
						public getItemViewType(param0: number): number;
						public getItemCount(): number;
						public isEmpty(): boolean;
						public clear(): void;
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): globalAndroid.support.v7.widget.RecyclerView.ViewHolder;
						public setChat(param0: com.zopim.android.sdk.api.ChatApi): void;
						public add(param0: com.zopim.android.sdk.model.items.RowItem<any>): void;
						public onBindViewHolder(param0: globalAndroid.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
						public remove(param0: number): void;
						public getItem(param0: number): com.zopim.android.sdk.model.items.RowItem<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ChatMemberEventHolder extends globalAndroid.support.v7.widget.RecyclerView.ViewHolder implements com.zopim.android.sdk.chatlog.ViewBinder<com.zopim.android.sdk.model.items.ChatMemberEvent>  {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ChatMemberEventHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.ChatMemberEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ChatRatingHolder extends globalAndroid.support.v7.widget.RecyclerView.ViewHolder implements com.zopim.android.sdk.chatlog.ViewBinder<com.zopim.android.sdk.model.items.ChatRating>  {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ChatRatingHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.ChatRating): void;
					}
					export module ChatRatingHolder {
						export class RatingListener {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ChatRatingHolder.RatingListener>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.chatlog.ChatRatingHolder$RatingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onRated(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
							});
							public constructor();
							public onRated(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ConnectionFragment {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ConnectionFragment>;
						public constructor();
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onStop(): void;
						public onStart(): void;
					}
					export module ConnectionFragment {
						export class ConnectionListener {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ConnectionFragment.ConnectionListener>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.chatlog.ConnectionFragment$ConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnected(): void;
								onDisconnected(): void;
							});
							public constructor();
							public onConnected(): void;
							public onDisconnected(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ConnectionToastFragment {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ConnectionToastFragment>;
						public constructor();
						public onDestroy(): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onStop(): void;
						public onStart(): void;
					}
					export module ConnectionToastFragment {
						export class ToastListener {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ConnectionToastFragment.ToastListener>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.chatlog.ConnectionToastFragment$ToastListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onShowToast(): void;
								onHideToast(): void;
							});
							public constructor();
							public onHideToast(): void;
							public onShowToast(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class FirstItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.FirstItem>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.chatlog.FirstItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isFirstItem(): boolean;
							setFirstItem(param0: boolean): void;
						});
						public constructor();
						public isFirstItem(): boolean;
						public setFirstItem(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class IntentResolver {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.IntentResolver>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class LeadItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.LeadItem>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.chatlog.LeadItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isLeadItem(): boolean;
							setLeadItem(param0: boolean): void;
						});
						public constructor();
						public setLeadItem(param0: boolean): void;
						public isLeadItem(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class PicassoHelper {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.PicassoHelper>;
					}
					export module PicassoHelper {
						export class CircleTransform {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.PicassoHelper.CircleTransform>;
							public key(): string;
							public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						}
						export class CropSquareTransform {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.PicassoHelper.CropSquareTransform>;
							public key(): string;
							public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						}
						export class ResizeTransformation {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.PicassoHelper.ResizeTransformation>;
							public key(): string;
							public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class UnknownRowItem extends com.zopim.android.sdk.model.items.RowItem<com.zopim.android.sdk.model.items.RowItem<any>> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.UnknownRowItem>;
						public update(param0: any): void;
						public update(param0: com.zopim.android.sdk.model.items.RowItem<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class UnknownTypeHolder implements com.zopim.android.sdk.chatlog.ViewBinder<any> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.UnknownTypeHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.RowItem<any>): void;
						public constructor(param0: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ViewBinder<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ViewBinder<any>>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.chatlog.ViewBinder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							bind(param0: T): void;
						});
						public constructor();
						public bind(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class VisitorAttachmentHolder extends com.zopim.android.sdk.chatlog.VisitorHolder<com.zopim.android.sdk.model.items.VisitorAttachment> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.VisitorAttachmentHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.VisitorAttachment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class VisitorAttachmentItem extends com.zopim.android.sdk.model.items.VisitorAttachment implements com.zopim.android.sdk.chatlog.LeadItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.VisitorAttachmentItem>;
						public setLeadItem(param0: boolean): void;
						public update(param0: any): void;
						public isLeadItem(): boolean;
						public update(param0: com.zopim.android.sdk.model.items.VisitorAttachment): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export abstract class VisitorHolder<T>  extends globalAndroid.support.v7.widget.RecyclerView.ViewHolder implements com.zopim.android.sdk.chatlog.ViewBinder<any>  {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.VisitorHolder<any>>;
						public bind(param0: any): void;
						public setClickListener(param0: com.zopim.android.sdk.chatlog.VisitorHolder.OnClickListener): void;
						public constructor(param0: globalAndroid.view.View);
					}
					export module VisitorHolder {
						export class OnClickListener {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.VisitorHolder.OnClickListener>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.chatlog.VisitorHolder$OnClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onClick(param0: number): void;
							});
							public constructor();
							public onClick(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class VisitorMessageHolder extends com.zopim.android.sdk.chatlog.VisitorHolder<com.zopim.android.sdk.model.items.VisitorMessage> {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.VisitorMessageHolder>;
						public bind(param0: any): void;
						public bind(param0: com.zopim.android.sdk.model.items.VisitorMessage): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class VisitorMessageItem extends com.zopim.android.sdk.model.items.VisitorMessage implements com.zopim.android.sdk.chatlog.LeadItem {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.VisitorMessageItem>;
						public setLeadItem(param0: boolean): void;
						public update(param0: com.zopim.android.sdk.model.items.VisitorMessage): void;
						public update(param0: any): void;
						public isLeadItem(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ZopimChatLogFragment implements com.zopim.android.sdk.chatlog.ConnectionFragment.ConnectionListener, com.zopim.android.sdk.chatlog.ConnectionToastFragment.ToastListener {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ZopimChatLogFragment>;
						public onDisconnected(): void;
						public constructor();
						public onHideToast(): void;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onViewStateRestored(param0: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public onConnected(): void;
						public onStop(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						public onPause(): void;
						public onShowToast(): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu, param1: globalAndroid.view.MenuInflater): void;
						public onStart(): void;
					}
					export module ZopimChatLogFragment {
						export class AgentTypingObserver extends com.zopim.android.sdk.data.observers.AgentsTypingObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ZopimChatLogFragment.AgentTypingObserver>;
							public updateTyping(param0: java.util.Map<string,com.zopim.android.sdk.model.items.AgentTyping>): void;
						}
						export class ChatObserver extends com.zopim.android.sdk.data.observers.ChatItemsObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ZopimChatLogFragment.ChatObserver>;
							public updateChatItems(param0: java.util.TreeMap<string,com.zopim.android.sdk.model.items.RowItem<any>>): void;
						}
						export class ChatTimeoutReceiver {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ZopimChatLogFragment.ChatTimeoutReceiver>;
							public constructor(param0: com.zopim.android.sdk.chatlog.ZopimChatLogFragment);
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ZopimCommentActivity {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ZopimCommentActivity>;
						public static EXTRA_COMMENT: string;
						public constructor();
						public onDestroy(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onStop(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export class ZopimCommentFragment implements com.zopim.android.sdk.chatlog.ConnectionFragment.ConnectionListener {
						public static class: java.lang.Class<com.zopim.android.sdk.chatlog.ZopimCommentFragment>;
						public onDisconnected(): void;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public static newInstance(param0: string): com.zopim.android.sdk.chatlog.ZopimCommentFragment;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onViewStateRestored(param0: globalAndroid.os.Bundle): void;
						public onResume(): void;
						public onConnected(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						public onPause(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu, param1: globalAndroid.view.MenuInflater): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export module view {
						export class PushViewBehavior extends globalAndroid.support.design.widget.CoordinatorLayout.Behavior<globalAndroid.view.View> {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.view.PushViewBehavior>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public layoutDependsOn(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
							public onDependentViewChanged(param0: globalAndroid.support.design.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export module view {
						export class SnackbarAdapter {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.view.SnackbarAdapter>;
							public constructor();
							public static make(param0: globalAndroid.view.View, param1: number, param2: number): globalAndroid.support.design.widget.Snackbar;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module chatlog {
					export module view {
						export class TypingIndicatorView {
							public static class: java.lang.Class<com.zopim.android.sdk.chatlog.view.TypingIndicatorView>;
							public stop(): void;
							public start(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class ChatGson {
						public static class: java.lang.Class<com.zopim.android.sdk.data.ChatGson>;
					}
					export module ChatGson {
						export class ModelInstanceCreator<T>  extends com.google.gson.InstanceCreator<any> {
							public static class: java.lang.Class<com.zopim.android.sdk.data.ChatGson.ModelInstanceCreator<any>>;
							public createInstance(param0: java.lang.reflect.Type): any;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class ConnectionPath extends com.zopim.android.sdk.data.Path<com.zopim.android.sdk.model.Connection> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.ConnectionPath>;
						public static getInstance(): com.zopim.android.sdk.data.ConnectionPath;
						public getData(): any;
						public trigger(): void;
						public getData(): com.zopim.android.sdk.model.Connection;
					}
					export module ConnectionPath {
						export class ConnectivityReceiver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.ConnectionPath.ConnectivityReceiver>;
							public constructor();
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class DataSource {
						public static class: java.lang.Class<com.zopim.android.sdk.data.DataSource>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.data.DataSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							deleteObservers(): void;
							clear(): void;
							getConnection(): com.zopim.android.sdk.model.Connection;
							getProfile(): com.zopim.android.sdk.model.Profile;
							getAgents(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.Agent>;
							getDepartments(): java.util.Map<string,com.zopim.android.sdk.model.Department>;
							getAccount(): com.zopim.android.sdk.model.Account;
							getChatLog(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>;
							getForms(): com.zopim.android.sdk.model.Forms;
							getFileSending(): com.zopim.android.sdk.model.FileSending;
							addConnectionObserver(param0: com.zopim.android.sdk.data.observers.ConnectionObserver): com.zopim.android.sdk.api.ObservableTrigger;
							addProfileObserver(param0: com.zopim.android.sdk.data.observers.ProfileObserver): com.zopim.android.sdk.api.ObservableTrigger;
							addAgentsObserver(param0: com.zopim.android.sdk.data.observers.AgentsObserver): com.zopim.android.sdk.api.ObservableTrigger;
							addDepartmentsObserver(param0: com.zopim.android.sdk.data.observers.DepartmentsObserver): com.zopim.android.sdk.api.ObservableTrigger;
							addAccountObserver(param0: com.zopim.android.sdk.data.observers.AccountObserver): com.zopim.android.sdk.api.ObservableTrigger;
							addFormsObserver(param0: com.zopim.android.sdk.data.observers.FormsObserver): com.zopim.android.sdk.api.ObservableTrigger;
							addFileSendingObserver(param0: com.zopim.android.sdk.data.observers.FileSendingObserver): com.zopim.android.sdk.api.ObservableTrigger;
							addChatLogObserver(param0: com.zopim.android.sdk.data.observers.ChatLogObserver): com.zopim.android.sdk.api.ObservableTrigger;
							deleteConnectionObserver(param0: com.zopim.android.sdk.data.observers.ConnectionObserver): void;
							deleteProfileObserver(param0: com.zopim.android.sdk.data.observers.ProfileObserver): void;
							deleteAgentsObserver(param0: com.zopim.android.sdk.data.observers.AgentsObserver): void;
							deleteAccountObserver(param0: com.zopim.android.sdk.data.observers.AccountObserver): void;
							deleteDepartmentsObserver(param0: com.zopim.android.sdk.data.observers.DepartmentsObserver): void;
							deleteChatLogObserver(param0: com.zopim.android.sdk.data.observers.ChatLogObserver): void;
							deleteFormsObserver(param0: com.zopim.android.sdk.data.observers.FormsObserver): void;
							deleteFileSendingObserver(param0: com.zopim.android.sdk.data.observers.FileSendingObserver): void;
						});
						public constructor();
						public deleteChatLogObserver(param0: com.zopim.android.sdk.data.observers.ChatLogObserver): void;
						public getDepartments(): java.util.Map<string,com.zopim.android.sdk.model.Department>;
						public deleteAccountObserver(param0: com.zopim.android.sdk.data.observers.AccountObserver): void;
						public getAccount(): com.zopim.android.sdk.model.Account;
						public addFileSendingObserver(param0: com.zopim.android.sdk.data.observers.FileSendingObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public deleteObservers(): void;
						public deleteConnectionObserver(param0: com.zopim.android.sdk.data.observers.ConnectionObserver): void;
						public addFormsObserver(param0: com.zopim.android.sdk.data.observers.FormsObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getChatLog(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>;
						public addAccountObserver(param0: com.zopim.android.sdk.data.observers.AccountObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public addConnectionObserver(param0: com.zopim.android.sdk.data.observers.ConnectionObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getConnection(): com.zopim.android.sdk.model.Connection;
						public getAgents(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.Agent>;
						public deleteFileSendingObserver(param0: com.zopim.android.sdk.data.observers.FileSendingObserver): void;
						public addAgentsObserver(param0: com.zopim.android.sdk.data.observers.AgentsObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getForms(): com.zopim.android.sdk.model.Forms;
						public deleteFormsObserver(param0: com.zopim.android.sdk.data.observers.FormsObserver): void;
						public deleteProfileObserver(param0: com.zopim.android.sdk.data.observers.ProfileObserver): void;
						public addProfileObserver(param0: com.zopim.android.sdk.data.observers.ProfileObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public deleteDepartmentsObserver(param0: com.zopim.android.sdk.data.observers.DepartmentsObserver): void;
						public addDepartmentsObserver(param0: com.zopim.android.sdk.data.observers.DepartmentsObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public deleteAgentsObserver(param0: com.zopim.android.sdk.data.observers.AgentsObserver): void;
						public addChatLogObserver(param0: com.zopim.android.sdk.data.observers.ChatLogObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getFileSending(): com.zopim.android.sdk.model.FileSending;
						public clear(): void;
						public getProfile(): com.zopim.android.sdk.model.Profile;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class LivechatAccountPath extends com.zopim.android.sdk.data.Path<com.zopim.android.sdk.model.Account> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatAccountPath>;
						public static getInstance(): com.zopim.android.sdk.data.LivechatAccountPath;
						public getData(): any;
						public trigger(): void;
						public getData(): com.zopim.android.sdk.model.Account;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class LivechatAgentsPath extends com.zopim.android.sdk.data.Path<java.util.LinkedHashMap<string,com.zopim.android.sdk.model.Agent>> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatAgentsPath>;
						public getData(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.Agent>;
						public getData(): any;
						public trigger(): void;
						public static getInstance(): com.zopim.android.sdk.data.LivechatAgentsPath;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class LivechatChatLogPath extends com.zopim.android.sdk.data.Path<java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatChatLogPath>;
						public getData(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>;
						public getData(): any;
						public trigger(): void;
						public static getInstance(): com.zopim.android.sdk.data.LivechatChatLogPath;
						public countMessages(param0: native.Array<com.zopim.android.sdk.model.ChatLog.Type>): number;
					}
					export module LivechatChatLogPath {
						export class ChatTimeoutReceiver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatChatLogPath.ChatTimeoutReceiver>;
							public constructor();
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
						export class SendTimeout {
							public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatChatLogPath.SendTimeout>;
							public run(): void;
						}
						export class TimeoutManager {
							public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatChatLogPath.TimeoutManager>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class LivechatDepartmentsPath extends com.zopim.android.sdk.data.Path<java.util.LinkedHashMap<string,com.zopim.android.sdk.model.Department>> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatDepartmentsPath>;
						public getData(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.Department>;
						public static getInstance(): com.zopim.android.sdk.data.LivechatDepartmentsPath;
						public getData(): any;
						public trigger(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class LivechatFileSendingPath extends com.zopim.android.sdk.data.Path<com.zopim.android.sdk.model.FileSending> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatFileSendingPath>;
						public static getInstance(): com.zopim.android.sdk.data.LivechatFileSendingPath;
						public getData(): any;
						public trigger(): void;
						public getData(): com.zopim.android.sdk.model.FileSending;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class LivechatFormsPath extends com.zopim.android.sdk.data.Path<com.zopim.android.sdk.model.Forms> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatFormsPath>;
						public getData(): com.zopim.android.sdk.model.Forms;
						public static getInstance(): com.zopim.android.sdk.data.LivechatFormsPath;
						public getData(): any;
						public trigger(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class LivechatProfilePath extends com.zopim.android.sdk.data.Path<com.zopim.android.sdk.model.Profile> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.LivechatProfilePath>;
						public getData(): com.zopim.android.sdk.model.Profile;
						public getData(): any;
						public trigger(): void;
						public static getInstance(): com.zopim.android.sdk.data.LivechatProfilePath;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export abstract class Path<T>  extends java.util.Observable implements com.zopim.android.sdk.api.ObservableTrigger  {
						public static class: java.lang.Class<com.zopim.android.sdk.data.Path<any>>;
						public static DEBUG: boolean;
						public data: any;
						public constructor();
						/** @deprecated */
						public notifyObservers(param0: any): void;
						public broadcast(param0: any): void;
						public isClearRequired(param0: string): boolean;
						public broadcast(): void;
						public getData(): any;
						public trigger(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class PathDataSource extends com.zopim.android.sdk.data.DataSource {
						public static class: java.lang.Class<com.zopim.android.sdk.data.PathDataSource>;
						public deleteChatLogObserver(param0: com.zopim.android.sdk.data.observers.ChatLogObserver): void;
						public getDepartments(): java.util.Map<string,com.zopim.android.sdk.model.Department>;
						public deleteAccountObserver(param0: com.zopim.android.sdk.data.observers.AccountObserver): void;
						public getAccount(): com.zopim.android.sdk.model.Account;
						public addFileSendingObserver(param0: com.zopim.android.sdk.data.observers.FileSendingObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public deleteObservers(): void;
						public deleteConnectionObserver(param0: com.zopim.android.sdk.data.observers.ConnectionObserver): void;
						public addFormsObserver(param0: com.zopim.android.sdk.data.observers.FormsObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getChatLog(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>;
						public addAccountObserver(param0: com.zopim.android.sdk.data.observers.AccountObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public addConnectionObserver(param0: com.zopim.android.sdk.data.observers.ConnectionObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getConnection(): com.zopim.android.sdk.model.Connection;
						public getAgents(): java.util.LinkedHashMap<string,com.zopim.android.sdk.model.Agent>;
						public deleteFileSendingObserver(param0: com.zopim.android.sdk.data.observers.FileSendingObserver): void;
						public addAgentsObserver(param0: com.zopim.android.sdk.data.observers.AgentsObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getForms(): com.zopim.android.sdk.model.Forms;
						public deleteFormsObserver(param0: com.zopim.android.sdk.data.observers.FormsObserver): void;
						public deleteProfileObserver(param0: com.zopim.android.sdk.data.observers.ProfileObserver): void;
						public addProfileObserver(param0: com.zopim.android.sdk.data.observers.ProfileObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public deleteDepartmentsObserver(param0: com.zopim.android.sdk.data.observers.DepartmentsObserver): void;
						public constructor();
						public addDepartmentsObserver(param0: com.zopim.android.sdk.data.observers.DepartmentsObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public deleteAgentsObserver(param0: com.zopim.android.sdk.data.observers.AgentsObserver): void;
						public addChatLogObserver(param0: com.zopim.android.sdk.data.observers.ChatLogObserver): com.zopim.android.sdk.api.ObservableTrigger;
						public getFileSending(): com.zopim.android.sdk.model.FileSending;
						public clear(): void;
						public getProfile(): com.zopim.android.sdk.model.Profile;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class PathName {
						public static class: java.lang.Class<com.zopim.android.sdk.data.PathName>;
						public static LIVECHAT_CHANNEL_LOG: com.zopim.android.sdk.data.PathName;
						public static LIVECHAT_PROFILE: com.zopim.android.sdk.data.PathName;
						public static LIVECHAT_AGENTS: com.zopim.android.sdk.data.PathName;
						public static LIVECHAT_UI: com.zopim.android.sdk.data.PathName;
						public static LIVECHAT_DEPARTMENTS: com.zopim.android.sdk.data.PathName;
						public static LIVECHAT_ACCOUNT: com.zopim.android.sdk.data.PathName;
						public static LIVECHAT_SETTINGS_FORMS: com.zopim.android.sdk.data.PathName;
						public static LIVECHAT_SETTINGS_FILE_SENDING: com.zopim.android.sdk.data.PathName;
						public static CONNECTION: com.zopim.android.sdk.data.PathName;
						public static UNKNOWN: com.zopim.android.sdk.data.PathName;
						public static values(): native.Array<com.zopim.android.sdk.data.PathName>;
						public static valueOf(param0: string): com.zopim.android.sdk.data.PathName;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class PathUpdater {
						public static class: java.lang.Class<com.zopim.android.sdk.data.PathUpdater>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class PathUpdaterTask extends globalAndroid.os.AsyncTask<string,java.lang.Void,com.zopim.android.sdk.data.PathName> {
						public static class: java.lang.Class<com.zopim.android.sdk.data.PathUpdaterTask>;
						public doInBackground(param0: native.Array<string>): com.zopim.android.sdk.data.PathName;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class SerialExecutor {
						public static class: java.lang.Class<com.zopim.android.sdk.data.SerialExecutor>;
						public execute(param0: java.lang.Runnable): void;
						public scheduleNext(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export class WebWidgetListener {
						public static class: java.lang.Class<com.zopim.android.sdk.data.WebWidgetListener>;
						public constructor();
						public msg(param0: string): void;
						public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class AccountObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.AccountObserver>;
							public constructor();
							public update(param0: com.zopim.android.sdk.model.Account): void;
							public update(param0: java.util.Observable, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class AgentsObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.AgentsObserver>;
							public constructor();
							public update(param0: java.util.Observable, param1: any): void;
							public update(param0: java.util.Map<string,com.zopim.android.sdk.model.Agent>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class AgentsTypingObserver extends com.zopim.android.sdk.data.observers.AgentsObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.AgentsTypingObserver>;
							public constructor();
							public update(param0: java.util.Observable, param1: any): void;
							public update(param0: java.util.Map<string,com.zopim.android.sdk.model.Agent>): void;
							public updateTyping(param0: java.util.Map<string,com.zopim.android.sdk.model.items.AgentTyping>): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class ChatItemsObserver extends com.zopim.android.sdk.data.observers.ChatLogObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.ChatItemsObserver>;
							public constructor();
							public update(param0: java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>): void;
							public updateChatItems(param0: java.util.TreeMap<string,com.zopim.android.sdk.model.items.RowItem<any>>): void;
							public update(param0: java.util.Observable, param1: any): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class ChatLogObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.ChatLogObserver>;
							public constructor();
							public update(param0: java.util.LinkedHashMap<string,com.zopim.android.sdk.model.ChatLog>): void;
							public update(param0: java.util.Observable, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class ConnectionObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.ConnectionObserver>;
							public constructor();
							public update(param0: java.util.Observable, param1: any): void;
							public update(param0: com.zopim.android.sdk.model.Connection): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class DepartmentsObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.DepartmentsObserver>;
							public constructor();
							public update(param0: java.util.Observable, param1: any): void;
							public update(param0: java.util.Map<string,com.zopim.android.sdk.model.Department>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class FileSendingObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.FileSendingObserver>;
							public constructor();
							public update(param0: java.util.Observable, param1: any): void;
							public update(param0: com.zopim.android.sdk.model.FileSending): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class FormsObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.FormsObserver>;
							public constructor();
							public update(param0: java.util.Observable, param1: any): void;
							public update(param0: com.zopim.android.sdk.model.Forms): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export abstract class ProfileObserver {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.ProfileObserver>;
							public constructor();
							public update(param0: java.util.Observable, param1: any): void;
							public update(param0: com.zopim.android.sdk.model.Profile): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module data {
					export module observers {
						export class ViewModelFactory {
							public static class: java.lang.Class<com.zopim.android.sdk.data.observers.ViewModelFactory>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module embeddable {
					export class ChatActions {
						public static class: java.lang.Class<com.zopim.android.sdk.embeddable.ChatActions>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.embeddable.ChatActions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static ACTION_RESUME_CHAT: string;
						public static ACTION_STOP_WIDGET_SERVICE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module embeddable {
					export class Contract {
						public static class: java.lang.Class<com.zopim.android.sdk.embeddable.Contract>;
						public static ACTION_CREATE_REQUEST: string;
						public static EXTRA_NAME: string;
						public static EXTRA_EMAIL: string;
						public static EXTRA_MESSAGE: string;
						public constructor();
						public static getChatSdkVersionName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class Account {
						public static class: java.lang.Class<com.zopim.android.sdk.model.Account>;
						public constructor();
						public getStatus(): com.zopim.android.sdk.model.Account.Status;
					}
					export module Account {
						export class Status {
							public static class: java.lang.Class<com.zopim.android.sdk.model.Account.Status>;
							public static ONLINE: com.zopim.android.sdk.model.Account.Status;
							public static OFFLINE: com.zopim.android.sdk.model.Account.Status;
							public static UNKNOWN: com.zopim.android.sdk.model.Account.Status;
							public static getStatus(param0: string): com.zopim.android.sdk.model.Account.Status;
							public static values(): native.Array<com.zopim.android.sdk.model.Account.Status>;
							public getValue(): string;
							public static valueOf(param0: string): com.zopim.android.sdk.model.Account.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class Agent {
						public static class: java.lang.Class<com.zopim.android.sdk.model.Agent>;
						public constructor();
						public getDisplayName(): string;
						public isTyping(): java.lang.Boolean;
						public getAvatarUri(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class Attachment {
						public static class: java.lang.Class<com.zopim.android.sdk.model.Attachment>;
						public constructor();
						public getSize(): java.lang.Long;
						public getType(): string;
						public getMimeType(): string;
						public getThumbnail(): java.net.URL;
						public getName(): string;
						public getUrl(): java.net.URL;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class ChatLog extends java.lang.Comparable<com.zopim.android.sdk.model.ChatLog> {
						public static class: java.lang.Class<com.zopim.android.sdk.model.ChatLog>;
						public getVisitorQueue(): java.lang.Integer;
						public getMessage(): string;
						public getFileName(): string;
						public isUnverified(): java.lang.Boolean;
						public setFile(param0: java.io.File): void;
						public getTimestamp(): java.lang.Long;
						public getNick(): string;
						public getOptions(): native.Array<com.zopim.android.sdk.model.ChatLog.Option>;
						public setProgress(param0: number): void;
						public getDisplayName(): string;
						public compareTo(param0: com.zopim.android.sdk.model.ChatLog): number;
						public setError(param0: com.zopim.android.sdk.model.ChatLog.Error): void;
						public getUploadUrl(): java.net.URL;
						public getProgress(): number;
						public setRawRating(param0: string): void;
						public constructor();
						public setComment(param0: string): void;
						public getRating(): com.zopim.android.sdk.model.ChatLog.Rating;
						public getType(): com.zopim.android.sdk.model.ChatLog.Type;
						public getComment(): string;
						public toString(): string;
						public setRawNewRating(param0: string): void;
						public constructor(param0: string, param1: com.zopim.android.sdk.model.ChatLog.Type, param2: string);
						public getError(): com.zopim.android.sdk.model.ChatLog.Error;
						public isFailed(): java.lang.Boolean;
						public setFailed(param0: boolean): void;
						public getFile(): java.io.File;
						public getAttachment(): com.zopim.android.sdk.model.Attachment;
					}
					export module ChatLog {
						export class Error {
							public static class: java.lang.Class<com.zopim.android.sdk.model.ChatLog.Error>;
							public static UPLOAD_SIZE_ERROR: com.zopim.android.sdk.model.ChatLog.Error;
							public static UPLOAD_FILE_EXTENSION_ERROR: com.zopim.android.sdk.model.ChatLog.Error;
							public static UPLOAD_FAILED_ERROR: com.zopim.android.sdk.model.ChatLog.Error;
							public static UNKNOWN: com.zopim.android.sdk.model.ChatLog.Error;
							public static getType(param0: string): com.zopim.android.sdk.model.ChatLog.Error;
							public static values(): native.Array<com.zopim.android.sdk.model.ChatLog.Error>;
							public getValue(): string;
							public static valueOf(param0: string): com.zopim.android.sdk.model.ChatLog.Error;
						}
						export class Nick {
							public static class: java.lang.Class<com.zopim.android.sdk.model.ChatLog.Nick>;
							public static AGENT_SYSTEM: com.zopim.android.sdk.model.ChatLog.Nick;
							public static AGENT_TRIGGER: com.zopim.android.sdk.model.ChatLog.Nick;
							public static AGENT_MSG: com.zopim.android.sdk.model.ChatLog.Nick;
							public static VISITOR_MSG: com.zopim.android.sdk.model.ChatLog.Nick;
							public static UNKNOWN: com.zopim.android.sdk.model.ChatLog.Nick;
							public static values(): native.Array<com.zopim.android.sdk.model.ChatLog.Nick>;
							public getValue(): string;
							public static getType(param0: string): com.zopim.android.sdk.model.ChatLog.Nick;
							public static valueOf(param0: string): com.zopim.android.sdk.model.ChatLog.Nick;
						}
						export class Option {
							public static class: java.lang.Class<com.zopim.android.sdk.model.ChatLog.Option>;
							public select(): void;
							public constructor(param0: string);
							public isSelected(): boolean;
							public getLabel(): string;
						}
						export class Rating {
							public static class: java.lang.Class<com.zopim.android.sdk.model.ChatLog.Rating>;
							public static GOOD: com.zopim.android.sdk.model.ChatLog.Rating;
							public static BAD: com.zopim.android.sdk.model.ChatLog.Rating;
							public static UNRATED: com.zopim.android.sdk.model.ChatLog.Rating;
							public static UNKNOWN: com.zopim.android.sdk.model.ChatLog.Rating;
							public static getRating(param0: string): com.zopim.android.sdk.model.ChatLog.Rating;
							public getValue(): string;
							public static valueOf(param0: string): com.zopim.android.sdk.model.ChatLog.Rating;
							public static values(): native.Array<com.zopim.android.sdk.model.ChatLog.Rating>;
						}
						export class RawType {
							public static class: java.lang.Class<com.zopim.android.sdk.model.ChatLog.RawType>;
							public static CHAT_MSG: com.zopim.android.sdk.model.ChatLog.RawType;
							public static MEMBER_JOIN: com.zopim.android.sdk.model.ChatLog.RawType;
							public static MEMBER_LEAVE: com.zopim.android.sdk.model.ChatLog.RawType;
							public static CHAT_EVENT: com.zopim.android.sdk.model.ChatLog.RawType;
							public static SYSTEM_OFFLINE: com.zopim.android.sdk.model.ChatLog.RawType;
							public static FILE_UPLOAD: com.zopim.android.sdk.model.ChatLog.RawType;
							public static CHAT_RATING_REQUEST: com.zopim.android.sdk.model.ChatLog.RawType;
							public static CHAT_RATING: com.zopim.android.sdk.model.ChatLog.RawType;
							public static CHAT_COMMENT: com.zopim.android.sdk.model.ChatLog.RawType;
							public static UNKNOWN: com.zopim.android.sdk.model.ChatLog.RawType;
							public static getType(param0: string): com.zopim.android.sdk.model.ChatLog.RawType;
							public getValue(): string;
							public static values(): native.Array<com.zopim.android.sdk.model.ChatLog.RawType>;
							public static valueOf(param0: string): com.zopim.android.sdk.model.ChatLog.RawType;
						}
						export class Type {
							public static class: java.lang.Class<com.zopim.android.sdk.model.ChatLog.Type>;
							public static CHAT_MSG_AGENT: com.zopim.android.sdk.model.ChatLog.Type;
							public static CHAT_MSG_VISITOR: com.zopim.android.sdk.model.ChatLog.Type;
							public static CHAT_MSG_TRIGGER: com.zopim.android.sdk.model.ChatLog.Type;
							public static CHAT_MSG_SYSTEM: com.zopim.android.sdk.model.ChatLog.Type;
							public static MEMBER_LEAVE: com.zopim.android.sdk.model.ChatLog.Type;
							public static MEMBER_JOIN: com.zopim.android.sdk.model.ChatLog.Type;
							public static SYSTEM_OFFLINE: com.zopim.android.sdk.model.ChatLog.Type;
							public static ACCOUNT_OFFLINE: com.zopim.android.sdk.model.ChatLog.Type;
							public static VISITOR_ATTACHMENT: com.zopim.android.sdk.model.ChatLog.Type;
							public static CHAT_RATING: com.zopim.android.sdk.model.ChatLog.Type;
							public static UNKNOWN: com.zopim.android.sdk.model.ChatLog.Type;
							public static valueOf(param0: string): com.zopim.android.sdk.model.ChatLog.Type;
							public static values(): native.Array<com.zopim.android.sdk.model.ChatLog.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class Connection {
						public static class: java.lang.Class<com.zopim.android.sdk.model.Connection>;
						public constructor(param0: com.zopim.android.sdk.model.Connection.Status);
						public constructor();
						public getStatus(): com.zopim.android.sdk.model.Connection.Status;
						public toString(): string;
					}
					export module Connection {
						export class Status {
							public static class: java.lang.Class<com.zopim.android.sdk.model.Connection.Status>;
							public static NO_CONNECTION: com.zopim.android.sdk.model.Connection.Status;
							public static CLOSED: com.zopim.android.sdk.model.Connection.Status;
							public static DISCONNECTED: com.zopim.android.sdk.model.Connection.Status;
							public static CONNECTING: com.zopim.android.sdk.model.Connection.Status;
							public static CONNECTED: com.zopim.android.sdk.model.Connection.Status;
							public static UNKNOWN: com.zopim.android.sdk.model.Connection.Status;
							public static valueOf(param0: string): com.zopim.android.sdk.model.Connection.Status;
							public static getStatus(param0: string): com.zopim.android.sdk.model.Connection.Status;
							public static values(): native.Array<com.zopim.android.sdk.model.Connection.Status>;
							public getValue(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class Department {
						public static class: java.lang.Class<com.zopim.android.sdk.model.Department>;
						public constructor();
						public getStatus(): com.zopim.android.sdk.model.Department.Status;
						public getName(): string;
						public toString(): string;
					}
					export module Department {
						export class Status {
							public static class: java.lang.Class<com.zopim.android.sdk.model.Department.Status>;
							public static ONLINE: com.zopim.android.sdk.model.Department.Status;
							public static OFFLINE: com.zopim.android.sdk.model.Department.Status;
							public static AWAY: com.zopim.android.sdk.model.Department.Status;
							public static UNKNOWN: com.zopim.android.sdk.model.Department.Status;
							public static valueOf(param0: string): com.zopim.android.sdk.model.Department.Status;
							public static getStatus(param0: string): com.zopim.android.sdk.model.Department.Status;
							public static values(): native.Array<com.zopim.android.sdk.model.Department.Status>;
							public getValue(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class FileSending {
						public static class: java.lang.Class<com.zopim.android.sdk.model.FileSending>;
						public constructor();
						public isEnabled(): boolean;
						public toString(): string;
						public getExtensions(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class Forms {
						public static class: java.lang.Class<com.zopim.android.sdk.model.Forms>;
						public constructor();
						public getOfflineForm(): com.zopim.android.sdk.model.Forms.OfflineForm;
					}
					export module Forms {
						export class FormSubmitted {
							public static class: java.lang.Class<com.zopim.android.sdk.model.Forms.FormSubmitted>;
							public constructor();
						}
						export class OfflineForm {
							public static class: java.lang.Class<com.zopim.android.sdk.model.Forms.OfflineForm>;
							public constructor();
							public getFormSubmitted(): com.zopim.android.sdk.model.Forms.FormSubmitted;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class Profile {
						public static class: java.lang.Class<com.zopim.android.sdk.model.Profile>;
						public constructor();
						public getDisplayName(): string;
						public getEmail(): string;
						public getPhoneNumber(): string;
						public getDepartmentId(): string;
						public toString(): string;
						public getMachineId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class PushData {
						public static class: java.lang.Class<com.zopim.android.sdk.model.PushData>;
						public getAuthor(): string;
						public getMessage(): string;
						public static getChatNotification(param0: java.util.Map<string,string>): com.zopim.android.sdk.model.PushData;
						public getType(): com.zopim.android.sdk.model.PushData.Type;
					}
					export module PushData {
						export class Type {
							public static class: java.lang.Class<com.zopim.android.sdk.model.PushData.Type>;
							public static MESSAGE: com.zopim.android.sdk.model.PushData.Type;
							public static END: com.zopim.android.sdk.model.PushData.Type;
							public static NOT_CHAT: com.zopim.android.sdk.model.PushData.Type;
							public static valueOf(param0: string): com.zopim.android.sdk.model.PushData.Type;
							public static values(): native.Array<com.zopim.android.sdk.model.PushData.Type>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export class VisitorInfo {
						public static class: java.lang.Class<com.zopim.android.sdk.model.VisitorInfo>;
						public setEmail(param0: string): void;
						public setName(param0: string): void;
						public getEmail(): string;
						public setPhoneNumber(param0: string): void;
						public getPhoneNumber(): string;
						public getNote(): string;
						public setNote(param0: string): void;
						public getName(): string;
					}
					export module VisitorInfo {
						export class Builder {
							public static class: java.lang.Class<com.zopim.android.sdk.model.VisitorInfo.Builder>;
							public constructor();
							public email(param0: string): com.zopim.android.sdk.model.VisitorInfo.Builder;
							public note(param0: string): com.zopim.android.sdk.model.VisitorInfo.Builder;
							public build(): com.zopim.android.sdk.model.VisitorInfo;
							public name(param0: string): com.zopim.android.sdk.model.VisitorInfo.Builder;
							public phoneNumber(param0: string): com.zopim.android.sdk.model.VisitorInfo.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class AgentAttachment extends com.zopim.android.sdk.model.items.AgentItem<com.zopim.android.sdk.model.items.AgentAttachment> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.AgentAttachment>;
							public constructor();
							public setAttachmentFile(param0: java.io.File): void;
							public update(param0: any): void;
							public getAttachmentFile(): java.io.File;
							public hashCode(): number;
							public setAttachmentName(param0: string): void;
							public toString(): string;
							public setAttachmentSize(param0: java.lang.Long): void;
							public getAttachmentSize(): java.lang.Long;
							public setAttachmentUrl(param0: java.net.URL): void;
							public getAttachmentUrl(): java.net.URL;
							public update(param0: com.zopim.android.sdk.model.items.AgentAttachment): void;
							public getAttachmentName(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export abstract class AgentItem<T>  extends com.zopim.android.sdk.model.items.RowItem<any> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.AgentItem<any>>;
							public constructor();
							public update(param0: any): void;
							public hashCode(): number;
							public setAvatarUri(param0: string): void;
							public getAvatarUri(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class AgentMessage extends com.zopim.android.sdk.model.items.AgentItem<com.zopim.android.sdk.model.items.AgentMessage> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.AgentMessage>;
							public constructor();
							public update(param0: any): void;
							public hashCode(): number;
							public toString(): string;
							public setMessage(param0: string): void;
							public equals(param0: any): boolean;
							public getMessage(): string;
							public update(param0: com.zopim.android.sdk.model.items.AgentMessage): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class AgentOptions extends com.zopim.android.sdk.model.items.AgentItem<com.zopim.android.sdk.model.items.AgentOptions> implements com.zopim.android.sdk.model.items.Disableable  {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.AgentOptions>;
							public constructor();
							public update(param0: com.zopim.android.sdk.model.items.AgentOptions): void;
							public update(param0: any): void;
							public hashCode(): number;
							public getOptions(): native.Array<string>;
							public toString(): string;
							public setMessage(param0: string): void;
							public setOptions(param0: native.Array<string>): void;
							public equals(param0: any): boolean;
							public getMessage(): string;
							public setDisabled(param0: boolean): void;
							public isDisabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class AgentTyping extends com.zopim.android.sdk.model.items.AgentItem<com.zopim.android.sdk.model.items.AgentTyping> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.AgentTyping>;
							public constructor();
							public isTyping(): boolean;
							public update(param0: any): void;
							public hashCode(): number;
							public update(param0: com.zopim.android.sdk.model.items.AgentTyping): void;
							public setTyping(param0: boolean): void;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class ChatEvent extends com.zopim.android.sdk.model.items.RowItem<com.zopim.android.sdk.model.items.ChatEvent> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.ChatEvent>;
							public constructor();
							public update(param0: any): void;
							public hashCode(): number;
							public update(param0: com.zopim.android.sdk.model.items.ChatEvent): void;
							public toString(): string;
							public setMessage(param0: string): void;
							public equals(param0: any): boolean;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class ChatMemberEvent extends com.zopim.android.sdk.model.items.RowItem<com.zopim.android.sdk.model.items.ChatMemberEvent> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.ChatMemberEvent>;
							public constructor();
							public update(param0: any): void;
							public hashCode(): number;
							public update(param0: com.zopim.android.sdk.model.items.ChatMemberEvent): void;
							public toString(): string;
							public setMessage(param0: string): void;
							public equals(param0: any): boolean;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class ChatRating extends com.zopim.android.sdk.model.items.RowItem<com.zopim.android.sdk.model.items.ChatRating> implements com.zopim.android.sdk.model.items.Disableable  {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.ChatRating>;
							public constructor();
							public getComment(): string;
							public setComment(param0: string): void;
							public update(param0: any): void;
							public setRating(param0: com.zopim.android.sdk.model.ChatLog.Rating): void;
							public hashCode(): number;
							public getRating(): com.zopim.android.sdk.model.ChatLog.Rating;
							public toString(): string;
							public equals(param0: any): boolean;
							public setDisabled(param0: boolean): void;
							public isDisabled(): boolean;
							public update(param0: com.zopim.android.sdk.model.items.ChatRating): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class Disableable {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.Disableable>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.model.items.Disableable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setDisabled(param0: boolean): void;
							});
							public constructor();
							public setDisabled(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export abstract class RowItem<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.RowItem<any>>;
							public constructor();
							public setParticipantId(param0: string): void;
							public setType(param0: com.zopim.android.sdk.model.items.RowItem.Type): void;
							public getParticipantId(): string;
							public hashCode(): number;
							public getId(): string;
							public getType(): com.zopim.android.sdk.model.items.RowItem.Type;
							public setDisplayName(param0: string): void;
							public setId(param0: string): void;
							public toString(): string;
							public getDisplayName(): string;
							public getTimestamp(): java.lang.Long;
							public update(param0: T): void;
							public compareTo(param0: com.zopim.android.sdk.model.items.RowItem<any>): number;
							public setTimestamp(param0: java.lang.Long): void;
							public equals(param0: any): boolean;
						}
						export module RowItem {
							export class Type {
								public static class: java.lang.Class<com.zopim.android.sdk.model.items.RowItem.Type>;
								public static UNKNOWN: com.zopim.android.sdk.model.items.RowItem.Type;
								public static VISITOR_MESSAGE: com.zopim.android.sdk.model.items.RowItem.Type;
								public static VISITOR_ATTACHMENT: com.zopim.android.sdk.model.items.RowItem.Type;
								public static AGENT_MESSAGE: com.zopim.android.sdk.model.items.RowItem.Type;
								public static AGENT_TYPING: com.zopim.android.sdk.model.items.RowItem.Type;
								public static AGENT_ATTACHMENT: com.zopim.android.sdk.model.items.RowItem.Type;
								public static AGENT_OPTIONS: com.zopim.android.sdk.model.items.RowItem.Type;
								public static CHAT_EVENT: com.zopim.android.sdk.model.items.RowItem.Type;
								public static MEMBER_EVENT: com.zopim.android.sdk.model.items.RowItem.Type;
								public static CHAT_RATING: com.zopim.android.sdk.model.items.RowItem.Type;
								public static valueOf(param0: string): com.zopim.android.sdk.model.items.RowItem.Type;
								public getValue(): number;
								public static values(): native.Array<com.zopim.android.sdk.model.items.RowItem.Type>;
								public static getType(param0: number): com.zopim.android.sdk.model.items.RowItem.Type;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class Updatable<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.Updatable<any>>;
							/**
							 * Constructs a new instance of the com.zopim.android.sdk.model.items.Updatable<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								update(param0: T): void;
							});
							public constructor();
							public update(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class VisitorAttachment extends com.zopim.android.sdk.model.items.VisitorItem<com.zopim.android.sdk.model.items.VisitorAttachment> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.VisitorAttachment>;
							public constructor();
							public update(param0: com.zopim.android.sdk.model.items.VisitorAttachment): void;
							public update(param0: any): void;
							public hashCode(): number;
							public getFile(): java.io.File;
							public getUploadUrl(): java.net.URL;
							public toString(): string;
							public getUploadProgress(): number;
							public setUploadProgress(param0: number): void;
							public setUploadUrl(param0: java.net.URL): void;
							public setError(param0: string): void;
							public setFile(param0: java.io.File): void;
							public getError(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export abstract class VisitorItem<T>  extends com.zopim.android.sdk.model.items.RowItem<any> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.VisitorItem<any>>;
							public constructor();
							public update(param0: any): void;
							public hashCode(): number;
							public toString(): string;
							public isUnverified(): boolean;
							public setFailed(param0: boolean): void;
							public setUnverified(param0: boolean): void;
							public equals(param0: any): boolean;
							public isFailed(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module model {
					export module items {
						export class VisitorMessage extends com.zopim.android.sdk.model.items.VisitorItem<com.zopim.android.sdk.model.items.VisitorMessage> {
							public static class: java.lang.Class<com.zopim.android.sdk.model.items.VisitorMessage>;
							public constructor();
							public update(param0: any): void;
							public hashCode(): number;
							public toString(): string;
							public update(param0: com.zopim.android.sdk.model.items.VisitorMessage): void;
							public setMessage(param0: string): void;
							public equals(param0: any): boolean;
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class ChatListener {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.ChatListener>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.prechat.ChatListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onChatLoaded(param0: com.zopim.android.sdk.api.Chat): void;
							onChatInitialized(): void;
							onChatEnded(): void;
						});
						public constructor();
						public onChatInitialized(): void;
						public onChatEnded(): void;
						public onChatLoaded(param0: com.zopim.android.sdk.api.Chat): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class DepartmentUtil {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.DepartmentUtil>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class EmailTranscript {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.EmailTranscript>;
						public static DISABLED: com.zopim.android.sdk.prechat.EmailTranscript;
						public static PROMPT: com.zopim.android.sdk.prechat.EmailTranscript;
						public static values(): native.Array<com.zopim.android.sdk.prechat.EmailTranscript>;
						public static valueOf(param0: string): com.zopim.android.sdk.prechat.EmailTranscript;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class HintSpinnerAdapter {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.HintSpinnerAdapter>;
						public static EXTRA: number;
						public adapter: globalAndroid.widget.SpinnerAdapter;
						public context: globalAndroid.content.Context;
						public hintLayout: number;
						public itemDropdownLayout: number;
						public layoutInflater: globalAndroid.view.LayoutInflater;
						public isEnabled(param0: number): boolean;
						public areAllItemsEnabled(): boolean;
						public getItemViewType(param0: number): number;
						public getCount(): number;
						public getItem(param0: number): any;
						public hasStableIds(): boolean;
						public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
						public getViewTypeCount(): number;
						public constructor(param0: globalAndroid.widget.SpinnerAdapter, param1: number, param2: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.widget.SpinnerAdapter, param1: number, param2: number, param3: globalAndroid.content.Context);
						public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getItemId(param0: number): number;
						public isEmpty(): boolean;
						public getItemDropdownView(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
						public getHintView(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
						public getDropDownView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class PreChatForm {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.PreChatForm>;
						public getDepartment(): com.zopim.android.sdk.prechat.PreChatForm.Field;
						public getName(): com.zopim.android.sdk.prechat.PreChatForm.Field;
						public getMessage(): com.zopim.android.sdk.prechat.PreChatForm.Field;
						public getEmail(): com.zopim.android.sdk.prechat.PreChatForm.Field;
						public getPhoneNumber(): com.zopim.android.sdk.prechat.PreChatForm.Field;
					}
					export module PreChatForm {
						export class Builder {
							public static class: java.lang.Class<com.zopim.android.sdk.prechat.PreChatForm.Builder>;
							public constructor();
							public department(param0: com.zopim.android.sdk.prechat.PreChatForm.Field): com.zopim.android.sdk.prechat.PreChatForm.Builder;
							public email(param0: com.zopim.android.sdk.prechat.PreChatForm.Field): com.zopim.android.sdk.prechat.PreChatForm.Builder;
							public build(): com.zopim.android.sdk.prechat.PreChatForm;
							public phoneNumber(param0: com.zopim.android.sdk.prechat.PreChatForm.Field): com.zopim.android.sdk.prechat.PreChatForm.Builder;
							public message(param0: com.zopim.android.sdk.prechat.PreChatForm.Field): com.zopim.android.sdk.prechat.PreChatForm.Builder;
							public name(param0: com.zopim.android.sdk.prechat.PreChatForm.Field): com.zopim.android.sdk.prechat.PreChatForm.Builder;
						}
						export class Field {
							public static class: java.lang.Class<com.zopim.android.sdk.prechat.PreChatForm.Field>;
							public static NOT_REQUIRED: com.zopim.android.sdk.prechat.PreChatForm.Field;
							public static OPTIONAL: com.zopim.android.sdk.prechat.PreChatForm.Field;
							public static REQUIRED: com.zopim.android.sdk.prechat.PreChatForm.Field;
							public static OPTIONAL_EDITABLE: com.zopim.android.sdk.prechat.PreChatForm.Field;
							public static REQUIRED_EDITABLE: com.zopim.android.sdk.prechat.PreChatForm.Field;
							public static valueOf(param0: string): com.zopim.android.sdk.prechat.PreChatForm.Field;
							public static values(): native.Array<com.zopim.android.sdk.prechat.PreChatForm.Field>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class ZopimChatActivity implements com.zopim.android.sdk.prechat.ChatListener {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.ZopimChatActivity>;
						public constructor();
						public static startActivity(param0: globalAndroid.content.Context, param1: com.zopim.android.sdk.api.ZopimChat.SessionConfig): void;
						public onDestroy(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onChatInitialized(): void;
						public onChatEnded(): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onStart(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						public onChatLoaded(param0: com.zopim.android.sdk.api.Chat): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class ZopimChatFragment {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.ZopimChatFragment>;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onViewStateRestored(param0: globalAndroid.os.Bundle): void;
						public static newInstance(param0: com.zopim.android.sdk.api.ZopimChat.SessionConfig): com.zopim.android.sdk.prechat.ZopimChatFragment;
						public onStop(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						public onPause(): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onDetach(): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class ZopimOfflineFragment implements com.zopim.android.sdk.chatlog.ConnectionFragment.ConnectionListener {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.ZopimOfflineFragment>;
						public static STATE_MENU_ITEM_ENABLED: string;
						public onDisconnected(): void;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onViewStateRestored(param0: globalAndroid.os.Bundle): void;
						public onConnected(): void;
						public onStop(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						public onPause(): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu, param1: globalAndroid.view.MenuInflater): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module prechat {
					export class ZopimPreChatFragment implements com.zopim.android.sdk.chatlog.ConnectionFragment.ConnectionListener {
						public static class: java.lang.Class<com.zopim.android.sdk.prechat.ZopimPreChatFragment>;
						public onDisconnected(): void;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onViewStateRestored(param0: globalAndroid.os.Bundle): void;
						public onConnected(): void;
						public onStop(): void;
						public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						public onPause(): void;
						public onAttach(param0: globalAndroid.app.Activity): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public static newInstance(param0: com.zopim.android.sdk.prechat.PreChatForm): com.zopim.android.sdk.prechat.ZopimPreChatFragment;
						public onCreateOptionsMenu(param0: globalAndroid.view.Menu, param1: globalAndroid.view.MenuInflater): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class BaseStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.BaseStorage>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.store.BaseStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							delete(): void;
							disable(): void;
						});
						public constructor();
						public delete(): void;
						public disable(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class MachineIdPrefsStorage extends com.zopim.android.sdk.store.PrefsStorage implements com.zopim.android.sdk.store.MachineIdStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.MachineIdPrefsStorage>;
						public delete(): void;
						public setMachineId(param0: string): void;
						public disable(): void;
						public getMachineId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class MachineIdStorage extends com.zopim.android.sdk.store.BaseStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.MachineIdStorage>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.store.MachineIdStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setMachineId(param0: string): void;
							getMachineId(): string;
							delete(): void;
							disable(): void;
						});
						public constructor();
						public delete(): void;
						public setMachineId(param0: string): void;
						public disable(): void;
						public getMachineId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export abstract class PrefsStorage extends com.zopim.android.sdk.store.BaseStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.PrefsStorage>;
						public mStoragePreferences: globalAndroid.content.SharedPreferences;
						public mDisabled: boolean;
						public constructor(param0: globalAndroid.content.Context);
						public delete(): void;
						public disable(): void;
						public constructor(param0: globalAndroid.content.Context, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class Storage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.Storage>;
						public static INSTANCE: com.zopim.android.sdk.store.Storage;
						public clearAll(): void;
						public static visitorInfo(): com.zopim.android.sdk.store.VisitorInfoStorage;
						public static values(): native.Array<com.zopim.android.sdk.store.Storage>;
						public static machineId(): com.zopim.android.sdk.store.MachineIdStorage;
						public static init(param0: globalAndroid.content.Context): void;
						public static valueOf(param0: string): com.zopim.android.sdk.store.Storage;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class UninitializedMachineIdStorage extends com.zopim.android.sdk.store.MachineIdStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.UninitializedMachineIdStorage>;
						public delete(): void;
						public setMachineId(param0: string): void;
						public disable(): void;
						public getMachineId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class UninitializedVisitorInfoStorage extends com.zopim.android.sdk.store.VisitorInfoStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.UninitializedVisitorInfoStorage>;
						public delete(): void;
						public getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
						public disable(): void;
						public setVisitorInfo(param0: com.zopim.android.sdk.model.VisitorInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class VisitorInfoPrefsStorage extends com.zopim.android.sdk.store.PrefsStorage implements com.zopim.android.sdk.store.VisitorInfoStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.VisitorInfoPrefsStorage>;
						public delete(): void;
						public getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
						public disable(): void;
						public setVisitorInfo(param0: com.zopim.android.sdk.model.VisitorInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module store {
					export class VisitorInfoStorage extends com.zopim.android.sdk.store.BaseStorage {
						public static class: java.lang.Class<com.zopim.android.sdk.store.VisitorInfoStorage>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.store.VisitorInfoStorage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setVisitorInfo(param0: com.zopim.android.sdk.model.VisitorInfo): void;
							getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
							delete(): void;
							disable(): void;
						});
						public constructor();
						public delete(): void;
						public getVisitorInfo(): com.zopim.android.sdk.model.VisitorInfo;
						public disable(): void;
						public setVisitorInfo(param0: com.zopim.android.sdk.model.VisitorInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module util {
					export class AppInfo {
						public static class: java.lang.Class<com.zopim.android.sdk.util.AppInfo>;
						public constructor();
						public static getApplicationStage(param0: globalAndroid.content.Context): string;
						public static getApplicationVersionName(param0: globalAndroid.content.Context): string;
						public static getChatSdkName(): string;
						public static getApplicationName(param0: globalAndroid.content.Context): string;
						public static getChatSdkVersionName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module util {
					export class BelvedereProvider {
						public static class: java.lang.Class<com.zopim.android.sdk.util.BelvedereProvider>;
						public static INSTANCE: com.zopim.android.sdk.util.BelvedereProvider;
						public static values(): native.Array<com.zopim.android.sdk.util.BelvedereProvider>;
						public getInstance(param0: globalAndroid.content.Context): com.zendesk.belvedere.Belvedere;
						public static valueOf(param0: string): com.zopim.android.sdk.util.BelvedereProvider;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module util {
					export class CircularQueue<E>  extends java.lang.Object {
						public static class: java.lang.Class<com.zopim.android.sdk.util.CircularQueue<any>>;
						/**
						 * Constructs a new instance of the com.zopim.android.sdk.util.CircularQueue<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							offer(param0: E): void;
							poll(): E;
							addAll(param0: java.util.Collection<any>): void;
							isEmpty(): boolean;
							size(): number;
							clear(): void;
							toArray(param0: native.Array<E>): native.Array<E>;
							contains(param0: E): boolean;
						});
						public constructor();
						public addAll(param0: java.util.Collection<any>): void;
						public isEmpty(): boolean;
						public offer(param0: E): void;
						public clear(): void;
						public poll(): E;
						public size(): number;
						public toArray(param0: native.Array<E>): native.Array<E>;
						public contains(param0: E): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module util {
					export class Color {
						public static class: java.lang.Class<com.zopim.android.sdk.util.Color>;
						public constructor();
						public static getThemeAccentColor(param0: globalAndroid.content.Context): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module util {
					export class Dimensions {
						public static class: java.lang.Class<com.zopim.android.sdk.util.Dimensions>;
						public static convertDpToPixel(param0: globalAndroid.content.Context, param1: number): number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module util {
					export class StageDetectionUtil {
						public static class: java.lang.Class<com.zopim.android.sdk.util.StageDetectionUtil>;
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module widget {
					export class ChatWidgetService {
						public static class: java.lang.Class<com.zopim.android.sdk.widget.ChatWidgetService>;
						public constructor();
						public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
						public onDestroy(): void;
						public onCreate(): void;
						public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						public static stopService(param0: globalAndroid.content.Context): boolean;
						public static disable(): void;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
						public static startService(param0: globalAndroid.content.Context): void;
					}
					export module ChatWidgetService {
						export class WidgetAnimatorTask {
							public static class: java.lang.Class<com.zopim.android.sdk.widget.ChatWidgetService.WidgetAnimatorTask>;
							public getStatusBar(): number;
							public constructor(param0: com.zopim.android.sdk.widget.ChatWidgetService);
							public constructor(param0: com.zopim.android.sdk.widget.ChatWidgetService, param1: number, param2: number);
							public run(): void;
						}
						export class WidgetTouchListener {
							public static class: java.lang.Class<com.zopim.android.sdk.widget.ChatWidgetService.WidgetTouchListener>;
							public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module zopim {
		export module android {
			export module sdk {
				export module widget {
					export module view {
						export class WidgetView {
							public static class: java.lang.Class<com.zopim.android.sdk.widget.view.WidgetView>;
							public getAnchor(): com.zopim.android.sdk.widget.view.WidgetView.Anchor;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
						export module WidgetView {
							export class Anchor {
								public static class: java.lang.Class<com.zopim.android.sdk.widget.view.WidgetView.Anchor>;
								public static TOP_LEFT: com.zopim.android.sdk.widget.view.WidgetView.Anchor;
								public static TOP_RIGHT: com.zopim.android.sdk.widget.view.WidgetView.Anchor;
								public static BOTTOM_LEFT: com.zopim.android.sdk.widget.view.WidgetView.Anchor;
								public static BOTTOM_RIGHT: com.zopim.android.sdk.widget.view.WidgetView.Anchor;
								public static UNKNOWN: com.zopim.android.sdk.widget.view.WidgetView.Anchor;
								public static values(): native.Array<com.zopim.android.sdk.widget.view.WidgetView.Anchor>;
								public getValue(): number;
								public static valueOf(param0: string): com.zopim.android.sdk.widget.view.WidgetView.Anchor;
								public static getType(param0: number): com.zopim.android.sdk.widget.view.WidgetView.Anchor;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.zendesk.belvedere.BelvedereCallback:1
//com.zendesk.collection.CountedSet:1
//com.zendesk.func.ZFunc1:2
//com.zendesk.func.ZFunc2:3
//com.zendesk.service.CancellableCompositeZendeskCallback:1
//com.zendesk.service.RetrofitZendeskCallbackAdapter:2
//com.zendesk.service.RetrofitZendeskCallbackAdapter.DefaultExtractor:1
//com.zendesk.service.RetrofitZendeskCallbackAdapter.RequestExtractor:2
//com.zendesk.service.SafeZendeskCallback:1
//com.zendesk.service.ZendeskCallback:1
//com.zopim.android.sdk.api.ApiConfigBuilder:1
//com.zopim.android.sdk.api.ConfigBuilder:1
//com.zopim.android.sdk.api.RegisteredCallback:1
//com.zopim.android.sdk.api.ZopimChatApi.DefaultConfig:1
//com.zopim.android.sdk.api.ZopimChatApi.SessionConfig:1
//com.zopim.android.sdk.breadcrumbs.ConcurrentBoundedQueue:1
//com.zopim.android.sdk.chatlog.AgentHolder:1
//com.zopim.android.sdk.chatlog.ViewBinder:1
//com.zopim.android.sdk.chatlog.VisitorHolder:1
//com.zopim.android.sdk.data.ChatGson.ModelInstanceCreator:1
//com.zopim.android.sdk.data.Path:1
//com.zopim.android.sdk.model.items.AgentItem:1
//com.zopim.android.sdk.model.items.RowItem:1
//com.zopim.android.sdk.model.items.Updatable:1
//com.zopim.android.sdk.model.items.VisitorItem:1
//com.zopim.android.sdk.util.CircularQueue:1

