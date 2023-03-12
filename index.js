const button = document.querySelector(".btn-res a");
button.addEventListener("click",()=>{
    alert("Downloading Resume")
})

function scrolltoabout() {
    let about = document.getElementsByClassName("about");
    about.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
  }

  