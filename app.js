var http=require('http')
const fs = require('fs')

const server = http.createServer(function(req,res){
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        fs.createReadStream('form.html').pipe(res);

    }
    else if(req.url === '/register' && req.method ==='POST') {
        var recData = '';
        req.on('data',function(value){
            recData += value;
        })
        req.on('end',function(){
            var inputdata = new URLSearchParams(recData);
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write('<table color="green" border=1 cellspacing=0 align="center"><tr><td>Field Name</th><th>value</th></tr>')
            res.write('<tr><td>"Name"</td><td>'+ inputdata.get('username') +'</td></tr>')
            res.write('<tr><td>"password"</td><td>' + inputdata.get('userpassword') +'</td></tr>')
            res.write('<tr><td>"Age"</td><td>' + inputdata.get('userage') +'</td></tr>')
            res.write('<tr><td>"Mobile Number"</td><td>' + inputdata.get('usernumber') +'</td></tr>')
            res.write('<tr><td>"Email"</td><td>' + inputdata.get('usermail') +'</td></tr>')
            res.write('<tr><td>"Gender"</td><td>' + inputdata.get('usergender') +'</td></tr>')
            res.write('<tr><td>"State"</td><td>'+ inputdata.get('userstate') +'</td></tr></table>')
            res.end();
        });  
      
    }

});
server.listen(7000,function(){
    console.log('server started at 7000');

})