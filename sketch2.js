//PAGINA ABOUT

var myFont;

function preload() {

    myFont = loadFont('./assets/CircularStd-Book.otf');
    logo = loadImage("./assets/logo.png");

}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background("black");

    home = createButton("Return to Home");
    home.position(windowWidth / 2-100, windowHeight / 10 * 9);
    home.size(200, 50);
    home.mousePressed(goHome);
    home.style('background-color', "black");
    home.style("color", "#ffb3ff");
    home.style("border-color", "#9fdfff");
    home.style("font-size", "15px");
    home.style("font-family", "CircularStd-Book");
    home.mouseOver(changeColor1);
    home.mouseOut(beginningColor1);

}

var iterator = 0;

function draw() {

    //Updating a semitransparent background for a trail effect, which hints at the act of scribbling
    background('rgba(4, 5, 28, 0.05)');

    iterator++;
    var x = noise(iterator / 200 + 400) * height;
    var y = (noise(iterator / 500 + 2000) * width) - 300;
    noStroke();
    fill("#ffb3ff");
    ellipse(x, y, 20);

    var a = 900 + noise(-iterator / 200 + 400) * height;
    var b = (noise(-iterator / 500 + 2000) * width) - 300;
    fill("#9fdfff");
    ellipse(a, b, 20);

    imageMode(CENTER);
    logo.resize(0, 80);
    image(logo, windowWidth / 2, windowHeight / 10);

    fill("#9fdfff");
    textFont(myFont);
    textSize(20);
    textAlign(CENTER);
    text("While you are waiting for the subway, while you are ''studying'' for the exam, \nwhile you are waiting for your girlfriend or while you are doing that big one, \nScribble Loop will be there to take your hand and bring you to a total waste of time. \n\nScribble Loop is a web platform that allows everyone to create infinite drawings \nin collaboration with many other people. Each user can start with a preset scribble \nor can join a scribble that has already been started by other users.", windowWidth / 2, windowHeight / 10 * 2);

    fill("#ffb3ff");
    text("The aim is to try and include the previous scribbles with your drawing, creating \na collaborative and potentially endless work of art. \n\nWhen you're finished, send your scribble to the Loop! Future users will be able to continue the journey from there.", windowWidth / 2, windowHeight / 10 * 4.2);

    fill("#9fdfff");
    text("Scribble Loop is a Creative Coding project, created for the 2019/2020 edition of the course. \nIt's made by Group 12: Beatrice Foresti, Pietro Forino, Emanuele Ghebaur and Michele La Rosa.", windowWidth / 2, windowHeight / 10 * 5.8);

}

function goHome() {
    window.open("index.html", "_self");
}

function changeColor1() {
    home.style('background-color', "#3f3f3f");
}

function beginningColor1() {
    home.style('background-color', "black");
}

function windowResized() {
    //resizing the canvas when the window is resized
    resizeCanvas(windowWidth, windowWidth);
}
