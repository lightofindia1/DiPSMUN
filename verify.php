<?php
error_reporting(0);
$db_host = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "dipsmun_new";
$conn = new mysqli($db_host, $db_username, $db_password, $db_name);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$response=array("msg"=>"Invalid Request","code"=>"INV_REQ");
if(isset($_POST["school_registration"]))
{
	$institution_name=$_POST['rs_institution_name'];
	$teacher_name=$_POST['rs_teacher_name'];
	$teacher_phone=$_POST['rs_teacher_phone'];
	$teacher_email=$_POST['rs_teacher_email'];
	$student_name=$_POST['rs_student_name'];
	$student_phone=$_POST['rs_student_phone'];
	$student_email=$_POST['rs_student_email'];
	$no_of_students=$_POST['rs_no_of_students'];
	$country_preferences=$_POST['rs_country_preferences'];
	$past_exp=$_POST['rs_past_exp'];
	$extra=$_POST['rs_extra'];
	$ip=$_SERVER['REMOTE_ADDR'];
	$time=time();
	$sql="INSERT INTO school_registrations (`institution_name`,`teacher_name`,`teacher_phone`,`teacher_email`,`student_name`,`student_phone`,`student_email`,`no_of_students`,`country_preferences`,`past_exp`,`extra`,`ip`,`time`) VALUES ('$institution_name','$teacher_name','$teacher_phone','$teacher_email','$student_name','$student_phone','$student_email','$no_of_students','$country_preferences','$past_exp','$extra','$ip','$time')";
	if (mysqli_query($conn, $sql)) {
		require 'PHPMailer/PHPMailerAutoload.php';

		$mail = new PHPMailer;

		$mail->SMTPDebug = 0;                               // Enable verbose debug output

		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'smtp.zoho.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'admin@dipsmun2017.com';                 // SMTP username
		$mail->Password = 'Sin2x=2sinxcosx';                           // SMTP password
		$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 465;
		$mail->setFrom('admin@dipsmun2017.com', 'DiPSMUN Admin');
		$mail->addAddress('pmanikiran_1998@yahoo.co.in', 'Manikiran');  
		$mail->isHTML(true); 

		$mail->Subject = 'New School Registration';
		$mail->Body    = "The following are the registration details<br><br>Institution Name: <b>".$institution_name."</b><br>Teacher Coordinator Name: <b>".$teacher_name."</b><br>Teacher Coordinator Phone: <b>".$teacher_phone."</b><br>Teacher Coordinator Email: <b>".$teacher_email."</b><br>Student Coordinator Name: <b>".$student_name."</b><br>Student Coordinator Phone: <b>".$student_phone."</b><br>Student Coordinator Email: <b>".$student_email."</b><br>No of Students: <b>".$no_of_students."</b><br>Country Preferences: <b>".nl2br($country_preferences)."</b><br>Past Experiences: <b>".nl2br($past_exp)."</b><br>Extra Note: <b>".nl2br($extra)."</b><br><br><br>Regards,<br>DiPSMUN Admin";
		$mail->AltBody = "The following are the registration details\n\nInstitution Name: ".$institution_name."\nTeacher Coordinator Name: ".$teacher_name"\nTeacher Coordinator Phone: ".$teacher_phone."\nTeacher Coordinator Email: ".$teacher_email."\nStudent Coordinator Name: ".$student_name."\nStudent Coordinator Phone: ".$student_phone."\nStudent Coordinator Email: ".$student_email."\nNo of Students: ".$no_of_students."\nCountry Preferences: ".($country_preferences)."\nPast Experiences: ".($past_exp)."\nExtra Note: ".($extra)."\n\nRegards,\nDiPSMUN Admin";

		$mail->send();
		$response['msg']='Saved to database and emailed';
		$response['code']='SCHOOL_REGISTRATION_SUC';
	}
	else{
		$response['msg']='Unable to save to database';
		$response['code']='SCHOOL_REGISTRATION_ERR_1';
	}
}
else if(isset($_POST["individual_registration"])){
	$name=$_POST['ri_name'];
	$institution_name=$_POST['ri_institution_name'];
	$email=$_POST['ri_email'];
	$phone=$_POST['ri_phone'];
	$committee_preferences=$_POST['ri_committee_preferences'];
	$country_preferences=$_POST['ri_country_preferences'];
	$past_exp=$_POST['ri_past_exp'];
	$extra=$_POST['ri_extra'];
	$ip=$_SERVER['REMOTE_ADDR'];
	$time=time();
	$sql="INSERT INTO individual_registrations (`name`,`institution_name`,`email`,`phone`,`committee_preferences`,`country_preferences`,`past_exp`,`extra`,`ip`,`time`) VALUES ('$name','$institution_name','$email','$phone','$committee_preferences','$country_preferences','$past_exp','$extra','$ip','$time')";
	if(mysqli_query($conn,$sql)){
		require 'PHPMailer/PHPMailerAutoload.php';

		$mail = new PHPMailer;

		$mail->SMTPDebug = 0;                               // Enable verbose debug output

		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'smtp.zoho.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication
		$mail->Username = 'admin@dipsmun2017.com';                 // SMTP username
		$mail->Password = 'Sin2x=2sinxcosx';                           // SMTP password
		$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 465;
		$mail->setFrom('admin@dipsmun2017.com', 'DiPSMUN Admin');
		$mail->addAddress('pmanikiran_1998@yahoo.co.in', 'Manikiran');  
		$mail->isHTML(true); 

		$mail->Subject = 'New Individual Registration';
		$mail->Body    = "The following are the registration details<br><br>Name: <b>".$name."</b><br>Institution Name: <b>".$institution_name."</b><br>Email: <b>".$teacher_name."</b><br>Teacher Coordinator Phone: <b>".$teacher_phone."</b><br>Teacher Coordinator Email: <b>".$teacher_email."</b><br>Student Coordinator Name: <b>".$student_name."</b><br>Student Coordinator Phone: <b>".$student_phone."</b><br>Student Coordinator Email: <b>".$student_email."</b><br>No of Students: <b>".$no_of_students."</b><br>Country Preferences: <b>".nl2br($country_preferences)."</b><br>Past Experiences: <b>".nl2br($past_exp)."</b><br>Extra Note: <b>".nl2br($extra)."</b><br><br><br>Regards,<br>DiPSMUN Admin";
		$mail->AltBody = "The following are the registration details\n\nInstitution Name: ".$institution_name."\nTeacher Coordinator Name: ".$teacher_name"\nTeacher Coordinator Phone: ".$teacher_phone."\nTeacher Coordinator Email: ".$teacher_email."\nStudent Coordinator Name: ".$student_name."\nStudent Coordinator Phone: ".$student_phone."\nStudent Coordinator Email: ".$student_email."\nNo of Students: ".$no_of_students."\nCountry Preferences: ".($country_preferences)."\nPast Experiences: ".($past_exp)."\nExtra Note: ".($extra)."\n\nRegards,\nDiPSMUN Admin";

		$mail->send();
		$response['msg']='Saved to database and emailed';
		$response['code']='INDIVIDUAL_REGISTRATION_SUC';
	}
	else{
		$response['msg']='Unable to save to database';
		$response['code']='INDIVIDUAL_REGISTRATION_ERR_1';
	}
}
echo json_encode($respons