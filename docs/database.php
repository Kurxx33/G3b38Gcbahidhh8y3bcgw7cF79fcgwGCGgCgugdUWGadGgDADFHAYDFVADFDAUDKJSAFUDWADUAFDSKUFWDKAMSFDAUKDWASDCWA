<?php
require 'vendor/autoload.php'; // Load the Composer autoload file

use MongoDB\Client;
use MongoDB\Driver\ServerApi;

// Connection string for MongoDB Atlas
$uri = 'mongodb+srv://kurxx33:<password>@cluster0artemas.hvdhn1l.mongodb.net/artemas?retryWrites=true&w=majority&appName=Cluster0artemas';

// Set the version of the Stable API on the client
$apiVersion = new ServerApi(ServerApi::V1);

// Create a new client and connect to the server
$client = new Client($uri, [], ['serverApi' => $apiVersion]);

try {
    // Send a ping to confirm a successful connection
    $client->selectDatabase('admin')->command(['ping' => 1]);
    echo "Pinged your deployment. You successfully connected to MongoDB!\n";
} catch (Exception $e) {
    printf($e->getMessage());
    exit();
}
?>
