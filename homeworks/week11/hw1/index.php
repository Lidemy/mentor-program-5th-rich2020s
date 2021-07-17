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
  }
  $page = 1;
  if (!empty($_GET['page']) && is_numeric($_GET['page'])) {
    $page = $_GET['page'];
  }
  $item_per_page = 10;
  $offset = ($page - 1) * $item_per_page;
  $stmt = $conn->prepare(
    'SELECT C.id AS id, C.content AS content, ' .
    'C.created_at AS created_at, M.nickname AS nickname, ' . 
    'M.username AS username FROM rich_comments AS C ' . 
    'LEFT JOIN rich_member AS M ON C.username = M.username ' . 
    'WHERE C.is_deleted = 0 ORDER BY created_at DESC ' .
    'LIMIT ? OFFSET ?'
  );
  $stmt->bind_param('ii', $item_per_page, $offset);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }
  $result = $stmt->get_result();
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
  <header class="warn">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼
  </header>
  <div class="main">
    <?php 
      if(!empty($username)) { ?>
        <a href="logout.php"><button>登出</button></a> 
        <a class="update__nickname"><button >編輯暱稱</button></a> 
        <form action="update_nickname.php" method="POST" class="update hide">
          <input type="text" name="nickname" placeholder="新的暱稱">
          <input type="submit" name="submit" value="提交">
        </form>
        <?php if($authority === 2){ ?>
          <a href="manage.php"><button>管理使用者</button></a>
        <?php }
        } else { ?>
            <a href="login.php"><button>登入</button></a>
            <a href="register.php"><button>註冊</button></a>
            <?php } ?>
    <div class="user">你好！
      <span class="username">
        <?php 
          if(!empty($username)) {
            echo escape($user['nickname']);
          }
        ?>
      </span>
    </div>
    <h1 class="title">comments</h1>
    <form action="handle_comments.php" method="POST">
      <textarea class="comment" name="content"></textarea>
      <?php if(!empty($username)) { ?>
        <input type="submit" name="submit" value="提交" class="submit">  
      <?php } else { ?>
        <div style="margin: 30px auto">請登入後留言</div>
      <?php } ?>
    </form>

  <?php while ($row = $result->fetch_assoc()) {  ?>
  <div class="card">
    <div class="card__container">
      <div class="info__container">
        <span class="card__profile"></span>
        <div class="card__info">
          <div class="card__info-username"><?php echo htmlspecialchars($row['nickname'] . ' (@' .$row['username']) . ')' ?></div>
          <div class="card__info-time"><?php echo htmlspecialchars($row['created_at'])?></div>
        </div>
      </div>
      <div>
        <?php if ($row['username'] === $username || $authority === 2) { ?>
          <span><a href="update_comment.php?id=<?php echo $row['id'] ?>">編輯</a></span>
          <span><a href="delete_comment.php?id=<?php echo $row['id'] ?>">刪除</a></span>
      <?php } ?>
      </div>
    </div>
    <div class="card__content"><?php echo htmlspecialchars($row['content'])?></div>
  </div>
  <?php } ?>
  <div class="buttom__hr"></div>
  <?php 
  $stmt = $conn->prepare(
    'SELECT count(id) as count FROM rich_comments WHERE is_deleted IS NULL'
  );
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  $count = $row['count'];
  $total_page = ceil($count / $item_per_page);
  ?>
  <div class="page__info">
    <span>總共有 <?php echo escape($count) ?> 筆留言</span>
    <span>第 <?php echo escape($page) . '/' .$total_page ?> 頁</span>
    <div class="page__info--container">
      <?php if ($page != 1) { ?>
        <span><a href="index.php?page=1">首頁</a></span>
        <span><a href="index.php?page=<?php echo escape($page - 1); ?>">上一頁</a></span>  
      <?php } ?>
      <?php if ($page != $total_page) { ?>
        <span><a href="index.php?page=<?php echo escape($page + 1); ?>">下一頁</a></span>
        <span><a href="index.php?page=<?php echo escape($page + 1); ?>">最後一頁</a></span>
      <?php } ?>
    </div>
  </div>
  </div>


  <script type="text/javascript">
    if (document.querySelector('.update__nickname')) {
      const updateBtn = document.querySelector('.update__nickname')
      updateBtn.addEventListener('click',(e) => {
        e.preventDefault()
        const form = document.querySelector('.update')
        form.classList.toggle('hide')
      })
    }
  </script>
</body>
</html>
