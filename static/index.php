<?php
// Get the requested path
$request_uri = $_SERVER['REQUEST_URI'];
$script_name = $_SERVER['SCRIPT_NAME'];
$path = parse_url($request_uri, PHP_URL_PATH);

// Remove the script name from the path if it exists
if (strpos($path, $script_name) === 0) {
  $path = substr($path, strlen($script_name));
}

// Remove leading and trailing slashes
$path = trim($path, '/');

// If the path is empty or doesn't exist as a file/directory, serve index.html
if (empty($path) || !file_exists(__DIR__ . '/' . $path)) {
  readfile(__DIR__ . '/index.html');
  exit;
}

// Otherwise, serve the requested file
$file = __DIR__ . '/' . $path;
if (is_file($file)) {
  $mime_type = mime_content_type($file);
  header('Content-Type: ' . $mime_type);
  readfile($file);
  exit;
}

// If we get here, something went wrong
header('HTTP/1.0 404 Not Found');
readfile(__DIR__ . '/index.html');
