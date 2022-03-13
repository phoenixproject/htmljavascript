<!DOCTYPE HTML>
<html>
<head>
<title>Session storage</title>
<script type="text/javascript">
function AssignValues()
{
sessionStorage.setItem("text1", document.form1.text1.value);
sessionStorage.setItem("text2", document.form1.text2.value);
sessionStorage.setItem("text3", document.form1.text3.value);
}
  
function Value1()
{
alert("Value 1 is " + sessionStorage.getItem("text1"));
}
  
function Value2()
{
alert("Value 2 is " + sessionStorage.getItem("text2"));
}
  
function Value3()
{
alert("Value 3 is " + sessionStorage.getItem("text3"));
}
function ClearStorage()
{
sessionStorage.clear();
alert("No of items in local storage is " + sessionStorage.length);
}
</script>
</head>
<body>
<form name="form1">
<input type="text" name="text1" placeholder="Enter text...">
<br>
<input type="text" name="text2" placeholder="Enter text...">
<br>
<input type="text" name="text3" placeholder="Enter text...">
<br>
<input type="button" value="Assign values" onClick="AssignValues()">
<br>
<input type="button" value="Show value 1" onClick="Value1()">
<br>
<input type="button" value="Show value 2" onClick="Value2()">
<br>
<input type="button" value="Show value 3" onClick="Value3()">
<br>
<input type="button" value="Clear storage" onClick="ClearStorage()">
<br>
</form>
</body>
</html>