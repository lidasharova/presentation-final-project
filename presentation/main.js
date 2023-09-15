import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import 'reveal.js/dist/reveal.css';
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
// import ComparisonSlider from "comparison-slider";
import 'reveal.js/dist/theme/moon.css';

const deck = new Reveal();

deck.configure({ backgroundTransition: 'zoom' });
deck.initialize({
  hash: true,
  slideNumber: true,
  plugins: [RevealNotes, RevealZoom],

  // Parallax background image
  parallaxBackgroundImage: '', // e.g. "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"

  // Parallax background size
  parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px" - currently only pixels are supported (don't use % or auto)

  // Number of pixels to move the parallax background per slide
  // - Calculated automatically unless specified
  // - Set to 0 to disable movement along an axis
  parallaxBackgroundHorizontal: 200,
  parallaxBackgroundVertical: 50,
});
