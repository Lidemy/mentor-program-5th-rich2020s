<?php
  require_once('conn.php');
  require_once('utils.php');
  session_start();
  $username = NULL;
  $user = NULL;
  $authority = NULL;
  if (empty($_POST['content'])) {
    die('資料有缺，請再試一次');
  }
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
    $authority = $user['Authority'];
  } else {
    die('請先登入');
  }
  if ($authority === 2) {
    $sql = sprintf("UPDATE rich_comments set content = ? WHERE id =?");
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $_POST['content'], $_POST['id']);  
  } else {
  $sql = sprintf("UPDATE rich_comments set content = ? WHERE id =? and username =?");
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sis", $_POST['content'], $_POST['id'], $username);
  }
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  header('Location:index.php');
?>
