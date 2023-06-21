<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Generate user ID
    $userId = uniqid();

    // Get form data
    $first_name = $_POST["first_name"];
    $last_name = $_POST["last_name"];
    $dob = $_POST["dob"];
    $gender = $_POST["gender"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["password"];

    // CSV file path
    $file = "user_information.csv";

    // Check if the file exists
    $fileExists = file_exists($file);

    // Open the CSV file in append mode
    $fileHandler = fopen($file, "a");

    // If the file doesn't exist, write the headers
    if (!$fileExists) {
        $headers = array("first_name", "last_name", "dob", "gender", "email", "username", "password");
        fputcsv($fileHandler, $headers);
    }

    // Write the form data to the CSV file
    $formData = array($first_name, $last_name, $dob, $gender, $email, $username, $password);
    fputcsv($fileHandler, $formData);

    // Close the file
    fclose($fileHandler);

    echo "Form submitted successfully!";
} else {
    echo "Invalid request!";
}
?>
