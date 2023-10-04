
import { Fragment, useEffect } from 'react';
import Register from './Layout/Register';
import Login from './Layout/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import ForgotPassword from './Layout/ForgotPassword';
import Layout from './Layout/Layout';
import Dashboard from './Layout/Dashboard';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getToken } from './Common/token';
function App() {
  const location = useLocation();
  const navigate = useNavigate()
  // const {token}  = useParams()



  useEffect(() => {
    // checking while component is being mounted weather it is auth check or not
    if (location.pathname.split('/')[1] === 'register') {
      navigate(`/register/${location.pathname.split('/')[2]}`);
    }
    else if (location.pathname === "" || location.pathname === "/") {
      navigate("/login");
    }
    else if (!getToken()) {
      console.log(getToken());
      navigate("/login");
    }
    // console.log(getToken());
  }, []);




  const gotoLogin = () => {
    return <Routes >
      <Route exact path="/login" element={<Login title="Andar" />} />
      <Route exact path="/register/:token" element={<Register title="Register" />} />
      <Route exact path="/forgotpassword" element={<ForgotPassword title="Reset password" />} />
    </Routes>
  }
  return (
    <Fragment>
      {
        location.pathname === "" ||
          location.pathname === "/login" ||
          location.pathname === "/forgotpassword" ||
          location.pathname === "/" ||
          location.pathname === `/register/${location.pathname.split('/')[2]}`
          ? (
            gotoLogin()
          ) :
          <Dashboard />
        // 'dd'
      }
    </Fragment>
  );
}

export default App;