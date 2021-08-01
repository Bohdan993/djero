<?php
if ( !empty($_POST['name-input']) && !empty($_POST['tel-input']) ) {
  $return_message = "";

  $name            = trim(htmlspecialchars($_POST['name-input']));
  $surname         = trim(htmlspecialchars($_POST['surname-input']));
  $email           = trim(htmlspecialchars($_POST['email-input']));
  $phone           = trim(htmlspecialchars($_POST['tel-input']));
  $comment         = trim(htmlspecialchars($_POST['comment-textarea']));
  $payment_method  = trim(htmlspecialchars($_POST['payment-radio']));
  $delivery_method = trim(htmlspecialchars($_POST['delivery-radio']));
  $department1     = trim(htmlspecialchars($_POST['department-select-1']));
  $department2     = trim(htmlspecialchars($_POST['department-select-2']));
  $town            = trim(htmlspecialchars($_POST['town-select']));
  $street          = trim(htmlspecialchars($_POST['street-input']));
  $house           = trim(htmlspecialchars($_POST['house-input']));
  $flat            = trim(htmlspecialchars($_POST['flat-input']));
  $contact         = trim(htmlspecialchars($_POST['contacts-radio']));
  $name2           = trim(htmlspecialchars($_POST['name-input-2']));
  $surname2        = trim(htmlspecialchars($_POST['surname-input-2']));
  $middle_name     = trim(htmlspecialchars($_POST['middle-name-input']));
  $mobile_phone    = trim(htmlspecialchars($_POST['mob-tel-input']));
  $products        = $_POST['products'];


  $box_price       = 855;
  $pack_price      = 35;
  $total_price     = 0;
  $discount = 0;

  $boxes           = 0;
  $packs           = 0;

  if( $products ) {
    foreach ($products as $key => $product) {
      $product = trim(htmlspecialchars($product));
      $arr = explode('|', $product);

      switch ($arr[0]) {
 				case 'pack':
 					$total_price = $total_price + ((int) $arr[1] * $pack_price);
 					$packs = (int) $arr[1];
 					for($i = 0; $i < (int) $arr[1]; $i = $i + 3) {
 						if($i != 0) $discount = $discount + 6;
 					}
 					break;
 				case 'box':
 					$total_price = $total_price + ((int) $arr[1] * $box_price);
 					$boxes = (int) $arr[1];
 					break;
 				default:
 					# code...
 					break;
 			}
 		}
  }

//-----------------------------------------------------------------------------------------//
//------------------------------------------LIQPAY-----------------------------------------//


include './LiqPay.php';
$public_key = 'sandbox_i40869347211';
$private_key = 'sandbox_f0GwWQRSiQCbYpeBhbyi7JGffJdbux8oEmFOecYX';

$order_id = (int) file_get_contents('./order_id.txt');
file_put_contents('./order_id.txt', $order_id + 1);


$liqpay = new LiqPay($public_key, $private_key, 'https://www.liqpay.ua/api/3/checkout');
$server_responce = $liqpay->api('', array(
'action'         => 'pay',
'amount'         => $total_price - $discount,
'currency'       => 'UAH',
'description'    => 'Оплата покупки в інтернет магазині Djero',
'order_id'       => 'order_id_' .$order_id,
'version'        => '3',
'language'       => 'uk',
'paytypes'       => $payment_method,
'result_url'     => 'https://greens.studio/djero/',

));


//---------------------------------------------------------------------------------------------//
//------------------------------------------END LIQPAY-----------------------------------------//


  $subject_letter = 'Заявка с сайта Djero';

  $to = "bohdan1trush@gmail.com, pasichniko@ukr.net";

  $message = "
  <html> 
      <head> 
          <title>$subject_letter</title> 
      </head> 
      <body>
        <table>
          <tr><td><b>Ім'я:</b></td><td>$name</td></tr>
          <tr><td><b>Прізвище:</b></td><td>$surname</td></tr>
          <tr><td><b>Телефон:</b></td><td>$phone</td></tr>
          <tr><td><b>Почта:</b></td><td>$email</td></tr>
          <tr><td><b>Коментар:</b></td><td>$comment</td></tr>
          <tr><td>-----------</td><td>-----------</td></tr>
          <tr><td><b>Відділення Нової Пошти:</b></td><td>$department1, $department2</td></tr>
          <tr><td><b>Місто:</b></td><td>$town</td></tr>
          <tr><td><b>Вулиця:</b></td><td>$street</td></tr>
          <tr><td><b>Будинок:</b></td><td>$house</td></tr>
          <tr><td><b>Квартира:</b></td><td>$flat</td></tr>
          <tr><td>-----------</td><td>-----------</td></tr>
          <tr><td><b>Ім'я2:</b></td><td>$name2</td></tr>
          <tr><td><b>Прізвище2:</b></td><td>$surname2</td></tr>
          <tr><td><b>По батькові:</b></td><td>$middle_name</td></tr>
          <tr><td><b>Мобільний телефон:</b></td><td>$mobile_phone</td></tr>
          <tr><td>-----------</td><td>-----------</td></tr>
          <tr><td><b>Кількість коробок з печивом:</b></td><td>$boxes шт.</td></tr>
          <tr><td><b>Кількість упаковок з печивом:</b></td><td>$packs шт.</td></tr>
          <tr><td><b>Загальна сума замовлення:</b></td><td>$total_price грн.</td></tr>
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

  $json = json_encode(array(
    'responce' => $return_message,
    'url' => $server_responce
  ));

  echo $json;

  exit();
}

?>