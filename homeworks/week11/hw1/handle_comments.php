<?php
  require_once('conn.php');
  require_once('utils.php');
  session_start();

  $username = NULL;
  $user = NULL;
  $authority = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
    $authority = $user['Authority'];
  } else {
    die('權限不足');
  }
  if ($user['Authority'] === 0) {
    die('遭禁言');
  }
  if (empty($_POST['content'])) {
    die('資料有缺，請再試一次');
  }

  $sql = sprintf("INSERT INTO rich_comments(username, content) VALUES(?,?)");
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss", $_SESSION['username'],$_POST['content']);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  header('Location:index.php');
?>
