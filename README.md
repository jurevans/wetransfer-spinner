# WeTransfer Spinner

This is my implementation of the WeTransfer file-upload progress spinner. For this project, I chose to begin with `create-react-app` to get it up and running quickly, using the `typescript` template. I created CSS where necessary, but in general it is pretty minimal, as I focused on the Spinner functionality.

View the [live demo](https://thirsty-archimedes-1aaf76.netlify.app/).

## Usage

### Run the dev server:
```bash
npm start
```
Server is active at `http://localhost:3000`.

### Create a production build
```bash
npm run build
```

### Test
```bash
npm text
```

## About
### Spinner
I used SVG to create the overlapping circles, the top being the progress bar that uses `stroke-dashoffset` to increase in size relative to the progress. Progress is an integer between 0 and 100, and is checked within the `Spinner` component to fall within that range, and is rounded if it is not an integer.

The `Spinner` component is a simple, stateless functional component. This is the primary re-usable component in this project. All of the demo functionality lives in `Demo.tsx`. All of the props are initialized to defaults. The configurable props are:

- `progress`
  - A number between 0 and 100
  - Defaults to `0`
- `transitionDuration`
  - A number (in seconds) which determines how fast the progress bar will grow
  - Defaults to `1`
- `size`
  - A number representing the height/width of the spinner (height will equal width).
  - Defaults to `100%` - The SVG will grow to the size of its parent, which is how it is currently implemented in the `Demo`.
- `strokeWidth`
  - The width of the circles in the progress spinner
  - Defautls to `25`
- `progressStyles`
  - Any overrides or additional styles to provide to the progress bar(`CSSProperties` type)
  - Defaults to an empty object
- `rotate`
  - A boolean to determine if the rotation animation is active (this parameter will trigger the play state of the CSS animation, either `running` or `paused`)
  - Defaults to `false`
- `rotateDuration`
  - A number (in seconds) to set the speed of the rotation animation
  - Defaults to `2`

### Additional functions
There are two functions that I broke out of the `Spinner` component, to allow for re-use, as well as making them testable. These are `getOffset` (to determine the `stroke-dashoffset` value of the progress circle) and `getValidPercentage` which ensures that we always get an integer from 0 to 100.

### Demo
The `Demo` component contains all of the functionality to control the `Spinner` component. I included basic buttons to `Start` and `End` the progress and animations. The `End` button acts as a pause, and the animation will only start over once it has reached 100%. I added in some randomization to advance the progress at different intervals, with randomized timings to illustrate functionality. When the progress reaches 100%, it will pause briefly, reset to zero and pause again, then begin again. The `rotate` prop is bound to the state variable `isSpinning` to synchronize the CSS animation with the progress increments.

## Testing
I would have liked to have spent more time on the tests, specifically those of the `Spinner` component. There are a few spots in the tests where I am testing for implementation-specific items, which are better suited for Enzyme over React-Testing-Library. To save time, I stuck with React-Testing-Library. The only other testing library I included was `react-test-renderer`, to generate JSON for Jest SnapShots.
