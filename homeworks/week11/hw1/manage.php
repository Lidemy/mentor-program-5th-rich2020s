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
    die('權限不足');
  }
  if ($user['Authority'] !== 2) {
    die('權限不足');
  }
  $page = 1;
  if (!empty($_GET['page'])) {
    $page = $_GET['page'];
  }
  $item_per_page = 10;
  $offset = ($page - 1) * $item_per_page;
  $stmt = $conn->prepare(
    'SELECT * FROM rich_member as C ' .
    'WHERE C.id != ? limit ? offset ?'
  );
  $stmt->bind_param('iii', $user['id'], $item_per_page, $offset);
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
  <title>管理頁面</title>
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

    <div class="manage">
      <h1 class="title">使用者清單</h1>
        <table class="manage__table">
          <tr>
            <th>ID</th>
            <th>Authority</th>
            <th>nickname</th>
            <th>username</th>
            <th></th>
          </tr>
          <?php while ($row = $result->fetch_assoc()) {  ?>
            <form action="handle_manage.php" method="POST">
              <tr>
                <td><?php echo $row['id'] ?><input type="text" name="id" class="hide" value="<?php echo $row['id'] ?>"></td>
                <td>
                  <select name="Authority">
                    <option value="0" <?php if($row['Authority'] === 0) echo 'selected';?> >被停用</option>
                    <option value="1" <?php if($row['Authority'] === 1) echo 'selected' ?>>一般</option>
                    <option value="2" <?php if($row['Authority'] === 2) echo 'selected'?>>管理員</option>
                  </select>
                </td>
                <td><?php echo escape($row['nickname']) ?></td>
                <td><?php echo escape($row['username']) ?></td>
                <td><input type="submit" value="更新" class="update__user"></td>
            </tr>
          </form>
          <?php } ?>
        </table>
    </div>
  <div class="buttom__hr"></div>
  <?php 
  $stmt = $conn->prepare(
    'SELECT count(id) as count FROM rich_member'
  );
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  $count = $row['count'];
  $total_page = ceil($count / $item_per_page);
  ?>
  <div class="page__info">
    <span>總共有 <?php echo $count ?> 筆資料</span>
    <span>第 <?php echo $page . '/' .$total_page ?> 頁</span>
    <div class="page__info--container">
      <?php if ($page != 1) { ?>
        <span><a href="manage.php?page=1">首頁</a></span>
        <span><a href="manage.php?page=<?php echo $page - 1; ?>">上一頁</a></span>  
      <?php } ?>
      <?php if ($page != $total_page) { ?>
        <span><a href="manage.php?page=<?php echo $page + 1; ?>">下一頁</a></span>
        <span><a href="manage.php?page=<?php echo $page + 1; ?>">最後一頁</a></span>
      <?php } ?>
    </div>
  </div>
  </div>
</body>
</html>
