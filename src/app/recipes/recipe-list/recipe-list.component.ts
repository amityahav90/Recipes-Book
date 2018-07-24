import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'this is a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}