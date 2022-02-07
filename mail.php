<?php

$from = $_POST['from'];
$topic = $_POST['topic'];
$text = $_POST['text'];
$name = $_POST['name'];

$file = file_get_contents("credentials.json");



$secret = json_decode($file)->secret;


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);



try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.neldev.fr';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '_mainaccount@neldev.fr';                     //SMTP username
    $mail->Password   = $secret;                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($from , $name);
    $mail->addAddress('contact@neldev.fr', 'Philippe Nelson');

    //Content
    $mail->isHTML(true);                               
    $mail->Subject = $topic;
    $mail->Body    = $text;
    $mail->AltBody = $text;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

header('Location: contact.html');

?>