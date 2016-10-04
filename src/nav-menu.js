import "bootstrap";
import {bindable} from "aurelia-framework";
export class NavMenu {

  /* start-non-standard */
  @bindable router = null;
  @bindable user = null;
  @bindable logout = null;
  /* end-non-standard */

}