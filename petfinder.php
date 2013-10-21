<?php
  header("Content-Type: application/json");

  $lastOffset=$_REQUEST["offset"];

  $API_SECRET = "4d4a9a76b342d7ed357c6b9d048b7564";
  $API_PUBLIC = "d31ef464ebd6a115a7b8079b0c04925a";
  $API_ID = "SC92";
  $API_URL = "http://api.petfinder.com/";
  $API_COMMAND = "shelter.getPets";
  $options = "?key=".$API_PUBLIC."&id=".$API_ID."&offset=".$lastOffset."&count=25&output=full&format=json";
  $request = $API_URL.$API_COMMAND.$options;
  $handle = fopen($request, "r");
  $contents = stream_get_contents($handle);
  fclose($handle);

  print($contents);
?>