<?php
  require_once('conn.php');
  session_start();

  if (empty($_POST['nickname'])) {
    die('資料有缺，請再試一次'); ?>
    <a href="index.php">回首頁</a>
  <?php }
  if (empty($_SESSION['username'])) {
    die('請先登入'); ?>
    <a href="index.php">回首頁</a>
  <?php }

  $sql = sprintf("UPDATE rich_member set nickname = ? WHERE username = ?");
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss", $_POST['nickname'], $_SESSION['username']);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  if ($result) {
    header('Location: index.php');
  }
?>
