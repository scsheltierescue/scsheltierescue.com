<?php #!/usr/bin/env /usr/bin/php
  error_reporting(E_ALL);
  ini_set('display_errors', '1');
  set_time_limit(0);

  try {
    $payload = json_decode($_REQUEST['payload']);
  } catch(Exception $e) {
    file_put_contents('/logs/error.log', $e . ' ' . $payload, FILE_APPEND);
    exit(0);
  }

  if ($payload->ref === 'refs/heads/master') {
    $output = shell_exec('git pull');
    file_put_contents('/logs/access.log', $output, FILE_APPEND);
  }
?>