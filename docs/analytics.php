<?php
require 'database.php';

$collection = $client->selectDatabase('artemas')->selectCollection('analytics');

$viewsGraphData = $collection->findOne(['type' => 'viewsGraph']);
$leaderboardData = $collection->findOne(['type' => 'leaderboard']);

$response = [
    'viewsGraphHtml' => $viewsGraphData ? $viewsGraphData['html'] : '',
    'leaderboardHtml' => $leaderboardData ? $leaderboardData['html'] : '',
];

echo json_encode($response);
?>
