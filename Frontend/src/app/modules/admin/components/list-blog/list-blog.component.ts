import { Component, OnInit } from '@angular/core';
import { blogs_model } from 'src/app/components/model/blogs';
import { BlogService } from 'src/app/services/blog.service';
import { ajoutblog } from '../sidebar/nav-data';


@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {
  datarec = ajoutblog;
  public title: string;
  public list: blogs_model[];
  idt:any;
  
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlog().subscribe((d)=>{
      this.list=d;
      console.log(d);
    })  
   
  }

  deleteBlog(blog:blogs_model) {
    //this.idt=this.ac.snapshot.params['id'];
    console.log(blog.idB)
    this.blogService.deleteBlog(blog.idB).subscribe(()=>{
    console.log('remouved')});
  }



  // deleteBlog(blog:Blog) {
  //   let i= this.list.indexOf(blog);
  //   if(i!=-1){
  //     //cnx to backend service/api
  //     this.blogService.deleteBlog(blog.id).subscribe(
  //       ()=> this.list.splice(i,1)
  //     )

  //   }
  // }



  updateBlog(){

  }


}
