<?php
$name = $_POST["Name"];
$phone = $_POST["Phone"];
$email = $_POST["Email"];
$message = $_POST["Message"];



$EmailTo = "matty@aledia.ca";
$Subject = "New Message Received";

// prepare email body text

$Fields .= "Name: ";
$Fields .= $name;
$Fields .= "\n";

$Fields .= "Phone: ";
$Fields .= $phone;
$Fields .= "\n";

$Fields.= "Email: ";
$Fields .= $email;
$Fields .= "\n";


$Fields .= "Message: ";
$Fields .= $message;
$Fields .= "\n";

// send email
$success = mail($EmailTo,  $Subject,  $Fields, "From:".$email);

