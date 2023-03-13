window.onload= () =>{}
    
    let beat =new Audio('../audio/bodypaint.mp3');
    function repro(){
        beat.play();
   
  }


        const play = document.querySelectorAll('.play');
        play.forEach((play)=>{
         play.addEventListener('click', ()=>{
            
            
                play.classList.add('oprime');
            })
        })
    


const pausa = document.querySelectorAll('.pausa')
    
    pausa.forEach((pausa)=>{
    pausa.addEventListener('click', ()=>{
        beat.pause();
    pausa.classList.add('oprime');
        })
    })

const devolver = document.querySelectorAll('.devolver')

    devolver.forEach((devolver)=>{
    devolver.addEventListener('click', ()=>{
        
        beat.load();
        beat.play();
        devolver.classList.add('oprime');

        })
    })

