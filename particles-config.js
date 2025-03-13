particlesJS("particles-js", {
    particles: {
        number: { value: 100 }, // Бөлшектер саны
        shape: { type: "circle" }, // Нүктелердің формасы
        opacity: { value: 0.5 }, // Прозрачность
        size: { value: 3 }, // Нүктелердің өлшемі
        line_linked: {
            enable: true,
            distance: 150, // Байланыс ұзындығы
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2, // Қозғалу жылдамдығы
            attract: { enable: true, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "grab" }, // Курсорға тарту эффектісі
            onclick: { enable: true, mode: "push" } // Басыңқы кезде жаңа нүктелер қосу
        },
        modes: {
            grab: { distance: 200, line_linked: { opacity: 0.8 } }
        }
    },
    retina_detect: true
});
