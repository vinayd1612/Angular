import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
cid:any;
data:any;
  constructor(private service:CommentService,private router:Router) { }

  ngOnInit(): void {
  }
  deleteComments()
  {
      this.service.deleteCommentbyCid(this.cid).subscribe( response=>{
        this.data=response;
        console.log(response);
      }  );
  }

}
