const signup=document.getElementById("signup"),URL="https://rexfriends.herokuapp.com/signup";signup.addEventListener("submit",function(n){n.preventDefault();const t=document.getElementById("username").value,o=document.getElementById("password").value;fetch(URL,{mode:"no-cors",method:"POST",body:JSON.stringify({username:t,password:o}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e)}).catch(e=>{console.log(e)})});
