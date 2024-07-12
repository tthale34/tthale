<?php
require 'config.php';
require 'DB.php';
session_start();

header("Content-Type:application/msword");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("content-disposition: attachment;filename=students.doc");
?>
<html>
    <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>ThaleApp</title>
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
.blue{
  background-color: #3498DB;
  border-bottom: 5px solid #2980B9;
  text-shadow: 0px -2px #2980B9;
}
.red{
  background-color: #3498DB;
  border-bottom: 5px solid #2980B9;
  //text-shadow: 0px -2px red;
}
.animate
{
  transition: all 0.1s;
  -webkit-transition: all 0.1s;
}.main{
    padding-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
}
.inputs{
    float: right;
}
.details{
    padding: 15px;
}
  </style>
</head>
  <body>
    <h1>Students</h1>
    <table border="1">
          <tr><th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/ThaleApp/?page=manage';?>&sort=FirstName&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">First Name</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/ThaleApp/?page=manage';?>&sort=LastName&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Last Name</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/ThaleApp/?page=manage';?>&sort=DateOfBirth&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Date of Birth</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/ThaleApp/?page=manage';?>&sort=Province&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Province</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/ThaleApp/?page=manage';?>&sort=Gender&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Gender</a></th>
          <th class="details"><a href="<?php echo 'http://'.$_SERVER['HTTP_HOST'].'/ThaleApp/?page=manage';?>&sort=Facilitator&type=<?php if(isset($_GET['type']) && $_GET['type'] == "desc"){echo 'asc';}else{echo 'desc';}?>">Facilitator</a></th>
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
          </tr>
          <?php endwhile;
          DB::closeConnection($conn);?>
      </table>
    </body>
</html>
<?php
exit(); // end of word output
?>