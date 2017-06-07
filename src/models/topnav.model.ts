/* tslint:disable max-classes-per-file */
class NavItem {
  text: string;
  url: string;
  internal: boolean;
  important: boolean;
}

export class TopnavData {
  logo: string;
  name: string;
  links: NavItem[];
}
