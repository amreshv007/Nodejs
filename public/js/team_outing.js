$(document).ready(function(){
	$('#sub_signup').on('click', function(e){
		e.preventDefault();
		let name = $('#name').val();
		let user = $('#user').val();
		let pass = $('#pass').val();
		let re_pass = $('#re_pass').val();
		let emp_id = $('#emp_id').val();
		let email = $('#email').val();
		let mobile = $('#mobile').val();
		if(re_pass != pass){
			alert("Password Mismatched!"+"\r\n"+pass+" "+re_pass);
			return;
		}
		if(email.includes("@") === false || email.includes(".com") === false){
			alert("Email format is Incorrect!"+"\r\n"+email);
			return;
		}
		if(mobile.length != 10){
			alert("Mobile Number is Incorrect!"+"\r\n"+mobile);
			return;
		}
		let store_data = {
			name : name,
			user : user,
			pass : pass,
			emp_id : emp_id,
			email : email,
			mobile : mobile 
		};
		console.log(store_data);
		// Put the object into storage
		localStorage.setItem('Users', JSON.stringify(store_data));
		// Retrieve the object from storage
		let getUser = JSON.parse(localStorage.getItem('Users'));

		console.log('retrievedObject: ', getUser.name);
		alert("Registered Successfully!");
		window.location.href = "http://localhost:3000/team-outing/signup";
	});
	$("#sub_login").on('click', function(e){
		e.preventDefault();
		let user = $("#user1").val();
		let pass = $("#pass1").val();
		let getUser = JSON.parse(localStorage.getItem('Users'));
		console.log('retrievedObject: ', getUser);
		console.log('username: ', user);
		console.log('password: ', pass);
		try{
			if(user === getUser.user && pass === getUser.pass){
				alert("Logged In Successfully!");
				window.location.href = "http://localhost:3000/team-outing/outing-data";
			}
			else{
				alert("Username or Password Incorrect!");
				return;	
			}
		}
		catch(e){
			alert("Username is not registered!");
			return;	
		}
	});

});

// JSON parser