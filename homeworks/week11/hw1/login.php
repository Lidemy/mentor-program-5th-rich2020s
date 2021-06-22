<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>登入</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <form action="handle_login.php" method="POST" class="login">
    <h2>會員登入</h2>
    <div>username:<input name="username" class="login__input"></div>
    <div>password:<input type="password" name="password" class="login__input"></div>
    <div >
      <input class="submit" type="submit">
      <a href="register.php" class="registerBtn">註冊新會員</a>    
    </div>
    </form>
  </body>
</html>