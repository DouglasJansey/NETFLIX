let principal = document.getElementById("principal");
let logo = window.document.getElementById("logofilme");
let desc = document.getElementById("descricao");
let video = document.getElementById("video");
let filmes = [kong = document.getElementById("GVK"), silence = document.getElementById("SILENCE"),
heman = document.getElementById("HEMAN"), avg = document.getElementById("AVG"),
aves = document.getElementById("AVES"), arm = document.getElementById("arm"),
lj = document.getElementById("LJ"), mk = document.getElementById("MK"),
gda = document.getElementById("GDA"),  mm2 = document.getElementById("MM2"),
snake = document.getElementById("SNAKE"),]
let i = 0;

logo.style.height = "150px"
logo.style.width = "300px"
logo.style.marginLeft = "30px";
for(i=0;i <= filmes.length;i++){
    filmes[i].addEventListener("mouseover", Cong)
   
}

function Cong(){
        if(filmes[0]){
            principal.style.backgroundImage = "url('./img/2capa.jpg')"
        }else if    (filmes[1]){
            principal.style.backgroundImage = "url('./img/3capa.jpg')"
        }     
    }    
       



