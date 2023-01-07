import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { PubliciteService } from 'src/app/services/publicite.service';
import { blogs_model } from '../model/blogs';
import { Publicite } from '../model/publicite';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  public list: blogs_model[];
  public liste: Publicite[];

  idB:any;
blog: any;
  constructor(private blogService: BlogService , 
    private publiciteService: PubliciteService,
    private http: HttpClient,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  //   this.blogService.getAllBlog().subscribe(
  //     (data:blogs_model[])=>this.list=data
  //  );

   this.idB=this.route.snapshot.params['id'];
   console.log(this.idB);
   this.blog=new blogs_model;
   this.blogService.getBlogId(this.idB).subscribe(
    (data)=>this.blog=data
   )
 

   this.publiciteService.getAllPublicite().subscribe(
    (data:Publicite[])=>{this.liste=data}
 );
  }



}
