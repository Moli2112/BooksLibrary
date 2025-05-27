import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';
import { BookcardComponent } from "../bookcard/bookcard.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BookcardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  libreria:Book[] = [];
  cardView=true;

  constructor(private bookService:BookService){
    this.libreria=this.bookService.getAll();
  }

  setCardView(v:boolean):void {
    this.cardView = v;
  }
}
