<?php
  include_once dirname(__FILE__).'/credentials.php';

  header("Content-Type: application/json");

  $page = $_REQUEST["page"];

  $TOKEN_URL = "https://api.petfinder.com/v2/oauth2/token";
  $SHELTER_ID = "SC92";
  $STATUS = "adoptable";
  $OPTIONS = "?organization=".$SHELTER_ID."&status=".$STATUS."&page=".$page."&limit=25";
  $API_URL = "https://api.petfinder.com/v2/animals".$OPTIONS;
  $CLIENT_ID = "g7QNEslnQXv7nwl4kIhaInPuTcWtXwF9oeeptXiEchtg43WSyC";
  $CLIENT_SECRET = $petfinder_api_secret;

  $access_token = getAccessToken();
  $resource = getResource($access_token);
  print($resource);

  function getAccessToken() {
    global $TOKEN_URL, $CLIENT_ID, $CLIENT_SECRET;

    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => $TOKEN_URL,
      CURLOPT_HTTPHEADER => array(
        "content-type: application/x-www-form-urlencoded"
      ),
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_POST => true,
      CURLOPT_POSTFIELDS => "grant_type=client_credentials&client_id=".$CLIENT_ID."&client_secret=".$CLIENT_SECRET,
    ));
    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
      return "cURL Error #:" . $err;
    } else {
      return json_decode($response)->access_token;
    }
  }

  function getResource($access_token) {
    global $API_URL;

    $header = array("Authorization: Bearer {$access_token}");

    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => $API_URL,
      CURLOPT_HTTPHEADER => $header,
      CURLOPT_SSL_VERIFYPEER => false,
      CURLOPT_RETURNTRANSFER => true
    ));
    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
      return "cURL Error #:" . $err;
    } else {
      return $response;
    }
  }
?>
