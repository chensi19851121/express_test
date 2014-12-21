exports.show_info = function(req, res, next){
	var tid = req.params.tid;
	console.log(tid);
	res.render('test/index', { tid : tid });
}