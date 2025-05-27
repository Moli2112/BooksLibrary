import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/Book';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-bookdetail',
  imports: [CommonModule],
  templateUrl: './bookdetail.component.html',
  styleUrl: './bookdetail.component.css'
})
export class BookdetailComponent {
  libro:Book|undefined;

  constructor(private route:ActivatedRoute, private bookService: BookService)
  {
    this.libro=bookService.getOne(this.route.snapshot.params['id']);
  }
}
