const login=document.getElementById("login"),URL="https://rexfriends.herokuapp.com/login";login.addEventListener("submit",function(n){n.preventDefault();const t=document.getElementById("username").value,o=document.getElementById("password").value;fetch(URL,{method:"POST",body:JSON.stringify({username:t,password:o}),headers:{"Content-Type":"application/json;"}}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.log(e)})});
