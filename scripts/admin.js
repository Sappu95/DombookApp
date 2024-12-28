

import { baseUrl } from "./Url.js";

try{
    fetch(`${baseUrl}/addbook`,{
        method:"POST",
        headers:{
            "content-type": "application/json",
        },
        body:JSON.stringyfy(addbookobj),
    });
    alert("book added succefully");
    addbook.reset()
} catch(err){
    alert("somthing went wrong")
};

let deletbutton=document.createeElement("button");
deletbutton.textcontent="book delete",
deletbutton.addEventListener("click", function() => {
    deletefunction(el)
});
 function deletefunction(el){
    fetch(`${baseUrl}/addbook/${el.id}`,{
        method:"DELETE"

    })
    .then(()=>{
        alert("book deletd")

    })
    .ctch((err) =>{
        alert("somthing went wrong"):
        console.log(err);
    })
 }