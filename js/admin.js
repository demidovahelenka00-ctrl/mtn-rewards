import { db } from "./firebase.js";
import {
 getDocs, collection, addDoc, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

let selected=null;

async function load(){
 let snap=await getDocs(collection(db,"users"));
 snap.forEach(d=>{
  let u=d.data();
  users.innerHTML+=`<div onclick="openChat('${u.id}')">${u.name}</div>`;
 });
}

window.openChat=function(id){
 selected=id;

 onSnapshot(collection(db,"messages"), snap=>{
  chatBox.innerHTML="";
  snap.forEach(d=>{
   let m=d.data();
   if(m.sender===id || m.receiver===id){
    chatBox.innerHTML+=`<div>${m.text}</div>`;
   }
  });
 });
}

window.sendAdmin=function(){
 addDoc(collection(db,"messages"),{
  text:adminMsg.value,
  sender:"admin",
  receiver:selected
 });
}

load();
