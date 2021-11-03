import {ItemCount} from "./groceryValueObjects";
import {Name} from "../../core/value_objects"
class GroceryItem{
    constructor(itemCount,itemName){
      this.itemCount = ItemCount(itemCount);
      this.itemName = Name(itemName)
    }
}
console.log(new GroceryItem(20,'Saurav'));