  function fetchData() {
    fetch("http://localhost:3001/first")
      .then((response) => response.json())
        .then((data) => show(data))
        .catch((error) => console.error(error));
    }
    function show(products) {
      let section1 = document.querySelector(".section1");
      products.forEach((product) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <img src="${product.image}" alt="">
            <p style="font-size: 16px; font-weight: 600; " class="text-center">${product.name}</p>
        `;
        section1.appendChild(div);
      });
    }
    fetchData();
   const sliderData = function () {
  fetch("http://localhost:3001/slider")
    .then((response) => response.json())
    .then((data) => showSlider(data))
    .catch((error) => console.error(error));
};

const showSlider = function (slide) {
  let container = document.querySelector(".slider-container");
  slide.forEach((slides) => {
    let div = document.createElement("div");
    div.classList.add("slider");
    div.innerHTML = `
      <img src="${slides.image}" alt="" height="100%" width = "100%">
    `;
    container.appendChild(div);
  });

  const slider = document.querySelectorAll(".slider");
  let curSlide = 0;
  let maxSlide = slider.length - 1;

  slider.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

  let btnPrev = document.querySelector(".btn-prev");
  let btnNext = document.querySelector(".btn-next");

  const updateSlide = (direction) => {
    if (direction === "next") {
      curSlide = curSlide === maxSlide ? 0 : curSlide + 1;
    } else {
      curSlide = curSlide === 0 ? maxSlide : curSlide - 1;
    }
    slider.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  };
  btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    updateSlide("next");
  });

  btnPrev.addEventListener("click", (e) => {
    e.preventDefault();
    updateSlide("prev");
  });

  // const intervalTime = 4000;
  // const autoSlideInterval = setInterval(() => {
  //   updateSlide("next");
  // }, intervalTime);

  // container.addEventListener("mouseover", () => {
  //   clearInterval(autoSlideInterval);
  // });

  // container.addEventListener("mouseout", () => {
  //   autoSlideInterval = setInterval(() => {
  //     updateSlide("next");
  //   }, intervalTime);
  // });
};

sliderData();


let toysData = [];

const fetchToys = function () {
  fetch("http://localhost:3001/Elecrtronics")
    .then((response) => response.json())
    .then((data) => {
      // Store the data in the array
      toysData = data;
      showToys(toysData);
    })
    .catch((error) => console.error(error));
};

const showToys = function (toys) {
  let container = document.querySelector(".products");
  // Clear the container before appending new data
  container.innerHTML = "";
  toys.forEach((toy) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <a style="text-decoration: none; color: black;" href="second.html">
        <img src="${toy.image}" alt="" height="186px" width="186px">
        <p>${toy.type}</p>
        <p>${toy.from}</p>
      </a>
    `;
    container.appendChild(div);
    div.style.border = "1px solid whitesmoke";
    div.style.padding = "20px";
    div.style.width = "32%";
    div.style.marginTop = "10px";
  });
};

// Fetch the toys data
fetchToys();

    
    const fetchHome = function () {
      fetch("http://localhost:3001/home")
        .then((response) => response.json())
        .then((data) => showHome(data))
        .catch((error) => console.error(error));
    };

    const showHome = function (home) {
      let container = document.querySelector(".grid-1");
      home.forEach((home) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <img src="${home.image}" alt="" height="143px" width="143px">
        <p  class="p-0 m-0">${home.type}</p>
        <p  style="font-size: 16px; font-weight: 600; color: green" class="p-0 m-0">${home.from}</p>
        `;
        container.appendChild(div);
        div.style.border = "1px solid whitesmoke";
        div.style.padding = "20px";
        div.style.width = "49%";
        div.style.marginTop = "10px";
      });
    }
    fetchHome();

    const fetchSports = function () {
      fetch("http://localhost:3001/sports")
        .then((response) => response.json())
        .then((data) => showSports(data))
        .catch((error) => console.error(error));
    };
    
  const showSports = function (sports) {
    let container = document.querySelector(".grid-2");
    sports.forEach((sport) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <img src="${sport.image}" alt="" height="143px" width="143px">
      <p  class="p-0 m-0">${sport.type}</p>
      <p  style="font-size: 16px; font-weight: 600; color: green" class="p-0 m-0">${sport.from}</p>
      `;
      container.appendChild(div);
      div.style.border = "1px solid whitesmoke";
      div.style.padding = "20px";
      div.style.width = "49%";
      div.style.marginTop = "10px";
    });
  }
  fetchSports();

  const fetchTop = function () {
    fetch("http://localhost:3001/Gadgets")
      .then((response) => response.json())
      .then((data) => showTop(data))
      .catch((error) => console.error(error));
  };

  const showTop = function (top) {
    let container = document.querySelector(".grid-3");
    top.forEach((top) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <img src="${top.image}" alt="" height="143px" width="143px">
      <p  class="p-0 m-0">${top.type}</p>
      <p style="font-size: 16px; font-weight: 600; color: green" class="p-0 m-0">${top.from}</p>
      `;
      container.appendChild(div);
      div.style.border = "1px solid whitesmoke";
      div.style.padding = "20px";
      div.style.width = "49%";
      div.style.marginTop = "10px";
    });
  }
  fetchTop();

  const fetchFashion = function () {
    fetch("http://localhost:3001/Fashion")
      .then((response) => response.json())
      .then((data) => showFashion(data))
      .catch((error) => console.error(error));
  };
  const showFashion = function (fashion) {
    let container = document.querySelector(".grid-4");
    fashion.forEach((fashion) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <img src="${fashion.image}" alt="" height="143px" width="143px">
      <p class="p-0 m-0">${fashion.type}</p>
      <p style="font-size: 16px; font-weight: 600; color: green" class="p-0 m-0">${fashion.from}</p>
      `;
      container.appendChild(div);
      div.style.border = "1px solid whitesmoke";
      div.style.padding = "20px";
      div.style.width = "49%";
      div.style.marginTop = "10px";
    });
  }
  fetchFashion();

  const fetchBeauty = function () {
    fetch("http://localhost:3001/Beauty")
      .then((response) => response.json())
      .then((data) => showBeauty(data))
      .catch((error) => console.error(error));
  };
  const showBeauty = function (beauty) {
    let container = document.querySelector(".grid-5");
    beauty.forEach((beauty) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <img src="${beauty.image}" alt="" height="143px" width="143px">
      <p class="p-0 m-0">${beauty.type}</p>
      <p style="font-size: 16px; font-weight: 600; color: green" class="p-0 m-0">${beauty.from}</p>
      `;
      container.appendChild(div);
      div.style.border = "1px solid whitesmoke";
      div.style.padding = "20px";
      div.style.width = "49%";
      div.style.marginTop = "10px";
    });
  }
  fetchBeauty();