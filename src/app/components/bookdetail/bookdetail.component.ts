import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-bookdetail',
  imports: [CommonModule],
  templateUrl: './bookdetail.component.html',
  styleUrl: './bookdetail.component.css'
})
export class BookdetailComponent
{
  libro!:Book;

  constructor(private route:ActivatedRoute, private router:Router, private bookService: BookService)
  {
    bookService.getOne(+this.route.snapshot.params['id']).subscribe({
      next: r => this.libro=r,
      error: e => alert("Errore")
    });
  }

  deleteBook()
  {
    this.bookService.delete(this.libro.id).subscribe({
      next: r => this.router.navigate(['']),
      error: e => alert("Errore")
    });
  }
}
