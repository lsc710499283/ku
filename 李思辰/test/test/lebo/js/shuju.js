var mongodb=require('mongodb');

var server = new mongodb.Server('127.0.0.1',27017,{auto_reconnect:true});

var db = new mongodb.Db("kaoshi",server,{safe:true});

var ssr='';
var ssid = [];
var sstitle = [];
var ssauthor = [];
var sstuokouxiu = [];
var sspic_url = [];
db.open(function(err,db){
	if(err){}else{
		db.collection('json',{safe:true},function(err,con){
			if(err){}else{
				var str = con.find({}).toArray(function(err,data){
					if(err){}else{
						data.forEach(function(v){
							ssid.push(v.id);
							sstitle.push(v.title);
							ssauthor.push(v.author);
							sstuokouxiu.push(v.tuokouxiu);
							sspic_url.push(v.pic_url);
						})
						ssid=ssid.toString();
						sstitle=sstitle.toString();
						ssauthor=ssauthor.toString();
						sstuokouxiu=sstuokouxiu.toString();
						sspic_url=sspic_url.toString();
						ssr=sspic_url+"="+sstuokouxiu+"="+ssauthor+"="+sstitle+"="+ssid;
	var http=require('http');
	var url = require('url');
	http.createServer((req,res)=>{
		res.writeHead(200,{'content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':"*"})
		if(req.url!='/favicon.ico'){
			res.write(ssr);
			res.end()
		} 
	}).listen(4399)
					}
				});
			}
		})
	}
})

