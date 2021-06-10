<?php
  require_once('conn.php');
  session_start();
  $result = $conn->query("SELECT * FROM rich_comments order by created_at DESC");
  if (!$result) {
    die($conn->error);
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" >
  <link rel="stylesheet" href="style.css">

</head>
<body>
  <header>
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼
  </header>
  <div class="main">
    <?php 
      if(!empty($_SESSION['username'])) { ?>
        <a href="logout.php"><button>登出</button></a> 
      <?php } else { ?>
          <a href="login.php"><button>登入</button></a>
          <a href="register.php"><button>註冊</button></a>
          <?php } ?>
    <div class="user">你好！
      <span class="username">
        <?php 
          if(!empty($_SESSION['username'])) {
            echo $_SESSION['username'];
          }
        ?>
      </span>
    </div>
    <h1 class="title">comments</h1>
    <form action="handle_comments.php" method="POST">
      <textarea class="comment" name="content"></textarea>
      <?php if(!empty($_SESSION['username'])) { ?>
        <input type="submit" name="submit" value="提交" class="submit">  
      <?php } else { ?>
        <div style="margin: 30px auto">請登入後留言</div>
      <?php } ?>
    </form>

  <?php while ($row = $result->fetch_assoc()) {  ?>
  <div class="card">
    <span class="card__profile"></span>
    <div class="card__info">
      <div class="card__info-username"><?php echo $row['username'] ?></div>
      <div class="card__info-time"><?php echo $row['created_at']?></div>
      <div class="card__info-card_message"><?php echo $row['content']?></div>
    </div>
  </div>
  <?php } ?>
  </div>
</body>
</html>
