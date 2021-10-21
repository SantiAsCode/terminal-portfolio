<?php

print_r($_POST);

$name_error = $subject_error = $email_error = $msg_error = "";
$name = $subject = $email = $msg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $name_error = "Name is required";
    } else {
        $name = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $name_error = "Only letters and white space allowed";
        }
    }

    if (empty($_POST["subject"])) {
        $name_error = "Subject is required";
    } else {
        $subject = test_input($_POST["subject"]);
        if (!preg_match("/^[a-zA-Z ]*$/",$subject)) {
            $name_error = "Only letters and white space allowed";
        }
    }

    if (empty($_POST["email"])) {
        $name_error = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $name_error = "Invalid email format";
        }
    }

    if (empty($_POST["msg"])) {
        $name_error = "Message is required";
    } else {
        $name = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
            $name_error = "Only letters and white space allowed";
        }
    }
}
?>