<?php
class DB {
    public static function connectDB() {
        // Create connection
        $connection = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        // Check connection
        if ($connection->error) {
            throw new Exception("<br>Connection failed: " . $connection->error . "<br>");
        }
        return $connection;
    }
    public static function closeConnection($connection) {
        $connection->close();
    }
    public static function login($connection, $surname, $password) {
        try {
            $my_query = "SELECT a.FirstName,a.LastName,a.DateOfBirth,a.Province,a.Gender FROM UserDetails a,Users b WHERE a.userid = b.userid AND a.lastname = '" . $surname . "' and b.password = '" . $password . "'";
            $result = $connection->query($my_query);
            //Create User table on first login validate
            if (!$result) {
                throw new Exception('Login credentials inccorect: ' . $connection->error . ' error no:' . $connection->connect_errno);
            }
        } catch (Exception $ex) {
            throw new Exception('Login Exception: ' . $connection->error . ' error no:' . $connection->connect_errno);
        }        
        return $result;
    }
    public static function add($conn,$firstname,$lastname,$password,$dob,$province,$gender,$facilitator) {
        $my_query = "INSERT INTO users (Password) VALUES ('".$password."')";
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error adding Users: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        $my_query = "SELECT UserID From `users` ORDER BY UserID DESC LIMIT 1";
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error getting lasi id: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        while($row = $result->fetch_assoc()){
            $lastID = $row['UserID'];
        }
        $my_query = "INSERT INTO `userdetails` (`UserDetailsID`, `UserID`, `FirstName`, `LastName`, `DateOfBirth`, `Province`, `Gender`, `Facilitator`) VALUES "
                . "(NULL, '".$lastID."', '".$firstname."', '".$lastname."', '".$dob."', '".$province."', '".$gender."', '".$facilitator."')";
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Inserting user details: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        return $result;
    }
    public static function getUsers($conn) {
        $my_query = "SELECT * from UserDetails";
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error returning users: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        return $result;
    }
    public static function getUsersSort($conn,$sort,$type) {
        if ($sort == "dob") {
            $sort="DateOfBirth";
        }
        $my_query = "SELECT UserDetailsID,UserID,FirstName,LastName,DateOfBirth,Province,Gender,Facilitator from UserDetails ORDER BY ".$sort." ".$type;
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error returning users: ' . $conn->error . ' error no:' . $conn->connect_errno." ".$my_query);
        }
        return $result;
    }
    public static function getUser($conn,$userId) {
        $my_query = "SELECT * from UserDetails WHERE UserDetailsID = ".$userId;
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error returning users: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        return $result;
    }
    public static function edit($conn,$firstname,$lastname,$dob,$province,$gender,$facilitator,$userId) {
        $my_query = "UPDATE UserDetails set FirstName='".$firstname."', LastName='".$lastname."',DateOfBirth='".$dob."',Gender='".$gender."',Facilitator=".$facilitator." WHERE UserDetailsID=".$userId.";";
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error updating users: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        return $result;
    }
    public static function delete($conn,$userId) {
        $my_query = "SELECT UserID FROM UserDetails WHERE UserDetailsID=".$userId.";";
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error returning delete user: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        $row = $result->fetch_assoc();
        $my_query = "DELETE FROM UserDetails WHERE UserDetailsID=".$userId;
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error updating userDetails: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        $my_query = "DELETE FROM Users WHERE UserID=".$row['UserID'];
        $result = $conn->query($my_query);
        if (!$result) {
            throw new Exception('Error deleting from users: ' . $conn->error . ' error no:' . $conn->connect_errno);
        }
        return $result;
    }
}
   