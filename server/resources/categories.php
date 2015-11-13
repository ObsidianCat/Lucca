<?php

//open database connection
require('../includes/database_connect.php');
//var_dump($_GET);
if($_SERVER['REQUEST_METHOD'] == "GET"&& isset($_GET['id'])){
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


// Close database connection
mysqli_close($connection);
