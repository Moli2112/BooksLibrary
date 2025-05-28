import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';
import { BookcardComponent } from "../bookcard/bookcard.component";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BookcardComponent, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  libreria:Book[] = [];
  autori:string[] = [];
  categorie:string[] = [];
  cardView=true;

  filtroAutore:string="-";
  filtroCategorie:string="-";

  constructor(private bookService:BookService){
    this.bookService.getAuthors().subscribe(r => this.autori=r);
    this.bookService.getCategories().subscribe(r => this.categorie=r);
    this.loadData();
  }

  setCardView(v:boolean):void
  {
    this.cardView = v;
  }

  loadData()
  {
    this.bookService.getAll(this.filtroAutore,this.filtroCategorie).subscribe(r => {r.forEach(b => b.image=b.image?.replace("http","https")); this.libreria=r})

                  //.filter( b => (this.filtroAutore=="-" || b.authors.includes(this.filtroAutore)) 
                  //&& (this.filtroCategorie=="-" || b.categories.includes(this.filtroCategorie)));
  }
}
