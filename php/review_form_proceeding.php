<?php
require_once('functions.php');
require_once('database_connect.php');

$message;

//if form sent as JSON, convert it to POST Array
if(isset($_SERVER["CONTENT_TYPE"]) && strpos($_SERVER["CONTENT_TYPE"], "application/json") !== false) {
    $_POST = array_merge($_POST, (array) json_decode(trim(file_get_contents('php://input')), true));
}

if($_POST['itemId']){
    $nickname = mysql_prep($_POST['nickname']);
    $email = mysql_prep($_POST['email']);
    $originCountry = mysql_prep($_POST['originCountry']);
    $dateOfVisit = $_POST['dateOfVisit'];
    $rating = (int) $_POST['rating'];
    $message = mysql_prep($_POST['message']);
    $itemId = (int) $_POST['itemId'];

    //perform database querry
    $query = "INSERT INTO reviews(";
    $query .= " author, country, dateofreview, dateofvisit, email, rating, message, item_id";
    $query .= " ) VALUES (";
    $query .= " '{$nickname}', '{$originCountry}', CURRENT_TIMESTAMP(), '{$dateOfVisit}', '{$email}', {$rating}, '{$message}', {$itemId}";
    $query .= " )";

    //execute query
    $result = mysqli_query($connection, $query);
        $message = 'Your review is submitted. Thank you for sharing your opinion.';

 }


else{
    $message = 'Sorry. Some error occurred. Please try to submitt you review later.';
}

echo $message;

// Close database connection
mysqli_close($connection);
