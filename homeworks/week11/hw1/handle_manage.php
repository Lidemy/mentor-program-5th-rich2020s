<?php
  require_once('conn.php');
  require_once('utils.php');
  session_start();

  $username = NULL;
  $user = NULL;
  if (0 > $_POST['Authority'] || 2 < $_POST['Authority']) {
    die('資料錯誤，請再試一次');
  }
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
    $user = getUserFromUsername($username);
  } else {
    die('權限不足');
  }
  if ($user['Authority'] !== 2){
    die('權限不足');
  }

  $sql = sprintf("UPDATE rich_member set Authority = ? WHERE id =?");
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ii", $_POST['Authority'], $_POST['id']);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  header('Location:manage.php');
?>
