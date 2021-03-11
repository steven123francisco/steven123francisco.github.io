const TypeWriter = function(txtElement, words, wait=2000){
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//type method 
TypeWriter.prototype.type = function() {
    const current = this.wordIndex % this.words.length;

    //GET FULL TEXT OF CURRENT WORD
    const fullTxt = this.words[current];

    //CHECK IF DELETING
    if(this.isDeleting){
        //REMOVE A CHAR
        this.txt=fullTxt.substring(0, this.txt.length - 1);
    }else {
        //ADD CHAR
        this.txt=fullTxt.substring(0, this.txt.length + 1);
    }

    //INSERT TXT INTO
    this.txtElement.innerHTML = `<span class="txt" style="color:rgb(132, 25, 231);"><b>${this.txt}</b></span>`;

    //type speed
    let typeSpeed = 100;
    if(this.isDeleting){
        typeSpeed /= 2;
    }
    
    //if words is complete 
    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;

        //set delete to true
        this.isDeleting= true;
    }else if(this.isDeleting && this.txt ===''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(()=> this.type(),typeSpeed)
}

// init on DOM Load
document.addEventListener('DOMContentLoaded', init);


// init app

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);

}

//NAVBAR MOBILE VIEW

const hamburger = document.querySelector('nav .hamburger');
const mobile_menu = document.querySelector('nav ul');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})


//SCROLL
const scrollup = document.querySelector('.scroll-up');
const ham = document.querySelector('.hamburger');
const bar = document.querySelector('.bar');
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 500){
        scrollup.style.display="inline";
        ham.style.display="none";
       
        
    }
    else{
        scrollup.style.display="none";
        ham.style.display="inline";
        bar.style.left="7px";
        bar.style.bottom="-16px";


    }

    
})


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

/* modal image */
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

/* modal image for alexsteel*/
var modal2 = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

/* modal image for dbms*/
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
var captionText = document.getElementById("caption");
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal3.style.display = "none";
  
}


/* modal image for android*/
var modal4 = document.getElementById("myModal4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById("myImg4");
var modalImg4 = document.getElementById("img04");
var captionText = document.getElementById("caption");
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal4.style.display = "none";
}