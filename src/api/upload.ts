import { getAction, postAction } from "@/plugins/axios/request";
interface uploadInterface {
  url: string;
}

const uploadImage = (data: FormData) =>
  postAction<uploadInterface>("/upload/image", data);

export { uploadImage };
