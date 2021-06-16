<?php
  require_once('conn.php');
  session_start();

  if (empty($_POST['content'])) {
    die('資料有缺，請再試一次');
  }

  $sql = sprintf("INSERT INTO rich_comments(username, content) values('%s','%s')",
    $_SESSION['username'],
    $_POST['content']);
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  if ($result) {
    header('Location:index.php');
  }
?>
