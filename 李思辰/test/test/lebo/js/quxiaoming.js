var mongodb = require('mongodb');

var server = new mongodb.Server('127.0.0.1',27017,{auto_reconnect:true})

var db = new mongodb.Db('abc',server,{safe:true})

db.open(function(err,db){
	if(err){}
	else{db.collection('abc',{safe:true},function(err,con){
		if(err){}
		else{var str= con.find({}).toArray(function(err,data){
			if(err){}
			else{
				data.forEach((v)=>{
					console.log(v.name)
				})
			}
		})}
	})}
})
