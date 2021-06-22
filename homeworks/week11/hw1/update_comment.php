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
    header('Location:index.php');
  }
  
  $id = $_GET['id'];
  if ($authority === 2) {
    $sql = sprintf("SELECT * FROM rich_comments WHERE id = ?");
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('i', $id);
  } else {
  $sql = sprintf("SELECT * FROM rich_comments WHERE id = ? and username =?");
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('is', $id, $username);
  }
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if (empty($row)) {
    die('無法編輯' . '<br>' .'<a href="index.php">回首頁</a>'); 
  } 
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>編輯留言</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" >
  <link rel="stylesheet" href="style.css">

</head>
<body>
  <header class="warn">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼
  </header>
  <div class="main">
    <h1 class="title">編輯留言 </h1>
    <form action="handle_update_comments.php" method="POST">
      <textarea class="comment" name="content"><?php echo escape($row['content'])?></textarea>
      <input type="text" class="hide" name="id" value="<?php echo escape($_GET['id'])?>">
        <input type="submit" name="submit" value="提交" class="submit">  
    </form>
  </script>
</body>
</html>
