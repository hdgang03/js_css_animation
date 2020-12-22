function pageLoad() {
    let objectPlace = document.getElementById('root');

    let myObjects = [
        {
            tag: "h1",
            content: "Hites Dániel"

        },
        {
            tag: "p",
            content: "Frontend Developer"
        }
    ];
    /*  
      for (let i = 0; i < myObjects.length; i++) {
          
      }
    */

    for (myObject of myObjects) {
        let newElem = document.createElement(myObject.tag);
        newElem.innerText = myObject.content;
        objectPlace.appendChild(newElem);
    }

    objectPlace.addEventListener('click', function () {
        objectPlace.classList.toggle("clicked");
    });

}

window.addEventListener('load', pageLoad);
