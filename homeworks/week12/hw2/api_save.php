<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');

   if (
    empty($_POST['todo'])
  ) {
    $json = array(
      "ok" => false,
      "message" => "Input required"
    );

    $response = json_encode($json);
    echo $response;
    die();
  }
  $todo = $_POST['todo'];
  $sql ="INSERT INTO rich_todo(data) VALUES (?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $todo);
  $result = $stmt->execute();
  if (!$result) {
    $json = array(
    "ok" => false,
    "message" => "Input required"
  );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $id = mysqli_insert_id($conn);
  $json = array(
    "ok" => true,
    "message" => "sucess",
    "id" => $id
  );
  $response = json_encode($json);
  echo $response;
?>