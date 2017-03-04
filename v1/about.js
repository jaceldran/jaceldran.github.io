
/**
 * about & contact
 * functiona ok pero sin uso, los datos se han incluido en la página html.
 */


request ({
	url: 'about.html'
	, success: function (response) {
		document.getElementById('about').innerHTML = response;
	}
});

request ({
	url: 'contact.html'
	, success: function (response) {
		document.getElementById('contact').innerHTML = response;
	}
});