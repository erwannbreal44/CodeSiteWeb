function Login(){
	var pseudo=document.login.pseudo.value;
	var username=pseudo.toLowerCase();
	var password=document.login.password.value;
	password=password.toLowerCase();
	if (pseudo=="admin" && password=="erwann") {
	    alert("Bon Mot de passe ! lien page admin : admin/xgshhfuhfizfhfizf.html");
	} else { 
	    alert("Mauvais mot de passe"); 
	}
}

	function openNav() {
 document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
