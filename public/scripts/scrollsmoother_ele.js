function smoothScrollSetup(element) {
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

  let targetY = element.scrollTop;
  let isAnimating = false;
  let maxY = element.scrollHeight - element.clientHeight;
  let dir = null;

  element.addEventListener("resize", () => {
    maxY = element.scrollHeight - element.clientHeight;
  });

  element.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      if (dir === 1) {
        targetY += 100;
      } else {
        dir = 1;
        targetY = element.scrollTop + 100;
      }

      if (targetY > maxY) targetY = maxY;

      if (!isAnimating) {
        smoothScroll();
        isAnimating = true;
      }
    } else {
      if (dir === -1) {
        targetY -= 100;
      } else {
        dir = -1;
        targetY = element.scrollTop - 100;
      }

      if (targetY < 0) targetY = 0;

      if (!isAnimating) {
        smoothScroll();
        isAnimating = true;
      }
    }
  });

  disableScroll(element);

  function disableScroll(element) {
    element.addEventListener("DOMMouseScroll", preventDefault, false);
    element.addEventListener(wheelEvent, preventDefault, wheelOpt);
    element.addEventListener("keydown", preventDefaultForScrollKeys, false);
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

const body = document.querySelector(".main");
smoothScrollSetup(body);
