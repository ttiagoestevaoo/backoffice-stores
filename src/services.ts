/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import instance from "@/axios";
import { IStore } from "./models";

class BaseService {
  static readonly http = instance;

  static url = "";
}

export class StoreService extends BaseService {
  static url = "/stores/";

  static async list(): Promise<IStore> {
    return (await BaseService.http.get(StoreService.url)).data;
  }
}

export class UploadTransactionsService extends BaseService {
  static url = "/transactions/upload/";

  static upload(file: File): Promise<boolean> {
    const formData = new FormData();

    formData.append("file", file);

    return BaseService.http.post(this.url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
