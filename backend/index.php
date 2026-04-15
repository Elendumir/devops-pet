<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Параметри підключення
$host = "mysql";
$dbname = "devops_db";
$username = "devops";
$password = "1234"; // MAMP за замовчуванням

// Підключення до бази
$conn = new mysqli($host, $username, $password, $dbname);

// Перевірка з'єднання
if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Помилка з'єднання з базою: " . $conn->connect_error
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Обробка GET-запиту (отримання коментарів)
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    $sql = "SELECT comment_text FROM comments";
    $result = $conn->query($sql);

    $comments = [];

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $comments[] = $row["comment_text"];
        }

        echo json_encode(["comments" => $comments], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode([
            "success" => true,
            "message" => "Бек працює, але коментів в базі нема"
        ], JSON_UNESCAPED_UNICODE);
    }

    exit;
}

// Обробка POST-запиту (додавання коментаря)
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data["comment_text"]) || empty($data["comment_text"])) {
        echo json_encode(["success" => false, "message" => "Comment is required"]);
        exit;
    }

    $comment_text = $conn->real_escape_string($data["comment_text"]);
    $sql = "INSERT INTO comments (comment_text) VALUES ('$comment_text')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Comment added successfully"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }

    exit;
}

// Закриття з'єднання
$conn->close();
