<?php
require 'config.php';
require 'DB.php';
session_start();
$_SESSION['demo_cart'][0] = new ArrayObject();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>MyStore</title>
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="css/mdb.min.css" rel="stylesheet">
  <!-- Your custom styles (optional) -->
  <link href="css/style.min.css" rel="stylesheet">
  <link rel="icon" href="./slides/tthale.ico" sizes="192x192">
  <style type="text/css">
html,
body,
header,
.carousel {
  height: 60vh;
}
@media (max-width: 740px) {

  html,
  body,
  header,
  .carousel {
      height: 100vh;
  }
}

@media (min-width: 800px) and (max-width: 850px) {

  html,
  body,
  header,
  .carousel {
      height: 100vh;
  }
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.action-button
{
  padding: 5px 5px;
  float: left;
  border-radius: 10px;
  font-family: 'Pacifico', cursive;
  font-size: 15px;
  color: #FFF;
  text-decoration: none;
  margin-left:1%;
}
.action-button:active
{
  transform: translate(0px,5px);
  -webkit-transform: translate(0px,5px);
  border-bottom: 1px solid;
}
.blue
{
  background-color: #3498DB;
  border-bottom: 5px solid #2980B9;
  text-shadow: 0px -2px #2980B9;
}
.red
{
  background-color: #3498DB;
  border-bottom: 5px solid #2980B9;
  //text-shadow: 0px -2px red;
}
.animate
{
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
}
.header_todo{
    margin-left:1%;
}
.wrapper_todo{
    margin-left:1%;
    margin-top:2%;
}
.input_todo{
    width: 40%;
    margin-left:5%;
    border-radius:5px;
}
.main_todo{
    margin-top: 15px;
    margin-left: 10px;
    border: thin solid #b5b9bb;
    border-radius: 5px;
    width: 55%;
    padding-left:1%;
    padding-top:1.5%;
    padding-bottom:0.5%;
}
.item_todo{
    margin-right:7%;
}
.remove_item{
    float:right;
    margin-right:7%;

}
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand waves-effect" href="<?php echo WEB_HOST;?>">
        <strong class="blue-text">MyStore</strong>
      </a>
      <!-- Collapse -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left -->
        <ul class="navbar-nav mr-auto">
            <li class="nav-item <?php if (!isset($_GET['action'])){echo 'active';} ?>">
            <a class="nav-link waves-effect" href="<?php echo(WEB_HOST);?>">Home
              <span class="sr-only">(current)</span>
            </a>
           </li>
          <li class="nav-item <?php if (isset($_GET['action']) && $_GET['action'] === 'about') {echo 'active';}?>">
            <a class="nav-link waves-effect" href="./?action=about">About Us</a>
          </li>
          <li class="nav-item <?php if (isset($_GET['action']) && $_GET['action'] === 'contact') {echo 'active';}?>">
            <a class="nav-link waves-effect" href="./?action=contact">Contact Us</a>
          </li>
        </ul>
        <!--/Left -->
        <!-- Right -->
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
            <a class="nav-link waves-effect" href="./?action=checkout">
                <span class="badge black z-depth-1 mr-1 cart_num"><?php echo count($_SESSION['demo_cart'])-1;?></span>
              <i class="fas fa-shopping-cart"></i>
              <span class="clearfix d-none d-sm-inline-block"> Cart </span>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.facebook.com/tthale34" class="nav-link waves-effect" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://twitter.com/tebogothale" class="nav-link waves-effect" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item">
              <?php if(isset($_SESSION['ID'])){
                  echo '<a class="action-button shadow animate blue" href="./login_handler.php/?action=logout" role="button">Logout</a>';
              }else {
                  echo '<a class="action-button shadow animate blue" href="./?action=login" role="button">Login/Register</a>';
              }?>
          </li>
        </ul>
        <!--/Right -->
      </div>
    </div>
  </nav>
  <!-- Navbar -->
  <!--Carousel Wrapper-->
  <div id="carousel-example-1z" class="carousel slide carousel-fade pt-4" data-ride="carousel">
    <!--Indicators-->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-1z" data-slide-to="1"></li>
      <li data-target="#carousel-example-1z" data-slide-to="2"></li>
      <li data-target="#carousel-example-1z" data-slide-to="3"></li>
    </ol>
    <!--/.Indicators-->
    <!--Slides-->
    <div class="carousel-inner" role="listbox">
      <!--First slide-->
      <div class="carousel-item active">
        <div class="view" style="background-image: url('img/php.jpg'); background-repeat: no-repeat; background-size: cover;">
          <!-- Mask & flexbox options-->
          <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
            <!-- Content -->
                <div class="text-center white-text mx-5 wow fadeIn">
              <p class="mb-4">
              <strong>Welcome to our online shopping store, including features such as: Linking images to an products, remove and add products on the go, link products to 3rd party applications automatically, change website layout and themes at a click of a button, And many more.</strong>
              </p>
              <p>
                <strong>Upload List of products to display in shopping list.</strong>
                <strong>Only excel (i.e: .xlsx, .xls, .csv) format files are permitted. You may download sample excel file <a href="./uploads/Item_list.xlsx" target="_blank">here.</a></strong>
              </p>
              <form class="post_file_upload" action="process_upload.php" method="post" enctype="multipart/form-data">
                  <input class="btn btn-outline-blue btn-lg" name="submit" type="submit" value="Upload list">
                  <i class="fas fa-graduation-cap ml-2"></i>
                  <input type="file" name="file" required>
              </form>
            </div>
            <!-- Content -->
          </div>
          <!-- Mask & flexbox options-->
        </div>
      </div>
      <!--/First slide-->
      <!--Second slide-->
      <div class="carousel-item">
        <div class="view" style="background-image: url('img/jquery.jpg'); background-repeat: no-repeat; background-size: cover;n">
          <!-- Mask & flexbox options-->
          <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
            <!-- Content -->
            <div class="text-center white-text mx-5 wow fadeIn">
            <p class="mb-4">
            <strong>Welcome to our online shopping store, including features such as: Linking images to an products, remove and add products on the go, link products to 3rd party applications automatically, change website layout and themes at a click of a button, And many more.</strong>
              </p>
              <p>
                <strong>Upload List of products to display in shopping list.</strong>
                <strong>Only excel (i.e: .xlsx, .xls, .csv) format files are permitted. You may download sample excel file <a href="./uploads/Item_list.xlsx" target="_blank">here.</a></strong>
              </p>
              <form class="post_file_upload" action="process_upload.php" method="post" enctype="multipart/form-data">
                  <input class="btn btn-outline-blue btn-lg" name="submit" type="submit" value="Upload list">
                  <i class="fas fa-graduation-cap ml-2"></i>
                  <input type="file" name="file" required>
              </form>
            </div>
            <!-- Content -->
          </div>
          <!-- Mask & flexbox options-->
        </div>
      </div>
      <!--/Second slide-->
      <!--Third slide-->
      <div class="carousel-item">
        <div class="view" style="background-image: url('img/tdd.jpg'); background-repeat: no-repeat; background-size: cover;">
          <!-- Mask & flexbox options-->
          <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
            <!-- Content -->
            <div class="text-center white-text mx-5 wow fadeIn">
            <p class="mb-4">
            <strong>Welcome to our online shopping store, including features such as: Linking images to an products, remove and add products on the go, link products to 3rd party applications automatically, change website layout and themes at a click of a button, And many more.</strong>
              </p>
              <p>
                <strong>Upload List of products to display in shopping list.</strong>
                <strong>Only excel (i.e: .xlsx, .xls, .csv) format files are permitted. You may download sample excel file <a href="./uploads/Item_list.xlsx" target="_blank">here.</a></strong>
              </p>
              <form class="post_file_upload" action="process_upload.php" method="post" enctype="multipart/form-data">
                  <input class="btn btn-outline-blue btn-lg" name="submit" type="submit" value="Upload list">
                  <i class="fas fa-graduation-cap ml-2"></i>
                  <input type="file" name="file" required>
              </form>
            </div>
            <!-- Content -->
          </div>
          <!-- Mask & flexbox options-->
        </div>
      </div>
      <!--/Third slide-->
      <!--Forth slide-->
      <div class="carousel-item">
        <div class="view" style="background-image: url('img/react.png'); background-repeat: no-repeat; background-size: cover;">
          <!-- Mask & flexbox options-->
          <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
            <!-- Content -->
            <div class="text-center white-text mx-5 wow fadeIn">
            <p class="mb-4">
            <strong>Welcome to our online shopping store, including features such as: Linking images to an products, remove and add products on the go, link products to 3rd party applications automatically, change website layout and themes at a click of a button, And many more.</strong>
              </p>
              <p>
                <strong>Upload List of products to display in shopping list.</strong>
                <strong>Only excel (i.e: .xlsx, .xls, .csv) format files are permitted. You may download sample excel file <a href="./uploads/Item_list.xlsx" target="_blank">here.</a></strong>
              </p>
              <form class="post_file_upload" action="process_upload.php" method="post" enctype="multipart/form-data">
                  <input class="btn btn-outline-blue btn-lg" name="submit" type="submit" value="Upload list">
                  <i class="fas fa-graduation-cap ml-2"></i>
                  <input type="file" name="file" required>
              </form>
              </div>
            <!-- Content -->
          </div>
          <!-- Mask & flexbox options-->
        </div>
      </div>
      <!--/Forth slide-->
    </div>
    <!--/.Slides-->
    <!--Controls-->
    <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    <!--/.Controls-->
  </div>
  <!--/.Carousel Wrapper-->
  <!--Main layout-->
  <main>
    <div class="container">
      <!--Navbar-->
      <nav class="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
        <!-- Navbar brand -->
        <span class="navbar-brand">Items:</span>
        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="basicExampleNav">
          <!-- Links
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">All
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shirts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sport wears</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Outwears</a>
            </li>
          </ul>
          <-- Links -->
          <form class="form-inline" method="post" action="">
            <div class="md-form my-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" name="search">
                <!--<a href="javascript:doClick();" class="BrowseFile Button">File Browsing</a><input type="file" name="files[]" id="fileElem" multiple="multiple" accept="image/*" style="" onchange="handleFiles(this.files);">-->
            </div>
          </form>
          <a class="action-button shadow animate blue" href="./?action=checkout" role="button">Checkout</a>
        </div>
        <!-- Collapsible content -->
      </nav>
      <!--/.Navbar-->
      <?php if(isset($_GET['action']) && $_GET['action'] === "login"):?>
      <!--Login form-->
        <h4><strong><a class="dark-grey-text">Login Type:</a></strong><select id="loginType" onchange="loginType()">
                              <option>Login</option>
                              <option>Register</option>
              </select></h4>
      <!--Login form-->
      <form class="form-inline" method="post" action="./login_handler.php">
          <div class="md-form my-0 login card custom_card">
                  <a class="blue-text"><strong>Username: </strong><input type="text" name="username" value="" required></a>
                  <a class="blue-text"><strong>Password: </strong><input type="password" name="password" value="" required></a><br><br>
                  <input type="submit" name="submit" class="btn btn-outline-blue btn-lg" value="Login">
                  <input type="reset" name="clear" class="btn btn-outline-blue btn-lg" value="Clear">
              </div></form>
      <!--/Login form-->
        <!--Registration form-->
      <form class="form-inline" method="post" action="./login_handler.php">
          <div class="md-form my-0 register card custom_card">
                  <a class="blue-text"><strong>Name: </strong><input type="text" name="name" value="" required></a><br>
                  <a class="blue-text"><strong>Surname: </strong><input type="text" name="surname" value=""></a><br>
                  <a class="blue-text"><strong>Brand Name: </strong><input type="text" name="brand_name" value="" required></a><br>
                  <a class="blue-text"><strong>Email Address: </strong><input type="text" name="email_address" value="" required></a><br>
                  <a class="blue-text"><strong>Password: </strong><input type="password" name="password" value="" onchange="checkPassword()" id="password" required></a><br>
                  <h2><a class="red-text" id="valid_password" style="display:none">Password criteria: 1 upper case, 1 lower case, 1 numeric digit, & 1 character.</a></h2>
                  <a class="blue-text"><strong>Confirm Password: </strong><input type="password" name="conf_password" value="" onchange="confirmPassword()" id="conf_password" required></a><br>
                  <h2><a class="red-text" id="confirm_password" style="display:none">Passwords do not match.</a></h2>
                  <a class="blue-text"><strong>Client: <select name="client_type">
                                  <option></option>
                                  <option>Consumer</option>
                                  <option>Product Provider</option>
                          </select></strong></a><br><br>
                          <input type="submit" name="submit" class="btn btn-outline-blue btn-lg" value="Register" onclick="checkPasswordMatch()">
                  <input type="reset" name="clear" class="btn btn-outline-blue btn-lg" value="Clear"><br>
              </div>
          </form>
        <!--/Registration form-->
        <?php elseif(isset($_GET['action']) && $_GET['action'] === "viewItem"):?>
                <div class="container dark-grey-text mt-5">
                <?php
                try {
                $connection = DB::connectDB();
                $results = DB::getItemResources($connection, $_GET['id']);
                $row = $results->fetch_assoc();
                ?>
<!--Grid row-->
<div class="row wow fadeIn">
  <!--Grid column-->
          <div class="col-md-6 mb-4">
          <?php if (!file_exists($row['item_img_src'])): ?>
              <a onclick="triggerImageSelector(<?php echo $row['id'];?>,'main_img')"  id="add_img_main"><div class="mask rgba-white-slight"></div>Add image</a>
          <?php endif; ?>
          <input type="file" id="input_image_1" name="file" style="display:none" onchange="addImage(<?php echo $row['id']; ?>,'main_img')"/>
          <img src="<?php print_r($row['item_img_src']); ?>" class="img-fluid" alt="" id="main_img">
      </div>
  <!--/Grid column-->
  <!--Grid column-->
  <div class="col-md-6 mb-4">
    <!--Content-->
    <p class="lead">
        <span><strong><?php print_r($row['item_name']);?></strong></span>
      </p>
    <div class="p-4">
      <!-- <div class="mb-3">
        <a href="">
          <span class="badge purple mr-1">Category 2</span>
        </a>
        <a href="">
          <span class="badge blue mr-1">New</span>
        </a>
        <a href="">
          <span class="badge red mr-1">Bestseller</span>
        </a>
      </div> -->
      <p class="lead">
        <span>R<?php print_r($row['item_price']);?></span>
      </p>
      <p class="lead font-weight-bold">Description</p>
      <p><?php print_r($row['description']);?></p>
        <!-- Default input -->
        <input type="number" value="1" aria-label="Search" class="form-control" style="width: 100px" id="number_items">
        <br><button class="btn btn-primary btn-md my-0 p" type="submit" onclick="addToCart(<?php echo $row['id'];?>)">Add to cart
          <i class="fas fa-shopping-cart ml-1"></i>
        </button>
    </div>
    <!--Content-->
  </div>
  <!--/Grid column-->
</div>
<!--/Grid row-->
<hr>
<!--Grid row-->
<div class="row d-flex justify-content-center wow fadeIn">
  <!--Grid column-->
  <div class="col-md-6 text-center">
    <h4 class="my-4 h4">Additional information</h4>
    <p><?php print_r($row['additional_desc']);?></p>
  </div>
  <!--Grid column-->
</div>
<!--Grid row-->
<!--Grid row Product images-->
<div class="row wow fadeIn">
  <!--Grid column-->
  <div class="col-lg-4 col-md-12 mb-4">
      <?php if (!file_exists($row['img1'])): ?>
              <a onclick="triggerImageSelector(<?php echo $row['id']; ?>,'img1')" id="add_img1"><div class="mask rgba-white-slight"></div>Add image</a>
          <?php endif; ?>
          <input type="file" id="input_img1" name="file" style="display:none" onchange="addImage(<?php echo $row['id']; ?>,'img1')"/>
    <img src="<?php echo $row['img1']; ?>" class="img-fluid" alt="" id="img1">
  </div>
  <!--/Grid column-->
  <!--Grid column-->
  <div class="col-lg-4 col-md-6 mb-4">
      <?php if (!file_exists($row['img2'])): ?>
      <a onclick="triggerImageSelector(<?php echo $row['id']; ?>,'img2')" id="add_img2"><div class="mask rgba-white-slight"></div>Add image</a>
          <?php endif; ?>
          <input type="file" id="input_img2" name="file" style="display:none" onchange="addImage(<?php echo $row['id']; ?>,'img2')"/>
    <img src="<?php echo $row['img2']; ?>" class="img-fluid" alt="" id="img2">
  </div>
  <!--/Grid column-->
  <!--Grid column-->
  <div class="col-lg-4 col-md-6 mb-4">
      <?php if (!file_exists($row['img3'])): ?>
              <a onclick="triggerImageSelector(<?php echo $row['id']; ?>,'img3')" id="add_img3"><div class="mask rgba-white-slight"></div>Add image</a>
          <?php endif; ?>
          <input type="file" id="input_img3" name="file" style="display:none" onchange="addImage(<?php echo $row['id']; ?>,'img3')"/>
    <img src="<?php echo $row['img3']; ?>" class="img-fluid" alt="" id="img3">
  </div>
  <!--/Grid column-->
</div>
<!--/Grid row-->
<?php }catch (\Throwable $th) {
            echo '<h5 class="red-text"><strong>'.$th->getMessage().'.</strong> Notification has been sent to administrators to resolve the issue, we apologies for the</h5>';
          }?>
</div>
        <?php elseif(isset($_GET['action']) && $_GET['action'] === "todolist"):?>
            <div class="header_todo">
        <div class="tdl_Title"><h2>ToDo List</h2></div>
    </div>
    <div class="wrapper_todo">
        <input class="input_todo" type="text" placeholder="New Task..." id="task_input" value="">
        <a href="" class="action-button shadow animate blue" id="add_item">Add Item</a>
        <div class="success" style="display:none;">Success:</div>	
        <div class="main_todo">
            <!--Item-->
            <?php
            $connection=DB::connectDB();
            //Check Item list table exist else create.
	$item_count;
	if ($result = $connection->query("select Item from mytodolist")) {
		$item_count = $result->num_rows;
		$result->close();				
	}else{
		$my_query = "CREATE TABLE mytodolist ( `id` INT(255) NOT NULL AUTO_INCREMENT , 
		`Item` TEXT COLLATE utf8_bin NOT NULL , 
		`Item_desc` TEXT COLLATE utf8_bin NULL , 
		`flag` INT COLLATE utf8_bin NULL DEFAULT NULL , PRIMARY KEY (`id`)) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1;";
		
		if ($connection->query($my_query) === TRUE) {			
			$item_count = 0;
		} else {			
			die("<br>Failed to create table: " . $connection->connect_error."<br>");
		}		
	}
            $my_query = "Select id, Item,Item_desc,flag from mytodolist";
            $result = $connection->query($my_query);
            if (!$result) {
                die($connection->error);
            }
            while ($row = $result->fetch_assoc()):
                if ($item_count > 0):
                    ?>
<div class="form " id="item_<?php echo $row['id']; ?>">
    <input class="item_todo" type="checkbox" class="" id="checkBox_<?php echo $row['id']; ?>" onchange="changeItem(<?php echo $row['id']; ?>)" <?php if ($row['flag'] == 1) {echo 'checked';}?>>			
    <span><label class="item_label_<?php echo $row['id']; ?>" <?php if ($row['flag'] == 1) {echo 'style="display:none;"';}?>><?php echo $row['Item']; ?>        
        </label><input type="text" class="edit_input_<?php echo $row['id'];?>" style="display:none;" value="<?php echo $row['Item']; ?>"></span>		
    <span><del class="item_del_<?php echo $row['id']; ?>" <?php if ($row['flag'] != 1) {echo 'style="display:none;"';}?>><?php echo $row['Item']; ?></del></span>
    <div class="remove_item">
        <span style="cursor:pointer"><a onclick="editItem(<?php echo $row['id']; ?>)" class="fa fa-edit item_edit_<?php echo $row['id']; ?>" <?php if ($row['flag'] == 1) {echo 'style="display:none;"';}?>>Edit</a></span>		
        <span style="cursor:pointer"><a onclick="saveItem(<?php echo $row['id']; ?>)" class="fa fa-edit save_edit_<?php echo $row['id']; ?>" style="display:none;">Save</a></span>		
    <span><del class="badge badge-pill item_del_edit<?php echo $row['id']; ?>" <?php if ($row['flag'] != 1) {echo 'style="display:none;"';}?>>Edit</del></span>    
    <i class="fa fa-trash" onclick="removeItem(<?php echo $row['id']; ?>, '<?php echo $row['Item']; ?>')"></i></div>
    <hr>    
</div>
<?php endif;
endwhile;
?>
        </div>
    </div>
        <?php elseif(isset($_GET['action']) && $_GET['action'] === "checkout"):?>
        <div class="container wow fadeIn">
      <!-- Heading -->
      <h2 class="my-5 h2 text-center">Checkout form</h2>
      <!--Grid row check info & cart details-->
      <div class="row">
        <!--Grid column-->
        <div class="col-md-8 mb-4">
          <!--Card-->
          <div class="card">
            <!--Card content-->
            <form class="card-body" method="post" action="process_payment.php">
              <!--Grid row name surname-->
              <div class="row">
                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--firstName-->
                  <div class="md-form ">
                    <input type="text" id="firstName" class="form-control" required>
                    <label for="firstName" class="">First name</label>
                  </div>
                </div>
                <!--Grid column-->
                <!--Grid column-->
                <div class="col-md-6 mb-2">
                  <!--lastName-->
                  <div class="md-form">
                    <input type="text" id="lastName" class="form-control" required>
                    <label for="lastName" class="">Last name</label>
                  </div>
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row end-->
              <!--Username-->
              <div class="md-form input-group pl-0 mb-5">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1">
              </div>
              <!--email-->
              <div class="md-form mb-5">
                <input type="text" id="email" class="form-control" placeholder="youremail@example.com">
                <label for="email" class="">Email (optional)</label>
              </div>
              <!--address-->
              <div class="md-form mb-5">
                <input type="text" id="address" class="form-control" placeholder="1234 Main St" required>
                <label for="address" class="">Address</label>
              </div>
              <!--address-2-->
              <div class="md-form mb-5">
                <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite">
                <label for="address-2" class="">Address 2 (optional)</label>
              </div>
              <!--Grid row Country, province, zip-->
              <div class="row">
                <!--Grid column Country-->
                <div class="col-lg-4 col-md-12 mb-4">
                  <label for="country">Country</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>South Africa</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <!--Grid column-->
                <!--Grid column Province-->
                <div class="col-lg-4 col-md-6 mb-4">
                  <label for="state">Province</label>
                  <select class="custom-select d-block w-100" id="province" required>
                    <option value="">Choose...</option>
                    <option>Gauteng</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <!--Grid column-->
                <!--Grid column Zip Code-->
                <div class="col-lg-4 col-md-6 mb-4">
                  <label for="zip">Zip</label>
                  <input type="text" class="form-control" id="zip" placeholder="" required>
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row end-->
              <hr>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address">
                <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info">
                <label class="custom-control-label" for="save-info">Save this information for next time</label>
              </div>
              <hr>
              <!-- payment method -->
              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
                  <label class="custom-control-label" for="debit">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                  <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
                  <label class="custom-control-label" for="paypal">Paypal</label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input type="text" class="form-control" id="cc-name" placeholder="" required>
                  <small class="text-muted">Full name as displayed on card</small>
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input type="text" class="form-control" id="cc-number" placeholder="" required>
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr class="mb-4">
              <button class="btn btn-primary btn-lg btn-block" onclick="checkOutCart()">Continue to checkout</button>
            </form>
          </div>
          <!--/.Card-->
        </div>
        <!--/Grid column-->
        <!--Grid column-->
        <div class="col-md-4 mb-4">
          <!-- Heading -->
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Your cart</span>
            <span class="badge badge-secondary badge-pill"><?php print_r(count($_SESSION['demo_cart'])-1);?></span>
          </h4>
          <!-- Cart -->
          <ul class="list-group mb-3 z-depth-1">
              <?php $total_value = 0;?>
              <?php for($i = 1; $i <= count($_SESSION['demo_cart']); $i++):?>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div><?php if(isset($_SESSION['demo_cart'][$i])):?>
                  <h6 class="my-0"><?php print_r($_SESSION['demo_cart'][$i][0]);?></h6>
                <small class="text-muted"><?php print_r($_SESSION['demo_cart'][$i][3]);?></small>
                <input type="hidden" id="cart_id" value="<?php print_r($i)?>">
              </div>
              <span class="text-muted">R<?php print_r($_SESSION['demo_cart'][$i][2]/$_SESSION['demo_cart'][$i][3]);?></span>
            </li>
            <?php $total_value=$total_value+$_SESSION['demo_cart'][$i][2];?>
              <?php endif;?>
            <?php endfor;?>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total (ZAR)</span>
              <strong><?php print_r($total_value);?></strong>
              <input type="hidden" id="cartTotal" value="<?php print_r($total_value)?>">
            </li>
          </ul>
          <!-- Cart -->
        </div>
        <!--/Grid column-->
      </div>
</div>
        <?php elseif(isset($_GET['action']) && $_GET['action'] === "about"):?>
        <?php elseif(isset($_GET['action']) && $_GET['action'] === "contact"):?>
        <?php else:?>
      <!--Section: Products-->
      <section class="text-center mb-4">
        <?php
          try {
            //Create database connection
            $conn = DB::connectDB();
            DB::initializeDemoItems($conn);
            //Get Searched Items
            if(isset($_POST['search'])) {
              $results = DB::getSearchedItems($conn,$_POST['search'],  session_id());
              if($results->num_rows === 0){
                echo '<h5 class="red-text"><strong>No results returned from search.</strong></h5>';
              }
            }
            //Get Items, if session is set, user is logged in
            if(isset($_SESSION['ID']) && !empty($_SESSION['ID'])){
                $results = DB::getItems_SI($conn,$_SESSION['ID']);
            }elseif (!isset($results)){
                //else get demo items
                $results = DB::getItems($conn);
            }
            //Display no items returned message
          if($results->num_rows === 0 && !isset($_POST['search'])){
                  echo '<h5 class="red-text"><strong>Please upload shopping items in order to display items in item list.</strong></h5>';
          }?>
          <!-- Display items based on set result -->
          <div class="row wow fadeIn">
              <?php
              while($row = $results->fetch_assoc()):?>
                      <!--Grid column-->
                      <div class="col-lg-3 col-md-6 mb-4" id="grid_<?php echo $row['id'];?>">
                        <!--Card-->
                        <div class="card">
                          <!--Card image-->
                          <div class="view overlay">
                              <form method="post" action="" enctype="multipart/form-data" id="myform">
                                  <input type="file" id="file_image_<?php echo $row['id'];?>" name="file" style="display:none" onchange="addImage(<?php echo $row['id'];?>,'home')"/>
                                  <img src="<?php echo $row['item_img_src'];?>" class="card-img-top" alt="" id="img_<?php echo $row['id'];?>">
                            </form>
                            <a href="./?action=viewItem&id=<?php echo $row['id'];?>"><div class="mask rgba-white-slight"></div></a>
                          </div>
                          <?php if(!file_exists($row['item_img_src'])):?>
                          <a onclick="triggerImageSelector(<?php echo $row['id'];?>,'home')" id="main_add_image<?php echo $row['id'];?>"><div class="mask rgba-white-slight"></div>Add image</a>
                            <?php endif;?>
                          <!--Card image-->
                          <!--Card content-->
                          <div class="card-body text-center">
                            <!--Category & Title-->
                            <a href="./?action=viewItem&id=<?php echo $row['id'];?>" class="grey-text"><h5><?php echo $row['item_cat'];?></h5></a>
                            <h5>
                              <strong><a href="./?action=viewItem&id=<?php echo $row['id'];?>" class="dark-grey-text"><?php echo $row['item_name'];?>
                                  <?php if($row['item_desc'] !== null): ?>
                                  <span class="badge badge-pill primary-color"><?php echo $row['item_desc'];?></span>
                                  <?php endif;?>
                                  </a>
                              </strong>
                            </h5>
                            <!-- Price -->
                            <h4 class="font-weight-bold blue-text">
                              <strong><?php echo 'R'.$row['item_price'];?></strong>
                            </h4>
                            <a class="action-button shadow animate blue" onclick="addToCart(<?php echo $row['id'];?>)"><span>Add To Cart</span></a>
                            <i class="fa fa-trash red-text" onclick="deleteItem(<?php echo $row['id'];?>)" style="cursor: pointer"></i>
                          </div>
                          <!--Card content-->
                          <a id="addToCartSuccess_<?php echo $row['id'];?>" class="font-weight-bold green-text" style="display: none"> Item added to cart</a>
                          <a id="addToCartDelete_<?php echo $row['id'];?>" class="font-weight-bold red-text" style="display: none"> Item deleted from product list</a>
                        </div>
                        <!--Card-->
                      </div>
                      <!--Grid column-->
                <?php endwhile;?>
          </div>
          <?php }catch (\Throwable $th) {
            echo '<h5 class="red-text"><strong>'.$th->getMessage().'.</strong> Notification has been sent to administrators to resolve the issue, we apologies for the</h5>';
          }
      endif;?>
          <!--/Display items-->
      </section>
      <!--/Section: Products-->
      <!--Pagination-->
      <nav class="d-flex justify-content-center wow fadeIn">
              <ul class="pagination pg-blue" style="display:none;">
              <!--Arrow left-->
                <li class="page-item disabled">
                  <a class="page-link" aria-label="Previous" onclick="changePagItem('prev')">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <!--Arrow Middle-->
                <li class="page-item active">
                  <a class="page-link">1
                    <span class="sr-only"></span>
                  </a>
                </li>
              <!--Arrow Right-->
              <li class="page-item">
                <a class="page-link" aria-label="Next" onclick="changePagItem('next')">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
        </ul>
      </nav>
    </div>
  </main>
  <!--Main layout-->
  <!--Footer-->
  <footer class="page-footer text-center font-small mt-4 wow fadeIn">
    <!--Call to action-->
    <div class="pt-4">
      <a class="btn btn-outline-white" href="./uploads/Item_list.xlsx" target="_blank"
        role="button">Download Sample Excel File
        <i class="fas fa-download ml-2"></i>
      </a>
    </div>
    <!--/.Call to action-->
    <hr class="my-4">
    <!-- Social icons -->
    <div class="pb-4">
      <a href="https://www.facebook.com/tthale34" target="_blank">
        <i class="fab fa-facebook-f mr-3"></i>
      </a>
    </div>
    <!-- Social icons -->
    <!--Copyright-->
    <div class="footer-copyright py-3">
      © 2020 Copyright:
      <a href=""> tthale.co.za </a>
    </div>
    <!--/.Copyright-->
  </footer>
  <!--/.Footer-->
  <!-- SCRIPTS -->
  <!-- JQuery -->
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <!-- Bootstrap tooltips -->
  <script type="text/javascript" src="js/popper.min.js"></script>
  <!-- Bootstrap core JavaScript -->
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <!-- MDB core JavaScript -->
  <script type="text/javascript" src="js/mdb.min.js"></script>
  <!-- Initializations -->
  <script type="text/javascript">
    // Animations initialization
    //new WOW().init();
    loginType();
    $('#cartTotal').click(function(event){
       checkOutValidate(event);
    });
    function addImage(id,type){
        let input;
        if(type === 'home'){
            input = $('#file_image_'+id);
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#img_'+id).attr('src', e.target.result);
                    $('#img_'+id).hide();
                    $('#img_'+id).fadeIn(3000);
                    $('#main_add_image'+id).fadeOut(2000);
                };
                reader.readAsDataURL(input[0].files[0]);
                var fd = new FormData();
                var files = input[0].files[0];
                fd.append('file',files);
                fd.append('id',id);
                //fd.append('type','main_img');
                $.ajax({                
                    url: './upload_image.php',
                    type: 'post',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function(response){                    
                        if(response !== 0){
                            console.log(response);
                        }
                },
                });
            }
        }
        if(type === 'main_img'){
            input = $('#input_image_1');
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#main_img').attr('src', e.target.result);
                    $('#main_img').hide();
                    $('#main_img').fadeIn(3000);
                    $('#add_img_main').fadeOut(2000);
                };
                reader.readAsDataURL(input[0].files[0]);
                var fd = new FormData();
                var files = input[0].files[0];
                fd.append('file',files);
                fd.append('id',id);
                fd.append('type','main_img');
                $.ajax({                
                    url: './upload_image.php',
                    type: 'post',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function(response){                    
                        if(response !== 0){
                            console.log(response);
                        }else{
                            console.log('file not uploaded');
                        }
                },
                });
            }
        }
        if(type === 'img1'){
            input = $('#input_img1');
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#img1').attr('src', e.target.result);
                    $('#img1').hide();
                    $('#img1').fadeIn(3000);
                    $('#add_img1').fadeOut(2000);
                };
                reader.readAsDataURL(input[0].files[0]);
                var fd = new FormData();
                var files = input[0].files[0];
                fd.append('file',files);
                fd.append('id',id);
                fd.append('type','img1');
                $.ajax({                
                    url: './upload_image.php',
                    type: 'post',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function(response){                    
                        if(response !== 0){
                            console.log(response);
                        }else{
                            console.log('file not uploaded');
                        }
                },
                });
            }
        }
        if(type === 'img2'){
            input = $('#input_img2');
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#img2').attr('src', e.target.result);
                    $('#img2').hide();
                    $('#img2').fadeIn(3000);
                    $('#add_img2').fadeOut(2000);
                };
                reader.readAsDataURL(input[0].files[0]);
                var fd = new FormData();
                var files = input[0].files[0];
                fd.append('file',files);
                fd.append('id',id);
                fd.append('type','img2');
                $.ajax({                
                    url: './upload_image.php',
                    type: 'post',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function(response){                    
                        if(response !== 0){
                            console.log(response);
                        }else{
                            console.log('file not uploaded');
                        }
                },
                });
            }
        }
        if(type === 'img3'){
            input = $('#input_img3');
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#img3').attr('src', e.target.result);
                    $('#img3').hide();
                    $('#img3').fadeIn(3000);
                    $('#add_img3').fadeOut(2000);
                };
                reader.readAsDataURL(input[0].files[0]);
                var fd = new FormData();
                var files = input[0].files[0];
                fd.append('file',files);
                fd.append('id',id);
                fd.append('type','img3');
                $.ajax({                
                    url: './upload_image.php',
                    type: 'post',
                    data: fd,
                    contentType: false,
                    processData: false,
                    success: function(response){                    
                        if(response !== 0){
                            console.log(response);
                        }else{
                            console.log('file not uploaded');
                        }
                },
                });
            }
        }
    }
    function triggerImageSelector(id,type){
        if(type === 'home'){
            $('#file_image_'+id).trigger('click');
        }
        if(type === 'main_img'){
            $('#input_image_1').trigger('click');
        }
        if(type === 'img1'){
            $('#input_img1').trigger('click');
        }
        if(type === 'img2'){
            $('#input_img2').trigger('click');
        }
        if(type === 'img3'){
            $('#input_img3').trigger('click');
        }        
    }
    function checkOutValidate(e){
      //Validate items in cart
      //if($('#cartTotal').val() < 1){
          alert("Cart checkout available to regsitered users.");
          e.preventDefault();
      //}
    }
    function addToCart(item_id){
        var fd = new FormData();
        fd.append('id',item_id);
        fd.append('number',function(){
                if($('#number_items').val()>1){
                    return $('#number_items').val();
                }else{ return 1;}
            });
        $.ajax({
        url: "./addToCart.php",
        type: "post",
        data: fd,
        contentType: false,
        processData: false,
        success: function(response) {
              $('#addToCartSuccess_'+item_id).show();
              $('#addToCartSuccess_'+item_id).delay(1000).fadeOut(2000);
        },
        error: function (request, status, error) {
          if(error !== null){
            console.log(error);
          }
        }});
    }
    function deleteItem(item_id){
        if (confirm('Are you sure you want to delete Product?')) {
            var fd = new FormData();
            fd.append('id',item_id);
            $.ajax({
            url: "./deleteItem.php",
            type: "post",
            /*dataType: "json",
            data: JSON.stringify({id:item_id,number:function(){
                    if($('#number_items').val()>1){
                        return $('#number_items').val();
                    }else{ return 1;}
                }}),
            SyntaxError: Unexpected end of JSON input
        at parse (<anonymous>)
        at jquery-3.4.1.min.js:2
        at l (jquery-3.4.1.min.js:2)
        at XMLHttpRequest.<anonymous> (jquery-3.4.1.min.js:2)*/
            data: fd,
            contentType: false,
            processData: false,
            success: function(response) {
                  $('#addToCartDelete_'+item_id).show();
                  $('#addToCartDelete_'+item_id).delay(1000).fadeOut(2000);
                  $('#grid_'+item_id).delay(1000).fadeOut(3000);
            },
            error: function (request, status, error) {
              if(error !== null){
                console.log(error);
              }
            }});
        }        
    }
    function loginType(){
        if($("#loginType").val() === "Login"){
            $(".login").css("display","inline-block");
            $(".register").css("display","none");
        }else{
            $(".login").css("display","none");
            $(".register").css("display","inline-block");
        }
    }
    function checkPassword(){
        for(let i = 0; i < $("#password").val().length; i++){

        }
    }
    function checkPasswordMatch(){
        if($("#password").val() !== $("#conf_password").val()){
            alert("Passwords do not match, make sure password and confirm password are the same.");
            exit;
        }

    }
function changeItem(id) {
    var item_del = '.item_del_' + id;
    var item_label = '.item_label_' + id;
    var check = '#checkBox_' + id;
    var check_status = $(check).is(":checked");
    var fd = new FormData();
    fd.append('id', id);
    if (check_status) {
        $(item_label).hide();
        $(item_del).show();

        $('.item_edit_' + id).hide();
        $('.item_del_edit' + id).show();

        fd.append('checked', check_status);
        $.ajax({
            url: "./processSave.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {
                $('.success').show();
                $('.success').append(response);
                $('.success').delay(3000).fadeOut();
            },
            error: function (request, status, error) {
                console.log(request.responseText);
                console.log(error);
            }
        });
    } else {
        $(item_label).show();
        $(item_del).hide();

        $('.item_edit_' + id).show();
        $('.item_del_edit' + id).hide();
        fd.append('checked', check_status);
        $.ajax({
            url: "./processSave.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {
                $('.success').show();
                $('.success').append(response);
                $('.success').delay(3000).fadeOut();
                //$('#item_'+id).delay(2000).fadeOut();
            },
            error: function (request, status, error) {
                console.log(request.responseText);
                console.log(error);
            }
        });
    }
}
$('#add_item').on('click', function (e) {
    if ($('#task_input').val() === "") {
        alert("No value entered in new task field, please populate New Task to ass task.");
    } else {
        var fd = new FormData();
        fd.append('new_item', $("#task_input").val());
        $.ajax({
            url: "http://tthale.co.za/MyStore/processSave.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {alert(response);
                $('.success').show();
                $('.success').append(response);
                $('.success').delay(9000).fadeOut();
            },
            error: function (request, status, error) {
                console.log(request);
                console.log(error);
            }
        });
        
    }
});
function removeItem(id, item) {
    if (confirm('Are you sure you want to delete: ' + item)) {
        var fd = new FormData();
        fd.append('id', id);
        fd.append('action', 'delete');
        $.ajax({
            url: "./processSave.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {
                $('.success').show();
                $('.success').append(response);
                $('.success').delay(3000).fadeOut();
                $('#item_' + id).delay(3000).fadeOut();
            },
            error: function (request, status, error) {
                console.log(request.responseText);
                console.log(error);
            }
        });
    }
}
function editItem(id) {
    $('.item_label_' + id).hide();
    $('.edit_input_' + id).show();
    $('.save_edit_' + id).show();
    $('.item_edit_' + id).hide();
}
function saveItem(id) {
    $('.item_label_' + id).show();
    $('.edit_input_' + id).hide();
    $('.save_edit_' + id).hide();
    $('.item_edit_' + id).show();
    $('.item_label_' + id).text($('.edit_input_' + id).val());
    var fd = new FormData();
        fd.append('id', id);
        fd.append('action', 'save');
        fd.append('value', $('.edit_input_' + id).val());
        $.ajax({
            url: "./processSave.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function (response) {
                $('.success').show();
                $('.success').append(response);
                $('.success').delay(3000).fadeOut();
                $('#item_' + id).delay(3000).fadeOut();
            },
            error: function (request, status, error) {
                console.log(request.responseText);
                console.log(error);
            }
        });
}
  </script>
</body>
</html>