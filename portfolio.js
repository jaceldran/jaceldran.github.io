
/**
 * portfolio
 */
 	var clientes = [
	 	{date: '2013-presente'
		 , name: '<p class="name">Campus Virtual ENAE</p><img src="logo-enae.png">'
		 , desc: 'Gestión contenidos, exámenes, evaluaciones y comunicaciones entre docentes, estudiantes y el personal de ENAE.'
		 , img: 'captura-cvirtual.png'
		 , tech: 'PHP MySQL Javascript CSS<br>Intercambio de datos con Notes/Domino'
		 , link: '<div class="link-text">Sitio Web de ENAE Business School<div>'
		 	+ '<a href="http://enae.es">http://enae.es</a>'
		}
		, {date: '2004-presente'
		 , name: '<p class="name">iT@der</p><img src="logo-itader.png">'
		 , desc: 'iT@der es un producto de ISOTADER GRUPO para la gestión de la excelencia. Es un completo gestor de Sistemas de Calidad ISO.'
		 , img: 'captura-itader.png'
		 , tech: 'Notes/Domino Javascript HTML CSS'
		 , link: '<div class="link-text">Ficha de producto</div>'
		 	+ '<a href="http://itader.isotader.es">http://itader.isotader.es</a>'		 
		}		
		, {date: '2004-presente'
		 , name: '<p class="name">Bolsa de empleo ENAE</p><img src="logo-fuem.png">'
		 , desc: 'Herramienta para ofertantes y demandantes de empleo.'
		 , img: 'captura-empleo.png'
		 , tech: 'PHP MySQL Javascript CSS<br>Intercambio de datos con Notes/Domino'
		 , link: '<div class="link-text">Acceso al servicio de empleo<div>'
		 	+ '<a href="http://empleo.enae.es">http://empleo.enae.es/</a>'		 
		}		
	 ];
 	var personales = [
		 {date: '2016'
		 , name: '<p class="name">COLOR QUOTES</p><img src="logo-color-quotes.png">'
		 , desc: 'Una forma diferente para leer frases célebres, mediante un reproductor. Porque hay palabras que valen más que una imagen.'
		 , img: 'captura-color-quotes.png'
		 , tech: 'PHP MySQL Javascript HTML CSS'
		 , link: '<a href="http://colorquot.es">http://colorquot.es</a>'		 
		}
		, {date: '2013'
		 , name: '<p class="name">ABACOM</p><img src="logo-abacom.png">'
		 , desc: 'Una contabilidad para la gestión económica de una comunidad de propietarios. Automatización de generación recibos y reclamaciones de deuda pendiente.'
		 , img: 'captura-abacom.png'
		 , tech: 'PHP MySQL Javascript HTML CSS'
		 , link: '<a href="http://sonimatec.com/2016/05/17/abacom">http://sonimatec.com/2016/05/17/abacom</a>'		 
		}
		, {date: '2016'
		 , name: '<p class="name">FLINK</p><img src="logo-flink.png">'
		 , desc: 'Framework Javascript. Herramienta para crear aplicaciones Javascript "residentes".'
		 , img: 'captura-flink.png'
		 , tech: 'Javascript HTML CSS'
		 , link: '<div class="link-text">Demo (en inglés)</div>'
		 	+ '<a href="http://cdn.zentric.es/flink/demo">http://cdn.zentric.es/flink/demo</a>'		 
		}		
	 ];


	function render(data) {
		var r = [];
		r.push('<table class="portfolio">');
		for (var i=0; i<data.length; i++) {
			var item = data[i];
			r.push(
				'<tr>'

				+ '<td class="card">' 
				+ item.name
				+ '<div class="tech">' + item.tech + '</div>'
				+ '<p>' + item.desc + '</p>'
				+ '<p>' + item.link + '</p>'
				+ '</td>'

				+ '<td class="img">' + '<img src="' + item.img + '">'+ '</td>'

				+ '</tr>'
			);
		}
		r.push('</table>');
		return  r.join('\n');
	}

	var targetc = document.getElementById('portfolio-clientes');
	if (targetc) {targetc.innerHTML = render(clientes);}

	var targetp = document.getElementById('portfolio-personales');
	if (targetp) {targetp.innerHTML = render(personales);}

	//document.getElementById('portfolio-clientes').innerHTML=render(clientes);
	//document.getElementById('portfolio-personales').innerHTML=render(personales);