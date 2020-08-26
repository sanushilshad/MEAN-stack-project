import { Component, OnInit } from '@angular/core';
import {Password} from'src/app/password';
import{ WriteService } from '../../write.service';
import{Search2} from 'src/app/search2';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private _write : WriteService) { }
  delete=new Password('','');
  result: Search2[];
  result3=new Search2('');
  ngOnInit() {
  }


  onsubmit(){
    this. _write.delete(this.delete)
    .subscribe(
       (data)=> {


        if(data!=null){
          console.log(data.txt_comments);
         alert(data.txt_comments);
        
        }
        else{
        
        alert('FILE IS DELETED');
        console.log("FILE IS DELETED")
     
        

    }
        
        
      console.log(this.result=JSON.parse(JSON.stringify(data)))});
      
  }
}
