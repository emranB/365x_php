<?php


$dir = "../data";
$_propertyId = $_GET["propertyId"];


$properties = file_get_contents($dir . "/properties.json");
$properties = json_decode($properties, true);
$selectedProperty = [];


for ($i=0; $i<count($properties); $i++) {
  $property = $properties[$i];
  if ($property["id"] == $_propertyId) {
    $selectedProperty = $property;
  }
}

$propertyImageDirName = $selectedProperty["img_directory"];
$imgDir = $dir . "/pics/" . $propertyImageDirName;
$files = array_diff(scandir($imgDir), array(".", ".."));


echo json_encode($files);
