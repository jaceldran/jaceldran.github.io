
/**
 * about & contact
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