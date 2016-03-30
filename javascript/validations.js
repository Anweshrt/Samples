// alert("check");
function validate()
{
//alert("check");	
	var name1=document.getElementById("name").value;
	var email1=document.getElementById("email").value;
	var password=document.getElementById("pwd").value;
	var mobile1=document.getElementById("mobile").value;
	var message=document.getElementById("msg").value;
	var male=document.getElementById("genderm").checked;//true or false
	var female=document.getElementById("genderf").checked;//true or false
	var cricket=document.getElementById("crik").checked;//true or false
	var carroms=document.getElementById("car").checked;//true or false
	var state=document.getElementById("state").value;

	//regular expressions
	
	var namepattern=/^[a-z]+$/;
	var emailpattern=/^[a-z]+[a-z0-9\.\_]+[@]+[a-z]+[.]+[a-z]+$/;
	if(name1.length==0){
		alert("please enter name");
		document.getElementById("name").focus();
		return false;
	}
	else if(!name1.match(namepattern))
	{
		alert("please enter name and should be small characters");
		document.getElementById("name").focus();
		return false;
		
	}
	else if(email1.length==0){
		alert("please enter email");
		document.getElementById("email").focus();
		return false;
	}
	else if(!email1.match(emailpattern))
	{
		alert("please enter email ex... abc@xyz.com");
		document.getElementById("email").focus();
		return false;
		
	}
	else if(password.length==0){
		alert("please enter password");
		document.getElementById("pwd").focus();
		return false;
	}
	else if(mobile1.length!=10){
		alert("please enter mobile and should be 10 numbers");
		document.getElementById("mobile").focus();
		return false;
	}
	else if(message.length==0){
		alert("please enter message");
		document.getElementById("msg").focus();
		return false;
	}
	else if(male==false && female==false)
	{
		alert("please select gender");
		document.getElementById("genderm").focus();
		return false;
	}
	else if(cricket==false && carroms==false)
	{
		alert("please select atlease one hobby");
		document.getElementById("crik").focus();
		return false;
	}
	else if(state=='Select State')
	{
		alert("please select state");
		document.getElementById("state").focus();
		return false;
		
	}
	
}