<?php 
declare(strict_types=1);
include 'includes/header.php';

/*
function sumar(int $numero1 = 0, array $numero2 ) {
    echo $numero1 + $numero2;
}
sumar(10, []);
*/

$str = "Visita mi [sitio web] (https://google.com).";
// <a href="https://google.com"> Sitio Web </a>
$regExp = "/\[(.*?)\]\((.*?)\)/";
$result = preg_replace($regExp, "<a href='$2'>$1</a>", $str);

echo "<p>$result</p>" ;
 




include 'includes/footer.php';