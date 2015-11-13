<?php
function mysql_prep($string){
    global $connection;

    $escaped_string = mysqli_real_escape_string($connection, $string);
    return $escaped_string;

}

function redirect_to($new_location){
    header("Location: ".$new_location);
    exit;
}

function convertJsonObjToPostArray()
{
//if form sent as JSON, convert it to POST Array

    $statusFlag = false;
    if (isset($_SERVER["HTTP_CONTENT_TYPE"]) && strpos($_SERVER["HTTP_CONTENT_TYPE"], "application/json") !== false) {
        //case build-in web server
        $_POST = array_merge($_POST, (array)json_decode(trim(file_get_contents('php://input')), true));
        $statusFlag = true;
    } else if (isset($_SERVER["CONTENT_TYPE"]) && strpos($_SERVER["CONTENT_TYPE"], "application/json") !== false) {
        //default case
        $_POST = array_merge($_POST, (array)json_decode(trim(file_get_contents('php://input')), true));
        $statusFlag = true;
    }
    return $statusFlag;
}