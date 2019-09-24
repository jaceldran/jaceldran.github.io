/**
 * genera el contenido para #timeline-experience
 */

var data = [
	// {
	// 	date: "desde 2009",
	// 	position: "Profesional independiente",
	// 	location: "Con la denominación Zentric",
	// 	url: "http://zentric.es"
	// },
	{
		date: "2019",
		position: "Desarrollador Frontend",
		location: "Proasistech SL",
		url: "http://proasistech.com"
	},
	{
		date: "2018",
		position: "Programador Web",
		location: "OhMycode",
		url: "http://ohmycode.cat"
	},
	{
		date: "2004",
		position: "Analista Programador Web",
		location: "ISOTADER GRUPO",
		url: "http://www.isotader.es"
	},
	// {
	// 	date: "desde 2000",
	// 	position: "Desarrollador Web",
	// 	location: "ENAE Business School",
	// 	url: "http://enae.es"
	// },
	{
		date: "1999",
		position: "Programador Notes/Domino y Web",
		//position: "Centro de Servicios Multimedia",
		location: "Fundación Universidad Empresa Murcia",
		url: "http://fuem.es"
	}
	//, {date: 1993, position: 'Jefe de Administración', location:'TRANSMASA (Obras Públicas)', url: ''}
	//, {date: 1984, position: 'Responsable de Contabilidad', location:'ALMUSA (Producción Químico-Farmacéutica)', url: ''}
];

var r = [];
r.push(`
	<h2>Experiencia</h2>
	<p>Profesional independiente desde 2009 (<a href="http://zentric.es">http://zentric.es</a>). </p>
	<p>Colaboraciones abiertas:</p>
`);
r.push('<table class="experience">');
for (var i = 0; i < data.length; i++) {
	var item = data[i];
	r.push(
		"<tr>" +
			'<td class="date">' +
			item.date +
			"</td>" +
			'<td class="dot-container"><i class="dot"></i></td>' +
			'<td class="no-wrap">' +
			`
				<div class="position">${item.position}</div>
				<div class="location">${item.location}</div>
			` +
			// '<div class="location">' +
			// item.location +
			// "</div>" +
			// '<div class="position">' +
			// item.position +
			// "</div>" +
			'<div class="url">' +
			'<a href="' +
			item.url +
			'" target="_blank">' +
			item.url +
			"</a>" +
			"</div>" +
			"</td>" +
			"</tr>"
	);
}
r.push("</table>");
document.getElementById("timeline-experience").innerHTML = r.join("\n");
