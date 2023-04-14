import { IconType } from "@icon-park/vue-next/es/all";

interface Menu {
  title?: string;
  // icon?: string;
  icon: IconType;
  isActive?: boolean;
  route?: string;
}
interface IMenu extends Menu {
  children?: IMenu[];
}
