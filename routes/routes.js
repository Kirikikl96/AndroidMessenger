var requests = require('config/requests');
var request = require('request');

module.exports = function(app){

	app.get('/', function(req, res){
		res.end("AndroidMessenger");
	});

	app.post('/login', function(req, res){
		var name = req.body.name;
		var mobno = req.body.mobno;
		var regid = req.body.regid;

		requests.login(name, mobno, regid, function(found){
			console.log(found);
			res.json(found);
		});
	});

	app.post('/send', function(req, res){
        var fromu = req.body.fromu;
        var fromn = req.body.fromn;
        var to = req.body.to;
        var msg = req.body.msg;
 
 		requests.send(fromn, fromu, to, msg, function(found){
            console.log(found);
            res.json(found);
    	});
    });
 
    app.post('/getuser', function(req, res){
        var mobno = req.body.mobno;
 
        requests.getuser(mobno, function(found){
            console.log(found);
            res.json(found);
    	});
    });
 
    app.post('/logout', function(req, res){
        var mobno = req.body.mobno;
 
 		requests.removeuser(mobno, function(found){
            console.log(found);
            res.json(found);
    	});
    });
}