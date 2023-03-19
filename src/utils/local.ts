export interface IData {
  data: any;
  expire?: number;
}

export default {
  set(key: string, data: any, expire?: number): void {
    let cacheData: IData = { ...data };
    if (expire) {
      cacheData.expire = new Date().getTime() + data.expire * 1000;
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
    const result = Object.values(cacheData).find((item) => item !== expire);
    return result;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },
};
