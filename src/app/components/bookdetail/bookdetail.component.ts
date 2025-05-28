import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-bookdetail',
  imports: [CommonModule, FormsModule],
  templateUrl: './bookdetail.component.html',
  styleUrl: './bookdetail.component.css'
})
export class BookdetailComponent
{
  libro!:Book;

  statiLettura:string[]=[];

  constructor(private route:ActivatedRoute, private router:Router, private bookService: BookService)
  {
    bookService.getReadingStates().subscribe(r => this.statiLettura=r);

    bookService.getOne(+this.route.snapshot.params['id']).subscribe({
      next: r => {r.image=r.image?.replace("http","https"), this.libro=r},
      error: e => alert("Errore")
    });
    //this.libro.image?.replace("http","https");
  }

  deleteBook()
  {
    this.bookService.delete(this.libro.id).subscribe({
      next: r => this.router.navigate(['']),
      error: e => alert("Errore")
    });
  }

  updateBook()
  {
    this.bookService.update(this.libro).subscribe();
  }
}
