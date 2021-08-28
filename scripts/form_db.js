// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVD2d5ql9JDU5MyNeGPguWZxjhcxAnhPg",
    authDomain: "corona-website-ec18f.firebaseapp.com",
    databaseURL: "https://corona-website-ec18f-default-rtdb.firebaseio.com",
    projectId: "corona-website-ec18f",
    storageBucket: "corona-website-ec18f.appspot.com",
    messagingSenderId: "457224916615",
    appId: "1:457224916615:web:149896a62e51b5644e7222",
    measurementId: "G-HSW6M0JT3J"
  };
  firebase.initializeApp(firebaseConfig)

fire_user = firebase.database().ref("User_Input")

function mydbfunc(E){
    E.preventDefault()
    alert("Form Submit Successfully")
    fname = document.getElementById('firstname').value
    lname = document.getElementById('lastname').value
    email = document.getElementById('email').value
    occupation = document.getElementById('profession').value
    dob = document.getElementById('dateofbirth').value
    mobile = document.getElementById('mobile').value
    state = document.getElementById('state').value
    travelhistory = document.querySelector('input[type = radio]:checked').value
    symtom = getsymtoms()
    sentmess(fname + lname,email,occupation,dob,mobile,state,travelhistory,symtom)
    readst(state)
}

document.getElementById('testForm').addEventListener('submit', mydbfunc)

function getsymtoms(){
    my_list = document.querySelectorAll('input[type = checkbox]:checked')
    values = []
    my_list.forEach((a)=>{
        values.push(a.value)
    })
    return values
}

function sentmess(name,email,occ,dob,mob,st,th,symtom){
    uref = fire_user.push()
    uref.set({
        user_name: name,
        user_email: email,
        user_occ: occ,
        user_dob: dob,
        user_mob: mob,
        user_st: st,
        user_th: th,
        user_symtom: symtom,
    })
}

function readst(abcd){
    centers = ""
    ref = firebase.database().ref(abcd)
    ref.on('value',(data) =>{
        centers = data.val()
        document.getElementById('centers').innerHTML = "Covid Centers Around You: " + centers
    })
}