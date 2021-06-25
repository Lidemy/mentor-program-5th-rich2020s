<!DOCTYPE html>
<html>
<head>
  <title>註冊</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" >
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form action="handle_register.php" method="POST" class="login">
    <h2>註冊新會員</h2>
    <div>username:<input name="username" class="login__input"></div>
    <div>password:<input name="password" type="password" class="login__input"></div>
    <div>
      <input class="submit" type="submit" value="註冊">  
    </div>
  </form>
</body>
</html>