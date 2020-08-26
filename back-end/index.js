const express = require('express');
const cors = require('cors');
var bodyparser=require('body-parser');
const MongoClient=require('mongodb').MongoClient;
var mongoose=require('mongoose');
const path=require('path');
const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri, { useNewUrlParser: true });
var crypto=require('crypto');

/**mongoose.connect(uri, { useNewUrlParser: true });
var d1=mongoose.connection;
var schema=mongoose.Schema;
var schema1=new schema({
    f_names:String,
    txt_comments:String,
    password:String,
    saltSecret:String

})
var model=mongoose.model('model','schema1');
**/

var app = new express();
app.use(cors());
app.use(bodyparser.json());
const port=process.env.port || 3000;


app.listen(port,function(){
    console.log('server is running on localhost'+port);
});

app.get('/',function(req,res){
    
  res.send('Hello from server');
});



app.post('/writes',function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
   
      
        MongoClient.connect(uri, { useNewUrlParser: true }, function(err,client){
            if(err){
                  console.log(err);
                  return;
                  }


        db=client.db('test');
        if(req.body.f_names==""){
        res.send({f_names:"Enter File name"})
        }

        else{

        
        db.collection('filename').find({f_names:req.body.f_names}).toArray(function(err,result){
            

             if(result==0) {
                 console.log('it doesnot exist');
                 db.collection('filename').insertOne(req.body,function(err,result){
                    res.send({f_names:"File is created "});
                    if(err) console.error(err);
                    
           
                 });
            }   
            else if(result!=0){
                console.log('File already exist');
                res.send({f_names:"File alrady exists"});
               
            }    
        });
    }

});
});







    


app.post('/update',function(req,res){
        res.header("Access-Control-Allow-Origin", "*")
        res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        console.log(req.body);
       
      
          
            MongoClient.connect(uri, { useNewUrlParser: true }, function(err,client){
                if(err){
                      console.log(err);
                      return;
                      }
    
    
            db=client.db('test');
            
           
        db.collection('filename').updateOne({'f_names':req.body.f_names},{$set:{'txt_comments':req.body.txt_comments}});
        
    
    });

    res.send({message:"Updated successfully"})
    });



app.post('/read',function(req,res){
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        console.log(req.body);
        a=req.body.f_names;
        
       
          
            MongoClient.connect(uri, { useNewUrlParser: true }, function(err,client){
                db=client.db('test');
                db.collection('filename').find({f_names:req.body.f_names}).toArray(function(err,result){
                
    
                    if(result==0) {
                        console.log('it doesnot exist');
                        res.send(null);
                           
                    }
                    else if(result!=0){
                        console.log('File exists');
                        db.collection('filename').find({'f_names':a},{ projection:{txt_comments:1}}).toArray(function(err,result){
            
        
                            res.send(result);
                        });
                       
                    }  
                        
                   
                     
               });
            });



        });











        app.post('/edit',function(req,res){
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
            console.log(req.body);
            a=req.body.f_names;
            
           
              
                MongoClient.connect(uri,  { useNewUrlParser: true },function(err,client){
                    db=client.db('test');
                    db.collection('filename').find({f_names:req.body.f_names,password:req.body.password}).toArray(function(err,result){
                    
        
                        if(result==0) {
                            console.log('PASSWORD IS INCORRECT');
                            res.send({f_names:"PASSWORD IS INCORRECT"});
                               
                        }
                        else if(result!=0){
                            console.log('PASSWORD IS CORRECT');
                            res.send(null);
                    
                           
                        }  
                            
                       
                         
                   });
                });
    
 });
    

        


        

 app.post('/delete',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log(req.body);
    a=req.body.f_names;
    
   
      
        MongoClient.connect(uri,  { useNewUrlParser: true },function(err,client){
            db=client.db('test');
            db.collection('filename').find({f_names:req.body.f_names,password:req.body.password}).toArray(function(err,result){
            

                if(result==0) {
                    console.log("INCORRECT FILE NAME OR PASSWORD");
                    res.send({txt_comments:"INCORRECT FILE NAME OR PASSWORD"});
                       
                }
                else if(result!=0){
                    console.log('FILE IS DELETED');
                    db.collection('filename').remove({f_names:req.body.f_names,password:req.body.password});
                    res.send(null);
            
                   
                }  
                    
               
                 
           });
        });

});


