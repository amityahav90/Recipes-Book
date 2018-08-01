import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pizza Alfredo', 'Tasty italian pizza!', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg'),
    new Recipe('Baked Salmon Fish', 'Baked salmon with garlic and butter', 'https://c1.staticflickr.com/4/3862/14395796846_f6e5558384_b.jpg')
  ];

  constructor() { }

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
