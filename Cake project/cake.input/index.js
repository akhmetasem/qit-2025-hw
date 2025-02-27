const cakes = {
    "медовик": {
        description: "Медовик – балдан жасалған дәмді торт.",
        image: "https://i.pinimg.com/736x/db/97/dc/db97dc1862cc32289f666aca489fb1c1.jpg"
    },
    "наполеон": {
        description: "Наполеон – жұп-жұқа қабаттардан тұратын нәзік торт.",
        image: "https://i.pinimg.com/736x/31/f3/8d/31f38d60904a0328f982dde3161b2dc8.jpg"
    },
    "чизкейк": {
        description: "Чизкейк (New York style) – Қалың, тығыз кремді құрылым, көбінесе су моншасында пісіріледі.",
        image: "https://i.pinimg.com/736x/19/56/9d/19569d085f53b2c9e48a8ab1d4ea3ee6.jpg"
    },
    "тирамису": {
        description: "Тирамису – Итальяндық десерт, эспрессоға малынған савоярди печеньесі мен маскарпоне кремінен жасалады.",
        image: "https://i.pinimg.com/736x/36/3c/3c/363c3c266d56de3b33b1791f8ea83d62.jpg"
    },
    "молочная девочка": {
        description: "Молочная Девочка – қоюлатылған сүтпен жасалатын жұмсақ торт.",
        image: "https://i.pinimg.com/736x/92/a8/49/92a849d96f219bacecf2e9d6757f9390.jpg"
    },
    "прага": {
        description: "Прага – Бай шоколад дәмі бар, қою креммен сіңдірілген, классикалық кеңестік десерт.",
        image: "https://i.pinimg.com/736x/05/08/f8/0508f8dcb484e883213f2d816533939a.jpg"
    },
    "киевский": {
        description: "Киевский – Жаңғақ қосылған безе мен майлы кремнен тұратын ерекше құрылымды торт",
        image: "https://i.pinimg.com/736x/27/91/bb/2791bb8119b5db5e427b62665006d645.jpg"
    },
    "сметанник": {
        description: "Сметанник – Қарапайым, бірақ өте дәмді. Сметанадан жасалған жұмсақ корждар мен крем қолданылады.",
        image: "https://i.pinimg.com/736x/37/c5/ad/37c5ad6c3b3b4da39a39750df76c72f3.jpg"
    },
    "брауни торт": {
        description: "Брауни торт – Іші сәл ылғалды, қою шоколад дәмі бар, тығыз әрі тәтті.",
        image: "https://i.pinimg.com/736x/4a/26/81/4a2681721e70ce30a5c0c5cf847dbc66.jpg"
    },
    "малина торт": {
        description: "Малина муссты торт – Жеңіл малина муссы, көбінесе гельмен немесе ганашпен қапталады.",
        image: "https://i.pinimg.com/736x/74/00/53/74005306b7ab3ec969dbb90e6d601a42.jpg"
    },
    "йогуртты торт": {
        description: "Йогуртты торт – Ауыр крем орнына жеңіл йогурт қосылған, балаларға пайдалырақ.",
        image: "https://i.pinimg.com/736x/80/e7/75/80e77540faa9820bcf0e4f93e71397ca.jpg"
    },
    "красный бархат": {
        description: "Красный бархат торты - қызыл бояуышпен боялған дәмді торт.",
        image: "https://i.pinimg.com/736x/27/d2/88/27d288a5d391acda0762ec4367675f2e.jpg"
    },
};

function searchCake() {
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let image = document.getElementById("cakeImage");

    if (cakes.hasOwnProperty(input)) {
        result.textContent = cakes[input].description;
        image.src = cakes[input].image;
        image.style.display = "block"; 
    } else {
        result.textContent = "Торт табылмады. Басқа атау енгізіңіз.";
        image.style.display = "none"; 
    }
}
