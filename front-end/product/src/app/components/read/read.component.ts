import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import{ WriteService } from '../../write.service';
import { FileName } from 'src/app/file-name';
import { Search } from 'src/app/search';
import { $ } from 'protractor';
import{Search2} from 'src/app/search2';
import {Password} from'src/app/password';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css','../../../../bootstrap-4.3.1-dist/css/bootstrap.min.css']
})
export class ReadComponent implements OnInit {
  

  constructor(private _write : WriteService) { }
  usermodel=new FileName('','','');
  search=new Search('');
  result:Search2 [];
  result2:Search2 [];
  result3=new Search2('');
  result4:Search2 [];
  bool=true;
  ss=true;
  d=this.search.f_names;
  password=new Password('','');
  ds=true;
  gs=true
  fs=true;
  
 
  
  ngOnInit() {
  
  }
  onsubmit(){
    this.password.f_names=this.search.f_names;
    this._write.read(this.search)
    .subscribe(
      (data)=> {
        if(data==null){
          this.result3.txt_comments=null;
          this.bool=true;
          alert("FILE DOES NOT EXIST")
        }
        else{
        
        for(let i of data)
      {
        console.log(i,'ll')
      
        this.result3.txt_comments=i.txt_comments;
        console.log(this.result3);
        
          this.bool=true;
          this.ss=false;
          this.ds=false;
          this.gs=false;
          
          
        

      }
    }

      this.result=JSON.parse(JSON.stringify(data))});
      console.log(this.result,'l');
     
     

    
    
    }

    edit(){
        this.usermodel.txt_comments=this.result3.txt_comments;
        this.usermodel.f_names=this.search.f_names
        console.log(this.usermodel.f_names)
        console.log(this.usermodel.txt_comments);
          console.log(this.usermodel);
          console.log(this.result3.txt_comments,'s')

        this. _write.update(this.usermodel)
        .subscribe(
         (data)=> {
        
         alert(data.message)
         console.log(this.result2=JSON.parse(JSON.stringify(data)))});
         this.fs=false
    
    }
  
  

    copyMessage(val: string=this.result3.txt_comments){
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
    }  
    

    allowedit(){
      
      

      this. _write.edit(this.password)
  .subscribe(
     (data)=> {
      if(data==null){
        
        this.bool=this.ss;
      }
      
      


  
    console.log(this.result4=JSON.parse(JSON.stringify(data)))});
    this.fs=false;
    }
 
  
}
