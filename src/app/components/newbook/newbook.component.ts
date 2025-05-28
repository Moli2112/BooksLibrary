import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-newbook',
  imports: [FormsModule, CommonModule],
  templateUrl: './newbook.component.html',
  styleUrl: './newbook.component.css'
})
export class NewbookComponent {
  isbn!:string;
  libri:Book[]=[];
  constructor(private bookService: BookService) {}

  cerca()
  {
    this.bookService.getGoogleBooks(this.isbn).subscribe(r => {
      this.libri=[];
      let json:any=r;
      for(let i=0;i<json.totalItems;i++)
      {
        let libro:any=json.items[i].volumeInfo;
        this.libri.push({
          id:0,
          isbn:this.isbn,
          title:libro.title,
          authors:libro.authors,
          description:libro.description,
          categories:libro.categories,
          image:libro.imageLinks.thumbnail,
          stars:0,
          readingState:"Da Leggere"
        });
      }
    });
  }

  Aggiungi(b:Book)
  {
      this.bookService.add(b).subscribe({
      next: r => alert("Libro aggiunto con successo"),
      error: e => alert("Errore")
    });
  }
}
