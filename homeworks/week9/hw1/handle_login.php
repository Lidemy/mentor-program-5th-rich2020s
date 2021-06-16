<?php
  require_once('conn.php');
  session_start();

  if (empty($_POST['username']) || empty($_POST['password'])) {
    die('資料有缺，請再試一次'. '<br>' . "<a href='login.php' style='color:black'>回上一頁</a>");
  }
  $sql = sprintf("SELECT * FROM rich_members WHERE username='%s' and password='%s'",
    $_POST['username'], 
    $_POST['password']);
  $result = $conn->query($sql);
  if (!$result) {
    die($conn->error);
  }
  if ($result->num_rows) {
    $_SESSION['username'] = $_POST['username'];
    header('Location:index.php');
  }else {
    echo "帳號密碼錯誤，請再試一次";
  }
?>
