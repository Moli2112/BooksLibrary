import { Component, Input } from '@angular/core';
import { Book } from '../../models/Book';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bookcard',
  imports: [RouterModule],
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.css'
})
export class BookcardComponent {
  @Input() libro!:Book;
}
