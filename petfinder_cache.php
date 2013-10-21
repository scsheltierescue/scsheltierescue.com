<?php
  header("Content-Type: application/json");
  require_once('Cache/Lite.php');// Include the package
  $lastOffset=$_REQUEST["offset"];
  $id = $lastOffset; // Set a id for this cache
  $options = array(
   'cacheDir' => '/tmp/',
   'lifeTime' => 18000
  ); // Set a few options
  $Cache_Lite = new Cache_Lite($options); // Create a Cache_Lite object
  if ($contents = $Cache_Lite->get($id)) // Test if there is a valide cache for this id
  {
    Cache hit! Content is in $data
  }
  else
  {
    // Cache miss! Save to $data for caching
    $API_SECRET = "4d4a9a76b342d7ed357c6b9d048b7564";
    $API_PUBLIC = "d31ef464ebd6a115a7b8079b0c04925a";
    $API_ID = "SC92";
    $API_URL = "http://api.petfinder.com/";
    $API_COMMAND = "shelter.getPets";
    $options = "?key=".$API_PUBLIC."&id=".$API_ID."&offset=".$lastOffset."&count=10&output=full&format=json";
    $request = $API_URL.$API_COMMAND.$options;
    $handle = fopen($request, "r");
    $contents = stream_get_contents($handle);
    fclose($handle);
    //$Cache_Lite->save($contents);
  }
  print($contents);
?>