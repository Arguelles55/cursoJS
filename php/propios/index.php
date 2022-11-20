<?php


$anios = [];

$fechaActual = date("Y");
$fechaAtras = date("Y",strtotime($fechaActual."- 1 year"));
$fechaSiguiente =  date("Y",strtotime($fechaActual."+ 1 year"));

array_push($anios, $fechaAtras);
array_push($anios, $fechaActual);
array_push($anios, $fechaSiguiente);

var_dump($anios);





/*

require_once 'mascota.php';

$conejo = new Mascota;
$conejo->setName("Pow");

//print_r($conejo);

$desc = serialize($conejo);

//var_dump($desc);

file_put_contents("txt.txt", $desc);

$registro = file_get_contents("txt.txt");

print_r(unserialize($registro));

*/

?>