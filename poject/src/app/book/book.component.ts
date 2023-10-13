import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  books: Book[];
  book: Book;

  constructor(){
    this.book = {title: "TITLE1", pageCount: 100};
    this.books = [
      {title: "TITLE1", pageCount: 100},
      {title: "TITLE2", pageCount: 200},
      {title: "TITLE3", pageCount: 300},
    ]
  }
}

interface Book{
  title: string;
  pageCount: number
}

