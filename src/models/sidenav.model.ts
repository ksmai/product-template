/* tslint:disable max-classes-per-file */
class NavItem {
  url: string;
  text: string;
  internal: boolean;
  important: boolean;
}

export class SidenavData {
  links: NavItem[];
}
