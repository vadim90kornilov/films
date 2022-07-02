window.addEventListener('DOMContentLoaded', () => {

    const wrapper = document.querySelector('#wrapper');
    const image = document.querySelector('.img');
    const start = document.querySelector('#start');
    let i = 0;


   async function fetchHandler () {
        try {
            const response = await fetch('http://localhost:3000/films');
            const data = await response.json();
            console.log(data[i]);
            i++;
            image.src = data[i].img;
            

        } catch (error) {
            console.log(error);
        }
    }
    
    start.addEventListener('click', () => {
        fetchHandler();
    }
  );

    wrapper.addEventListener('click', (event) => {
        if (event.target && event.target.tagName == 'BUTTON' ) {
            console.log("Туц");
        }
    });

    







});



