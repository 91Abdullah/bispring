<?php

// define variables and set to empty values
$email = $first_name = $last_name = $contact = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $email = test_input($_POST["email"]);
    $website = test_input($_POST["first_name"]);
    $comment = test_input($_POST["last_name"]);
    $gender = test_input($_POST["contact"]);

    $msg = "New submission recieved from " . $first_name . " " . $last_name 
    . "\n First Name: " . $first_name . "\n Last Name: " . $last_name . "\n Email: " . $email 
    . "\n Contact Number: " . $contact . "\n";

    $msg = wordwrap($msg, 70);

    $to = "abdullah.basit@hotmail.com";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <vispring@intercoil.com>' . "\r\n";
    // $headers .= 'Cc: myboss@example.com' . "\r\n";

    mail($to, "New submission!", $msg, $headers);

    header('Location: thank-you.html');
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}