window.onload = () => {
    
    
    const form = document.getElementById('card');
    
    form.onsubmit = async (event) => {
        event.preventDefault();
         const formdata = new FormData(form)
         const data = Object.fromEntries(formdata.entries())
         console.log(data)
       // const email = document.getElementById('email');
       // 
       // const emailtext = email.value;
       // email.value = '';
    //const nick = document.getElementById('nick');
    //const nicktext = nick.value;
    //nick.value = '';
    //
    //
    //
    //const pass = document.getElementById('pass');
    //const passtext = pass.value;
    //pass.value = '';
    //
    //
    //const usuarios  = JSON.parse(localStorage.getItem('datos'))|| [emailtext,  nicktext,  passtext ];
    //console.log (usuarios)
    
    
    const email = document.getElementById('email');
    email.value = '';
    
    const nick = document.getElementById('nick');
    nick.value = '';
    
    
    
    const pass = document.getElementById('pass');
    pass.value = '';
}
    
}
