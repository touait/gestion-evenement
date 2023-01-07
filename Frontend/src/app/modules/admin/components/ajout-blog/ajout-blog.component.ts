import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blogs_model } from 'src/app/components/model/blogs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-ajout-blog',
  templateUrl: './ajout-blog.component.html',
  styleUrls: ['./ajout-blog.component.css']
})
export class AjoutBlogComponent implements OnInit {
 //declaration file uploed
 format:any;
 url:any;
 //declaration crud
 blog: blogs_model;
 title: String;
 public data: any;
 //Router pour la navigation
 //Activated pour lire les paramètres dans l url actif
  constructor(private blogService:BlogService,
    private route:Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {  
      //add a new blog
   
  }

  save(data:any){
   
     this.blogService.addBlog(data).subscribe(
      ()=>{console.log(data);
      })
      console.log("formulaire:"+ data)
 
   }
   
// //uploed videos ou image
//    onSelectFile(event:any) {
//     const file = event.target.files && event.target.files[0];
//     if (file) {
//       var reader = new FileReader();
//       reader.readAsDataURL(file);
//       if(file.type.indexOf('image')> -1){
//         this.format = 'image';
//       } else if(file.type.indexOf('video')> -1){
//         this.format = 'video';
//       }
//       reader.onload = (event) => {
//         this.url = (<FileReader>event.target).result;
//       }
//     }
//   }
}
