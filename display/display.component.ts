import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';
import { CommentsM } from '../CommentsM';
import { DateServiceService } from '../date-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  date:Date | undefined;
  constructor(private service:CommentService) { }
  cmts:any;
  ngOnInit(): void {
  this.service.getAllComments().subscribe( response =>{
    this.cmts=response;
    console.log(response);
  })    
}

 
}
