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
if(isset($_SERVER["HTTP_CONTENT_TYPE"]) && strpos($_SERVER["HTTP_CONTENT_TYPE"], "application/json") !== false) {
    //case build-in web server
    $_POST = array_merge($_POST, (array) json_decode(trim(file_get_contents('php://input')), true));
    print_r($_POST);
}
else if(isset($_SERVER["CONTENT_TYPE"]) && strpos($_SERVER["CONTENT_TYPE"], "application/json") !== false) {
    //default case
    $_POST = array_merge($_POST, (array) json_decode(trim(file_get_contents('php://input')), true));
    print_r($_POST);
}
else {
    echo 'error';
}

if($_POST['mainTitle']){
    $mainTitle = mysql_prep($_POST['mainTitle']);
    $subTitle = mysql_prep($_POST['subTitle']);
    $address = mysql_prep($_POST['address']);
    $description = mysql_prep($_POST['content']);
    //boolean value, is content of the item related to some specific article on wiki
    $wiki_link = ($_POST['wiki_link'])?$_POST['wiki_link']:null;
    $wiki_related = (int) ($_POST['wiki_related'])?1:0;
    $wiki_title = ($_POST['wiki_title'])?$_POST['wiki_title']:null;
    $item_type = mysql_prep($_POST['category']);

    //perform database querry
    $query = "INSERT INTO items(";
    $query .= " mainTitle, subTitle, address, description, wiki_link, wiki_related, wiki_title, item_type";
    $query .= " ) VALUES (";
    $query .= " '{$mainTitle}', '{$subTitle}', '{$address}', '{$description}', '{$wiki_link}', {$wiki_related}, '{$wiki_title}'";
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
