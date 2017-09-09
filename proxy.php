<?php
header('Access-Control-Allow-Origin: *');
$user = $_GET['user'];
echo file_get_contents("https://www.instagram.com/$user/media/");
?>
