
	var data = [		
		{skill: 'PHP', score: 95}		
		, {skill: 'Lotus Notes/Domino', score: 95}		
		, {skill: 'HTML', score: 90}
		, {skill: 'Javascript/AJAX', score: 90}				
		, {skill: 'CSS', score: 85}		
		, {skill: 'MySQL', score: 85}
	];

	var other = [
		'GitHub'
		, 'REST=REpresentational State Transfer'
		, 'SOAP=Simple Object Access Protocol'
		, 'SASS=Syntactically Awesome Stylesheets'		
		, 'XML=eXtensible Markup Language'
		, 'CLS=Certified Lotus Specialist'
		, 'jQuery'
		, 'Diseño adaptable'
		, 'Agilidad'
		, 'Scrum'
		, 'Kanban'
		, 'Gestión documental'
		, 'Workflows'
		, 'Wordpress'
		, 'Contabilidad'
		, 'Análisis financiero'
	];
	other.sort();

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
