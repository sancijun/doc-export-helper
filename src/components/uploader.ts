import * as utils from "./utils";
import * as path from 'path';
import axios from "axios"
import COS from 'cos-js-sdk-v5';


export abstract class Uploader {

    public settings: {};

    constructor() {
        const storedConfigurations = localStorage.getItem('configurations') || '{}';
        this.settings = JSON.parse(storedConfigurations);
        console.log(storedConfigurations)
    }

    abstract upload(imageData: string, ext: string): Promise<string | undefined>;

}


export class GithubUploader extends Uploader {
    
    constructor() {
        super();
    }

    async upload(imageData: string, ext: string): Promise<string | undefined> {
        const fileKey = `${this.settings.Github.path}${utils.getCurrentTimestamp()}${ext}`;
        const apiUrl = `https://api.github.com/repos/${this.settings.Github.repo}/contents${fileKey}`;

        const requestData = {
            message: `Upload ${fileKey}`,
            branch: this.settings.Github.branch,
            content: imageData,
        };

        const response = await axios.put(apiUrl, requestData, {
            headers: {
                Authorization: `token ${this.settings.Github.token}`,
                'Content-Type': 'application/json',
            }
        });

        const customUrl = this.settings.Github.customUrl.trim();
        const imageUrl = customUrl === '' ? response.data.content.download_url : customUrl + response.data.content.path;
        return imageUrl;
    }
}

export class GiteeUploader extends Uploader {

    constructor() {
        super();
    }

    async upload(imageData: string, ext: string): Promise<string | undefined> {
        const fileKey = `${this.settings.Gitee.path}${utils.getCurrentTimestamp()}${ext}`;
        const apiUrl = `https://gitee.com/api/v5/repos/${this.settings.Gitee.repo}/contents/${fileKey}`;

        const requestData = {
            access_token: this.settings.Gitee.token,
            branch: this.settings.Gitee.branch,
            content: imageData,
            message: `Upload ${fileKey}`,
        };

        try {
            const response = await axios.post(apiUrl, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            return response.data.content.download_url;
        } catch (error) {
            console.error('Failed to upload file:', error);
            return undefined;
        }
    }

}

export class TencentCosUploader extends Uploader {

    cos: COS;

    constructor() {
        super();
        this.cos = new COS({
            SecretId: this.settings.Tencent.secretId,
            SecretKey: this.settings.Tencent.secretKey,
        });
    }

    

    async upload(imageData: string, fileName: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const fileKey = this.settings.Tencent.path + fileName;

            this.cos.putObject(
                {
                    Bucket: this.settings.Tencent.bucketName,
                    Region: this.settings.Tencent.region,
                    Key: fileKey,
                    StorageClass: 'STANDARD',
                    Body: this.base64ToBlob(imageData),
                },
                (err, data) => {
                    if (err) {
                        console.log("cos upload:", err)
                        reject(err);
                    } else {
                        const location = data.Location || '';
                        resolve(`https://${location}`);
                    }
                }
            );
        });
    }

    base64ToBlob(base64String: string, contentType: string = ''): Blob {
        // 解码 base64 字符串为二进制数据
        const binaryString = atob(base64String);
        const byteArray = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        // 创建 Blob 对象
        if (contentType === '') {
            contentType = 'application/octet-stream'; // 默认为二进制流
        }
        return new Blob([byteArray], { type: contentType });
    }

}
