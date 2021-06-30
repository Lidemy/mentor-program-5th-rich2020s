<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  
  if (
    empty($_POST['content']) ||
    empty($_POST['nickname']) ||
    empty($_POST['site'])
  ) {
    $json = array(
      "ok" => false,
      "message" => "input required"
    );
    $response = json_encode($json);
    echo $response . " f";
    die();
  }


  $nickname = $_POST['nickname'];
  $content = $_POST['content'];
  $site = $_POST['site'];
  $sql = "INSERT INTO rich_board(nickname, content, site) VALUES(?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss", $nickname, $content, $site);
  $result = $stmt->execute();
  if (!$result) {
    $json = array(
      "ok" => false,
      "message" => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $json = array(
    "ok" => true,
    "message" => "sucess"
  );
  $response = json_encode($json);
  echo $response;
?>