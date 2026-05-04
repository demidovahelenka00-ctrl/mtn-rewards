import { db } from "./firebase.js";
import {
 addDoc, collection, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

let userID = localStorage.getItem("userID");

window.sendMsg = async function(){
 await addDoc(collection(db,"messages"),{
   text: msg.value,
   sender:userID,
   receiver:"admin"
 });
 msg.value="";
}

onSnapshot(collection(db,"messages"), snap=>{
 chat.innerHTML="";
 snap.forEach(doc=>{
  let m=doc.data();
  if(m.sender===userID || m.receiver===userID){
   chat.innerHTML+=`<div>${m.sender}: ${m.text}</div>`;
  }
 });
});
