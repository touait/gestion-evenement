import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { PubliciteService } from 'src/app/services/publicite.service';
import { blogs_model } from '../model/blogs';
import { Publicite } from '../model/publicite';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public list: blogs_model[];
  public blig: blogs_model;
  public liste: Publicite[];
  constructor(private blogService: BlogService , 
    private publiciteService: PubliciteService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.blogService.getAllBlog().subscribe(
      (data:blogs_model[])=>this.list=data
   );

   this.publiciteService.getAllPublicite().subscribe(
    (data:Publicite[])=>{this.liste=data}
 );

  }

}
