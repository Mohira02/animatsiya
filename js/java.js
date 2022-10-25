document.addEventListener("mousemove", animateCircle);
function animateCircle() {
    let circle = document.createElement("div");
    circle.setAttribute("class", " circle ");
    document.body.appendChild(circle);
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";


    let randomColor, randomSize, randomShapes;


    randomColor =
        "rgb(" +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        "," +
        Math.random() * 255 +
        ")";
     randomSize = Math.random() * 100;
      randomShapes = Math.random()  * 180;



    circle.style.transition = "all 1.5s linear 0s";
    circle.style.left = circle.offsetLeft - 40 + "px";
    circle.style.top = circle.offsetTop - 40 + "px";
    circle.style.borderWidth = "40px";
    circle.style.borderColor = randomColor;
    circle.style.width = randomSize;
    circle.style.height = randomSize;
    circle.style.borderRadius = randomShapes + "px";

    circle.style.opacity = 0;
    
}