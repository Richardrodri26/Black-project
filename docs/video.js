const section = document.querySelector(".section"),
  mainVideo = document.querySelector(".main-video video"),
  videos = document.querySelectorAll(".videos"),
  close = document.querySelector(".close");

  for(var i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", (e) => {
      const target = e.target;
      section.classList.add("active");
      target.classList.add("active"); //agrega .active a los videos seleccionados
      let src = document.querySelector(".videos.active video").src; //Aqui obtengo la fuente del video seleccionado el cual tiene active class
      mainVideo.src = src; //aqui pongo la fuente del video dentro de main video

      close.onclick = ()=>{
        section.classList.remove("active");
        target.classList.remove("active");
        mainVideo.src = ""; // Se elimina el video fuente de main video
      }
    });
  }