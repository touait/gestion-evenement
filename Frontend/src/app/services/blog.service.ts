import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogs_model } from '../components/model/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 
  constructor(private httpService: HttpClient) { }

  //form the backend Side
  getAllBlog(){
    //return this.httpService.get<Blog[]>(this.url);
    return this.httpService.get<blogs_model[]>('http://localhost:3000/blog/afficher');
  }
  getBlogId(idB:any){
    return this.httpService.get<blogs_model>('http://localhost:3000/blog/afficher'+idB);
  }
  addBlog(data:blogs_model){
    return this.httpService.post('http://localhost:3000/blog/ajouter',data);
  }
  deleteBlog(idB:Number){
    return this.httpService.delete('http://localhost:3000/blog/delete/'+idB);
  }
 
}
