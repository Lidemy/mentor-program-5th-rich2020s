import styled from "styled-components";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./index.css";
import { getMe } from "../../WebAPI";
import { AuthContext } from "../../context";
const Navbar = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #dbdbdb;
`;
const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLinks = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  a + a {
    margin-left: 30px;
  }
  div + a {
    margin-left: 30px;
  }
`;
const Brand = styled.div`
  font-weight: 600;
  font-size: 24px;
`;
const ALink = styled(Link)`
  display: block;
  height: 100%;
  line-height: 54px;
  text-decoration: none;
  padding: 0 10px;
  color: black;
  background-color: ${(props) => (props.active ? "#ccc" : "")};
  :hover {
    cursor: pointer;
  }
`;
function NavLink({ label, to, exact, path }) {
  let match = useRouteMatch({
    path: path || to,
    exact,
  })
  return (
    <ALink to={to} label={label} active={match && "true"}>
      {label}
    </ALink>
  )
}

export default function Header() {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    async function fetchData() {
      let res = await getMe();
      if (res.ok) return setIsLogin(true);
      setIsLogin(false);
      localStorage.setItem("user_token", "");
    }
    if (userToken) fetchData();
  }, [setIsLogin]);
  function handleLogout() {
    setIsLogin(false);
    localStorage.setItem("user_token", "");
    history.push("/");
  }
  return (
    <Navbar>
      <Container>
        <NavLinks>
          <Brand>Rich</Brand>
          <NavLink exact={true} to="/" label={"首頁"} />
          <NavLink exact={false} path="/all-post" to="/all-post/1" label={"所有文章"} />
          <NavLink to="/about" label={"About"} />
        </NavLinks>
        <NavLinks>
          {!isLogin && <NavLink to="/login" label={"登入"} />}
          {!isLogin && <NavLink to="/register" label={"註冊"} />}
          {isLogin && (
            <ALink as={"div"} onClick={handleLogout}>
              登出
            </ALink>
          )}
          {isLogin && <NavLink to="/add-post" label={"發表文章"} />}
        </NavLinks>
      </Container>
    </Navbar>
  );
}
