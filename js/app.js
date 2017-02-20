var App = (function(){


	/*
	 * GLOBAL main nav
	 */
	var nav = {
		home: {text: "Home", href: "index.html", type: "text/html"}
		, portfolio: {text: "Portfolio", href: "portfolio.html", type: "text/html"}
		, about: {text: "About", href: "about.html", type: "text/html"}
		, contact: {text: "Contact", href: "contact.html", type: "text/html"}
	}	

	/**
	 * render nav main
	 */
	function nav()
	{

	}

	/**
	 * ajax requests
	 */
	function request(params)
	{
		var xmlhttp
		, key
		, args = {
			method: "GET"
			, url: "", async: true
			, user: null, pass: null
			, success: function() {}
		};
		for (key in args) {
			if (params[key]) {
				args[key] = params[key];
			}
		}
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				if (args.success) {
					args.success(this.response, this);
				}
			}
		};  
		xmlhttp.open(args.method, args.url, args.async, args.user, args.pass);
		xmlhttp.send();
	}


	/** 
	 * utility for render a object using a template.
	 */
	function render  (object, template, keys) {
		keys = keys || [];
		if (keys.length === 0) {
			for(var key in object) {
				keys.push(key);
			}	
		}
		for (var i=0; i<keys.length; i++) {
			var key = keys[i];
			var mark = new RegExp("%" + key + "%", "gi")
			var value = object[key];
			template = template.replace(mark, value);
		}
		return template;
	};

	/**
	 * export
	 */
	return {
		render: function(o, t, k) {return render(o, t, k);}
		, request: function(p) {return request(p);}
	}

})();

console.log(App);