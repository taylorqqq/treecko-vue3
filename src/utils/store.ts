export interface IData {
  [key: string]: any;
  expire?: number;
}

export default {
  set(key: string, data: IData) {
    if (!data) return;
    if (data.expire) {
      data.expire = new Date().getTime() + data.expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(data));
  },

  get(key: string): IData | null {
    const data = localStorage.getItem(key);
    if (!data) return null;
    const dataObj = JSON.parse(data);
    if (dataObj.expire && new Date().getTime() > dataObj.expire) {
      localStorage.removeItem(key);
      return null;
    }
    return dataObj;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },
};
