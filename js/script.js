window.addEventListener('DOMContentLoaded', () => {

    const wrapper = document.querySelector('#wrapper');
    const image = document.querySelector('.img');
    const start = document.querySelector('#start');
    const button = document.querySelectorAll('[data = "btn"]');
    const card = document.querySelector('.card');
    let filmDB;
    let counter = 0;
    

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
            console.log("Туц");
        }
    });

    function choiceAnswers () {
       
      
    }

    //показать следующий фильи
    function showNextFilm () {
        const i = random ();
        image.src = filmDB[counter].img;
        card.classList.add('fade');
        button[i].innerText = filmDB[counter].title;
        counter++;

    }


 //рандом от 1 до 4 
 function random () {
    const myArray = [0, 1, 2, 3];
    const result =  Math.floor(Math.random()*myArray.length);
    return myArray[result];
 }

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
 }



});



