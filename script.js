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
