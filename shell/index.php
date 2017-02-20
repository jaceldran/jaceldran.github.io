<?php


// data en json javascript
$keys = array ('education', 'portfolio', 'work');
foreach ($keys as $key) {
	$data[$key] = parse_ini_file("../data/$key.ini", true);
}


header ('Content-Type:text/plain; Charset="UTF-8"');
var_export($data);
