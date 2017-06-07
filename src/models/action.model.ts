/* tslint:disable max-classes-per-file */

class Action {
  text: string;
  url: string;
  internal: boolean;
}

export class ActionData {
  title: string;
  actions: Action[];
}
