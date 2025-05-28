import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  private library:Book[] = [
    {
      id:1, isbn:'123456',title:'Blue Tango',authors:['Paolo Roversi'],
      categories:['Giallo'],image:'http://books.google.com/books/content?id=PJFEDwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api&#39;',
      description: 'lorem ipsum', stars:0, readingState:'Da Leggere'
    },
    {
      id:2, isbn:'78901234',title:'Eruption',authors:['James Patterson','Michael Crichton'],
      categories:['Azione'],image:'http://books.google.com/books/content?id=o9AKEQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api&#39;',
      description: 'lorem ipsum', stars:3, readingState:'Da Leggere'
    }
  ];

  getAll(filtroAutore:string, filtroCategorie:string):Observable<Book[]>
  {
    var URL=environment.apiURL+"/libri";

    let filtri="";
    if(filtroAutore!="-" && filtroAutore!="") filtri+=`?author=${filtroAutore}`;

    if(filtroCategorie!="-" && filtroCategorie!="") 
    {
      if(filtri!="") filtri+="&";
      filtri+=`?category=${filtroCategorie}`;
    }

    if(filtri!="") URL+=filtri;

    return this.http.get<Book[]>(URL);
  }

  getOne(id:number):Observable<Book>
  {
    return this.http.get<Book>(environment.apiURL+`/libri/${id}`);
  }

  delete(id:number):void
  {

  }

  add(b:Book):void
  {

  }

  update(b:Book):void
  {

  }

  getAuthors():Observable<string[]>
  {
    return this.http.get<string[]>(environment.apiURL+"/autori");
  }

  getCategories():Observable<string[]>
  {
    return this.http.get<string[]>(environment.apiURL+"/generi");
  }
}
