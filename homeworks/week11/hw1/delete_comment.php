<?php
  require_once('conn.php');
  require_once('utils.php');
  session_start();
  $username = NULL;
  $user = NULL;

  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  } else {
    header('Location:login.php');
  }
  $id = $_GET['id'];
  if ($user['Authority'] === 2) {
    $sql = sprintf("UPDATE rich_comments set is_deleted = 1 WHERE id =?");
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id);
  } else {
    $sql = sprintf("UPDATE rich_comments set is_deleted = 1 WHERE id =? and username = ?");
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('is', $id, $username);
  }
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  header('Location:index.php');
?>
