import { getAction } from "@/plugins/axios/request";
interface articleInterface {
  id: number;
  title: string;
  content: string;
}

const getArticle = () => getAction<articleInterface>("/article");

export { getArticle };
