
/**
 * genera el contenido para #timeline-experience
 */

	var data = [
	//	{date: 2015, position: 'Programa ejecutivo en Corporate Performance Management (inteligencia de negocio)', location: 'ENAE Business School', url: ''}
		{date: 2015, position: 'Desarrollo de servicios en la nube con HTML5, Javascript y Node.js', location:'Universidad Politécnica de Madrid', url: ''}
		, {date: 2014, position: 'Desarrollo en HTML5, CSS Y Javascript de WebApps, incluyendo móviles FirefoxOS', location:'Universidad Politécnica de Madrid', url: ''}
		, {date: 2014, position: 'Agilidad y Lean', location:'Universidad Rey Juan Carlos', url: ''}
	//	, {date: 2004, position: 'Curso Superior de Publicidad', location:'ENAE Business School', url: ''}
		, {date: 2005, position: 'IBM Certified Lotus Specialist', location:'IBM', url: ''}
		, {date: 2002, position: 'Diseño con Freehand', location:'Formato Formación SL', url: ''}
		//, {date: 2002, position: 'Programación Flash MX Avanzado', location:'Crea Formación Multimedia ', url: ''}
	//	, {date: 1995, position: 'Análisis y Control de la Gestión Empresarial', location:'ENAE Business School ', url: ''}
	//	, {date: 1984, position: 'Técnico Superior Informática', location:'Instituto Politécnico de Cartagena ', url: ''}
	//	, {date: 1982, position: 'COU & Selectividad', location:'Isaac Peral de Cartagena ', url: ''}
	];

	var r = [];
	r.push('<h2>Otros cursos</h2>');
	r.push('<table class="education">');
	for (var i=0; i<data.length; i++) {
		var item = data[i];
		r.push(
			'<tr>'
			+ '<td class="date">' + item.date + '</td>'
			//+ '<td class="dot-container"><i class="dot"></i></td>'
			+ '<td>'
			+ '<div class="position">' 
//				+ item.date + ' ' 
				+ item.position + '</div>'
			+ '<div class="location">' + item.location + '</div>'
			+ '<div class="url">' + item.url + '</div>'
			+'</td>'
			+ '</tr>'
		);
	}
	r.push('</table>');
	document.getElementById('education-other').innerHTML = r.join('\n');