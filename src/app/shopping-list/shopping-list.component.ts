import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingerdientChanged
      .subscribe( // every time that ingredients array in the service is changing, this subscription will update the ingredients array in this component.
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
}
