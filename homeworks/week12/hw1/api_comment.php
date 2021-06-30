<?php
  require_once('conn.php');
  header('Content-type:application/json;charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  
  if (
    empty($_GET['site'])
  ) {
    $json = array(
      "ok" => false,
      "message" => "input required"
    );
    $response = json_encode($json);
    echo $response;
    die();
  }
  $site = $_GET['site'];
  if (!empty($_GET['offset']) && is_numeric($_GET['offset'])) {
    $offset = $_GET['offset'];
    $sql = "SELECT *,(SELECT count(id) FROM rich_board WHERE id < ?) as count FROM rich_board WHERE site = ? and id < ? ORDER BY id DESC limit 5";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isi", $offset, $site, $offset);
  }else {
    $sql = "SELECT *,(SELECT count(id) FROM rich_board) as count FROM `rich_board` WHERE site = ? ORDER by id DESC limit 5";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $site);
  }
    $result = $stmt->execute();
    $result = $stmt->get_result();
    if (!$result) {
       $json = array(
        "ok" => false,
        "message" => "database err"
      );
      $response = json_encode($json);
      echo $response;
      die();
      }
  $discussion = array();
  while($row = $result->fetch_assoc()) {
    array_push($discussion, array(
      "content" => $row['content'],
      "nickname" => $row['nickname'],
      "created_at" => $row['created_at'],
      "id" => $row['id'],
    ));
    $count = $row['count'];
  };
  $loadingmore = true;
    if ($count <= 5) {
      $loadingmore = false;
    }
  $json = array(
    "ok" => true,
    "discussion" => $discussion,
    "loadingmore" => $loadingmore
  );
  $response = json_encode($json);
  echo $response;
?>
