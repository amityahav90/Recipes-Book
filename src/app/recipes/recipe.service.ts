import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
