/*====================================
    PORTFOLIO
    Sebastián Sepúlveda Vizcaíno
====================================*/

// Año automático
const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if(copy){

    copy.innerHTML = `© ${year} Sebastian Sepulveda Vizcaino`;

}

// Animación al hacer scroll

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card").forEach(card=>{

    observer.observe(card);

});

document.querySelectorAll(".skill").forEach(skill=>{

    observer.observe(skill);

});

document.querySelectorAll(".stat-card").forEach(stat=>{

    observer.observe(stat);

});

document.querySelectorAll(".contact-card").forEach(contact=>{

    observer.observe(contact);

});

// Navbar activa

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-140;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// Movimiento suave del fondo

document.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth;

    const y=e.clientY/window.innerHeight;

    document.body.style.backgroundPosition=`${x*30}px ${y*30}px`;

});

// Efecto hover sobre la tarjeta principal

const card=document.querySelector(".glass-card");

if(card){

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

}

// Animación de aparición

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/*====================================================
            MENU RESPONSIVE
====================================================*/



/*====================================================
          EFECTO DE ESCRITURA
====================================================*/

const titulo=document.querySelector(".left h3");

if(titulo){

const texto=titulo.textContent;

titulo.textContent="";

let i=0;

function escribir(){

if(i<texto.length){

titulo.textContent+=texto.charAt(i);

i++;

setTimeout(escribir,80);

}

}

escribir();

}

/*====================================================
        CONTADORES ANIMADOS
====================================================*/

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const objetivo=parseInt(counter.innerText);

let numero=0;

const velocidad=Math.ceil(objetivo/80);

const actualizar=()=>{

numero+=velocidad;

if(numero>=objetivo){

numero=objetivo;

}

counter.innerText=numero+"+";

if(numero<objetivo){

requestAnimationFrame(actualizar);

}

};

actualizar();

});

/*====================================================
      EFECTO LUZ SOBRE TARJETA
====================================================*/

const glass=document.querySelector(".glass-card");

if(glass){

glass.addEventListener("mousemove",(e)=>{

const rect=glass.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

glass.style.background=`

radial-gradient(circle at ${x}px ${y}px,

rgba(0,140,255,.18),

rgba(255,255,255,.05) 40%)

`;

});

glass.addEventListener("mouseleave",()=>{

glass.style.background="rgba(255,255,255,.05)";

});

}

/*====================================================
        BARRAS DE HABILIDADES
====================================================*/

const barras=document.querySelectorAll(".bar");

const skills=document.querySelector("#habilidades");

if(skills){

const mostrar=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

barras.forEach(bar=>{

bar.style.animation="grow 2s ease forwards";

});

}

});

});

mostrar.observe(skills);

}

/*====================================================
        EFECTO HOVER EN BOTONES
====================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

/*====================================================
      SCROLL SUAVE
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*====================================================
          APARICIÓN GENERAL
====================================================*/

const elementos=document.querySelectorAll(

".card,.glass-card,.skill,.stat-card,.contact-card"

);

const revelar=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

elementos.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=".8s";

revelar.observe(el);

});

/*====================================================
          MENSAJE EN CONSOLA
====================================================*/

console.clear();

console.log("%cSebastian Sepulveda Vizcaino","font-size:26px;color:#00A8FF;font-weight:bold;");

console.log("%cPortfolio Profesional","font-size:16px;color:white;");

console.log("%cDesarrollado con HTML • CSS • JavaScript","color:#6ec1ff;");