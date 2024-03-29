<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
session_start();
//load models
require "config.php";
require "connectDB.php";
// require "functions.php";

require "model/User.php";
require "model/UserRepository.php";
require "model/Product.php";
require "model/ProductRepository.php";
require "model/Comment.php";
require "model/CommentRepository.php";
require "model/Cart.php";
require "model/CartRepository.php";
require "model/News.php";
require "model/NewsRepository.php";
require "model/Contact.php";
require "model/ContactRepository.php";
require "model/Store.php";
require "model/StoreRepository.php";
require "model/Carousel.php";
require "model/CarouselRepository.php";
require "model/Commentnews.php";
require "model/CommentnewsRepository.php";
require "model/Team.php";
require "model/TeamRepository.php";
require "model/Testimonial.php";
require "model/TestimonialRepository.php";
require "model/Service.php";
require "model/ServiceRepository.php";
require "model/Statistic.php";
require "model/StatisticRepository.php";
require "model/ContactPage.php";
require "model/ContactPageRepository.php";
require "model/Aboutimg.php";
require "model/AboutimgRepository.php";

require "model/Order.php";
require "model/OrderRepository.php";
//router
$c = $_GET["c"] ?? "user";
$a = $_GET["a"] ?? "list";
$controllerName = ucfirst($c) . "Controller";
require "controller/" . $controllerName . ".php";
$controller = new $controllerName();
$controller->$a();
