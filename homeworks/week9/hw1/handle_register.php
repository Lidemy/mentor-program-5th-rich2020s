<?php
  require_once('conn.php');

  if (empty($_POST['username']) || empty($_POST['password'])) {
    die('資料有缺，請再試一次');
  }
  $sql = sprintf("INSERT INTO rich_members(username, password) values('%s','%s')",
    $_POST['username'],
    $_POST['password']);
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  if ($result) {
    echo "註冊成功！" . "<br>" . "<a href='login.php'>請登入</a>";
  }
?>
