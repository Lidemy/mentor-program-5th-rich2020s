<form action="handle_login.php" method="POST">
  <h2>會員登入</h2>
  <div>username:<input name="username"></div>
  <div>password:<input name="password"></div>
  <div >
    <input class="submit" type="submit">
    <a href="register.php">註冊新會員</a>    
  </div>
</form>

<style type="text/css">
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
input {
  margin: 10px;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
 text-decoration:underline; 
}
.submit {
  cursor: pointer;
}
</style>