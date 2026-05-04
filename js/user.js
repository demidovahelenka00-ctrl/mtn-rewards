import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.createUser = async function(){
 let name = document.getElementById("name").value;
 let phone = document.getElementById("phone").value;

 let id = "MTN-" + Math.floor(Math.random()*999999);

 await addDoc(collection(db,"users"),{name,phone,id});

 localStorage.setItem("userID",id);
 location.href="id.html";
}
