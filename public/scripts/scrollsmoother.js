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

let targetY = window.scrollY;
let isAnimating = false;
let maxY = document.documentElement.scrollHeight - window.innerHeight;
let dir = null;

window.addEventListener("resize", () => {
  console.log("resize");
  maxY = document.documentElement.scrollHeight - window.innerHeight;
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    if (dir === 1) {
      targetY += 100;
    } else {
      dir = 1;
      targetY = window.scrollY + 100;
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
      targetY = window.scrollY - 100;
    }

    if (targetY < 0) targetY = 0;

    if (!isAnimating) {
      smoothScroll();
      isAnimating = true;
    }
  }
});

disableScroll();
smoothScroll();

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  //window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  //window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
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
    if (Math.abs(window.scrollY - targetY) <= 1) {
      isAnimating = false;
      return;
    }

    const next = lerp(window.scrollY, targetY, 0.06);
    const diff = Math.abs(window.scrollY - next);

    if (diff <= 1) window.scrollTo(0, window.scrollY + dir);
    else window.scrollTo(0, next);

    requestAnimationFrame(scroll);
  };

  requestAnimationFrame(scroll);
  isAnimating = true;
}
