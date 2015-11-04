<?php
/**
 * Created by PhpStorm.
 * User: Lula
 * Date: 11/4/2015
 * Time: 3:35 PM
 */

require_once('includes/functions.php');
require_once('includes/database_connect.php');

$message;

//if form sent as JSON, convert it to POST Array
if(isset($_SERVER["CONTENT_TYPE"]) && strpos($_SERVER["CONTENT_TYPE"], "application/json") !== false) {
    $_POST = array_merge($_POST, (array) json_decode(trim(file_get_contents('php://input')), true));
}

if($_POST['submit']){
    $item_type = mysql_prep($_POST['category']);
    $mainTitle = mysql_prep($_POST['title']);
    $subTitle = mysql_prep($_POST['sub_title']);
    $address = mysql_prep($_POST['address']);
    $description = mysql_prep($_POST['content']);
    //boolean value, is content of the item related to some specific article on wiki
    $wiki_related = (int) ($_POST['wiki_related'])?1:0;
    $wiki_link = ($_POST['wiki_url'])?$_POST['wiki_link']:null;
    $wiki_title = ($_POST['wiki_title'])?$_POST['wiki_title']:null;

    //perform database querry
    $query = "INSERT INTO items(";
    $query .= " mainTitle, subTitle, address, description, wiki_link, wiki_related, wiki_title, item_type";
    $query .= " ) VALUES (";
    $query .= " '{$nickname}', '{$originCountry}', CURRENT_TIMESTAMP(), '{$dateOfVisit}', '{$email}', {$rating}, '{$message}', {$itemId}";
    $query .= " )";

    //execute query
    $result = mysqli_query($connection, $query);
    $message = 'New item was created.';

}
else{
    $message = 'Sorry, some error occurred.';
}

echo $message;

// Close database connection
mysqli_close($connection);
