<?php
//open database connection
require('../includes/database_connect.php');
require('../includes/functions.php');

$message;

//check what actions is needed



if($_SERVER['REQUEST_METHOD'] == "GET"){
    $id = $_GET['id'];

    $queryItem = "SELECT * ";
    $queryItem .= "FROM items ";
    $queryItem .="WHERE item_id={$id}";
    $resultItem = mysqli_query($connection, $queryItem);

    $queryReview = "SELECT * ";
    $queryReview .= "FROM reviews ";
    $queryReview .="WHERE item_id={$id}";
    $resultReview = mysqli_query($connection, $queryReview);

    $itemData = [];
    $reviews = [];
    while($item = mysqli_fetch_assoc($resultItem)){
        array_push($itemData, $item );
    }
    while($oneReview = mysqli_fetch_assoc($resultReview)){
        array_push($reviews, $oneReview );
    }
    array_push($itemData, $reviews );
    print "{\"response\":".json_encode($itemData)."}";
}
elseif($_SERVER['REQUEST_METHOD'] == "DELETE"){
    $id = $_GET['id'];

    $query = "DELETE FROM items WHERE item_id = {$id} LIMIT 1";
    $result = mysqli_query($connection, $query);

    $message = 'Item deleted.';
    print $message;

}
elseif($_SERVER['REQUEST_METHOD'] == "PUT") {
    $isConverted = convertJsonObjToPostArray();


    if($isConverted&&$_POST['id']){
//        print_r($_POST);
        $mainTitle = mysql_prep($_POST['mainTitle']);
        $subTitle = mysql_prep($_POST['subTitle']);
        $address = mysql_prep($_POST['address']);
        $description = mysql_prep($_POST['description']);
        //boolean value, is content of the item related to some specific article on wiki
        $wiki_link = ($_POST['wiki_link'])?$_POST['wiki_link']:null;
        $wiki_related = (int) ($_POST['wiki_related'])?1:0;
        $wiki_title = ($_POST['wiki_title'])?$_POST['wiki_title']:null;
        $item_type = mysql_prep($_POST['category']);
        $item_id = mysql_prep($_POST['id']);


        $query = "UPDATE items SET ";
        $query .= "mainTitle = '{$mainTitle}', ";
        $query .= "subTitle = '{$subTitle}', ";
        $query .= "address = '{$address}', ";
        $query .= "description = '{$description}', ";
        $query .= "wiki_link = '{$wiki_link}', ";
        $query .= "wiki_related = {$wiki_related}, ";
        $query .= "wiki_title = '{$wiki_title}', ";
        $query .= "item_type = '{$item_type}' ";
        $query .= "WHERE item_id = {$item_id} ";
        $query .= "LIMIT 1";
//        print($query);


        //execute query
        $result = mysqli_query($connection, $query);
        $message = 'item was updated.';

    }
    else{
        $message = 'Sorry, some error occurred.';
    }

    echo $message;
}
elseif($_SERVER['REQUEST_METHOD'] == "POST") {
    $isConverted = convertJsonObjToPostArray();
    if($isConverted){
//        print_r($_POST);
        $mainTitle = mysql_prep($_POST['mainTitle']);
        $subTitle = mysql_prep($_POST['subTitle']);
        $address = mysql_prep($_POST['address']);
        $description = mysql_prep($_POST['description']);
        //boolean value, is content of the item related to some specific article on wiki
        $wiki_link = ($_POST['wiki_link'])?$_POST['wiki_link']:null;
        $wiki_related = (int) ($_POST['wiki_related'])?1:0;
        $wiki_title = ($_POST['wiki_title'])?$_POST['wiki_title']:null;
        $item_type = mysql_prep($_POST['category']);

        //perform database querry
        $query = "INSERT INTO items(";
        $query .= " mainTitle, subTitle, address, description, wiki_link, wiki_related, wiki_title, item_type";
        $query .= " ) VALUES (";
        $query .= " '{$mainTitle}', '{$subTitle}', '{$address}', '{$description}', '{$wiki_link}', {$wiki_related}, '{$wiki_title}', '{$item_type}'";
        $query .= " )";

        //execute query
        $result = mysqli_query($connection, $query);
        $message = 'New item was created.';

    }
    else{
        $message = 'Sorry, some error occurred.';
    }

    echo $message;
}


// Close database connection
mysqli_close($connection);
