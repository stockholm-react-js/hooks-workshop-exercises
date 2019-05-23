import React from 'react';

function useWindowSize() {
  /*
   * This hook should track and return the current window size as an {x, y} object.
   * It can be achivied by a combination of useState an useEffect.
   * The window size could be tracked by adding an eventlistener to the resize event.
   * Don't forget to clean up the listener.
   */

  return {
    x: window.innerWidth, // replace this with the tracked window width
    y: window.innerHeight, // replace this with the tracked` window height
  };
}

function WindowSize() {
  const { x, y } = useWindowSize();
  return (
    <div>
      The current window size is: {x}x{y}
    </div>
  );
}

export default WindowSize;
