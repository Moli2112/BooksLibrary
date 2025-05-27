import { Component, Input } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-bookcard',
  imports: [],
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.css'
})
export class BookcardComponent {
  @Input() libro!:Book;
}
