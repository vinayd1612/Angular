import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { CommentsM } from '../CommentsM';
import { Data } from '../Data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  cid=0;
  pid=0;
  commenter="";
  comment="";
  msg="";
  f:boolean=false;

  formdata:FormGroup=new FormGroup({cidd:new FormControl("CId",[Validators.required,Validators.minLength(3)]),
  commenterr:new FormControl("",[Validators.required,Validators.minLength(1)]),
  pidd:new FormControl("PId",Validators.minLength(3)),
  commentt:new FormControl("",Validators.minLength(10))
});



  constructor(private service:CommentService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(data:CommentsM)
  {
    
    if(this.formdata.valid)
    {
    this.cid=this.formdata.value['cidd'];
    this.pid=this.formdata.value['pidd'];
    this.commenter=this.formdata.value['commenterr'];
    this.comment=this.formdata.value['commentt'];
    this.insertComment();
    this.msg="Comment Added Successfully";
    this.f=true;
    }
    else
    {
      this.f=false;
    this.msg="Insert proper values";
  }
  }

  insertComment(){

    let cmt : CommentsM = {
      "cid":this.cid,
      "commenter":this.commenter,
      "pid":this.pid,
      "comment":this.comment
       }
    console.log(this.cid+" "+this.commenter+" "+this.pid+" "+this.comment);
      this.service.registerComment(cmt);
      //this.router.navigateByUrl("display");

  }

}
