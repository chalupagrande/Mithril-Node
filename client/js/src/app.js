


var app = {
	controller: function(){},
	view : function(){
		return m('p','This is the Home Page!');
	}
}

var Login = {
	controller: function(){},
	view: function(){
		return m('p','LOGIN PAGE')
	}
}

m.route.mode = "hash"
m.route(document.getElementById('app'), "/", {
		"/": app,
    "/login": Login
});
