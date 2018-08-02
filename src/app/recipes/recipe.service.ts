import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza Alfredo',
      'Tasty italian pizza!',
      'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Mozzarella', 1)
      ]),
    new Recipe(
      'Baked Salmon Fish',
      'Baked salmon with garlic and butter',
      'https://c1.staticflickr.com/4/3862/14395796846_f6e5558384_b.jpg',
      [
        new Ingredient('Salmon', 1),
        new Ingredient('Garlic', 1),
        new Ingredient('Lemon', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); // Slice is for return a copy of the original recipes array.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
