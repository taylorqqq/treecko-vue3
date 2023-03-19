export interface IData {
  data: any;
  expire?: number;
}

export default {
  set(key: string, data: any, expire?: number): void {
    if (!data) return;
    let type = typeof data;
    let cacheData: IData;
    if (type !== "string" && type !== "number" && type !== "boolean") {
      cacheData = {
        data: JSON.stringify(data),
        expire: new Date().getTime() + 60 * 60 * 1000 * 24,
      };
    } else {
      cacheData = {
        data,
        expire: new Date().getTime() + 60 * 60 * 1000 * 24,
      };
    }
    localStorage.setItem(key, JSON.stringify(cacheData));
  },

  get(key: string): any {
    const data = localStorage.getItem(key);
    if (!data) return null;
    const cacheData = JSON.parse(data);
    const expire = cacheData.expire;
    if (expire && new Date().getTime() > expire) {
      localStorage.removeItem(key);
      return null;
    }
    return cacheData.data;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },
};
