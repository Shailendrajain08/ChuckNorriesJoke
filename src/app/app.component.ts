import { Component, OnInit } from '@angular/core';
import { AtmanaApiService } from './atmana-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'atmana';

  constructor(private atS: AtmanaApiService) {

  }
  categories: string[] = [];
  category: string = '';
  isCategorySelected: boolean = false;
  jokeInfo: any;

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.atS.getCategory().subscribe((cat: any) => {
      this.categories = cat;
      console.log(this.categories);
    }, err => {
      console.log(err);
    });
  }

  selectCategory(cat: string) {
    this.isCategorySelected = false;
    this.category = cat;
    this.atS.getJokes(cat).subscribe((joke: any) => {
      this.jokeInfo = joke;
      this.category = cat;
      this.isCategorySelected = true;
    }, error => {
      console.log(error);
    })
  }

  getNewJoke() {
    this.atS.getJokes(this.category).subscribe((joke: any) => {
      this.jokeInfo = joke;
    }, error => {
      console.log(error);
    })
  }
}
