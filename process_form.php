<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $mobileNumber = $_POST['mobileNumber'];
    $state = $_POST['state'];
    $city = $_POST['city'];

    // Compose email message
    $to = 'malhotrashivam1206@gmail.com';
    $subject = 'New Form Submission';
    $message = "First Name: $firstName\nLast Name: $lastName\nMobile Number: $mobileNumber\nState: $state\nCity: $city";
    
    // Send email
    mail($to, $subject, $message);

    // Redirect to desired link
    header('Location: https://rzp.io/i/Hj9Dft0LC0');
    exit;
} else {
    // If not a POST request, redirect to index.html
    header('Location: index.html');
    exit;
}
?>
