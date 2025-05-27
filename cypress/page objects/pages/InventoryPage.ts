import { InventoryPageActions } from "../components/InventoryPageActions";


export class InventoryPage {
  static getInventoryPageActions() {
    return new InventoryPageActions();
  }
}