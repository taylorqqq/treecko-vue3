interface Menu {
  title: string;
  icon?: string;
  isCheck?: boolean;
}
interface IMenu extends Menu {
  children?: IMenu[];
}
