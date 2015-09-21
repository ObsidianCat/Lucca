<?php
require_once('functions.php');
require_once('database_connect.php');

$message;

//if form submitted
if(isset($_POST['submit'])){
    $message = 'Thank you for submitting the review.';

    //get data from the submitted form
    $nickname = mysql_prep($_POST['nickname']);
    $email = mysql_prep($_POST['email']);
    $originCountry = mysql_prep($_POST['origin-country']);
    $dateOfVisit = $_POST['date-of-visit'];
    $rating = (int) $_POST['rating'];
    $message = mysql_prep($_POST['message']);
    $itemId = (int) $_POST['item-id'];

    //perform database querry
    $query = "INSERT INTO reviews(";
    $query .= " author, country, dateofreview, dateofvisit, email, rating, message, item_id";
    $query .= " ) VALUES (";
    $query .= " '{$nickname}', '{$originCountry}', CURRENT_TIMESTAMP(), '{$dateOfVisit}', '{$email}', {$rating}, '{$message}', {$itemId}";
    $query .= " )";

    //execute query
    $result = mysqli_query($connection, $query);


}
else{
    $message = 'Sorry. Some error occurred';
}


// Close database connection
mysqli_close($connection);
