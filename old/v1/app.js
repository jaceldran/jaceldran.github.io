
/*var App = (function(){

	return {
		request: function(params) {request(params);}
		, renderrequest: function(params) {request(params);}
	}

})();*/


	/*
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

	/*
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