window.addEventListener('DOMContentLoaded', () => {

    const wrapper = document.querySelector('#wrapper');
    const image = document.querySelector('.img');
    const start = document.querySelector('#start');
    const button = document.querySelectorAll('[data = "btn"]');
    const card = document.querySelector('.card');
    let filmDB;
    let counter = 0;
    const shownFilm = [];
    

// отправка запроса на получение фильма
   async function fetchHandler () {
        try {
            const response = await fetch('http://localhost:3000/films');
            filmDB = await response.json();
            showNextFilm  ();

        } catch (error) {
            console.log(error);
        }
    }
//начать игру    
    start.addEventListener('click', () => {
        fetchHandler();
        start.classList.add('hide');
    }
  );

    wrapper.addEventListener('click', (event) => {
        if (event.target && event.target.tagName == 'BUTTON' ) {
            showNextFilm ();
        }
    });

    function choiceAnswers () {
       
      
    }

    //show next film
    function showNextFilm () {
        
        const i = getRandomInt (0,4);
        counter = getRandomInt (0,filmDB.length);
        
        while (shownFilm.some(item=>item === counter)) {
            counter = getRandomInt (0,filmDB.length);
        } 
        shownFilm.push(counter);
        try {
            image.src = filmDB[counter].img;
            card.classList.add('fade');
            button[i].innerText = filmDB[counter].title;
            console.log(shownFilm);
        }catch (error) {
            console.log(filmDB[counter], error);
        }
        

    }
        

 //Random iteger from min to max (mot include max)
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
 }
 


});



