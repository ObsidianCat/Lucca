<?php


// 1. Create a database connection
if (getenv("OPENSHIFT_PHP_IP")) {
    define("DB_SERVER", "127.4.211.2");
    define("DB_USER", "adminnYLfTwv");
    define ("DB_PASS", "CTgj4ulwpguq");
    define("DB_PORT", 3306);
}
else {
    define("DB_SERVER", "localhost");
    define("DB_USER", "root");
    define("DB_PASS", "");
    define("DB_PORT", 3306);
}
define("DB_NAME", "luccaguide_db");

$connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASS, DB_NAME, DB_PORT);
// Test if connection succeeded
if(mysqli_connect_errno()) {
    die("Database connection failed: " .
        mysqli_connect_error() .
        " (" . mysqli_connect_errno() . ")"
    );
}

?>