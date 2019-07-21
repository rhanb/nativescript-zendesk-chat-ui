declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.AsyncTimeout>;
		public constructor();
		public enter(): void;
		public sink(param0: okio.Sink): okio.Sink;
		public timedOut(): void;
		public newTimeoutException(param0: java.io.IOException): java.io.IOException;
		public source(param0: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Watchdog {
			public static class: java.lang.Class<okio.AsyncTimeout.Watchdog>;
			public run(): void;
		}
	}
}

declare module okio {
	export class Base64 {
		public static class: java.lang.Class<okio.Base64>;
		public static encodeUrl(param0: native.Array<number>): string;
		public static decode(param0: string): native.Array<number>;
		public static encode(param0: native.Array<number>): string;
	}
}

declare module okio {
	export class Buffer implements okio.BufferedSource, okio.BufferedSink {
		public static class: java.lang.Class<okio.Buffer>;
		public readIntLe(): number;
		public writeUtf8(param0: string): okio.Buffer;
		public writeDecimalLong(param0: number): okio.Buffer;
		public readFrom(param0: java.io.InputStream, param1: number): okio.Buffer;
		public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
		public readUtf8(param0: number): string;
		public copyTo(param0: java.io.OutputStream): okio.Buffer;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public indexOf(param0: number): number;
		public readByte(): number;
		public emitCompleteSegments(): okio.BufferedSink;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public writeIntLe(param0: number): okio.BufferedSink;
		public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString): number;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public write(param0: java.nio.ByteBuffer): number;
		public readAll(param0: okio.Sink): number;
		public readByteArray(param0: number): native.Array<number>;
		public sha1(): okio.ByteString;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public select(param0: okio.Options): number;
		public readFrom(param0: java.io.InputStream): okio.Buffer;
		public writeTo(param0: java.io.OutputStream): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public clear(): void;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public writeLongLe(param0: number): okio.Buffer;
		public writeLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.Buffer;
		public writeByte(param0: number): okio.BufferedSink;
		public readUtf8LineStrict(): string;
		public writeUtf8CodePoint(param0: number): okio.Buffer;
		public writeInt(param0: number): okio.BufferedSink;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public sha512(): okio.ByteString;
		public writeShort(param0: number): okio.BufferedSink;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public skip(param0: number): void;
		public getByte(param0: number): number;
		public readInt(): number;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.Buffer;
		public copyTo(param0: java.io.OutputStream, param1: number, param2: number): okio.Buffer;
		public writeTo(param0: java.io.OutputStream, param1: number): okio.Buffer;
		public writeAll(param0: okio.Source): number;
		public readFully(param0: native.Array<number>): void;
		public timeout(): okio.Timeout;
		public equals(param0: any): boolean;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public inputStream(): java.io.InputStream;
		public readUtf8LineStrict(param0: number): string;
		public write(param0: okio.ByteString): okio.Buffer;
		public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public readUtf8CodePoint(): number;
		public writeShortLe(param0: number): okio.Buffer;
		public readAndWriteUnsafe(): okio.Buffer.UnsafeCursor;
		public snapshot(param0: number): okio.ByteString;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public readHexadecimalUnsignedLong(): number;
		public emit(): okio.BufferedSink;
		public writeInt(param0: number): okio.Buffer;
		public constructor();
		public readUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public readUtf8(): string;
		public write(param0: okio.Buffer, param1: number): void;
		public readByteString(param0: number): okio.ByteString;
		public writeShort(param0: number): okio.Buffer;
		public readUnsafe(): okio.Buffer.UnsafeCursor;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public md5(): okio.ByteString;
		public flush(): void;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public readAndWriteUnsafe(param0: okio.Buffer.UnsafeCursor): okio.Buffer.UnsafeCursor;
		public readShort(): number;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.Buffer;
		public readByteString(): okio.ByteString;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeIntLe(param0: number): okio.Buffer;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public size(): number;
		public hashCode(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public snapshot(): okio.ByteString;
		public read(param0: java.nio.ByteBuffer): number;
		public write(param0: native.Array<number>): okio.Buffer;
		public clone(): okio.Buffer;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public sha256(): okio.ByteString;
		public writeByte(param0: number): okio.Buffer;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public readByteArray(): native.Array<number>;
		public writeLong(param0: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: number, param1: number): number;
		public indexOf(param0: okio.ByteString): number;
	}
	export module Buffer {
		export class UnsafeCursor {
			public static class: java.lang.Class<okio.Buffer.UnsafeCursor>;
			public buffer: okio.Buffer;
			public readWrite: boolean;
			public offset: number;
			public data: native.Array<number>;
			public start: number;
			public end: number;
			public next(): number;
			public seek(param0: number): number;
			public resizeBuffer(param0: number): number;
			public constructor();
			public expandBuffer(param0: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class BufferedSink extends okio.Sink {
		public static class: java.lang.Class<okio.BufferedSink>;
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			write(param0: okio.ByteString): okio.BufferedSink;
			write(param0: native.Array<number>): okio.BufferedSink;
			write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
			writeAll(param0: okio.Source): number;
			write(param0: okio.Source, param1: number): okio.BufferedSink;
			writeUtf8(param0: string): okio.BufferedSink;
			writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
			writeUtf8CodePoint(param0: number): okio.BufferedSink;
			writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
			writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
			writeByte(param0: number): okio.BufferedSink;
			writeShort(param0: number): okio.BufferedSink;
			writeShortLe(param0: number): okio.BufferedSink;
			writeInt(param0: number): okio.BufferedSink;
			writeIntLe(param0: number): okio.BufferedSink;
			writeLong(param0: number): okio.BufferedSink;
			writeLongLe(param0: number): okio.BufferedSink;
			writeDecimalLong(param0: number): okio.BufferedSink;
			writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
			flush(): void;
			emit(): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			outputStream(): java.io.OutputStream;
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class BufferedSource extends okio.Source {
		public static class: java.lang.Class<okio.BufferedSource>;
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			exhausted(): boolean;
			require(param0: number): void;
			request(param0: number): boolean;
			readByte(): number;
			readShort(): number;
			readShortLe(): number;
			readInt(): number;
			readIntLe(): number;
			readLong(): number;
			readLongLe(): number;
			readDecimalLong(): number;
			readHexadecimalUnsignedLong(): number;
			skip(param0: number): void;
			readByteString(): okio.ByteString;
			readByteString(param0: number): okio.ByteString;
			select(param0: okio.Options): number;
			readByteArray(): native.Array<number>;
			readByteArray(param0: number): native.Array<number>;
			read(param0: native.Array<number>): number;
			readFully(param0: native.Array<number>): void;
			read(param0: native.Array<number>, param1: number, param2: number): number;
			readFully(param0: okio.Buffer, param1: number): void;
			readAll(param0: okio.Sink): number;
			readUtf8(): string;
			readUtf8(param0: number): string;
			readUtf8Line(): string;
			readUtf8LineStrict(): string;
			readUtf8LineStrict(param0: number): string;
			readUtf8CodePoint(): number;
			readString(param0: java.nio.charset.Charset): string;
			readString(param0: number, param1: java.nio.charset.Charset): string;
			indexOf(param0: number): number;
			indexOf(param0: number, param1: number): number;
			indexOf(param0: number, param1: number, param2: number): number;
			indexOf(param0: okio.ByteString): number;
			indexOf(param0: okio.ByteString, param1: number): number;
			indexOfElement(param0: okio.ByteString): number;
			indexOfElement(param0: okio.ByteString, param1: number): number;
			rangeEquals(param0: number, param1: okio.ByteString): boolean;
			rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
			inputStream(): java.io.InputStream;
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readIntLe(): number;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public select(param0: okio.Options): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ByteString extends java.lang.Object {
		public static class: java.lang.Class<okio.ByteString>;
		public static EMPTY: okio.ByteString;
		public static of(param0: native.Array<number>): okio.ByteString;
		public base64(): string;
		public static encodeString(param0: string, param1: java.nio.charset.Charset): okio.ByteString;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public hmacSha512(param0: okio.ByteString): okio.ByteString;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public static read(param0: java.io.InputStream, param1: number): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public sha512(): okio.ByteString;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public static decodeBase64(param0: string): okio.ByteString;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public static decodeHex(param0: string): okio.ByteString;
		public compareTo(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public startsWith(param0: native.Array<number>): boolean;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public static encodeUtf8(param0: string): okio.ByteString;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public startsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: okio.ByteString): boolean;
		public endsWith(param0: native.Array<number>): boolean;
		public toAsciiLowercase(): okio.ByteString;
		public static of(param0: java.nio.ByteBuffer): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public static of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class DeflaterSink extends okio.Sink {
		public static class: java.lang.Class<okio.DeflaterSink>;
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public constructor(param0: okio.Sink, param1: java.util.zip.Deflater);
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSink extends okio.Sink {
		public static class: java.lang.Class<okio.ForwardingSink>;
		public delegate(): okio.Sink;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export abstract class ForwardingSource extends okio.Source {
		public static class: java.lang.Class<okio.ForwardingSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public delegate(): okio.Source;
		public toString(): string;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public static class: java.lang.Class<okio.ForwardingTimeout>;
		public constructor();
		public throwIfReached(): void;
		public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public constructor(param0: okio.Timeout);
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSink extends okio.Sink {
		public static class: java.lang.Class<okio.GzipSink>;
		public deflater(): java.util.zip.Deflater;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class GzipSource extends okio.Source {
		public static class: java.lang.Class<okio.GzipSource>;
		public close(): void;
		public constructor(param0: okio.Source);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSink extends okio.ForwardingSink {
		public static class: java.lang.Class<okio.HashingSink>;
		public close(): void;
		public static hmacSha256(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public write(param0: okio.Buffer, param1: number): void;
		public static sha512(param0: okio.Sink): okio.HashingSink;
		public static hmacSha1(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public static md5(param0: okio.Sink): okio.HashingSink;
		public static sha1(param0: okio.Sink): okio.HashingSink;
		public static hmacSha512(param0: okio.Sink, param1: okio.ByteString): okio.HashingSink;
		public hash(): okio.ByteString;
		public static sha256(param0: okio.Sink): okio.HashingSink;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class HashingSource extends okio.ForwardingSource {
		public static class: java.lang.Class<okio.HashingSource>;
		public close(): void;
		public static hmacSha256(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public static sha1(param0: okio.Source): okio.HashingSource;
		public static md5(param0: okio.Source): okio.HashingSource;
		public static sha256(param0: okio.Source): okio.HashingSource;
		public static hmacSha1(param0: okio.Source, param1: okio.ByteString): okio.HashingSource;
		public hash(): okio.ByteString;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class InflaterSource extends okio.Source {
		public static class: java.lang.Class<okio.InflaterSource>;
		public close(): void;
		public refill(): boolean;
		public constructor(param0: okio.Source, param1: java.util.zip.Inflater);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Okio {
		public static class: java.lang.Class<okio.Okio>;
		public static buffer(param0: okio.Source): okio.BufferedSource;
		public static source(param0: java.io.InputStream): okio.Source;
		public static appendingSink(param0: java.io.File): okio.Sink;
		public static sink(param0: java.io.OutputStream): okio.Sink;
		public static source(param0: java.io.File): okio.Source;
		public static sink(param0: java.io.File): okio.Sink;
		public static blackhole(): okio.Sink;
		public static source(param0: java.net.Socket): okio.Source;
		public static sink(param0: any, param1: native.Array<any>): okio.Sink;
		public static buffer(param0: okio.Sink): okio.BufferedSink;
		public static sink(param0: java.net.Socket): okio.Sink;
		public static source(param0: any, param1: native.Array<any>): okio.Source;
	}
}

declare module okio {
	export class Options extends java.util.AbstractList<okio.ByteString> implements java.util.RandomAccess  {
		public static class: java.lang.Class<okio.Options>;
		public size(): number;
		public static of(param0: native.Array<okio.ByteString>): okio.Options;
		public get(param0: number): okio.ByteString;
	}
}

declare module okio {
	export class Pipe {
		public static class: java.lang.Class<okio.Pipe>;
		public sink(): okio.Sink;
		public constructor(param0: number);
		public source(): okio.Source;
	}
	export module Pipe {
		export class PipeSink extends okio.Sink {
			public static class: java.lang.Class<okio.Pipe.PipeSink>;
			public write(param0: okio.Buffer, param1: number): void;
			public flush(): void;
			public timeout(): okio.Timeout;
			public close(): void;
		}
		export class PipeSource extends okio.Source {
			public static class: java.lang.Class<okio.Pipe.PipeSource>;
			public timeout(): okio.Timeout;
			public read(param0: okio.Buffer, param1: number): number;
			public close(): void;
		}
	}
}

declare module okio {
	export class RealBufferedSink extends okio.BufferedSink {
		public static class: java.lang.Class<okio.RealBufferedSink>;
		public sink: okio.Sink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: java.nio.charset.Charset): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public write(param0: java.nio.ByteBuffer): number;
		public toString(): string;
		public flush(): void;
		public isOpen(): boolean;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeString(param0: string, param1: java.nio.charset.Charset): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public outputStream(): java.io.OutputStream;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class RealBufferedSource extends okio.BufferedSource {
		public static class: java.lang.Class<okio.RealBufferedSource>;
		public source: okio.Source;
		public close(): void;
		public inputStream(): java.io.InputStream;
		public readByteString(): okio.ByteString;
		public readIntLe(): number;
		public readUtf8LineStrict(): string;
		public readUtf8LineStrict(param0: number): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public indexOf(param0: number, param1: number, param2: number): number;
		public readString(param0: number, param1: java.nio.charset.Charset): string;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public read(param0: okio.Buffer, param1: number): number;
		public readLong(): number;
		public read(param0: java.nio.ByteBuffer): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public rangeEquals(param0: number, param1: okio.ByteString): boolean;
		public isOpen(): boolean;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public select(param0: okio.Options): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readString(param0: java.nio.charset.Charset): string;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment {
		public static class: java.lang.Class<okio.Segment>;
		public push(param0: okio.Segment): okio.Segment;
		public writeTo(param0: okio.Segment, param1: number): void;
		public compact(): void;
		public pop(): okio.Segment;
		public split(param0: number): okio.Segment;
	}
}

declare module okio {
	export class SegmentPool {
		public static class: java.lang.Class<okio.SegmentPool>;
	}
}

declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public static class: java.lang.Class<okio.SegmentedByteString>;
		public base64(): string;
		public substring(param0: number): okio.ByteString;
		public equals(param0: any): boolean;
		public base64Url(): string;
		public hmacSha1(param0: okio.ByteString): okio.ByteString;
		public asByteBuffer(): java.nio.ByteBuffer;
		public size(): number;
		public lastIndexOf(param0: native.Array<number>): number;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public indexOf(param0: native.Array<number>, param1: number): number;
		public lastIndexOf(param0: okio.ByteString, param1: number): number;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public lastIndexOf(param0: okio.ByteString): number;
		public indexOf(param0: native.Array<number>): number;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public string(param0: java.nio.charset.Charset): string;
		public md5(): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public sha1(): okio.ByteString;
		public write(param0: java.io.OutputStream): void;
		public lastIndexOf(param0: native.Array<number>, param1: number): number;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public toByteArray(): native.Array<number>;
		public hmacSha256(param0: okio.ByteString): okio.ByteString;
		public indexOf(param0: okio.ByteString): number;
	}
}

declare module okio {
	export class Sink {
		public static class: java.lang.Class<okio.Sink>;
		/**
		 * Constructs a new instance of the okio.Sink interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Source {
		public static class: java.lang.Class<okio.Source>;
		/**
		 * Constructs a new instance of the okio.Source interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public constructor();
		public close(): void;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Timeout {
		public static class: java.lang.Class<okio.Timeout>;
		public static NONE: okio.Timeout;
		public constructor();
		public throwIfReached(): void;
		public deadline(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public timeout(param0: number, param1: java.util.concurrent.TimeUnit): okio.Timeout;
		public timeoutNanos(): number;
		public waitUntilNotified(param0: any): void;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public clearTimeout(): okio.Timeout;
	}
}

declare module okio {
	export class Utf8 {
		public static class: java.lang.Class<okio.Utf8>;
		public static size(param0: string, param1: number, param2: number): number;
		public static size(param0: string): number;
	}
}

declare module okio {
	export class Util {
		public static class: java.lang.Class<okio.Util>;
		public static UTF_8: java.nio.charset.Charset;
		public static reverseBytesShort(param0: number): number;
		public static reverseBytesLong(param0: number): number;
		public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
		public static reverseBytesInt(param0: number): number;
		public static sneakyRethrow(param0: java.lang.Throwable): void;
		public static arrayRangeEquals(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
	}
}

declare module okhttp3 {
	export class Address {
		public static class: java.lang.Class<okhttp3.Address>;
		public proxy(): java.net.Proxy;
		public equals(param0: any): boolean;
		public constructor(param0: string, param1: number, param2: okhttp3.Dns, param3: javax.net.SocketFactory, param4: javax.net.ssl.SSLSocketFactory, param5: javax.net.ssl.HostnameVerifier, param6: okhttp3.CertificatePinner, param7: okhttp3.Authenticator, param8: java.net.Proxy, param9: java.util.List<okhttp3.Protocol>, param10: java.util.List<okhttp3.ConnectionSpec>, param11: java.net.ProxySelector);
		public proxySelector(): java.net.ProxySelector;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public url(): okhttp3.HttpUrl;
		public certificatePinner(): okhttp3.CertificatePinner;
		public toString(): string;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public socketFactory(): javax.net.SocketFactory;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public hashCode(): number;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
	}
}

declare module okhttp3 {
	export class Authenticator {
		public static class: java.lang.Class<okhttp3.Authenticator>;
		/**
		 * Constructs a new instance of the okhttp3.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
			<clinit>(): void;
		});
		public constructor();
		public static NONE: okhttp3.Authenticator;
		public authenticate(param0: okhttp3.Route, param1: okhttp3.Response): okhttp3.Request;
	}
}

declare module okhttp3 {
	export class Cache {
		public static class: java.lang.Class<okhttp3.Cache>;
		public close(): void;
		public directory(): java.io.File;
		public constructor(param0: java.io.File, param1: number);
		public static key(param0: okhttp3.HttpUrl): string;
		public writeAbortCount(): number;
		public evictAll(): void;
		public delete(): void;
		public isClosed(): boolean;
		public networkCount(): number;
		public requestCount(): number;
		public flush(): void;
		public initialize(): void;
		public size(): number;
		public writeSuccessCount(): number;
		public hitCount(): number;
		public urls(): java.util.Iterator<string>;
		public maxSize(): number;
	}
	export module Cache {
		export class CacheRequestImpl extends okhttp3.internal.cache.CacheRequest {
			public static class: java.lang.Class<okhttp3.Cache.CacheRequestImpl>;
			public body(): okio.Sink;
			public abort(): void;
		}
		export class CacheResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<okhttp3.Cache.CacheResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
		}
		export class Entry {
			public static class: java.lang.Class<okhttp3.Cache.Entry>;
			public matches(param0: okhttp3.Request, param1: okhttp3.Response): boolean;
			public response(param0: okhttp3.internal.cache.DiskLruCache.Snapshot): okhttp3.Response;
			public writeTo(param0: okhttp3.internal.cache.DiskLruCache.Editor): void;
		}
	}
}

declare module okhttp3 {
	export class CacheControl {
		public static class: java.lang.Class<okhttp3.CacheControl>;
		public static FORCE_NETWORK: okhttp3.CacheControl;
		public static FORCE_CACHE: okhttp3.CacheControl;
		public maxStaleSeconds(): number;
		public mustRevalidate(): boolean;
		public static parse(param0: okhttp3.Headers): okhttp3.CacheControl;
		public toString(): string;
		public minFreshSeconds(): number;
		public onlyIfCached(): boolean;
		public noCache(): boolean;
		public noTransform(): boolean;
		public isPrivate(): boolean;
		public immutable(): boolean;
		public sMaxAgeSeconds(): number;
		public noStore(): boolean;
		public maxAgeSeconds(): number;
		public isPublic(): boolean;
	}
	export module CacheControl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CacheControl.Builder>;
			public noCache(): okhttp3.CacheControl.Builder;
			public maxStale(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public immutable(): okhttp3.CacheControl.Builder;
			public onlyIfCached(): okhttp3.CacheControl.Builder;
			public minFresh(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public maxAge(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.CacheControl.Builder;
			public constructor();
			public build(): okhttp3.CacheControl;
			public noStore(): okhttp3.CacheControl.Builder;
			public noTransform(): okhttp3.CacheControl.Builder;
		}
	}
}

declare module okhttp3 {
	export class Call {
		public static class: java.lang.Class<okhttp3.Call>;
		/**
		 * Constructs a new instance of the okhttp3.Call interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			execute(): okhttp3.Response;
			enqueue(param0: okhttp3.Callback): void;
			cancel(): void;
			isExecuted(): boolean;
			isCanceled(): boolean;
			timeout(): okio.Timeout;
			clone(): okhttp3.Call;
		});
		public constructor();
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module Call {
		export class Factory {
			public static class: java.lang.Class<okhttp3.Call.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.Call$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newCall(param0: okhttp3.Request): okhttp3.Call;
			});
			public constructor();
			public newCall(param0: okhttp3.Request): okhttp3.Call;
		}
	}
}

declare module okhttp3 {
	export class Callback {
		public static class: java.lang.Class<okhttp3.Callback>;
		/**
		 * Constructs a new instance of the okhttp3.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
			onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		});
		public constructor();
		public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
	}
}

declare module okhttp3 {
	export class CertificatePinner {
		public static class: java.lang.Class<okhttp3.CertificatePinner>;
		public static DEFAULT: okhttp3.CertificatePinner;
		public equals(param0: any): boolean;
		public static pin(param0: java.security.cert.Certificate): string;
		public hashCode(): number;
		/** @deprecated */
		public check(param0: string, param1: native.Array<java.security.cert.Certificate>): void;
		public check(param0: string, param1: java.util.List<java.security.cert.Certificate>): void;
	}
	export module CertificatePinner {
		export class Builder {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Builder>;
			public build(): okhttp3.CertificatePinner;
			public add(param0: string, param1: native.Array<string>): okhttp3.CertificatePinner.Builder;
			public constructor();
		}
		export class Pin {
			public static class: java.lang.Class<okhttp3.CertificatePinner.Pin>;
			public equals(param0: any): boolean;
			public toString(): string;
			public hashCode(): number;
		}
	}
}

declare module okhttp3 {
	export class Challenge {
		public static class: java.lang.Class<okhttp3.Challenge>;
		public authParams(): java.util.Map<string,string>;
		public charset(): java.nio.charset.Charset;
		public equals(param0: any): boolean;
		public scheme(): string;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string, param1: java.util.Map<string,string>);
		public withCharset(param0: java.nio.charset.Charset): okhttp3.Challenge;
		public constructor(param0: string, param1: string);
		public realm(): string;
	}
}

declare module okhttp3 {
	export class CipherSuite {
		public static class: java.lang.Class<okhttp3.CipherSuite>;
		public static TLS_RSA_WITH_NULL_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_DES_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_WITH_RC4_128_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: okhttp3.CipherSuite;
		public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_NULL_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_SEED_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: okhttp3.CipherSuite;
		public static TLS_FALLBACK_SCSV: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_NULL_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_RC4_128_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA: okhttp3.CipherSuite;
		public static TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_GCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_GCM_SHA384: okhttp3.CipherSuite;
		public static TLS_CHACHA20_POLY1305_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_128_CCM_SHA256: okhttp3.CipherSuite;
		public static TLS_AES_256_CCM_8_SHA256: okhttp3.CipherSuite;
		public javaName(): string;
		public static forJavaName(param0: string): okhttp3.CipherSuite;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class Connection {
		public static class: java.lang.Class<okhttp3.Connection>;
		/**
		 * Constructs a new instance of the okhttp3.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			route(): okhttp3.Route;
			socket(): java.net.Socket;
			handshake(): okhttp3.Handshake;
			protocol(): okhttp3.Protocol;
		});
		public constructor();
		public route(): okhttp3.Route;
		public protocol(): okhttp3.Protocol;
		public handshake(): okhttp3.Handshake;
		public socket(): java.net.Socket;
	}
}

declare module okhttp3 {
	export class ConnectionPool {
		public static class: java.lang.Class<okhttp3.ConnectionPool>;
		public constructor();
		public connectionCount(): number;
		public evictAll(): void;
		public idleConnectionCount(): number;
		public constructor(param0: number, param1: number, param2: java.util.concurrent.TimeUnit);
	}
}

declare module okhttp3 {
	export class ConnectionSpec {
		public static class: java.lang.Class<okhttp3.ConnectionSpec>;
		public static RESTRICTED_TLS: okhttp3.ConnectionSpec;
		public static MODERN_TLS: okhttp3.ConnectionSpec;
		public static COMPATIBLE_TLS: okhttp3.ConnectionSpec;
		public static CLEARTEXT: okhttp3.ConnectionSpec;
		public cipherSuites(): java.util.List<okhttp3.CipherSuite>;
		public equals(param0: any): boolean;
		public tlsVersions(): java.util.List<okhttp3.TlsVersion>;
		public supportsTlsExtensions(): boolean;
		public hashCode(): number;
		public isCompatible(param0: javax.net.ssl.SSLSocket): boolean;
		public isTls(): boolean;
		public toString(): string;
	}
	export module ConnectionSpec {
		export class Builder {
			public static class: java.lang.Class<okhttp3.ConnectionSpec.Builder>;
			public tlsVersions(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public cipherSuites(param0: native.Array<string>): okhttp3.ConnectionSpec.Builder;
			public build(): okhttp3.ConnectionSpec;
			public constructor(param0: okhttp3.ConnectionSpec);
			public cipherSuites(param0: native.Array<okhttp3.CipherSuite>): okhttp3.ConnectionSpec.Builder;
			public supportsTlsExtensions(param0: boolean): okhttp3.ConnectionSpec.Builder;
			public allEnabledCipherSuites(): okhttp3.ConnectionSpec.Builder;
			public tlsVersions(param0: native.Array<okhttp3.TlsVersion>): okhttp3.ConnectionSpec.Builder;
			public allEnabledTlsVersions(): okhttp3.ConnectionSpec.Builder;
		}
	}
}

declare module okhttp3 {
	export class Cookie {
		public static class: java.lang.Class<okhttp3.Cookie>;
		public domain(): string;
		public equals(param0: any): boolean;
		public matches(param0: okhttp3.HttpUrl): boolean;
		public static parseAll(param0: okhttp3.HttpUrl, param1: okhttp3.Headers): java.util.List<okhttp3.Cookie>;
		public toString(): string;
		public persistent(): boolean;
		public httpOnly(): boolean;
		public static parse(param0: okhttp3.HttpUrl, param1: string): okhttp3.Cookie;
		public hostOnly(): boolean;
		public expiresAt(): number;
		public hashCode(): number;
		public name(): string;
		public path(): string;
		public secure(): boolean;
		public value(): string;
	}
	export module Cookie {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Cookie.Builder>;
			public domain(param0: string): okhttp3.Cookie.Builder;
			public hostOnlyDomain(param0: string): okhttp3.Cookie.Builder;
			public value(param0: string): okhttp3.Cookie.Builder;
			public httpOnly(): okhttp3.Cookie.Builder;
			public secure(): okhttp3.Cookie.Builder;
			public expiresAt(param0: number): okhttp3.Cookie.Builder;
			public build(): okhttp3.Cookie;
			public name(param0: string): okhttp3.Cookie.Builder;
			public constructor();
			public path(param0: string): okhttp3.Cookie.Builder;
		}
	}
}

declare module okhttp3 {
	export class CookieJar {
		public static class: java.lang.Class<okhttp3.CookieJar>;
		/**
		 * Constructs a new instance of the okhttp3.CookieJar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
			loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
			<clinit>(): void;
		});
		public constructor();
		public static NO_COOKIES: okhttp3.CookieJar;
		public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
		public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
	}
}

declare module okhttp3 {
	export class Credentials {
		public static class: java.lang.Class<okhttp3.Credentials>;
		public static basic(param0: string, param1: string, param2: java.nio.charset.Charset): string;
		public static basic(param0: string, param1: string): string;
	}
}

declare module okhttp3 {
	export class Dispatcher {
		public static class: java.lang.Class<okhttp3.Dispatcher>;
		public constructor();
		public setMaxRequestsPerHost(param0: number): void;
		public constructor(param0: java.util.concurrent.ExecutorService);
		public queuedCallsCount(): number;
		public runningCallsCount(): number;
		public runningCalls(): java.util.List<okhttp3.Call>;
		public cancelAll(): void;
		public queuedCalls(): java.util.List<okhttp3.Call>;
		public setMaxRequests(param0: number): void;
		public getMaxRequestsPerHost(): number;
		public executorService(): java.util.concurrent.ExecutorService;
		public setIdleCallback(param0: java.lang.Runnable): void;
		public getMaxRequests(): number;
	}
}

declare module okhttp3 {
	export class Dns {
		public static class: java.lang.Class<okhttp3.Dns>;
		/**
		 * Constructs a new instance of the okhttp3.Dns interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			lookup(param0: string): java.util.List<java.net.InetAddress>;
			<clinit>(): void;
		});
		public constructor();
		public static SYSTEM: okhttp3.Dns;
		public lookup(param0: string): java.util.List<java.net.InetAddress>;
	}
}

declare module okhttp3 {
	export abstract class EventListener {
		public static class: java.lang.Class<okhttp3.EventListener>;
		public static NONE: okhttp3.EventListener;
		public constructor();
		public connectFailed(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol, param4: java.io.IOException): void;
		public callStart(param0: okhttp3.Call): void;
		public connectionReleased(param0: okhttp3.Call, param1: okhttp3.Connection): void;
		public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
		public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
		public callEnd(param0: okhttp3.Call): void;
		public secureConnectStart(param0: okhttp3.Call): void;
		public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public secureConnectEnd(param0: okhttp3.Call, param1: okhttp3.Handshake): void;
		public dnsStart(param0: okhttp3.Call, param1: string): void;
		public connectionAcquired(param0: okhttp3.Call, param1: okhttp3.Connection): void;
		public connectEnd(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol): void;
		public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
		public responseBodyStart(param0: okhttp3.Call): void;
		public connectStart(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
		public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
		public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
		public requestHeadersStart(param0: okhttp3.Call): void;
		public requestBodyStart(param0: okhttp3.Call): void;
		public responseHeadersStart(param0: okhttp3.Call): void;
	}
	export module EventListener {
		export class Factory {
			public static class: java.lang.Class<okhttp3.EventListener.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.EventListener$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				create(param0: okhttp3.Call): okhttp3.EventListener;
			});
			public constructor();
			public create(param0: okhttp3.Call): okhttp3.EventListener;
		}
	}
}

declare module okhttp3 {
	export class FormBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.FormBody>;
		public value(param0: number): string;
		public encodedValue(param0: number): string;
		public name(param0: number): string;
		public size(): number;
		public encodedName(param0: number): string;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public contentLength(): number;
	}
	export module FormBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.FormBody.Builder>;
			public constructor(param0: java.nio.charset.Charset);
			public addEncoded(param0: string, param1: string): okhttp3.FormBody.Builder;
			public constructor();
			public add(param0: string, param1: string): okhttp3.FormBody.Builder;
			public build(): okhttp3.FormBody;
		}
	}
}

declare module okhttp3 {
	export class Handshake {
		public static class: java.lang.Class<okhttp3.Handshake>;
		public equals(param0: any): boolean;
		public static get(param0: javax.net.ssl.SSLSession): okhttp3.Handshake;
		public static get(param0: okhttp3.TlsVersion, param1: okhttp3.CipherSuite, param2: java.util.List<java.security.cert.Certificate>, param3: java.util.List<java.security.cert.Certificate>): okhttp3.Handshake;
		public hashCode(): number;
		public localCertificates(): java.util.List<java.security.cert.Certificate>;
		public localPrincipal(): java.security.Principal;
		public tlsVersion(): okhttp3.TlsVersion;
		public peerCertificates(): java.util.List<java.security.cert.Certificate>;
		public peerPrincipal(): java.security.Principal;
		public cipherSuite(): okhttp3.CipherSuite;
	}
}

declare module okhttp3 {
	export class Headers {
		public static class: java.lang.Class<okhttp3.Headers>;
		public value(param0: number): string;
		public equals(param0: any): boolean;
		public newBuilder(): okhttp3.Headers.Builder;
		public toString(): string;
		public get(param0: string): string;
		public values(param0: string): java.util.List<string>;
		public names(): java.util.Set<string>;
		public static of(param0: java.util.Map<string,string>): okhttp3.Headers;
		public name(param0: number): string;
		public size(): number;
		public hashCode(): number;
		public toMultimap(): java.util.Map<string,java.util.List<string>>;
		public getDate(param0: string): java.util.Date;
		public byteCount(): number;
		public static of(param0: native.Array<string>): okhttp3.Headers;
	}
	export module Headers {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Headers.Builder>;
			public get(param0: string): string;
			public build(): okhttp3.Headers;
			public add(param0: string, param1: string): okhttp3.Headers.Builder;
			public removeAll(param0: string): okhttp3.Headers.Builder;
			public set(param0: string, param1: string): okhttp3.Headers.Builder;
			public set(param0: string, param1: java.util.Date): okhttp3.Headers.Builder;
			public constructor();
			public addAll(param0: okhttp3.Headers): okhttp3.Headers.Builder;
			public add(param0: string): okhttp3.Headers.Builder;
			public addUnsafeNonAscii(param0: string, param1: string): okhttp3.Headers.Builder;
			public add(param0: string, param1: java.util.Date): okhttp3.Headers.Builder;
		}
	}
}

declare module okhttp3 {
	export class HttpUrl {
		public static class: java.lang.Class<okhttp3.HttpUrl>;
		public static get(param0: java.net.URI): okhttp3.HttpUrl;
		public equals(param0: any): boolean;
		public topPrivateDomain(): string;
		public queryParameterName(param0: number): string;
		public static defaultPort(param0: string): number;
		public scheme(): string;
		public queryParameterNames(): java.util.Set<string>;
		public encodedPassword(): string;
		public queryParameter(param0: string): string;
		public query(): string;
		public password(): string;
		public hashCode(): number;
		public static get(param0: string): okhttp3.HttpUrl;
		public resolve(param0: string): okhttp3.HttpUrl;
		public pathSize(): number;
		public isHttps(): boolean;
		public encodedPathSegments(): java.util.List<string>;
		public newBuilder(): okhttp3.HttpUrl.Builder;
		public port(): number;
		public encodedQuery(): string;
		public encodedPath(): string;
		public encodedFragment(): string;
		public redact(): string;
		public fragment(): string;
		public toString(): string;
		public uri(): java.net.URI;
		public queryParameterValue(param0: number): string;
		public encodedUsername(): string;
		public queryParameterValues(param0: string): java.util.List<string>;
		public newBuilder(param0: string): okhttp3.HttpUrl.Builder;
		public host(): string;
		public static get(param0: java.net.URL): okhttp3.HttpUrl;
		public pathSegments(): java.util.List<string>;
		public static parse(param0: string): okhttp3.HttpUrl;
		public url(): java.net.URL;
		public querySize(): number;
		public username(): string;
	}
	export module HttpUrl {
		export class Builder {
			public static class: java.lang.Class<okhttp3.HttpUrl.Builder>;
			public addPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegment(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public setQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public encodedFragment(param0: string): okhttp3.HttpUrl.Builder;
			public username(param0: string): okhttp3.HttpUrl.Builder;
			public addPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPath(param0: string): okhttp3.HttpUrl.Builder;
			public encodedPassword(param0: string): okhttp3.HttpUrl.Builder;
			public addEncodedPathSegments(param0: string): okhttp3.HttpUrl.Builder;
			public encodedQuery(param0: string): okhttp3.HttpUrl.Builder;
			public host(param0: string): okhttp3.HttpUrl.Builder;
			public removeAllEncodedQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public setEncodedPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public constructor();
			public encodedUsername(param0: string): okhttp3.HttpUrl.Builder;
			public password(param0: string): okhttp3.HttpUrl.Builder;
			public port(param0: number): okhttp3.HttpUrl.Builder;
			public toString(): string;
			public addQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public addEncodedQueryParameter(param0: string, param1: string): okhttp3.HttpUrl.Builder;
			public query(param0: string): okhttp3.HttpUrl.Builder;
			public setPathSegment(param0: number, param1: string): okhttp3.HttpUrl.Builder;
			public removeAllQueryParameters(param0: string): okhttp3.HttpUrl.Builder;
			public scheme(param0: string): okhttp3.HttpUrl.Builder;
			public removePathSegment(param0: number): okhttp3.HttpUrl.Builder;
			public fragment(param0: string): okhttp3.HttpUrl.Builder;
			public build(): okhttp3.HttpUrl;
		}
	}
}

declare module okhttp3 {
	export class Interceptor {
		public static class: java.lang.Class<okhttp3.Interceptor>;
		/**
		 * Constructs a new instance of the okhttp3.Interceptor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
		});
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module Interceptor {
		export class Chain {
			public static class: java.lang.Class<okhttp3.Interceptor.Chain>;
			/**
			 * Constructs a new instance of the okhttp3.Interceptor$Chain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				request(): okhttp3.Request;
				proceed(param0: okhttp3.Request): okhttp3.Response;
				connection(): okhttp3.Connection;
				call(): okhttp3.Call;
				connectTimeoutMillis(): number;
				withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				readTimeoutMillis(): number;
				withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				writeTimeoutMillis(): number;
				withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			});
			public constructor();
			public request(): okhttp3.Request;
			public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public call(): okhttp3.Call;
			public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public readTimeoutMillis(): number;
			public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
			public proceed(param0: okhttp3.Request): okhttp3.Response;
			public connection(): okhttp3.Connection;
			public connectTimeoutMillis(): number;
			public writeTimeoutMillis(): number;
		}
	}
}

declare module okhttp3 {
	export class MediaType {
		public static class: java.lang.Class<okhttp3.MediaType>;
		public type(): string;
		public charset(): java.nio.charset.Charset;
		public equals(param0: any): boolean;
		public subtype(): string;
		public static get(param0: string): okhttp3.MediaType;
		public charset(param0: java.nio.charset.Charset): java.nio.charset.Charset;
		public hashCode(): number;
		public static parse(param0: string): okhttp3.MediaType;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class MultipartBody extends okhttp3.RequestBody {
		public static class: java.lang.Class<okhttp3.MultipartBody>;
		public static MIXED: okhttp3.MediaType;
		public static ALTERNATIVE: okhttp3.MediaType;
		public static DIGEST: okhttp3.MediaType;
		public static PARALLEL: okhttp3.MediaType;
		public static FORM: okhttp3.MediaType;
		public boundary(): string;
		public size(): number;
		public parts(): java.util.List<okhttp3.MultipartBody.Part>;
		public type(): okhttp3.MediaType;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public part(param0: number): okhttp3.MultipartBody.Part;
		public contentLength(): number;
	}
	export module MultipartBody {
		export class Builder {
			public static class: java.lang.Class<okhttp3.MultipartBody.Builder>;
			public setType(param0: okhttp3.MediaType): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.MultipartBody.Part): okhttp3.MultipartBody.Builder;
			public build(): okhttp3.MultipartBody;
			public addPart(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public addPart(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor();
			public addFormDataPart(param0: string, param1: string): okhttp3.MultipartBody.Builder;
			public addFormDataPart(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Builder;
			public constructor(param0: string);
		}
		export class Part {
			public static class: java.lang.Class<okhttp3.MultipartBody.Part>;
			public headers(): okhttp3.Headers;
			public static create(param0: okhttp3.Headers, param1: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string, param2: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static create(param0: okhttp3.RequestBody): okhttp3.MultipartBody.Part;
			public static createFormData(param0: string, param1: string): okhttp3.MultipartBody.Part;
			public body(): okhttp3.RequestBody;
		}
	}
}

declare module okhttp3 {
	export class OkHttpClient implements okhttp3.Call.Factory, okhttp3.WebSocket.Factory {
		public static class: java.lang.Class<okhttp3.OkHttpClient>;
		public proxy(): java.net.Proxy;
		public sslSocketFactory(): javax.net.ssl.SSLSocketFactory;
		public connectionPool(): okhttp3.ConnectionPool;
		public cache(): okhttp3.Cache;
		public certificatePinner(): okhttp3.CertificatePinner;
		public dispatcher(): okhttp3.Dispatcher;
		public protocols(): java.util.List<okhttp3.Protocol>;
		public dns(): okhttp3.Dns;
		public proxyAuthenticator(): okhttp3.Authenticator;
		public callTimeoutMillis(): number;
		public hostnameVerifier(): javax.net.ssl.HostnameVerifier;
		public connectTimeoutMillis(): number;
		public pingIntervalMillis(): number;
		public cookieJar(): okhttp3.CookieJar;
		public connectionSpecs(): java.util.List<okhttp3.ConnectionSpec>;
		public newBuilder(): okhttp3.OkHttpClient.Builder;
		public constructor();
		public proxySelector(): java.net.ProxySelector;
		public readTimeoutMillis(): number;
		public authenticator(): okhttp3.Authenticator;
		public followRedirects(): boolean;
		public interceptors(): java.util.List<okhttp3.Interceptor>;
		public writeTimeoutMillis(): number;
		public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		public followSslRedirects(): boolean;
		public socketFactory(): javax.net.SocketFactory;
		public retryOnConnectionFailure(): boolean;
		public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
		public eventListenerFactory(): okhttp3.EventListener.Factory;
		public newCall(param0: okhttp3.Request): okhttp3.Call;
	}
	export module OkHttpClient {
		export class Builder {
			public static class: java.lang.Class<okhttp3.OkHttpClient.Builder>;
			public protocols(param0: java.util.List<okhttp3.Protocol>): okhttp3.OkHttpClient.Builder;
			public addInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public connectionPool(param0: okhttp3.ConnectionPool): okhttp3.OkHttpClient.Builder;
			public interceptors(): java.util.List<okhttp3.Interceptor>;
			public readTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public callTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public dns(param0: okhttp3.Dns): okhttp3.OkHttpClient.Builder;
			public writeTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public readTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public pingInterval(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public eventListenerFactory(param0: okhttp3.EventListener.Factory): okhttp3.OkHttpClient.Builder;
			public connectionSpecs(param0: java.util.List<okhttp3.ConnectionSpec>): okhttp3.OkHttpClient.Builder;
			public build(): okhttp3.OkHttpClient;
			public eventListener(param0: okhttp3.EventListener): okhttp3.OkHttpClient.Builder;
			public proxyAuthenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public followRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public networkInterceptors(): java.util.List<okhttp3.Interceptor>;
			public cache(param0: okhttp3.Cache): okhttp3.OkHttpClient.Builder;
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory, param1: javax.net.ssl.X509TrustManager): okhttp3.OkHttpClient.Builder;
			public callTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public cookieJar(param0: okhttp3.CookieJar): okhttp3.OkHttpClient.Builder;
			public connectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public pingInterval(param0: any): okhttp3.OkHttpClient.Builder;
			public followSslRedirects(param0: boolean): okhttp3.OkHttpClient.Builder;
			public constructor();
			public connectTimeout(param0: any): okhttp3.OkHttpClient.Builder;
			public dispatcher(param0: okhttp3.Dispatcher): okhttp3.OkHttpClient.Builder;
			public proxySelector(param0: java.net.ProxySelector): okhttp3.OkHttpClient.Builder;
			public socketFactory(param0: javax.net.SocketFactory): okhttp3.OkHttpClient.Builder;
			public retryOnConnectionFailure(param0: boolean): okhttp3.OkHttpClient.Builder;
			public writeTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.OkHttpClient.Builder;
			public addNetworkInterceptor(param0: okhttp3.Interceptor): okhttp3.OkHttpClient.Builder;
			public hostnameVerifier(param0: javax.net.ssl.HostnameVerifier): okhttp3.OkHttpClient.Builder;
			public authenticator(param0: okhttp3.Authenticator): okhttp3.OkHttpClient.Builder;
			public proxy(param0: java.net.Proxy): okhttp3.OkHttpClient.Builder;
			/** @deprecated */
			public sslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): okhttp3.OkHttpClient.Builder;
			public certificatePinner(param0: okhttp3.CertificatePinner): okhttp3.OkHttpClient.Builder;
		}
	}
}

declare module okhttp3 {
	export class Protocol {
		public static class: java.lang.Class<okhttp3.Protocol>;
		public static HTTP_1_0: okhttp3.Protocol;
		public static HTTP_1_1: okhttp3.Protocol;
		public static SPDY_3: okhttp3.Protocol;
		public static HTTP_2: okhttp3.Protocol;
		public static H2_PRIOR_KNOWLEDGE: okhttp3.Protocol;
		public static QUIC: okhttp3.Protocol;
		public static valueOf(param0: string): okhttp3.Protocol;
		public static get(param0: string): okhttp3.Protocol;
		public static values(): native.Array<okhttp3.Protocol>;
		public toString(): string;
	}
}

declare module okhttp3 {
	export class RealCall extends okhttp3.Call {
		public static class: java.lang.Class<okhttp3.RealCall>;
		public clone(): okhttp3.RealCall;
		public isExecuted(): boolean;
		public clone(): okhttp3.Call;
		public request(): okhttp3.Request;
		public execute(): okhttp3.Response;
		public isCanceled(): boolean;
		public enqueue(param0: okhttp3.Callback): void;
		public cancel(): void;
		public timeout(): okio.Timeout;
	}
	export module RealCall {
		export class AsyncCall extends okhttp3.internal.NamedRunnable {
			public static class: java.lang.Class<okhttp3.RealCall.AsyncCall>;
			public execute(): void;
		}
	}
}

declare module okhttp3 {
	export class Request {
		public static class: java.lang.Class<okhttp3.Request>;
		public header(param0: string): string;
		public headers(): okhttp3.Headers;
		public tag(): any;
		public newBuilder(): okhttp3.Request.Builder;
		public headers(param0: string): java.util.List<string>;
		public url(): okhttp3.HttpUrl;
		public tag(param0: java.lang.Class<any>): any;
		public cacheControl(): okhttp3.CacheControl;
		public method(): string;
		public toString(): string;
		public body(): okhttp3.RequestBody;
		public isHttps(): boolean;
	}
	export module Request {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Request.Builder>;
			public tag(param0: java.lang.Class<any>, param1: any): okhttp3.Request.Builder;
			public url(param0: okhttp3.HttpUrl): okhttp3.Request.Builder;
			public tag(param0: any): okhttp3.Request.Builder;
			public url(param0: java.net.URL): okhttp3.Request.Builder;
			public header(param0: string, param1: string): okhttp3.Request.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Request.Builder;
			public put(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(): okhttp3.Request.Builder;
			public get(): okhttp3.Request.Builder;
			public constructor();
			public addHeader(param0: string, param1: string): okhttp3.Request.Builder;
			public post(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public delete(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public patch(param0: okhttp3.RequestBody): okhttp3.Request.Builder;
			public build(): okhttp3.Request;
			public method(param0: string, param1: okhttp3.RequestBody): okhttp3.Request.Builder;
			public url(param0: string): okhttp3.Request.Builder;
			public removeHeader(param0: string): okhttp3.Request.Builder;
			public cacheControl(param0: okhttp3.CacheControl): okhttp3.Request.Builder;
			public head(): okhttp3.Request.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class RequestBody {
		public static class: java.lang.Class<okhttp3.RequestBody>;
		public constructor();
		public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: java.io.File): okhttp3.RequestBody;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.RequestBody;
		public contentType(): okhttp3.MediaType;
		public writeTo(param0: okio.BufferedSink): void;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.RequestBody;
		public contentLength(): number;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>, param2: number, param3: number): okhttp3.RequestBody;
	}
}

declare module okhttp3 {
	export class Response {
		public static class: java.lang.Class<okhttp3.Response>;
		public headers(): okhttp3.Headers;
		public priorResponse(): okhttp3.Response;
		public close(): void;
		public cacheResponse(): okhttp3.Response;
		public sentRequestAtMillis(): number;
		public cacheControl(): okhttp3.CacheControl;
		public toString(): string;
		public handshake(): okhttp3.Handshake;
		public peekBody(param0: number): okhttp3.ResponseBody;
		public isSuccessful(): boolean;
		public header(param0: string): string;
		public header(param0: string, param1: string): string;
		public body(): okhttp3.ResponseBody;
		public networkResponse(): okhttp3.Response;
		public headers(param0: string): java.util.List<string>;
		public newBuilder(): okhttp3.Response.Builder;
		public request(): okhttp3.Request;
		public code(): number;
		public protocol(): okhttp3.Protocol;
		public message(): string;
		public challenges(): java.util.List<okhttp3.Challenge>;
		public receivedResponseAtMillis(): number;
		public isRedirect(): boolean;
	}
	export module Response {
		export class Builder {
			public static class: java.lang.Class<okhttp3.Response.Builder>;
			public cacheResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public body(param0: okhttp3.ResponseBody): okhttp3.Response.Builder;
			public message(param0: string): okhttp3.Response.Builder;
			public request(param0: okhttp3.Request): okhttp3.Response.Builder;
			public header(param0: string, param1: string): okhttp3.Response.Builder;
			public headers(param0: okhttp3.Headers): okhttp3.Response.Builder;
			public sentRequestAtMillis(param0: number): okhttp3.Response.Builder;
			public priorResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public networkResponse(param0: okhttp3.Response): okhttp3.Response.Builder;
			public constructor();
			public removeHeader(param0: string): okhttp3.Response.Builder;
			public handshake(param0: okhttp3.Handshake): okhttp3.Response.Builder;
			public addHeader(param0: string, param1: string): okhttp3.Response.Builder;
			public code(param0: number): okhttp3.Response.Builder;
			public build(): okhttp3.Response;
			public protocol(param0: okhttp3.Protocol): okhttp3.Response.Builder;
			public receivedResponseAtMillis(param0: number): okhttp3.Response.Builder;
		}
	}
}

declare module okhttp3 {
	export abstract class ResponseBody {
		public static class: java.lang.Class<okhttp3.ResponseBody>;
		public constructor();
		public byteStream(): java.io.InputStream;
		public bytes(): native.Array<number>;
		public static create(param0: okhttp3.MediaType, param1: native.Array<number>): okhttp3.ResponseBody;
		public static create(param0: okhttp3.MediaType, param1: number, param2: okio.BufferedSource): okhttp3.ResponseBody;
		public close(): void;
		public source(): okio.BufferedSource;
		public static create(param0: okhttp3.MediaType, param1: okio.ByteString): okhttp3.ResponseBody;
		public static create(param0: okhttp3.MediaType, param1: string): okhttp3.ResponseBody;
		public charStream(): java.io.Reader;
		public contentType(): okhttp3.MediaType;
		public string(): string;
		public contentLength(): number;
	}
	export module ResponseBody {
		export class BomAwareReader {
			public static class: java.lang.Class<okhttp3.ResponseBody.BomAwareReader>;
			public read(param0: native.Array<string>, param1: number, param2: number): number;
			public close(): void;
		}
	}
}

declare module okhttp3 {
	export class Route {
		public static class: java.lang.Class<okhttp3.Route>;
		public proxy(): java.net.Proxy;
		public constructor(param0: okhttp3.Address, param1: java.net.Proxy, param2: java.net.InetSocketAddress);
		public equals(param0: any): boolean;
		public address(): okhttp3.Address;
		public hashCode(): number;
		public toString(): string;
		public requiresTunnel(): boolean;
		public socketAddress(): java.net.InetSocketAddress;
	}
}

declare module okhttp3 {
	export class TlsVersion {
		public static class: java.lang.Class<okhttp3.TlsVersion>;
		public static TLS_1_3: okhttp3.TlsVersion;
		public static TLS_1_2: okhttp3.TlsVersion;
		public static TLS_1_1: okhttp3.TlsVersion;
		public static TLS_1_0: okhttp3.TlsVersion;
		public static SSL_3_0: okhttp3.TlsVersion;
		public javaName(): string;
		public static values(): native.Array<okhttp3.TlsVersion>;
		public static valueOf(param0: string): okhttp3.TlsVersion;
		public static forJavaName(param0: string): okhttp3.TlsVersion;
	}
}

declare module okhttp3 {
	export class WebSocket {
		public static class: java.lang.Class<okhttp3.WebSocket>;
		/**
		 * Constructs a new instance of the okhttp3.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			request(): okhttp3.Request;
			queueSize(): number;
			send(param0: string): boolean;
			send(param0: okio.ByteString): boolean;
			close(param0: number, param1: string): boolean;
			cancel(): void;
		});
		public constructor();
		public send(param0: string): boolean;
		public send(param0: okio.ByteString): boolean;
		public close(param0: number, param1: string): boolean;
		public request(): okhttp3.Request;
		public queueSize(): number;
		public cancel(): void;
	}
	export module WebSocket {
		export class Factory {
			public static class: java.lang.Class<okhttp3.WebSocket.Factory>;
			/**
			 * Constructs a new instance of the okhttp3.WebSocket$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
			});
			public constructor();
			public newWebSocket(param0: okhttp3.Request, param1: okhttp3.WebSocketListener): okhttp3.WebSocket;
		}
	}
}

declare module okhttp3 {
	export abstract class WebSocketListener {
		public static class: java.lang.Class<okhttp3.WebSocketListener>;
		public constructor();
		public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
		public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
		public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
		public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
		public onMessage(param0: okhttp3.WebSocket, param1: string): void;
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class Internal {
			public static class: java.lang.Class<okhttp3.internal.Internal>;
			public static instance: okhttp3.internal.Internal;
			public code(param0: okhttp3.Response.Builder): number;
			public addLenient(param0: okhttp3.Headers.Builder, param1: string): void;
			public connectionBecameIdle(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): boolean;
			public setCache(param0: okhttp3.OkHttpClient.Builder, param1: okhttp3.internal.cache.InternalCache): void;
			public equalsNonHost(param0: okhttp3.Address, param1: okhttp3.Address): boolean;
			public isInvalidHttpUrlHost(param0: java.lang.IllegalArgumentException): boolean;
			public newWebSocketCall(param0: okhttp3.OkHttpClient, param1: okhttp3.Request): okhttp3.Call;
			public constructor();
			public apply(param0: okhttp3.ConnectionSpec, param1: javax.net.ssl.SSLSocket, param2: boolean): void;
			public put(param0: okhttp3.ConnectionPool, param1: okhttp3.internal.connection.RealConnection): void;
			public routeDatabase(param0: okhttp3.ConnectionPool): okhttp3.internal.connection.RouteDatabase;
			public static initializeInstanceForTests(): void;
			public addLenient(param0: okhttp3.Headers.Builder, param1: string, param2: string): void;
			public deduplicate(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation): java.net.Socket;
			public timeoutExit(param0: okhttp3.Call, param1: java.io.IOException): java.io.IOException;
			public get(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.Route): okhttp3.internal.connection.RealConnection;
			public streamAllocation(param0: okhttp3.Call): okhttp3.internal.connection.StreamAllocation;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export abstract class NamedRunnable {
			public static class: java.lang.Class<okhttp3.internal.NamedRunnable>;
			public name: string;
			public execute(): void;
			public constructor(param0: string, param1: native.Array<any>);
			public run(): void;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Util {
			public static class: java.lang.Class<okhttp3.internal.Util>;
			public static EMPTY_BYTE_ARRAY: native.Array<number>;
			public static EMPTY_STRING_ARRAY: native.Array<string>;
			public static EMPTY_RESPONSE: okhttp3.ResponseBody;
			public static EMPTY_REQUEST: okhttp3.RequestBody;
			public static UTF_8: java.nio.charset.Charset;
			public static ISO_8859_1: java.nio.charset.Charset;
			public static UTC: java.util.TimeZone;
			public static NATURAL_ORDER: java.util.Comparator<string>;
			public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
			public static verifyAsIpAddress(param0: string): boolean;
			public static equal(param0: any, param1: any): boolean;
			public static bomAwareCharset(param0: okio.BufferedSource, param1: java.nio.charset.Charset): java.nio.charset.Charset;
			public static platformTrustManager(): javax.net.ssl.X509TrustManager;
			public static immutableMap(param0: java.util.Map<any, any>): java.util.Map<any, any>;
			public static indexOf(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: string): number;
			public static format(param0: string, param1: native.Array<any>): string;
			public static decodeHexDigit(param0: string): number;
			public static indexOfControlOrNonAscii(param0: string): number;
			public static immutableList(param0: native.Array<any>): java.util.List<any>;
			public static delimiterOffset(param0: string, param1: number, param2: number, param3: string): number;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static hostHeader(param0: okhttp3.HttpUrl, param1: boolean): string;
			public static trimSubstring(param0: string, param1: number, param2: number): string;
			public static closeQuietly(param0: java.net.Socket): void;
			public static assertionError(param0: string, param1: java.lang.Exception): java.lang.AssertionError;
			public static skipTrailingAsciiWhitespace(param0: string, param1: number, param2: number): number;
			public static checkDuration(param0: string, param1: number, param2: java.util.concurrent.TimeUnit): number;
			public static intersect(param0: java.util.Comparator<any>, param1: native.Array<string>, param2: native.Array<string>): native.Array<string>;
			public static canonicalizeHost(param0: string): string;
			public static toHeaders(param0: java.util.List<okhttp3.internal.http2.Header>): okhttp3.Headers;
			public static concat(param0: native.Array<string>, param1: string): native.Array<string>;
			public static addSuppressedIfPossible(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
			public static nonEmptyIntersection(param0: java.util.Comparator<string>, param1: native.Array<string>, param2: native.Array<string>): boolean;
			public static closeQuietly(param0: java.net.ServerSocket): void;
			public static discard(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
			public static threadFactory(param0: string, param1: boolean): java.util.concurrent.ThreadFactory;
			public static skipLeadingAsciiWhitespace(param0: string, param1: number, param2: number): number;
			public static isAndroidGetsocknameError(param0: java.lang.AssertionError): boolean;
			public static skipAll(param0: okio.Source, param1: number, param2: java.util.concurrent.TimeUnit): boolean;
			public static immutableList(param0: java.util.List<any>): java.util.List<any>;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export class Version {
			public static class: java.lang.Class<okhttp3.internal.Version>;
			public static userAgent(): string;
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module annotations {
			export class EverythingIsNonNull {
				public static class: java.lang.Class<okhttp3.internal.annotations.EverythingIsNonNull>;
				/**
				 * Constructs a new instance of the okhttp3.internal.annotations.EverythingIsNonNull interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.internal.cache.InternalCache);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheRequest {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheRequest>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.CacheRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					body(): okio.Sink;
					abort(): void;
				});
				public constructor();
				public abort(): void;
				public body(): okio.Sink;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class CacheStrategy {
				public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy>;
				public networkRequest: okhttp3.Request;
				public cacheResponse: okhttp3.Response;
				public static isCacheable(param0: okhttp3.Response, param1: okhttp3.Request): boolean;
			}
			export module CacheStrategy {
				export class Factory {
					public static class: java.lang.Class<okhttp3.internal.cache.CacheStrategy.Factory>;
					public constructor(param0: number, param1: okhttp3.Request, param2: okhttp3.Response);
					public get(): okhttp3.internal.cache.CacheStrategy;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class DiskLruCache {
				public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache>;
				public remove(param0: string): boolean;
				public close(): void;
				public snapshots(): java.util.Iterator<okhttp3.internal.cache.DiskLruCache.Snapshot>;
				public isClosed(): boolean;
				public getDirectory(): java.io.File;
				public static create(param0: okhttp3.internal.io.FileSystem, param1: java.io.File, param2: number, param3: number, param4: number): okhttp3.internal.cache.DiskLruCache;
				public get(param0: string): okhttp3.internal.cache.DiskLruCache.Snapshot;
				public size(): number;
				public flush(): void;
				public setMaxSize(param0: number): void;
				public edit(param0: string): okhttp3.internal.cache.DiskLruCache.Editor;
				public initialize(): void;
				public delete(): void;
				public getMaxSize(): number;
				public evictAll(): void;
			}
			export module DiskLruCache {
				export class Editor {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Editor>;
					public newSource(param0: number): okio.Source;
					public commit(): void;
					public newSink(param0: number): okio.Sink;
					public abortUnlessCommitted(): void;
					public abort(): void;
				}
				export class Entry {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Entry>;
				}
				export class Snapshot {
					public static class: java.lang.Class<okhttp3.internal.cache.DiskLruCache.Snapshot>;
					public close(): void;
					public key(): string;
					public getLength(param0: number): number;
					public edit(): okhttp3.internal.cache.DiskLruCache.Editor;
					public getSource(param0: number): okio.Source;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class FaultHidingSink extends okio.ForwardingSink {
				public static class: java.lang.Class<okhttp3.internal.cache.FaultHidingSink>;
				public close(): void;
				public timeout(): okio.Timeout;
				public write(param0: okio.Buffer, param1: number): void;
				public flush(): void;
				public onException(param0: java.io.IOException): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache {
			export class InternalCache {
				public static class: java.lang.Class<okhttp3.internal.cache.InternalCache>;
				/**
				 * Constructs a new instance of the okhttp3.internal.cache.InternalCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					get(param0: okhttp3.Request): okhttp3.Response;
					put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
					remove(param0: okhttp3.Request): void;
					update(param0: okhttp3.Response, param1: okhttp3.Response): void;
					trackConditionalCacheHit(): void;
					trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
				});
				public constructor();
				public put(param0: okhttp3.Response): okhttp3.internal.cache.CacheRequest;
				public get(param0: okhttp3.Request): okhttp3.Response;
				public remove(param0: okhttp3.Request): void;
				public update(param0: okhttp3.Response, param1: okhttp3.Response): void;
				public trackConditionalCacheHit(): void;
				public trackResponse(param0: okhttp3.internal.cache.CacheStrategy): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class FileOperator {
				public static class: java.lang.Class<okhttp3.internal.cache2.FileOperator>;
				public write(param0: number, param1: okio.Buffer, param2: number): void;
				public read(param0: number, param1: okio.Buffer, param2: number): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module cache2 {
			export class Relay {
				public static class: java.lang.Class<okhttp3.internal.cache2.Relay>;
				public newSource(): okio.Source;
				public metadata(): okio.ByteString;
				public static edit(param0: java.io.File, param1: okio.Source, param2: okio.ByteString, param3: number): okhttp3.internal.cache2.Relay;
				public static read(param0: java.io.File): okhttp3.internal.cache2.Relay;
			}
			export module Relay {
				export class RelaySource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.cache2.Relay.RelaySource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectInterceptor>;
				public client: okhttp3.OkHttpClient;
				public constructor(param0: okhttp3.OkHttpClient);
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class ConnectionSpecSelector {
				public static class: java.lang.Class<okhttp3.internal.connection.ConnectionSpecSelector>;
				public constructor(param0: java.util.List<okhttp3.ConnectionSpec>);
				public configureSecureSocket(param0: javax.net.ssl.SSLSocket): okhttp3.ConnectionSpec;
				public connectionFailed(param0: java.io.IOException): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RealConnection extends okhttp3.internal.http2.Http2Connection.Listener implements okhttp3.Connection {
				public static class: java.lang.Class<okhttp3.internal.connection.RealConnection>;
				public noNewStreams: boolean;
				public successCount: number;
				public allocationLimit: number;
				public allocations: java.util.List<java.lang.ref.Reference<okhttp3.internal.connection.StreamAllocation>>;
				public idleAtNanos: number;
				public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
				public connect(param0: number, param1: number, param2: number, param3: number, param4: boolean, param5: okhttp3.Call, param6: okhttp3.EventListener): void;
				public isEligible(param0: okhttp3.Address, param1: okhttp3.Route): boolean;
				public protocol(): okhttp3.Protocol;
				public route(): okhttp3.Route;
				public toString(): string;
				public socket(): java.net.Socket;
				public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
				public constructor();
				public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Route);
				public isHealthy(param0: boolean): boolean;
				public supportsUrl(param0: okhttp3.HttpUrl): boolean;
				public newWebSocketStreams(param0: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.ws.RealWebSocket.Streams;
				public cancel(): void;
				public isMultiplexed(): boolean;
				public static testConnection(param0: okhttp3.ConnectionPool, param1: okhttp3.Route, param2: java.net.Socket, param3: number): okhttp3.internal.connection.RealConnection;
				public handshake(): okhttp3.Handshake;
				public newCodec(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation): okhttp3.internal.http.HttpCodec;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteDatabase {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteDatabase>;
				public shouldPostpone(param0: okhttp3.Route): boolean;
				public connected(param0: okhttp3.Route): void;
				public failed(param0: okhttp3.Route): void;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteException {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteException>;
				public getLastConnectException(): java.io.IOException;
				public constructor(param0: java.io.IOException);
				public addConnectException(param0: java.io.IOException): void;
				public getFirstConnectException(): java.io.IOException;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class RouteSelector {
				public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector>;
				public next(): okhttp3.internal.connection.RouteSelector.Selection;
				public constructor(param0: okhttp3.Address, param1: okhttp3.internal.connection.RouteDatabase, param2: okhttp3.Call, param3: okhttp3.EventListener);
				public hasNext(): boolean;
				public connectFailed(param0: okhttp3.Route, param1: java.io.IOException): void;
			}
			export module RouteSelector {
				export class Selection {
					public static class: java.lang.Class<okhttp3.internal.connection.RouteSelector.Selection>;
					public getAll(): java.util.List<okhttp3.Route>;
					public next(): okhttp3.Route;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module connection {
			export class StreamAllocation {
				public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation>;
				public address: okhttp3.Address;
				public call: okhttp3.Call;
				public eventListener: okhttp3.EventListener;
				public streamFinished(param0: boolean, param1: okhttp3.internal.http.HttpCodec, param2: number, param3: java.io.IOException): void;
				public release(): void;
				public codec(): okhttp3.internal.http.HttpCodec;
				public route(): okhttp3.Route;
				public toString(): string;
				public newStream(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: boolean): okhttp3.internal.http.HttpCodec;
				public releaseAndAcquire(param0: okhttp3.internal.connection.RealConnection): java.net.Socket;
				public noNewStreams(): void;
				public acquire(param0: okhttp3.internal.connection.RealConnection, param1: boolean): void;
				public cancel(): void;
				public connection(): okhttp3.internal.connection.RealConnection;
				public hasMoreRoutes(): boolean;
				public constructor(param0: okhttp3.ConnectionPool, param1: okhttp3.Address, param2: okhttp3.Call, param3: okhttp3.EventListener, param4: any);
				public streamFailed(param0: java.io.IOException): void;
			}
			export module StreamAllocation {
				export class StreamAllocationReference extends java.lang.ref.WeakReference<okhttp3.internal.connection.StreamAllocation> {
					public static class: java.lang.Class<okhttp3.internal.connection.StreamAllocation.StreamAllocationReference>;
					public callStackTrace: any;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class BridgeInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.BridgeInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.CookieJar);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class CallServerInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor>;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: boolean);
			}
			export module CallServerInterceptor {
				export class CountingSink extends okio.ForwardingSink {
					public static class: java.lang.Class<okhttp3.internal.http.CallServerInterceptor.CountingSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http.HttpCodec>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.HttpCodec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
					writeRequestHeaders(param0: okhttp3.Request): void;
					flushRequest(): void;
					finishRequest(): void;
					readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
					openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
					cancel(): void;
				});
				public constructor();
				public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
				public finishRequest(): void;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public writeRequestHeaders(param0: okhttp3.Request): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpDate {
				public static class: java.lang.Class<okhttp3.internal.http.HttpDate>;
				public static MAX_DATE: number;
				public static parse(param0: string): java.util.Date;
				public static format(param0: java.util.Date): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpHeaders {
				public static class: java.lang.Class<okhttp3.internal.http.HttpHeaders>;
				public static varyHeaders(param0: okhttp3.Headers, param1: okhttp3.Headers): okhttp3.Headers;
				public static hasBody(param0: okhttp3.Response): boolean;
				public static receiveHeaders(param0: okhttp3.CookieJar, param1: okhttp3.HttpUrl, param2: okhttp3.Headers): void;
				public static varyHeaders(param0: okhttp3.Response): okhttp3.Headers;
				public static varyMatches(param0: okhttp3.Response, param1: okhttp3.Headers, param2: okhttp3.Request): boolean;
				public static skipWhitespace(param0: string, param1: number): number;
				public static hasVaryAll(param0: okhttp3.Headers): boolean;
				public static contentLength(param0: okhttp3.Response): number;
				public static hasVaryAll(param0: okhttp3.Response): boolean;
				public static skipUntil(param0: string, param1: number, param2: string): number;
				public static varyFields(param0: okhttp3.Headers): java.util.Set<string>;
				public static contentLength(param0: okhttp3.Headers): number;
				public static parseChallenges(param0: okhttp3.Headers, param1: string): java.util.List<okhttp3.Challenge>;
				public static parseSeconds(param0: string, param1: number): number;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class HttpMethod {
				public static class: java.lang.Class<okhttp3.internal.http.HttpMethod>;
				public static invalidatesCache(param0: string): boolean;
				public static requiresRequestBody(param0: string): boolean;
				public static permitsRequestBody(param0: string): boolean;
				public static redirectsWithBody(param0: string): boolean;
				public static redirectsToGet(param0: string): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealInterceptorChain extends okhttp3.Interceptor.Chain {
				public static class: java.lang.Class<okhttp3.internal.http.RealInterceptorChain>;
				public request(): okhttp3.Request;
				public httpStream(): okhttp3.internal.http.HttpCodec;
				public connectTimeoutMillis(): number;
				public constructor(param0: java.util.List<okhttp3.Interceptor>, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection, param4: number, param5: okhttp3.Request, param6: okhttp3.Call, param7: okhttp3.EventListener, param8: number, param9: number, param10: number);
				public proceed(param0: okhttp3.Request, param1: okhttp3.internal.connection.StreamAllocation, param2: okhttp3.internal.http.HttpCodec, param3: okhttp3.internal.connection.RealConnection): okhttp3.Response;
				public withWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public connection(): okhttp3.Connection;
				public writeTimeoutMillis(): number;
				public readTimeoutMillis(): number;
				public call(): okhttp3.Call;
				public withConnectTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public proceed(param0: okhttp3.Request): okhttp3.Response;
				public eventListener(): okhttp3.EventListener;
				public withReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit): okhttp3.Interceptor.Chain;
				public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RealResponseBody extends okhttp3.ResponseBody {
				public static class: java.lang.Class<okhttp3.internal.http.RealResponseBody>;
				public contentLength(): number;
				public constructor(param0: string, param1: number, param2: okio.BufferedSource);
				public source(): okio.BufferedSource;
				public contentType(): okhttp3.MediaType;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RequestLine {
				public static class: java.lang.Class<okhttp3.internal.http.RequestLine>;
				public static requestPath(param0: okhttp3.HttpUrl): string;
				public static get(param0: okhttp3.Request, param1: java.net.Proxy.Type): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class RetryAndFollowUpInterceptor extends okhttp3.Interceptor {
				public static class: java.lang.Class<okhttp3.internal.http.RetryAndFollowUpInterceptor>;
				public isCanceled(): boolean;
				public setCallStackTrace(param0: any): void;
				public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
				public constructor(param0: okhttp3.OkHttpClient, param1: boolean);
				public cancel(): void;
				public streamAllocation(): okhttp3.internal.connection.StreamAllocation;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class StatusLine {
				public static class: java.lang.Class<okhttp3.internal.http.StatusLine>;
				public static HTTP_TEMP_REDIRECT: number;
				public static HTTP_PERM_REDIRECT: number;
				public static HTTP_CONTINUE: number;
				public protocol: okhttp3.Protocol;
				public code: number;
				public message: string;
				public constructor(param0: okhttp3.Protocol, param1: number, param2: string);
				public static parse(param0: string): okhttp3.internal.http.StatusLine;
				public toString(): string;
				public static get(param0: okhttp3.Response): okhttp3.internal.http.StatusLine;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http {
			export class UnrepeatableRequestBody {
				public static class: java.lang.Class<okhttp3.internal.http.UnrepeatableRequestBody>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http.UnrepeatableRequestBody interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http1 {
			export class Http1Codec extends okhttp3.internal.http.HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec>;
				public finishRequest(): void;
				public newFixedLengthSink(param0: number): okio.Sink;
				public newChunkedSink(): okio.Sink;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.internal.connection.StreamAllocation, param2: okio.BufferedSource, param3: okio.BufferedSink);
				public isClosed(): boolean;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public writeRequest(param0: okhttp3.Headers, param1: string): void;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public newUnknownLengthSource(): okio.Source;
				public readHeaders(): okhttp3.Headers;
				public newChunkedSource(param0: okhttp3.HttpUrl): okio.Source;
				public cancel(): void;
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public newFixedLengthSource(param0: number): okio.Source;
			}
			export module Http1Codec {
				export abstract class AbstractSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.AbstractSource>;
					public closed: boolean;
					public bytesRead: number;
					public close(): void;
					public endOfInput(param0: boolean, param1: java.io.IOException): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class ChunkedSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class ChunkedSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.ChunkedSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class FixedLengthSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class FixedLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.FixedLengthSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class UnknownLengthSource extends okhttp3.internal.http1.Http1Codec.AbstractSource {
					public static class: java.lang.Class<okhttp3.internal.http1.Http1Codec.UnknownLengthSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ConnectionShutdownException {
				public static class: java.lang.Class<okhttp3.internal.http2.ConnectionShutdownException>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class ErrorCode {
				public static class: java.lang.Class<okhttp3.internal.http2.ErrorCode>;
				public static NO_ERROR: okhttp3.internal.http2.ErrorCode;
				public static PROTOCOL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static INTERNAL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static FLOW_CONTROL_ERROR: okhttp3.internal.http2.ErrorCode;
				public static REFUSED_STREAM: okhttp3.internal.http2.ErrorCode;
				public static CANCEL: okhttp3.internal.http2.ErrorCode;
				public static COMPRESSION_ERROR: okhttp3.internal.http2.ErrorCode;
				public static CONNECT_ERROR: okhttp3.internal.http2.ErrorCode;
				public static ENHANCE_YOUR_CALM: okhttp3.internal.http2.ErrorCode;
				public static INADEQUATE_SECURITY: okhttp3.internal.http2.ErrorCode;
				public static HTTP_1_1_REQUIRED: okhttp3.internal.http2.ErrorCode;
				public httpCode: number;
				public static valueOf(param0: string): okhttp3.internal.http2.ErrorCode;
				public static fromHttp2(param0: number): okhttp3.internal.http2.ErrorCode;
				public static values(): native.Array<okhttp3.internal.http2.ErrorCode>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Header {
				public static class: java.lang.Class<okhttp3.internal.http2.Header>;
				public static PSEUDO_PREFIX: okio.ByteString;
				public static RESPONSE_STATUS_UTF8: string;
				public static TARGET_METHOD_UTF8: string;
				public static TARGET_PATH_UTF8: string;
				public static TARGET_SCHEME_UTF8: string;
				public static TARGET_AUTHORITY_UTF8: string;
				public static RESPONSE_STATUS: okio.ByteString;
				public static TARGET_METHOD: okio.ByteString;
				public static TARGET_PATH: okio.ByteString;
				public static TARGET_SCHEME: okio.ByteString;
				public static TARGET_AUTHORITY: okio.ByteString;
				public name: okio.ByteString;
				public value: okio.ByteString;
				public constructor(param0: okio.ByteString, param1: okio.ByteString);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: okio.ByteString, param1: string);
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
			export module Header {
				export class Listener {
					public static class: java.lang.Class<okhttp3.internal.http2.Header.Listener>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Header$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHeaders(param0: okhttp3.Headers): void;
					});
					public constructor();
					public onHeaders(param0: okhttp3.Headers): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Hpack {
				public static class: java.lang.Class<okhttp3.internal.http2.Hpack>;
			}
			export module Hpack {
				export class Reader {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Reader>;
					public getAndResetHeaderList(): java.util.List<okhttp3.internal.http2.Header>;
				}
				export class Writer {
					public static class: java.lang.Class<okhttp3.internal.http2.Hpack.Writer>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2 {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2>;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Codec extends okhttp3.internal.http.HttpCodec {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec>;
				public finishRequest(): void;
				public static readHttp2HeadersList(param0: okhttp3.Headers, param1: okhttp3.Protocol): okhttp3.Response.Builder;
				public openResponseBody(param0: okhttp3.Response): okhttp3.ResponseBody;
				public readResponseHeaders(param0: boolean): okhttp3.Response.Builder;
				public cancel(): void;
				public constructor(param0: okhttp3.OkHttpClient, param1: okhttp3.Interceptor.Chain, param2: okhttp3.internal.connection.StreamAllocation, param3: okhttp3.internal.http2.Http2Connection);
				public flushRequest(): void;
				public createRequestBody(param0: okhttp3.Request, param1: number): okio.Sink;
				public writeRequestHeaders(param0: okhttp3.Request): void;
				public static http2HeadersList(param0: okhttp3.Request): java.util.List<okhttp3.internal.http2.Header>;
			}
			export module Http2Codec {
				export class StreamFinishingSource extends okio.ForwardingSource {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Codec.StreamFinishingSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Connection {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection>;
				public maxConcurrentStreams(): number;
				public pushStream(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): okhttp3.internal.http2.Http2Stream;
				public writeData(param0: number, param1: boolean, param2: okio.Buffer, param3: number): void;
				public close(): void;
				public start(): void;
				public newStream(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): okhttp3.internal.http2.Http2Stream;
				public isShutdown(): boolean;
				public openStreamCount(): number;
				public shutdown(param0: okhttp3.internal.http2.ErrorCode): void;
				public setSettings(param0: okhttp3.internal.http2.Settings): void;
				public getProtocol(): okhttp3.Protocol;
				public flush(): void;
			}
			export module Http2Connection {
				export class Builder {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Builder>;
					public constructor(param0: boolean);
					public listener(param0: okhttp3.internal.http2.Http2Connection.Listener): okhttp3.internal.http2.Http2Connection.Builder;
					public pingIntervalMillis(param0: number): okhttp3.internal.http2.Http2Connection.Builder;
					public build(): okhttp3.internal.http2.Http2Connection;
					public socket(param0: java.net.Socket, param1: string, param2: okio.BufferedSource, param3: okio.BufferedSink): okhttp3.internal.http2.Http2Connection.Builder;
					public socket(param0: java.net.Socket): okhttp3.internal.http2.Http2Connection.Builder;
					public pushObserver(param0: okhttp3.internal.http2.PushObserver): okhttp3.internal.http2.Http2Connection.Builder;
				}
				export abstract class Listener {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.Listener>;
					public static REFUSE_INCOMING_STREAMS: okhttp3.internal.http2.Http2Connection.Listener;
					public onStream(param0: okhttp3.internal.http2.Http2Stream): void;
					public constructor();
					public onSettings(param0: okhttp3.internal.http2.Http2Connection): void;
				}
				export class PingRunnable extends okhttp3.internal.NamedRunnable {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.PingRunnable>;
					public execute(): void;
				}
				export class ReaderRunnable extends okhttp3.internal.NamedRunnable implements okhttp3.internal.http2.Http2Reader.Handler {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Connection.ReaderRunnable>;
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public ackSettings(): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public execute(): void;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Reader {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader>;
				public close(): void;
				public nextFrame(param0: boolean, param1: okhttp3.internal.http2.Http2Reader.Handler): boolean;
				public readConnectionPreface(param0: okhttp3.internal.http2.Http2Reader.Handler): void;
			}
			export module Http2Reader {
				export class ContinuationSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.ContinuationSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class Handler {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Reader.Handler>;
					/**
					 * Constructs a new instance of the okhttp3.internal.http2.Http2Reader$Handler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
						headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
						rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
						settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
						ackSettings(): void;
						ping(param0: boolean, param1: number, param2: number): void;
						goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
						windowUpdate(param0: number, param1: number): void;
						priority(param0: number, param1: number, param2: number, param3: boolean): void;
						pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
						alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					});
					public constructor();
					public settings(param0: boolean, param1: okhttp3.internal.http2.Settings): void;
					public alternateService(param0: number, param1: string, param2: okio.ByteString, param3: string, param4: number, param5: number): void;
					public ackSettings(): void;
					public data(param0: boolean, param1: number, param2: okio.BufferedSource, param3: number): void;
					public headers(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
					public priority(param0: number, param1: number, param2: number, param3: boolean): void;
					public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
					public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: okio.ByteString): void;
					public windowUpdate(param0: number, param1: number): void;
					public ping(param0: boolean, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Stream {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream>;
				public getSource(): okio.Source;
				public close(param0: okhttp3.internal.http2.ErrorCode): void;
				public closeLater(param0: okhttp3.internal.http2.ErrorCode): void;
				public writeTimeout(): okio.Timeout;
				public getId(): number;
				public writeHeaders(param0: java.util.List<okhttp3.internal.http2.Header>, param1: boolean): void;
				public getErrorCode(): okhttp3.internal.http2.ErrorCode;
				public takeHeaders(): okhttp3.Headers;
				public getConnection(): okhttp3.internal.http2.Http2Connection;
				public isOpen(): boolean;
				public readTimeout(): okio.Timeout;
				public getSink(): okio.Sink;
				public isLocallyInitiated(): boolean;
				public setHeadersListener(param0: okhttp3.internal.http2.Header.Listener): void;
			}
			export module Http2Stream {
				export class FramingSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
				export class FramingSource extends okio.Source {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.FramingSource>;
					public close(): void;
					public timeout(): okio.Timeout;
					public read(param0: okio.Buffer, param1: number): number;
				}
				export class StreamTimeout extends okio.AsyncTimeout {
					public static class: java.lang.Class<okhttp3.internal.http2.Http2Stream.StreamTimeout>;
					public timedOut(): void;
					public newTimeoutException(param0: java.io.IOException): java.io.IOException;
					public exitAndThrowIfTimedOut(): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Http2Writer {
				public static class: java.lang.Class<okhttp3.internal.http2.Http2Writer>;
				public headers(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): void;
				public close(): void;
				public synStream(param0: boolean, param1: number, param2: number, param3: java.util.List<okhttp3.internal.http2.Header>): void;
				public settings(param0: okhttp3.internal.http2.Settings): void;
				public ping(param0: boolean, param1: number, param2: number): void;
				public windowUpdate(param0: number, param1: number): void;
				public frameHeader(param0: number, param1: number, param2: number, param3: number): void;
				public maxDataLength(): number;
				public goAway(param0: number, param1: okhttp3.internal.http2.ErrorCode, param2: native.Array<number>): void;
				public flush(): void;
				public connectionPreface(): void;
				public pushPromise(param0: number, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
				public data(param0: boolean, param1: number, param2: okio.Buffer, param3: number): void;
				public rstStream(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
				public synReply(param0: boolean, param1: number, param2: java.util.List<okhttp3.internal.http2.Header>): void;
				public applyAndAckSettings(param0: okhttp3.internal.http2.Settings): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Huffman {
				public static class: java.lang.Class<okhttp3.internal.http2.Huffman>;
				public static get(): okhttp3.internal.http2.Huffman;
			}
			export module Huffman {
				export class Node {
					public static class: java.lang.Class<okhttp3.internal.http2.Huffman.Node>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class PushObserver {
				public static class: java.lang.Class<okhttp3.internal.http2.PushObserver>;
				/**
				 * Constructs a new instance of the okhttp3.internal.http2.PushObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
					onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
					onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
					onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
					<clinit>(): void;
				});
				public constructor();
				public static CANCEL: okhttp3.internal.http2.PushObserver;
				public onRequest(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>): boolean;
				public onHeaders(param0: number, param1: java.util.List<okhttp3.internal.http2.Header>, param2: boolean): boolean;
				public onData(param0: number, param1: okio.BufferedSource, param2: number, param3: boolean): boolean;
				public onReset(param0: number, param1: okhttp3.internal.http2.ErrorCode): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class Settings {
				public static class: java.lang.Class<okhttp3.internal.http2.Settings>;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module http2 {
			export class StreamResetException {
				public static class: java.lang.Class<okhttp3.internal.http2.StreamResetException>;
				public errorCode: okhttp3.internal.http2.ErrorCode;
				public constructor(param0: okhttp3.internal.http2.ErrorCode);
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module io {
			export class FileSystem {
				public static class: java.lang.Class<okhttp3.internal.io.FileSystem>;
				/**
				 * Constructs a new instance of the okhttp3.internal.io.FileSystem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					source(param0: java.io.File): okio.Source;
					sink(param0: java.io.File): okio.Sink;
					appendingSink(param0: java.io.File): okio.Sink;
					delete(param0: java.io.File): void;
					exists(param0: java.io.File): boolean;
					size(param0: java.io.File): number;
					rename(param0: java.io.File, param1: java.io.File): void;
					deleteContents(param0: java.io.File): void;
					<clinit>(): void;
				});
				public constructor();
				public static SYSTEM: okhttp3.internal.io.FileSystem;
				public source(param0: java.io.File): okio.Source;
				public size(param0: java.io.File): number;
				public deleteContents(param0: java.io.File): void;
				public appendingSink(param0: java.io.File): okio.Sink;
				public sink(param0: java.io.File): okio.Sink;
				public exists(param0: java.io.File): boolean;
				public rename(param0: java.io.File, param1: java.io.File): void;
				public delete(param0: java.io.File): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class AndroidPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform>;
				public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public log(param0: number, param1: string, param2: java.lang.Throwable): void;
				public logCloseableLeak(param0: string, param1: any): void;
				public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public isCleartextTrafficPermitted(param0: string): boolean;
				public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public getStackTraceForCloseable(param0: string): any;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
			export module AndroidPlatform {
				export class AndroidCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidCertificateChainCleaner>;
					public equals(param0: any): boolean;
					public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
					public hashCode(): number;
				}
				export class AndroidTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.AndroidTrustRootIndex>;
					public equals(param0: any): boolean;
					public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
					public hashCode(): number;
				}
				export class CloseGuard {
					public static class: java.lang.Class<okhttp3.internal.platform.AndroidPlatform.CloseGuard>;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class ConscryptPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.ConscryptPlatform>;
				public static buildIfSupported(): okhttp3.internal.platform.ConscryptPlatform;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Jdk9Platform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Jdk9Platform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public static buildIfSupported(): okhttp3.internal.platform.Jdk9Platform;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class JdkWithJettyBootPlatform extends okhttp3.internal.platform.Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform>;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static buildIfSupported(): okhttp3.internal.platform.Platform;
			}
			export module JdkWithJettyBootPlatform {
				export class JettyNegoProvider {
					public static class: java.lang.Class<okhttp3.internal.platform.JdkWithJettyBootPlatform.JettyNegoProvider>;
					public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class OptionalMethod<T>  extends java.lang.Object {
				public static class: java.lang.Class<okhttp3.internal.platform.OptionalMethod<any>>;
				public invokeOptional(param0: T, param1: native.Array<any>): any;
				public invokeOptionalWithoutCheckedException(param0: T, param1: native.Array<any>): any;
				public isSupported(param0: T): boolean;
				public invoke(param0: T, param1: native.Array<any>): any;
				public invokeWithoutCheckedException(param0: T, param1: native.Array<any>): any;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module platform {
			export class Platform {
				public static class: java.lang.Class<okhttp3.internal.platform.Platform>;
				public static INFO: number;
				public static WARN: number;
				public getPrefix(): string;
				public connectSocket(param0: java.net.Socket, param1: java.net.InetSocketAddress, param2: number): void;
				public configureSslSocketFactory(param0: javax.net.ssl.SSLSocketFactory): void;
				public configureTlsExtensions(param0: javax.net.ssl.SSLSocket, param1: string, param2: java.util.List<okhttp3.Protocol>): void;
				public static isConscryptPreferred(): boolean;
				public log(param0: number, param1: string, param2: java.lang.Throwable): void;
				public logCloseableLeak(param0: string, param1: any): void;
				public buildTrustRootIndex(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.TrustRootIndex;
				public toString(): string;
				public isCleartextTrafficPermitted(param0: string): boolean;
				public constructor();
				public buildCertificateChainCleaner(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public buildCertificateChainCleaner(param0: javax.net.ssl.SSLSocketFactory): okhttp3.internal.tls.CertificateChainCleaner;
				public getSelectedProtocol(param0: javax.net.ssl.SSLSocket): string;
				public trustManager(param0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.X509TrustManager;
				public afterHandshake(param0: javax.net.ssl.SSLSocket): void;
				public static get(): okhttp3.internal.platform.Platform;
				public getStackTraceForCloseable(param0: string): any;
				public static alpnProtocolNames(param0: java.util.List<okhttp3.Protocol>): java.util.List<string>;
				public getSSLContext(): javax.net.ssl.SSLContext;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module proxy {
			export class NullProxySelector {
				public static class: java.lang.Class<okhttp3.internal.proxy.NullProxySelector>;
				public select(param0: java.net.URI): java.util.List<java.net.Proxy>;
				public connectFailed(param0: java.net.URI, param1: java.net.SocketAddress, param2: java.io.IOException): void;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module publicsuffix {
			export class PublicSuffixDatabase {
				public static class: java.lang.Class<okhttp3.internal.publicsuffix.PublicSuffixDatabase>;
				public static PUBLIC_SUFFIX_RESOURCE: string;
				public static get(): okhttp3.internal.publicsuffix.PublicSuffixDatabase;
				public getEffectiveTldPlusOne(param0: string): string;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicCertificateChainCleaner extends okhttp3.internal.tls.CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicCertificateChainCleaner>;
				public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: okhttp3.internal.tls.TrustRootIndex);
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class BasicTrustRootIndex extends okhttp3.internal.tls.TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.BasicTrustRootIndex>;
				public constructor(param0: native.Array<java.security.cert.X509Certificate>);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export abstract class CertificateChainCleaner {
				public static class: java.lang.Class<okhttp3.internal.tls.CertificateChainCleaner>;
				public static get(param0: javax.net.ssl.X509TrustManager): okhttp3.internal.tls.CertificateChainCleaner;
				public clean(param0: java.util.List<java.security.cert.Certificate>, param1: string): java.util.List<java.security.cert.Certificate>;
				public static get(param0: native.Array<java.security.cert.X509Certificate>): okhttp3.internal.tls.CertificateChainCleaner;
				public constructor();
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class DistinguishedNameParser {
				public static class: java.lang.Class<okhttp3.internal.tls.DistinguishedNameParser>;
				public findMostSpecific(param0: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class OkHostnameVerifier {
				public static class: java.lang.Class<okhttp3.internal.tls.OkHostnameVerifier>;
				public static INSTANCE: okhttp3.internal.tls.OkHostnameVerifier;
				public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
				public verifyHostname(param0: string, param1: string): boolean;
				public static allSubjectAltNames(param0: java.security.cert.X509Certificate): java.util.List<string>;
				public verify(param0: string, param1: java.security.cert.X509Certificate): boolean;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class TrustRootIndex {
				public static class: java.lang.Class<okhttp3.internal.tls.TrustRootIndex>;
				/**
				 * Constructs a new instance of the okhttp3.internal.tls.TrustRootIndex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
				});
				public constructor();
				public findByIssuerAndSignature(param0: java.security.cert.X509Certificate): java.security.cert.X509Certificate;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class RealWebSocket implements okhttp3.WebSocket, okhttp3.internal.ws.WebSocketReader.FrameCallback {
				public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket>;
				public constructor(param0: okhttp3.Request, param1: okhttp3.WebSocketListener, param2: java.util.Random, param3: number);
				public request(): okhttp3.Request;
				public send(param0: string): boolean;
				public onReadPong(param0: okio.ByteString): void;
				public onReadPing(param0: okio.ByteString): void;
				public initReaderAndWriter(param0: string, param1: okhttp3.internal.ws.RealWebSocket.Streams): void;
				public queueSize(): number;
				public close(param0: number, param1: string): boolean;
				public loopReader(): void;
				public send(param0: okio.ByteString): boolean;
				public onReadMessage(param0: okio.ByteString): void;
				public failWebSocket(param0: java.lang.Exception, param1: okhttp3.Response): void;
				public cancel(): void;
				public connect(param0: okhttp3.OkHttpClient): void;
				public onReadClose(param0: number, param1: string): void;
				public onReadMessage(param0: string): void;
			}
			export module RealWebSocket {
				export class CancelRunnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.CancelRunnable>;
					public run(): void;
				}
				export class Close {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Close>;
				}
				export class Message {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Message>;
				}
				export class PingRunnable {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.PingRunnable>;
					public run(): void;
				}
				export abstract class Streams {
					public static class: java.lang.Class<okhttp3.internal.ws.RealWebSocket.Streams>;
					public client: boolean;
					public source: okio.BufferedSource;
					public sink: okio.BufferedSink;
					public constructor(param0: boolean, param1: okio.BufferedSource, param2: okio.BufferedSink);
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketProtocol {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketProtocol>;
				public static acceptHeader(param0: string): string;
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketReader {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader>;
			}
			export module WebSocketReader {
				export class FrameCallback {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketReader.FrameCallback>;
					/**
					 * Constructs a new instance of the okhttp3.internal.ws.WebSocketReader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReadMessage(param0: string): void;
						onReadMessage(param0: okio.ByteString): void;
						onReadPing(param0: okio.ByteString): void;
						onReadPong(param0: okio.ByteString): void;
						onReadClose(param0: number, param1: string): void;
					});
					public constructor();
					public onReadClose(param0: number, param1: string): void;
					public onReadMessage(param0: string): void;
					public onReadMessage(param0: okio.ByteString): void;
					public onReadPing(param0: okio.ByteString): void;
					public onReadPong(param0: okio.ByteString): void;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module ws {
			export class WebSocketWriter {
				public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter>;
			}
			export module WebSocketWriter {
				export class FrameSink extends okio.Sink {
					public static class: java.lang.Class<okhttp3.internal.ws.WebSocketWriter.FrameSink>;
					public close(): void;
					public flush(): void;
					public write(param0: okio.Buffer, param1: number): void;
					public timeout(): okio.Timeout;
				}
			}
		}
	}
}

declare module okhttp3 {
	export module logging {
		export class HttpLoggingInterceptor extends okhttp3.Interceptor {
			public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor>;
			public constructor(param0: okhttp3.logging.HttpLoggingInterceptor.Logger);
			public redactHeader(param0: string): void;
			public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
			public setLevel(param0: okhttp3.logging.HttpLoggingInterceptor.Level): okhttp3.logging.HttpLoggingInterceptor;
			public constructor();
			public getLevel(): okhttp3.logging.HttpLoggingInterceptor.Level;
		}
		export module HttpLoggingInterceptor {
			export class Level {
				public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor.Level>;
				public static NONE: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static BASIC: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static HEADERS: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static BODY: okhttp3.logging.HttpLoggingInterceptor.Level;
				public static valueOf(param0: string): okhttp3.logging.HttpLoggingInterceptor.Level;
				public static values(): native.Array<okhttp3.logging.HttpLoggingInterceptor.Level>;
			}
			export class Logger {
				public static class: java.lang.Class<okhttp3.logging.HttpLoggingInterceptor.Logger>;
				/**
				 * Constructs a new instance of the okhttp3.logging.HttpLoggingInterceptor$Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					log(param0: string): void;
					<clinit>(): void;
				});
				public constructor();
				public static DEFAULT: okhttp3.logging.HttpLoggingInterceptor.Logger;
				public log(param0: string): void;
			}
		}
	}
}

declare module okhttp3 {
	export module logging {
		export class LoggingEventListener extends okhttp3.EventListener {
			public static class: java.lang.Class<okhttp3.logging.LoggingEventListener>;
			public connectFailed(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol, param4: java.io.IOException): void;
			public responseBodyStart(param0: okhttp3.Call): void;
			public connectEnd(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy, param3: okhttp3.Protocol): void;
			public callEnd(param0: okhttp3.Call): void;
			public callStart(param0: okhttp3.Call): void;
			public responseBodyEnd(param0: okhttp3.Call, param1: number): void;
			public callFailed(param0: okhttp3.Call, param1: java.io.IOException): void;
			public requestHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Request): void;
			public dnsStart(param0: okhttp3.Call, param1: string): void;
			public requestBodyEnd(param0: okhttp3.Call, param1: number): void;
			public connectionReleased(param0: okhttp3.Call, param1: okhttp3.Connection): void;
			public dnsEnd(param0: okhttp3.Call, param1: string, param2: java.util.List<java.net.InetAddress>): void;
			public secureConnectEnd(param0: okhttp3.Call, param1: okhttp3.Handshake): void;
			public responseHeadersEnd(param0: okhttp3.Call, param1: okhttp3.Response): void;
			public secureConnectStart(param0: okhttp3.Call): void;
			public responseHeadersStart(param0: okhttp3.Call): void;
			public requestHeadersStart(param0: okhttp3.Call): void;
			public connectStart(param0: okhttp3.Call, param1: java.net.InetSocketAddress, param2: java.net.Proxy): void;
			public connectionAcquired(param0: okhttp3.Call, param1: okhttp3.Connection): void;
			public requestBodyStart(param0: okhttp3.Call): void;
		}
		export module LoggingEventListener {
			export class Factory extends okhttp3.EventListener.Factory {
				public static class: java.lang.Class<okhttp3.logging.LoggingEventListener.Factory>;
				public constructor(param0: okhttp3.logging.HttpLoggingInterceptor.Logger);
				public create(param0: okhttp3.Call): okhttp3.EventListener;
				public constructor();
			}
		}
	}
}

declare module retrofit2 {
	export class BuiltInConverters extends retrofit2.Converter.Factory {
		public static class: java.lang.Class<retrofit2.BuiltInConverters>;
		public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
		public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
	}
	export module BuiltInConverters {
		export class BufferingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,okhttp3.ResponseBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.BufferingResponseBodyConverter>;
			public convert(param0: okhttp3.ResponseBody): okhttp3.ResponseBody;
			public convert(param0: any): any;
		}
		export class RequestBodyConverter extends retrofit2.Converter<okhttp3.RequestBody,okhttp3.RequestBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.RequestBodyConverter>;
			public convert(param0: okhttp3.RequestBody): okhttp3.RequestBody;
			public convert(param0: any): any;
		}
		export class StreamingResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,okhttp3.ResponseBody> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.StreamingResponseBodyConverter>;
			public convert(param0: okhttp3.ResponseBody): okhttp3.ResponseBody;
			public convert(param0: any): any;
		}
		export class ToStringConverter extends retrofit2.Converter<any,string> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.ToStringConverter>;
			public convert(param0: any): string;
			public convert(param0: any): any;
		}
		export class VoidResponseBodyConverter extends retrofit2.Converter<okhttp3.ResponseBody,java.lang.Void> {
			public static class: java.lang.Class<retrofit2.BuiltInConverters.VoidResponseBodyConverter>;
			public convert(param0: okhttp3.ResponseBody): java.lang.Void;
			public convert(param0: any): any;
		}
	}
}

declare module retrofit2 {
	export class Call<T>  extends java.lang.Cloneable {
		public static class: java.lang.Class<retrofit2.Call<any>>;
		/**
		 * Constructs a new instance of the retrofit2.Call<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			execute(): retrofit2.Response<any>;
			enqueue(param0: retrofit2.Callback<any>): void;
			isExecuted(): boolean;
			cancel(): void;
			isCanceled(): boolean;
			clone(): retrofit2.Call<any>;
			request(): okhttp3.Request;
		});
		public constructor();
		public clone(): retrofit2.Call<any>;
		public isExecuted(): boolean;
		public execute(): retrofit2.Response<any>;
		public request(): okhttp3.Request;
		public isCanceled(): boolean;
		public enqueue(param0: retrofit2.Callback<any>): void;
		public cancel(): void;
	}
}

declare module retrofit2 {
	export class CallAdapter<R, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.CallAdapter<any,any>>;
		/**
		 * Constructs a new instance of the retrofit2.CallAdapter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			responseType(): java.lang.reflect.Type;
			adapt(param0: retrofit2.Call<R>): T;
		});
		public constructor();
		public responseType(): java.lang.reflect.Type;
		public adapt(param0: retrofit2.Call<R>): T;
	}
	export module CallAdapter {
		export abstract class Factory {
			public static class: java.lang.Class<retrofit2.CallAdapter.Factory>;
			public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
			public constructor();
			public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
			public static getParameterUpperBound(param0: number, param1: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
		}
	}
}

declare module retrofit2 {
	export class Callback<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Callback<any>>;
		/**
		 * Constructs a new instance of the retrofit2.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
			onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
		});
		public constructor();
		public onResponse(param0: retrofit2.Call<T>, param1: retrofit2.Response<T>): void;
		public onFailure(param0: retrofit2.Call<T>, param1: java.lang.Throwable): void;
	}
}

declare module retrofit2 {
	export class Converter<F, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Converter<any,any>>;
		/**
		 * Constructs a new instance of the retrofit2.Converter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			convert(param0: F): T;
		});
		public constructor();
		public convert(param0: F): T;
	}
	export module Converter {
		export abstract class Factory {
			public static class: java.lang.Class<retrofit2.Converter.Factory>;
			public static getRawType(param0: java.lang.reflect.Type): java.lang.Class<any>;
			public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
			public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
			public stringConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<any,string>;
			public constructor();
			public static getParameterUpperBound(param0: number, param1: java.lang.reflect.ParameterizedType): java.lang.reflect.Type;
		}
	}
}

declare module retrofit2 {
	export class DefaultCallAdapterFactory extends retrofit2.CallAdapter.Factory {
		public static class: java.lang.Class<retrofit2.DefaultCallAdapterFactory>;
		public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
	}
}

declare module retrofit2 {
	export class ExecutorCallAdapterFactory extends retrofit2.CallAdapter.Factory {
		public static class: java.lang.Class<retrofit2.ExecutorCallAdapterFactory>;
		public get(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.CallAdapter<any,any>;
	}
	export module ExecutorCallAdapterFactory {
		export class ExecutorCallbackCall<T>  extends retrofit2.Call<any> {
			public static class: java.lang.Class<retrofit2.ExecutorCallAdapterFactory.ExecutorCallbackCall<any>>;
			public clone(): retrofit2.Call<any>;
			public request(): okhttp3.Request;
			public execute(): retrofit2.Response<any>;
			public isExecuted(): boolean;
			public cancel(): void;
			public isCanceled(): boolean;
			public enqueue(param0: retrofit2.Callback<any>): void;
		}
	}
}

declare module retrofit2 {
	export class HttpException {
		public static class: java.lang.Class<retrofit2.HttpException>;
		public constructor(param0: retrofit2.Response<any>);
		public code(): number;
		public response(): retrofit2.Response<any>;
		public message(): string;
	}
}

declare module retrofit2 {
	export class OkHttpCall<T>  extends retrofit2.Call<any> {
		public static class: java.lang.Class<retrofit2.OkHttpCall<any>>;
		public clone(): retrofit2.Call<any>;
		public isExecuted(): boolean;
		public execute(): retrofit2.Response<any>;
		public request(): okhttp3.Request;
		public clone(): retrofit2.OkHttpCall<any>;
		public isCanceled(): boolean;
		public enqueue(param0: retrofit2.Callback<any>): void;
		public cancel(): void;
	}
	export module OkHttpCall {
		export class ExceptionCatchingRequestBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<retrofit2.OkHttpCall.ExceptionCatchingRequestBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
			public close(): void;
		}
		export class NoContentResponseBody extends okhttp3.ResponseBody {
			public static class: java.lang.Class<retrofit2.OkHttpCall.NoContentResponseBody>;
			public contentLength(): number;
			public source(): okio.BufferedSource;
			public contentType(): okhttp3.MediaType;
		}
	}
}

declare module retrofit2 {
	export abstract class ParameterHandler<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.ParameterHandler<any>>;
	}
	export module ParameterHandler {
		export class Body<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Body<any>>;
		}
		export class Field<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Field<any>>;
		}
		export class FieldMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.FieldMap<any>>;
		}
		export class Header<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Header<any>>;
		}
		export class HeaderMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.HeaderMap<any>>;
		}
		export class Part<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Part<any>>;
		}
		export class PartMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.PartMap<any>>;
		}
		export class Path<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Path<any>>;
		}
		export class Query<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.Query<any>>;
		}
		export class QueryMap<T>  extends retrofit2.ParameterHandler<java.util.Map<string,any>> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.QueryMap<any>>;
		}
		export class QueryName<T>  extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.QueryName<any>>;
		}
		export class RawPart extends retrofit2.ParameterHandler<okhttp3.MultipartBody.Part> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.RawPart>;
		}
		export class RelativeUrl extends retrofit2.ParameterHandler<any> {
			public static class: java.lang.Class<retrofit2.ParameterHandler.RelativeUrl>;
		}
	}
}

declare module retrofit2 {
	export class Platform {
		public static class: java.lang.Class<retrofit2.Platform>;
	}
	export module Platform {
		export class Android extends retrofit2.Platform {
			public static class: java.lang.Class<retrofit2.Platform.Android>;
			public defaultCallbackExecutor(): java.util.concurrent.Executor;
		}
		export module Android {
			export class MainThreadExecutor {
				public static class: java.lang.Class<retrofit2.Platform.Android.MainThreadExecutor>;
				public execute(param0: java.lang.Runnable): void;
			}
		}
		export class Java8 extends retrofit2.Platform {
			public static class: java.lang.Class<retrofit2.Platform.Java8>;
		}
	}
}

declare module retrofit2 {
	export class RequestBuilder {
		public static class: java.lang.Class<retrofit2.RequestBuilder>;
	}
	export module RequestBuilder {
		export class ContentTypeOverridingRequestBody extends okhttp3.RequestBody {
			public static class: java.lang.Class<retrofit2.RequestBuilder.ContentTypeOverridingRequestBody>;
			public contentLength(): number;
			public writeTo(param0: okio.BufferedSink): void;
			public contentType(): okhttp3.MediaType;
		}
	}
}

declare module retrofit2 {
	export class Response<T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.Response<any>>;
		public static error(param0: number, param1: okhttp3.ResponseBody): retrofit2.Response<any>;
		public headers(): okhttp3.Headers;
		public body(): T;
		public static success(param0: any, param1: okhttp3.Response): retrofit2.Response<any>;
		public errorBody(): okhttp3.ResponseBody;
		public raw(): okhttp3.Response;
		public toString(): string;
		public static error(param0: okhttp3.ResponseBody, param1: okhttp3.Response): retrofit2.Response<any>;
		public isSuccessful(): boolean;
		public static success(param0: any): retrofit2.Response<any>;
		public static success(param0: any, param1: okhttp3.Headers): retrofit2.Response<any>;
		public code(): number;
		public message(): string;
	}
}

declare module retrofit2 {
	export class Retrofit {
		public static class: java.lang.Class<retrofit2.Retrofit>;
		public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public callFactory(): okhttp3.Call.Factory;
		public stringConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public baseUrl(): okhttp3.HttpUrl;
		public newBuilder(): retrofit2.Retrofit.Builder;
		public nextRequestBodyConverter(param0: retrofit2.Converter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>, param3: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public callAdapter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.CallAdapter<any,any>;
		public create(param0: java.lang.Class<any>): any;
		public callbackExecutor(): java.util.concurrent.Executor;
		public callAdapterFactories(): java.util.List<retrofit2.CallAdapter.Factory>;
		public nextCallAdapter(param0: retrofit2.CallAdapter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.CallAdapter<any,any>;
		public converterFactories(): java.util.List<retrofit2.Converter.Factory>;
		public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
		public nextResponseBodyConverter(param0: retrofit2.Converter.Factory, param1: java.lang.reflect.Type, param2: native.Array<java.lang.annotation.Annotation>): retrofit2.Converter<any,any>;
	}
	export module Retrofit {
		export class Builder {
			public static class: java.lang.Class<retrofit2.Retrofit.Builder>;
			public addConverterFactory(param0: retrofit2.Converter.Factory): retrofit2.Retrofit.Builder;
			public validateEagerly(param0: boolean): retrofit2.Retrofit.Builder;
			public callFactory(param0: okhttp3.Call.Factory): retrofit2.Retrofit.Builder;
			public build(): retrofit2.Retrofit;
			public constructor();
			public baseUrl(param0: string): retrofit2.Retrofit.Builder;
			public client(param0: okhttp3.OkHttpClient): retrofit2.Retrofit.Builder;
			public baseUrl(param0: okhttp3.HttpUrl): retrofit2.Retrofit.Builder;
			public callbackExecutor(param0: java.util.concurrent.Executor): retrofit2.Retrofit.Builder;
			public addCallAdapterFactory(param0: retrofit2.CallAdapter.Factory): retrofit2.Retrofit.Builder;
		}
	}
}

declare module retrofit2 {
	export class ServiceMethod<R, T>  extends java.lang.Object {
		public static class: java.lang.Class<retrofit2.ServiceMethod<any,any>>;
	}
	export module ServiceMethod {
		export class Builder<T, R>  extends java.lang.Object {
			public static class: java.lang.Class<retrofit2.ServiceMethod.Builder<any,any>>;
			public build(): retrofit2.ServiceMethod<any,any>;
		}
	}
}

declare module retrofit2 {
	export class Utils {
		public static class: java.lang.Class<retrofit2.Utils>;
	}
	export module Utils {
		export class GenericArrayTypeImpl {
			public static class: java.lang.Class<retrofit2.Utils.GenericArrayTypeImpl>;
			public equals(param0: any): boolean;
			public toString(): string;
			public getGenericComponentType(): java.lang.reflect.Type;
			public hashCode(): number;
		}
		export class ParameterizedTypeImpl {
			public static class: java.lang.Class<retrofit2.Utils.ParameterizedTypeImpl>;
			public getRawType(): java.lang.reflect.Type;
			public equals(param0: any): boolean;
			public toString(): string;
			public getOwnerType(): java.lang.reflect.Type;
			public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
			public hashCode(): number;
		}
		export class WildcardTypeImpl {
			public static class: java.lang.Class<retrofit2.Utils.WildcardTypeImpl>;
			public equals(param0: any): boolean;
			public getUpperBounds(): native.Array<java.lang.reflect.Type>;
			public toString(): string;
			public getLowerBounds(): native.Array<java.lang.reflect.Type>;
			public hashCode(): number;
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonConverterFactory extends retrofit2.Converter.Factory {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonConverterFactory>;
				public responseBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: retrofit2.Retrofit): retrofit2.Converter<okhttp3.ResponseBody,any>;
				public static create(param0: any): retrofit2.converter.gson.GsonConverterFactory;
				public requestBodyConverter(param0: java.lang.reflect.Type, param1: native.Array<java.lang.annotation.Annotation>, param2: native.Array<java.lang.annotation.Annotation>, param3: retrofit2.Retrofit): retrofit2.Converter<any,okhttp3.RequestBody>;
				public static create(): retrofit2.converter.gson.GsonConverterFactory;
			}
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonRequestBodyConverter<T>  extends retrofit2.Converter<any,okhttp3.RequestBody> {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonRequestBodyConverter<any>>;
				public convert(param0: any): any;
				public convert(param0: any): okhttp3.RequestBody;
			}
		}
	}
}

declare module retrofit2 {
	export module converter {
		export module gson {
			export class GsonResponseBodyConverter<T>  extends retrofit2.Converter<okhttp3.ResponseBody,any> {
				public static class: java.lang.Class<retrofit2.converter.gson.GsonResponseBodyConverter<any>>;
				public convert(param0: any): any;
				public convert(param0: okhttp3.ResponseBody): any;
			}
		}
	}
}


declare module retrofit2 {
	export module http {
		export class Body {
			public static class: java.lang.Class<retrofit2.http.Body>;
			/**
			 * Constructs a new instance of the retrofit2.http.Body interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class DELETE {
			public static class: java.lang.Class<retrofit2.http.DELETE>;
			/**
			 * Constructs a new instance of the retrofit2.http.DELETE interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Field {
			public static class: java.lang.Class<retrofit2.http.Field>;
			/**
			 * Constructs a new instance of the retrofit2.http.Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class FieldMap {
			public static class: java.lang.Class<retrofit2.http.FieldMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.FieldMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class FormUrlEncoded {
			public static class: java.lang.Class<retrofit2.http.FormUrlEncoded>;
			/**
			 * Constructs a new instance of the retrofit2.http.FormUrlEncoded interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class GET {
			public static class: java.lang.Class<retrofit2.http.GET>;
			/**
			 * Constructs a new instance of the retrofit2.http.GET interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class HEAD {
			public static class: java.lang.Class<retrofit2.http.HEAD>;
			/**
			 * Constructs a new instance of the retrofit2.http.HEAD interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class HTTP {
			public static class: java.lang.Class<retrofit2.http.HTTP>;
			/**
			 * Constructs a new instance of the retrofit2.http.HTTP interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				method(): string;
				path(): string;
				hasBody(): boolean;
			});
			public constructor();
			public hasBody(): boolean;
			public method(): string;
			public path(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Header {
			public static class: java.lang.Class<retrofit2.http.Header>;
			/**
			 * Constructs a new instance of the retrofit2.http.Header interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class HeaderMap {
			public static class: java.lang.Class<retrofit2.http.HeaderMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.HeaderMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Headers {
			public static class: java.lang.Class<retrofit2.http.Headers>;
			/**
			 * Constructs a new instance of the retrofit2.http.Headers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): native.Array<string>;
			});
			public constructor();
			public value(): native.Array<string>;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Multipart {
			public static class: java.lang.Class<retrofit2.http.Multipart>;
			/**
			 * Constructs a new instance of the retrofit2.http.Multipart interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class OPTIONS {
			public static class: java.lang.Class<retrofit2.http.OPTIONS>;
			/**
			 * Constructs a new instance of the retrofit2.http.OPTIONS interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class PATCH {
			public static class: java.lang.Class<retrofit2.http.PATCH>;
			/**
			 * Constructs a new instance of the retrofit2.http.PATCH interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class POST {
			public static class: java.lang.Class<retrofit2.http.POST>;
			/**
			 * Constructs a new instance of the retrofit2.http.POST interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class PUT {
			public static class: java.lang.Class<retrofit2.http.PUT>;
			/**
			 * Constructs a new instance of the retrofit2.http.PUT interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Part {
			public static class: java.lang.Class<retrofit2.http.Part>;
			/**
			 * Constructs a new instance of the retrofit2.http.Part interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoding(): string;
			});
			public constructor();
			public encoding(): string;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class PartMap {
			public static class: java.lang.Class<retrofit2.http.PartMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.PartMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoding(): string;
			});
			public constructor();
			public encoding(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Path {
			public static class: java.lang.Class<retrofit2.http.Path>;
			/**
			 * Constructs a new instance of the retrofit2.http.Path interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Query {
			public static class: java.lang.Class<retrofit2.http.Query>;
			/**
			 * Constructs a new instance of the retrofit2.http.Query interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
			public value(): string;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class QueryMap {
			public static class: java.lang.Class<retrofit2.http.QueryMap>;
			/**
			 * Constructs a new instance of the retrofit2.http.QueryMap interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class QueryName {
			public static class: java.lang.Class<retrofit2.http.QueryName>;
			/**
			 * Constructs a new instance of the retrofit2.http.QueryName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encoded(): boolean;
			});
			public constructor();
			public encoded(): boolean;
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Streaming {
			public static class: java.lang.Class<retrofit2.http.Streaming>;
			/**
			 * Constructs a new instance of the retrofit2.http.Streaming interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

declare module retrofit2 {
	export module http {
		export class Url {
			public static class: java.lang.Class<retrofit2.http.Url>;
			/**
			 * Constructs a new instance of the retrofit2.http.Url interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
			});
			public constructor();
		}
	}
}

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
				public static response(param0: retrofit2.Response<any>): com.zendesk.service.RetrofitErrorResponse;
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
			export class ZendeskDateTypeAdapter {
				public static class: java.lang.Class<com.zendesk.service.ZendeskDateTypeAdapter>;
				public read(param0: any): java.util.Date;
				public write(param0: any, param1: java.util.Date): void;
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
				public constructor(param0: retrofit2.Response<any>);
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
				public static unmodifiableList(param0: java.util.List<any>): java.util.List<any>;
				public static mapKeys(param0: java.util.Map<any, any>, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static isNotEmpty(param0: native.Array<any>): boolean;
				public static copyOf(param0: java.util.List<any>): java.util.List<any>;
				public static map(param0: java.util.Collection<any>, param1: com.zendesk.func.ZFunc1<any,any>): java.util.List<any>;
				public static mapValues(param0: java.util.Map<any, any>, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static findFirst(param0: java.util.Collection<any>, param1: com.zendesk.func.ZFunc1<any,any>): any;
				public static filter(param0: java.util.Collection<any>, param1: com.zendesk.func.ZFunc1<any,any>): java.util.List<any>;
				public static isEmpty(param0: native.Array<any>): boolean;
				public static groupingBy(param0: java.util.Collection<any>, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static isEmpty(param0: java.util.Collection<any>): boolean;
				public static equalsByContents(param0: java.util.Collection<any>, param1: java.util.Collection<any>): boolean;
				public static copyOf(param0: java.util.Map<any, any>): java.util.Map<any, any>;
				public static getOrDefault(param0: java.util.Map<any, any>, param1: any, param2: any): any;
				public static appendOrReplace(param0: java.util.Collection<any>, param1: any, param2: com.zendesk.func.ZFunc2<any,any,any>): java.util.List<any>;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>, param1: number): native.Array<number>;
				public static combineLists(param0: native.Array<java.util.List<any>>): java.util.List<any>;
				public static toPrimitiveLong(param0: native.Array<java.lang.Long>): native.Array<number>;
				public static map(param0: java.util.Map<any, any>, param1: com.zendesk.func.ZFunc1<any,any>, param2: com.zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static isNotEmpty(param0: java.util.Collection<any>): boolean;
				public static filter(param0: java.util.Map<any, any>, param1: com.zendesk.func.ZFunc2<any,any,any>): java.util.Map<any, any>;
				public static associate(param0: java.util.Collection<any>, param1: com.zendesk.func.ZFunc1<any,any>): java.util.Map<any, any>;
				public static ensureEmpty(param0: java.util.List<any>): java.util.List<any>;
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
				public static getOrDefault(param0: java.util.concurrent.Callable<any>, param1: any): any;
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
					export class UnknownTypeHolder extends com.zopim.android.sdk.chatlog.ViewBinder<any> {
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
						export class ModelInstanceCreator<T> {
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
						public notifyObservers: { (param0: any): void; (): void; };
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

