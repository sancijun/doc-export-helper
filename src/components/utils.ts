import { Readable } from "stream";

export interface IStringKeyMap<T> {
  [key: string]: T;
}

const IMAGE_EXT_LIST = [
  ".png",
  ".jpg",
  ".jpeg",
  ".bmp",
  ".gif",
  ".svg",
  ".tiff",
  ".webp",
  ".avif",
];

export function isAnImage(ext: string) {
  return IMAGE_EXT_LIST.includes(ext.toLowerCase());
}

export function getOS() {
  const { appVersion } = navigator;
  if (appVersion.indexOf("Win") !== -1) {
    return "Windows";
  } else if (appVersion.indexOf("Mac") !== -1) {
    return "MacOS";
  } else if (appVersion.indexOf("X11") !== -1) {
    return "Linux";
  } else {
    return "Unknown OS";
  }
}
export async function streamToString(stream: Readable) {
  const chunks = [];

  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf-8");
}

export function getUrlAsset(url: string) {
  return (url = url.substr(1 + url.lastIndexOf("/")).split("?")[0]).split(
    "#"
  )[0];
}

export function getLastImage(list: string[]) {
  const reversedList = list.reverse();
  let lastImage;
  reversedList.forEach(item => {
    if (item && item.startsWith("http")) {
      lastImage = item;
      return item;
    }
  });
  return lastImage;
}

interface AnyObj {
  [key: string]: any;
}

export function arrayToObject<T extends AnyObj>(
  arr: T[],
  key: string
): { [key: string]: T } {
  const obj: { [key: string]: T } = {};
  arr.forEach(element => {
    obj[element[key]] = element;
  });
  return obj;
}

export async function fileToBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      const base64 = base64String.split(",")[1]; // 去除前缀 "data:xxx;base64,"
      resolve(base64);
    };

    reader.onerror = () => {
      reject(new Error("无法读取文件"));
    };

    reader.readAsDataURL(file);
  });
}

export async function fileToBuffer(file: File): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // 当读取完成时的回调函数
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        // 将 ArrayBuffer 转换为 Buffer
        const buffer = Buffer.from(reader.result);
        resolve(buffer);
      } else {
        reject(new Error('Failed to read file as ArrayBuffer.'));
      }
    };

    // 当读取失败时的回调函数
    reader.onerror = () => {
      reject(new Error('Error reading file.'));
    };

    // 开始读取文件内容
    reader.readAsArrayBuffer(file);
  });
}


export function getCurrentTimestamp(): string {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0');

  const formattedTimestamp = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
  return formattedTimestamp;
}

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function stringNullIsDefault(str:string, defaultString: string) {
  if(str === null || str === undefined || str === '')
      return defaultString
  return str
}