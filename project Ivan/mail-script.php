<?php
    
//conexion form
if(isset($_POST)){
    error_reporting(0);
    // Variables del form
    $name = $_POST["name"];
    $lastName = $_POST["lastName"];
    $phone = $_POST["phone"];
    $business = $_POST["business"];
    $mail = $_POST["mail"];
    $subject = $_POST["subject"];
    // Config dominio & Envio
    $domain = $_SERVER["HTTP_HOST"];
    $to = "larnedo97@gmail.com";
    $subjectMail = "Contacto desde el formulario de contáctanos $domain.";
    $message = "
        <p>Datos enviados desde el formulario del sitio <b>$domain</b></p>
        <ul>
        <li>Nombre<b> $name $lastName</b></li>
        <li>Teléfono<b> $phone</b></li>
        <li>Empresa o Starup<b> $business</b></li>
        <li>Correo<b> $mail</b></li>
        <li>Asunto: $subject</li>
        </ul>
    ";
    $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n".
    "From: Nueva solicitud Phineas <no-replay@$domain>";

    $send_mail = mail($to, $subjectMail, $message, $headers);

    if($send_mail){
        $res = [
            "err" => false,
            "message" => "Tus datos han sido enviados"
        ];
    } else {
        $res =[
            "err" => true,
            "message" => "Error al enviar, intenta de nuevamente."
        ];
    }

    //Header ("Access-Control-Allow-Origin": https://www.phineas-soluciones.com/");
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json');
    echo json_encode($res);
    exit; 
}




/*
header('Content-type: application/json');
echo json_encode($res);
exit;
-------------------------------



$name = $_POST["name"];
    $lastName = $_POST["lastName"];
    $phone = $_POST["phone"];
    $mail = $_POST["mail"];
    $subject = $_POST["subject"];

    $mailTo = "larnedo97@gmail.com";
    $headers = "From:" .$mailFrom;
    $txt = "Tu tienes un mensaje " .$name .$message;

    mail($mailTo, $name, $txt, $headers);

    header("location: contactanos.html?MessageSent");
}

*/

/*
$to = 'larnedo97@gmail.com';

    $name = $_POST["name"]; 
    $lastName = $_POST["lastName"];
    $phone = $_POST["phone"];
    $business = $_POST["business"];
    $mail = $_POST["mail"];
    $subject = $_POST["subject"];

    $header = "Enviado de prueba por Luis Arnedo";
    $message = "Nueva solicitud de:". $name;

    mail($to, $subject, $name, $lastName, $header);
    echo "<script>alert('correo enviado')</script>";
    echo "<script> setTimeout(\"location.href='contactanos.html'\",1000)</script>";


*/
?>



