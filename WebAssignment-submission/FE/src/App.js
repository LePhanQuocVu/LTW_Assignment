
import './App.css';

import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router';

import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';

import About from './pages/About/About';
import Detail from './pages/Detail/Detail';
import { UserTemplate } from './templates/HomeTemplate/UserTemplate/UserTemplate';

// import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import TestPage from "./pages/Test/TestPage";
import UserList from "./pages/Test/UserList";
import Edituser from "./pages/Test/Edituser";

import Register1 from './pages/Register/Register1';
import Adduser from './pages/Test/Adduser';
import Addproduct from './pages/Test/Addproduct';
import ProductList from "./pages/Test/ProductList"
import Checkout from "./pages/Checkout/Checkout"

// import { toast } from "react-toastify";
import Article from "./pages/News/Article"
import { ProfileTemplate } from './templates/HomeTemplate/ProfileTemplate'
import Profile from "./pages/profile/Profile";
import ManageNews from './pages/ManageNews/ManageNews';
import ManageUser from './pages/ManageUsers/ManageUsers';
import ManageAddress from './pages/ManageAddress/ManageAddress';
import ManageContact from './pages/ManageContact/ManageContact';
import ManageCarousel from './pages/ManageCarousel/ManageCarousel';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import ManageTeam from './pages/ManageTeam/ManageTeam';
import ManageTestimonial from './pages/ManageTestimonial/ManageTestimonial';
import ManageService from './pages/ManageService/ManageService';
import ManageStatistic from './pages/ManageStatistic/ManageStatistic';
import ManageAboutImg from './pages/ManageAboutImg/ManageAboutImg';
import ManageContactPage from './pages/ManageContactPage/ManageContactPage';
import ManageOrder from './pages/ManageOrder/ManageOrder';
import { UserProfileTemplate } from './templates/HomeTemplate/UserProfileTemplate'
import OrderHistory from './pages/OrderHistory/OrderHistory'; 
export const history = createBrowserHistory();

function App() {

  return (

    <Router history={history}>

      <Switch>
        <UserProfileTemplate path="/profile" exact Component={Profile} />
        <UserProfileTemplate path="/orderHistory" exact Component={OrderHistory} />


        <ProfileTemplate path='/admin' exact Component={Profile} />
        <ProfileTemplate path='/manageOrder' exact Component={ManageOrder} />
        <ProfileTemplate path='/manageUsers' exact Component={ManageUser} />
        <ProfileTemplate path='/manageNews' exact Component={ManageNews} />
        <ProfileTemplate path='/manageContact' exact Component={ManageContact} />
        <ProfileTemplate path='/manageAddress' exact Component={ManageAddress} />
        <ProfileTemplate path='/manageCarousel' exact Component={ManageCarousel} />
        <ProfileTemplate path='/manageProducts' exact Component={ManageProducts} />
        <ProfileTemplate path='/manageService' exact Component={ManageService} />
        <ProfileTemplate path='/manageTeam' exact Component={ManageTeam} />
        <ProfileTemplate path='/manageTestimonial' exact Component={ManageTestimonial} />
        <ProfileTemplate path='/manageAboutImg' exact Component={ManageAboutImg} />
        <ProfileTemplate path='/manageStatistic' exact Component={ManageStatistic} />
        <ProfileTemplate path='/manageService' exact Component={ManageService} />
        <ProfileTemplate path='/manageContactPage' exact Component={ManageContactPage} />



        <HomeTemplate path="/home" exact Component={Home} />
        <HomeTemplate path="/about" exact Component={About} />
        <HomeTemplate path="/checkout" exact Component={Checkout} />
        <HomeTemplate path="/article/:id" exact Component={Article} />
        <HomeTemplate path="/contact" exact Component={Contact} />
        {/* <HomeTemplate path="/cp" exact Component={Cartm} /> */}
        <HomeTemplate path="/news" exact Component={News} />
        <HomeTemplate path="/add" exact Component={Adduser} />
        <HomeTemplate path="/addp" exact Component={Addproduct} />
        <HomeTemplate path="/product" exact Component={ProductList} />



        {/* <HomeTemplate path="/admin" exact Component={Admin} /> */}

        {/* <HomeTemplate path="/admin" Component={AdminTemplate} /> */}
        <HomeTemplate path="/detail/:id" exact Component={Detail} />
        <HomeTemplate path="/cart" exact Component={Cart} />
        <UserTemplate path="/login" exact Component={Login} />

        <UserTemplate path="/register" exact Component={Register1} />
        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/test" exact Component={TestPage} />
        <HomeTemplate path="/user" exact Component={UserList} />
        <HomeTemplate path="/edit/:id" exact Component={Edituser} />
        <HomeTemplate path="*" exact Component={NotFound} />
        <Route />


        {/* 
        <Route path="*"  >

          <NotFound />
        </Route> */}

      </Switch>

    </Router>


  );
}

export default App;
