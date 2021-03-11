<?php 
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "steven123francisco@gmail.com";
    $headers = "From: ".$mailFrom;
    $text ="You have received an e-mail from".$name.".\n\n".$message;

    mail($mailTom, $txt, $headers);
    header("Location:Index.html?mailsend");

}



?>