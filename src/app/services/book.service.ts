import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }


  /*private library:Book[] = [
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
  ];*/

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

  delete(id:number)
  {
    return this.http.delete(environment.apiURL+`/libri/${id}`);
  }

  add(b:Book)
  {
    return this.http.post<Book>(environment.apiURL+`/libri/`,b);
  }

  update(b:Book)
  {
    return this.http.put<Book>(environment.apiURL+`/libri/${b.id}`,b);
  }

  getAuthors():Observable<string[]>
  {
    return this.http.get<string[]>(environment.apiURL+"/autori");
  }

  getCategories():Observable<string[]>
  {
    return this.http.get<string[]>(environment.apiURL+"/generi");
  }

  getReadingStates():Observable<string[]>
  {
    return this.http.get<string[]>(environment.apiURL+"/statilettura");
  }

  getGoogleBooks(isbn:string)
  {
    //return this.http.get(environment.googleBooksAPIURL+isbn);
    return this.http.get<Book>(environment.googleBooksAPIURL+isbn)
    .pipe(
      map( (r:any) => r.items.map( (item:any) => {
        return {
          id:0,
          isbn:isbn,
          title:item.volumeInfo.title,
          authors:item.volumeInfo.authors,
          description:item.volumeInfo.description,
          categories:item.volumeInfo.categories,
          image:item.volumeInfo.imageLinks.thumbnail,
          stars:0,
          readingState:"Da Leggere"
        }
      }))
    )
  };
}
