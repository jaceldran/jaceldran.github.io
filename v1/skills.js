
	var data = [		
		{skill: 'PHP', score: 98}		
		, {skill: 'Lotus Notes/Domino - IBM <acronym title="Certified Lotus Specialist">CLS</acronym>', score: 98}		
		, {skill: 'HTML', score: 98}
		, {skill: 'Javascript/AJAX', score: 95}
		, {skill: 'CSS', score: 95}		
		, {skill: 'MySQL', score: 95}
	];

	var other = [
		'Análisis financiero'
		, 'Composer'
		, 'Contabilidad'
		, 'GIT'
		, 'Diseño adaptable/responsive'
		, 'Gestión documental'		
		, 'jQuery'
		, 'Kanban'
		, 'PHPUnit'
		, 'REST=REpresentational State Transfer'
		, 'SASS=Syntactically Awesome Stylesheets'
		, 'Scrum'
		, 'SOAP=Simple Object Access Protocol'		
		, 'Workflows'		
		, 'XML=eXtensible Markup Language'		
	];	
	other.sort();	
	other.unshift('Capacidad de aprendizaje');
	other.unshift('Autodidacta');

	// skills
	var r = [];
	r.push('<h2>Conocimientos</h2>');	
	for (var i=0; i<data.length; i++) {
		var item = data[i];
		r.push(
			'<div class="score-container">'
			+ '<div class="score" style="width:' + item.score + '%"></div>'
			+ '<span class="skill">' + item.skill + '</span>'
			+ '</div>'
		);
	}
	document.getElementById('skills-table').innerHTML = r.join('\n');

	// otros
	var r = [];
	r.push('');
	for (var i=0; i<other.length; i++) {
		var item = other[i];
		var parse = item.split('='); // mostrar como acronym
		if (parse.length===2) {
			item = '<acronym title="'+parse[1]+'">' + parse[0] + '</acronym>'
		}
		r.push( '<span class="tag">' + item + '</span>' );
	}
	r.push('');
	document.getElementById('skills-other').innerHTML = r.join('\n');
