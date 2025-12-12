const { clock, css, flipClock, theme } = FlipClock;

const parent = document.querySelector('#clock');

flipClock({
  parent,
  face: clock(), // default clock face
  theme: theme({
    dividers: ':',
    css: css({
      fontSize: '6rem'
    })
  })
});

const images = [
    "./bmw_m3_bmw_car.jpg",
    "./_dark.jpg",
    "./bmw_logo_drops.jpg"
  ];

  // Pick a random one
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Set it as page background
  document.body.style.backgroundImage = `url(${randomImage})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
