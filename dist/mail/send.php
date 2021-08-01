<?php
if ( !empty($_POST['phone']) && !empty($_POST['subject'])) {
  $return_message = "";

    $name             = trim(htmlspecialchars($_POST['name']));
    $phone            = trim(htmlspecialchars($_POST['phone']));
    $subject          = trim(htmlspecialchars($_POST['subject']));

  $subject_letter = 'Заявка с сайта Djero';

  $to = "bohdan1trush@gmail.com, pasichniko@ukr.net";

  $message = "
  <html> 
      <head> 
          <title>$subject_letter</title> 
      </head> 
      <body>
        <table>
            <tr><td><b>Тема:</b></td><td>$subject</td></tr>
            <tr><td><b>Ім'я:</b></td><td>$name</td></tr>
            <tr><td><b>Телефон:</b></td><td>$phone</td></tr>
        </table>
      </body> 
  </html>"; 

  $headers  = "From: noreply@djero.com.ua\r\n";
  $headers .= "Content-type: text/html; charset=utf-8 \r\n";

  if (mail($to, $subject_letter, $message, $headers)) {
    $return_message = "send_success";
  }
  else {
    $return_message = "send_error";
  }


  echo $return_message;

  exit();
}

?>