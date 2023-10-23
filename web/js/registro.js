
window.onload = () => {   
    const checklogin = () => 
    localStorage.getItem('jwt')
    
    const getusers = async () => {
        const response= await fetch('/',{
            method:'OPTIONS'
        })
        const users = await response.json()
        console.log(users)
    }
    getusers()

    const isloggedin = checklogin()
    if(isloggedin){
        console.log('esta logueado')
    }else{
        console.log('NO esta logueado')
        
    };
    

        const form =  document.getElementById('card');
        
        form.onsubmit = async (event) => {
            event.preventDefault();
            const formdata = new FormData(form)
            const data = Object.fromEntries(formdata.entries())
            console.log(data)
            const response = await fetch('/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            const responsedata = await response.text()
            if(response.status >= 300){
                console.log('no sirve')
            }else{
                localStorage.setItem('jwt', `Bearer ${responsedata}`) 
                }
                form.reset()
        }
        
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
    

    
    

}
    


    
