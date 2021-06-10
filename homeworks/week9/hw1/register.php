<form action="handle_register.php" method="POST">
  <h2>註冊新會員</h2>
  <div>username:<input name="username"></div>
  <div>password:<input name="password"></div>
  <div >
    <input class="submit" type="submit" value="註冊">  
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
  .submit {
    cursor: pointer;
  }
</style>