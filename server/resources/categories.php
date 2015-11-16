<?php

//open database connection
require('../includes/database_connect.php');
require('../includes/functions.php');

$message;

if($_SERVER['REQUEST_METHOD'] == "GET"&& isset($_GET['id'])){
    //give specific categories
    $id = $_GET['id'];

    $queryItem = "SELECT * ";
    $queryItem .= "FROM main_categories ";
    $queryItem .="WHERE cat_id={$id}";

    $resultItem = mysqli_query($connection, $queryItem);

//handle data from database
    $categoriesData = [];
    while($item = mysqli_fetch_assoc($resultItem)){
        array_push($categoriesData, $item );
    }
//organize returned data
    print "{\"response\":".json_encode($categoriesData)."}";
}
else if($_SERVER['REQUEST_METHOD'] == "GET"&& !isset($_GET['id'])){
    //give all categories
    $queryItem = "SELECT * ";
    $queryItem .= "FROM main_categories";
    $resultItem = mysqli_query($connection, $queryItem);

//handle data from database
    $categoriesData = [];
    while($item = mysqli_fetch_assoc($resultItem)){
        array_push($categoriesData, $item );
    }
//organize returned data
    print "{\"response\":".json_encode($categoriesData)."}";
}
elseif($_SERVER['REQUEST_METHOD'] == "POST") {
    $isConverted = convertJsonObjToPostArray();
    if($isConverted){
        $categoryName = mysql_prep($_POST['categoryName']);
        $idName = mysql_prep($_POST['idName']);

        //perform database querry
        $query = "INSERT INTO main_categories (";
        $query .= " categoryName, idName";
        $query .= " ) VALUES (";
        $query .= " '{$categoryName}', '{$idName}'";
        $query .= " )";

        //execute query
        $result = mysqli_query($connection, $query);
        $message = 'New category was created.';
    }
    else{
        $message = 'Sorry, some error occurred.';
    }

    echo $message;
}
elseif($_SERVER['REQUEST_METHOD'] == "PUT") {
    $isConverted = convertJsonObjToPostArray();


    if($isConverted&&$_POST['cat_id']){
        $categoryName = mysql_prep($_POST['categoryName']);
        $idName = mysql_prep($_POST['idName']);
        $cat_id = $_POST['cat_id'];


        $query = "UPDATE main_categories SET ";
        $query .= "categoryName = '{$categoryName}', ";
        $query .= "idName = '{$idName}' ";
        $query .= "WHERE cat_id = {$cat_id} ";
        $query .= "LIMIT 1";
//        print($query);


        //execute query
        $result = mysqli_query($connection, $query);
        $message = 'Category name was updated.';

    }
    else{
        $message = 'Sorry, some error occurred.';
    }

    echo $message;
}
elseif($_SERVER['REQUEST_METHOD'] == "DELETE"){
    $cat_id = $_GET['id'];

    $query = "DELETE FROM main_categories WHERE cat_id = {$cat_id} LIMIT 1";
    $result = mysqli_query($connection, $query);

    $message = 'Category deleted.';
    print $message;

}

// Close database connection
mysqli_close($connection);
