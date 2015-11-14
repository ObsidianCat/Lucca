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

        echo $query;
        //execute query
        $result = mysqli_query($connection, $query);
        $message = 'New category was created.';

    }
    else{
        $message = 'Sorry, some error occurred.';
    }

    echo $message;
}


// Close database connection
mysqli_close($connection);
