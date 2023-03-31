interface Menu {
  title?: string;
  icon?: string;
  isActive?: boolean;
  route?: string;
}
interface IMenu extends Menu {
  children?: IMenu[];
}
