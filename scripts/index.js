let form1= document.getElementById("userform")
form1.addEventListener("submit", function(){
    event.preventDefault()
    let email = form.email.value;
    let password= form.password.value;
    console.log(email,password)

    if(email == "user@empher.com" && password=="user@123"){
        alert("login successful")
        window.location.href="books.html"
    }else{
        alert("something went wrong please input correct id and password")
    }
});
let form2= document.getElementById("adminform")
form2.addEventListener("submit", function(){
    event.preventDefault()
    let email = form.email.value;
    let password= form.password.value;
    console.log(email,password)

    if(email == "admin@empher.com" && password=="empher@123"){
        alert("login successful")
        window.location.href="admin.html"
    }
});

