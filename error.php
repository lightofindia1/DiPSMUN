<?php
$code="0";
$msg="Unknown Error";
if(isset($_GET["code"]))
{
	$code=$_GET["code"];
	if($_GET["code"]=="400")
	{
		$msg="Bad Request";
	}
	else if($_GET["code"]=="401")
	{
		$msg="Unauthorized";
	}
	else if($_GET["code"]=="402")
	{
		$msg="Payment Required";
	}
	else if($_GET["code"]=="403")
	{
		$msg="Forbidden";
	}
	else if($_GET["code"]=="404")
	{
		$msg="Page Not Found";
	}
	else if($_GET["code"]=="408")
	{
		$msg="Request Timeout";
	}
	else if($_GET["code"]=="409")
	{
		$msg="Conflict";
	}
	else if($_GET["code"]=="500")
	{
		$msg="Internal Server Error";
	}
	else if($_GET["code"]=="501")
	{
		$msg="Not Implemented";
	}
	else if($_GET["code"]=="502")
	{
		$msg="Bad Gateway";
	}
	else if($_GET["code"]=="503")
	{
		$msg="Service Unavailable";
	}
	else if($_GET["code"]=="504")
	{
		$msg="Gateway Timeout";
	}
}
?>
<html>
<head>
	<title></title>
	<style>

	</style>
</head>
<body>

</body>
</html>