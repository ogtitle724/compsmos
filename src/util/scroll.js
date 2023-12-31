export function blockScroll(element) {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  // check whether the browser support "passive"
  let supportsPassive = false;

  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  //set wheel option depend on passive support
  let wheelOpt = supportsPassive ? { passive: false } : false;
  //check the browser's wheel event
  let wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  disableScroll(element);

  function disableScroll(element) {
    element.addEventListener("DOMMouseScroll", preventDefault, false);
    element.addEventListener(wheelEvent, preventDefault, wheelOpt);
    element.addEventListener("keydown", preventDefaultForScrollKeys, false);
    element.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  }

  function enableScroll(element) {
    element.removeEventListener("DOMMouseScroll", preventDefault, false);
    element.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    element.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
}

function smoothScrollSetup(element) {
  blockScroll(element);

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function smoothScroll() {
    const scroll = () => {
      if (Math.abs(element.scrollTop - targetY) <= 1) {
        isAnimating = false;
        return;
      }

      const next = lerp(element.scrollTop, targetY, 0.06);
      const diff = Math.abs(element.scrollTop - next);

      if (diff <= 1) element.scrollTop += dir;
      else element.scrollTop = next;

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
    isAnimating = true;
  }
}
