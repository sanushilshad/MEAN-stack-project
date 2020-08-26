import { Component, OnInit } from '@angular/core';
import { FileName } from 'src/app/file-name';
import { HttpClientModule } from '@angular/common/http'; 
import{ WriteService } from '../../write.service';
import{Search} from 'src/app/search';
import { registerEscClick } from 'ngx-bootstrap/utils/triggers';


@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css','../../../../bootstrap-4.3.1-dist/css/bootstrap.min.css']
})
export class WriteComponent implements OnInit {

  usermodel=new FileName('','','',);
  result=new Search ('');
  
  constructor(private _write : WriteService) { }

  ngOnInit() {
  }


onsubmit(){
  this. _write.writes(this.usermodel)
  .subscribe(
     (data)=> {
      
      alert(data.f_names)
    console.log(this.result=JSON.parse(JSON.stringify(data)))});
    
    
   
  

}
clear(){

  this.usermodel.f_names='';
  this.usermodel.txt_comments='';

}
}