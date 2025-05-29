import { CartPageActions } from "../components/CartPageActions";

export class CartPage {
  static getCartPageActions() {
    return new CartPageActions();
  }
}
