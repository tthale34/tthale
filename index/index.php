<?php
require 'config.php';
require 'DB.php';
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>ZTQ</title>
  <link href="css/jquery-ui.css" rel="stylesheet">
  <style type="text/css">
html,
body,
header,
.carousel {
  height: 60vh;
  margin: 50px;
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
.main{
    margin: 50px;
    padding: 20px;
    border-radius: 50px;
    border: solid crimson medium;
}
/*Strip the ul of padding and list styling*/
.menu:ul {
    list-style-type:none;    
    padding:0;
    
}
.navbar-nav{
    float: right;
}
/*Create a horizontal list with spacing*/
li {
    display:inline-block;    
}
/*Style for menu links*/
li a {
    display:block;
    min-width:60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    background: #2f3036;
    border-radius: 10px;
    text-decoration: none;
}
/*Hover state for top level links*/
li:hover a {
    background: crimson;
}
li:active a {
    background: crimson;
}
/*Style for dropdown links*/
li:hover ul a {
    background: #f3f3f3;
    color: #2f3036;
    height: 40px;
    line-height: 40px;
}
/*Hover state for dropdown links*/
li:hover ul a:hover {
    background: red;
    color: #fff;
}
li:active ul a:active {
    background: red;
    color: #fff;
}

  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="">
    <div class="">
      <!-- Brand -->
      <a class="" href="">
        <strong class="">Sakhile</strong>
      </a>
      
        <!-- Menu -->
        <?php if(isset($_SESSION['ID'])):?>
        
        <ul class="menu">
            <li class="<?php if (isset($_GET['page']) && $_GET['page'] == "home"){echo 'active';}?>"><a class="" href="./?page=home">Home</a></li>
            <li class="<?php if (isset($_GET['page']) && $_GET['page'] == "add"){echo 'active';}?>"><a class="" href="./?page=add">Add</a></li>
            <li class="<?php if (isset($_GET['page']) && $_GET['page'] == "manage"){echo 'active';}?>"><a class="" href="./?page=manage">Manage</a></li>
        </ul>
        <div class="navbar-nav" id="">
        <ul class="log">
            <li >
                <a class="action-button shadow animate blue" href="./action.php?action=logout" role="button">Logout</a>
          </li>
        </ul>
            </div>
        <?php endif;?>
        <!--/Menu -->
      
    </div>
  </nav>
  <!-- Navbar -->
  <!--Main layout-->
  <main>
    <div class="main">
      <!--Login form-->      
      <?php if(!isset($_SESSION['ID'])):?>
      <form action="./">
          <div class="md-form my-0 login card custom_card" style="">
              <span><a class=""><strong>Surname: </strong><input class="inputs" type="text" id="surname" value=""></a><br><br></span>
              <span><a class=""><strong>Password: </strong><input class="inputs" type="password" id="passwordLogin" value=""></a><br><br></span>
              <input type="submit" class="" value="Login" id="submitLogin">
              <input type="reset" class="" value="Clear">
          </div>
      </form>
      <?php endif;?>
      <!--/Login form-->
      <?php if (isset($_GET['page']) && $_GET['page'] == "home"):?>
      <h5><a><strong>Welcome to my online student application.</strong></a></h5>';
        <img src="./php.jpg" style="border-radius: 50px;">
      <?php endif;?>
      <?php if (!isset($_GET['page']) && isset($_SESSION['ID'])):?>
      <h5><a><strong>Student Application.</strong></a></h5>
      <?php endif;?>
        
      <?php if (isset($_GET['page']) && $_GET['page'] == "add" && isset($_SESSION['ID'])):?>
      <form class="form-inline" method="" action="./?page=add">
      <!--<form class="form-inline" method="post" action="./app_handler.php">-->
          <div class="md-form my-0 login card custom_card" style="padding: 10px;">
              <span><a class=""><strong>First Name: </strong><input class="inputs" type="text"id="firstname" value=""></a><br><br></span>
              <span><a class=""><strong>Last Name: </strong><input class="inputs" type="text"id="lastname" value=""></a><br><br></span>
              <span><a class=""><strong>Password: </strong><input class="inputs" type="password"id="password" value=""></a><br><br></span>
              <span><a class=""><strong>Re-type Password: </strong><input class="inputs" type="password"id="repassword" value=""></a><br><br></span>
              <span><a class=""><strong>Date of Birth: </strong><input class="inputs" type="date"id="dob" value=""></a><br><br></span>
              <span><a class=""><strong>Province: </strong>
                      <select class="inputs" id="province" >
                          <option></option>
                          <option>Gauteng</option>
                          <option>Eastern Cape</option>
                          <option>Western Cape</option>
                          <option>Northern Cape</option>
                          <option>Kwazulu Natal</option>
                          <option>Free State</option>
                          <option>North West</option>
                          <option>Limpopo</option>
                          <option>Mpumalanga</option>
                      </select></a><br><br></span>
              <span><a class=""><strong>Gender: </strong><select class="inputs" id="gender" value="">
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      </select>
                  </a><br><br></span>
              <span><a class=""><strong>Facilitator: </strong>                      
                      Yes&MediumSpace;<input class="a" type="radio" value="1" id="yes">
                      No&MediumSpace; <input class="a" type="radio" value="0" id="no">
                  </a><br><br></span>
              <input type="button" class="" value="Submit" id="submitAdd">
              <input type="reset" class="" value="Clear" id="clearAdd">
              </div>
      </form>
      <?php endif;?>
      <?php if (isset($_GET['page']) && $_GET['page'] == "manage"):?>
      <table border="1">
          <tr><th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?page=manage';?>&sort=FirstName&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">First Name</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?page=manage';?>&sort=LastName&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Last Name</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?page=manage';?>&sort=DateOfBirth&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Date of Birth</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?page=manage';?>&sort=Province&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Province</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?page=manage';?>&sort=Gender&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Gender</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?page=manage';?>&sort=Facilitator&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Facilitator</a></th>
          </tr>
          <?php
            $conn = DB::connectDB();
            if (isset($_GET['sort'])) {
                $result = DB::getUsersSort($conn,$_GET['sort'],$_GET['type']);
            }  else {
                $result = DB::getUsers($conn);
            }
            while ($row = $result->fetch_assoc()):
          ?>
          <tr>
              <td class="details"><?php echo $row['FirstName'];?></td>
              <td class="details"><?php echo $row['LastName'];?></td>
              <td class="details"><?php echo $row['DateOfBirth'];?></td>
              <td class="details"><?php echo $row['Province'];?></td>
              <td class="details"><?php echo $row['Gender'];?></td>
              <td class="details"><?php if($row['Facilitator'] > 0){echo 'Yes';}else{echo 'No';};?></td>
              <td class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?action=edit&user='.$row['UserDetailsID'];?>">Edit</a></td>
              <td class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/SakhileApp/?action=delete&user='.$row['UserDetailsID'];?>">Delete</a></td>
          </tr>
          <?php endwhile;
          DB::closeConnection($conn);?>
      </table><hr>
        <ul class="navbar-nav nav-flex-icons">
          <li class="nav-item">
              <a class="action-button shadow animate blue" href="./createWord.php" role="button">Export to Word</a>
          </li>
        </ul>
      <?php endif;?>
      <?php if (isset($_GET['action']) && $_GET['action'] == "edit"):
          $conn = DB::connectDB();
          $result = DB::getUser($conn,$_GET['user']);
          while ($row = $result->fetch_assoc()):
      ?>      
        <div class="md-form my-0 login card custom_card" style="padding: 10px;">
            <span><a class=""><strong>First Name: </strong><input class="inputs" type="text" id="edit_firstname" value="<?php echo $row['FirstName'];?>"></a><br><br></span>
            <span><a class=""><strong>Last Name: </strong><input class="inputs" type="text" id="edit_lastname" value="<?php echo $row['LastName'];?>"></a><br><br></span>
            <span><a class=""><strong>Date of Birth: </strong><input class="inputs" type="date" id="edit_dob" value="<?php echo $row['DateOfBirth'];?>"></a><br><br></span>
            <span><a class=""><strong>Province: </strong>
                    <select class="inputs" id="edit_province">
                        <option><?php echo $row['Province'];?></option>
                        <option>Gauteng</option>
                        <option>Eastern Cape</option>
                        <option>Western Cape</option>
                        <option>Northern Cape</option>
                        <option>Kwazulu Natal</option>
                        <option>Free State</option>
                        <option>North West</option>
                        <option>Limpopo</option>
                        <option>Mpumalanga</option>
                    </select></a><br><br></span>
            <span><a class=""><strong>Gender: </strong><select class="inputs" id="edit_gender">
                    <option><?php echo $row['Gender'];?></option>
                    <option>Male</option>
                    <option>Female</option>
                    </select>
                </a><br><br></span>
            <span><a class=""><strong>Facilitator: </strong>
                    Yes&MediumSpace;<input class="a" type="radio" value="1" id="edit_yes" <?php if($row['Facilitator'] > 0){echo 'checked'; };?>>
                    No&MediumSpace; <input class="a" type="radio" value="0" id="edit_no" <?php if($row['Facilitator'] == 0){echo 'checked'; };?>>
                </a><br><br></span>
            <input type="button" name="submit" class="" value="Submit" id="submitEdit">
            <input type="hidden" name="submitType" value="<?php if(isset($_GET['user'])){echo $_GET['user'];}?>" id="edit_userId" >
            </div>
      <?php 
        endwhile;
      endif;?>
      <?php if (isset($_GET['action']) && $_GET['action'] == "delete"):
        $conn = DB::connectDB();
        $result = DB::getUser($conn,$_GET['user']);
        while ($row = $result->fetch_assoc()):
      ?>      
        <div class="md-form my-0 login card custom_card" style="padding: 10px;">
            <span><a class=""><strong>First Name: </strong><?php echo $row['FirstName'];?></a><br><br></span>
            <span><a class=""><strong>Last Name: </strong><?php echo $row['LastName'];?></a><br><br></span>
            <span><a class=""><strong>Date of Birth: </strong><?php echo $row['DateOfBirth'];?></a><br><br></span>
            <span><a class=""><strong>Province: </strong><?php echo $row['Province'];?></a><br><br></span>
            <span><a class=""><strong>Gender: </strong><?php echo $row['Gender'];?></a><br><br></span>
            <span><a class=""><strong>Facilitator: </strong>
                    Yes&MediumSpace;<input class="a" type="radio" name="facilitator" value="1" id="edit_yes" <?php if($row['Facilitator'] > 0){echo 'checked'; };?>>
                    No&MediumSpace; <input class="a" type="radio" name="facilitator" value="0" id="edit_no" <?php if($row['Facilitator'] == 0){echo 'checked'; };?>>
                </a><br><br></span>
            <input type="button" name="submit" class="btn btn-outline-blue btn-lg" value="Confirm Delete" id="delete">
            <input type="hidden" name="submitType" value="<?php if(isset($_GET['user'])){echo $_GET['user'];}?>" id="edit_userId" >
            </div>
      <?php endwhile; 
      endif;?>
    </div>
  </main>
  <!--Main layout-->
  <!--Footer-->
  <footer class="">
    <!--Copyright-->

    <!--/.Copyright-->
  </footer>
  <!--/.Footer-->
  <!-- JQuery -->
  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/jquery-ui.min.js"></script>
  <script type="text/javascript">
      var fc=0;
    $('#yes').on('click',function (event){
        fc=1;
    });
    $('#no').on('click',function (event){
        fc=0;
    });
    $('#submitLogin').on('click',function (event){
        if($('#surname').val() == "" || $('#surname').val() == ""){
            alert("Please make sure both sur name and are populated.");
            return false;
        }else{
            var fd = new FormData();
            fd.append('action',"login");
            fd.append('surname',$('#surname').val());
            fd.append('passwordLogin',$('#passwordLogin').val());
            $.ajax({
            url: "./action.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function(response) {
                alert(response);
            },
            error: function (request, status, error) {
              if(error !== null){
                alert(error);
              }
            }
        });
        }
        
    });
    $('#submitAdd').on('click',function (event){
        if($('#firstname').val() == ""){
            alert("Please fill in the First Name field.");
            exit();
        }if($('#lastname').val() == ""){
            alert("Please fill in the Last Name field.");
            exit();
        }if($('#password').val() !== $('#repassword').val()){
            alert("Passwords do not match");
            exit();
        }
        if($('#dob').val() == ""){
            alert("Please select date of birth.");
            exit();
        }
        if($('#password').val() == ""){
            alert("Please fill in the password field.");
            exit();
        }
        var fd = new FormData();
        
        fd.append('firstname',$('#firstname').val());
        fd.append('lastname',$('#lastname').val());
        fd.append('password',$('#password').val());
        fd.append('dob',$('#dob').val());
        fd.append('province',$('#province').val());
        fd.append('gender',$('#gender').val());
        fd.append('facilitator',fc);
        fd.append('action',"add");
        $.ajax({
            url: "./action.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function(response) {
                alert(response);
                $( "#clearAdd" ).trigger( "click" );
            },
            error: function (request, status, error) {
              if(error !== null){
                alert(error);
              }
            }
        });
    });
    $('#submitEdit').on('click',function (event){
        if($('#dob').val() == ""){
            alert("Please select date of birth.");
            exit();
        }
        var fd = new FormData();
        fd.append('firstname',$('#edit_firstname').val());
        fd.append('lastname',$('#edit_lastname').val());
        fd.append('dob',$('#edit_dob').val());
        fd.append('province',$('#edit_province').val());
        fd.append('gender',$('#edit_gender').val());
        fd.append('userId',$('#edit_userId').val());
        fd.append('action',"edit");
        if($('#edit_yes').attr("checked")){
            fd.append('facilitator',1);
        }
        if($('#edit_no').attr("checked")){
            fd.append('facilitator',0);
        }        
        $.ajax({
            url: "./action.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function(response) {
                alert(response);
                $( "#clearAdd" ).trigger( "click" );
            },
            error: function (request, status, error) {
              if(error !== null){
                alert(error);
              }
            }
        });
    });
    $('#delete').on('click',function (event){
        var fd = new FormData();
        fd.append('action',"delete");
        fd.append('userId',$('#edit_userId').val());
        ConfirmDialog("Are you sure you want to delete?",fd);
    });
    
function ConfirmDialog(message,fd) {
  $('<div></div>').appendTo('body')
    .html('<div><h6>' + message + '?</h6></div>')
    .dialog({
      modal: true,
      title: 'Delete message',
      zIndex: 10000,
      autoOpen: true,
      width: 'auto',
      resizable: false,
      buttons: {
        Yes: function() {
          $.ajax({
            url: "./action.php",
            type: "post",
            data: fd,
            contentType: false,
            processData: false,
            success: function(response) {
                  alert(response);
            },
            error: function (request, status, error) {
              if(error !== null){
                alert(error);
              }
            }
        });

          $(this).dialog("close");
        },
        No: function() {
          alert("Student not deleted.");          
          $(this).dialog("close");
        }
      },
      close: function(event, ui) {
        $(this).remove();
      }
    });
};
  </script>
</body>
</html>