function set3dCardEffect(ele, wrapper) {
  wrapper.addEventListener("mousemove", (e) => {
    const boundingRect = wrapper.getBoundingClientRect();
    const halfWidth = wrapper.offsetWidth / 2;
    const halfHeight = wrapper.offsetHeight / 2;
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;
    const degreeX = (halfWidth - offsetX) * 0.6;
    const degreeY = (halfHeight - offsetY) * 0.6;
    console.log(offsetX, offsetY, boundingRect, e.target, wrapper);
    requestAnimationFrame(() => {
      ele.style.scale = 1.1;
      ele.style.transform = `perspective(300px) rotateY(${
        -(degreeX / halfWidth) * 20
      }deg) rotateX(${(degreeY / halfHeight) * 20}deg)`;

      const overlay = ele.children[0];
      overlay.style = `background: radial-gradient(
        circle at ${(1 - offsetX / (wrapper.offsetWidth / 1.2)) * 100}% ${
        (1 - offsetY / (wrapper.offsetHeight / 1.2)) * 100
      }%,
        rgba(171, 194, 208, 0.7) 0%,
        rgba(171, 194, 208, 0.5) 30%,
        rgba(171, 194, 208, 0.2) 60%,
        rgba(171, 194, 208, 0) 100%,
        transparent,
        transparent
      )`;
    });
  });

  wrapper.addEventListener("mouseleave", (e) => {
    requestAnimationFrame(() => {
      const overlay = ele.children[0];

      ele.style.scale = 1;
      ele.style.transform = `rotateY(0) rotateX(0)`;
      overlay.style = `radial-gradient(
        circle at -50% 50%,
        rgba(171, 194, 208, 0.8) 0%,
        rgba(171, 194, 208, 0.4) 10%,
        rgba(171, 194, 208, 0.1) 60%,
        transparent,
        transparent
      );`;
    });
  });

  wrapper.addEventListener("touchmove", (e) => {
    e.preventDefault();

    const boundingRect = wrapper.getBoundingClientRect();
    const halfWidth = wrapper.offsetWidth / 2;
    const halfHeight = wrapper.offsetHeight / 2;

    const touch = e.touches[0];
    const offsetX = touch.clientX - boundingRect.left;
    const offsetY = touch.clientY - boundingRect.top;
    const degreeX = (halfWidth - offsetX) * 0.6;
    const degreeY = (halfHeight - offsetY) * 0.6;

    requestAnimationFrame(() => {
      const overlay = ele.children[0];

      ele.style.scale = 1.1;
      ele.style.transform = `perspective(300px) rotateY(${
        -(degreeX / halfWidth) * 20
      }deg) rotateX(${(degreeY / halfHeight) * 20}deg)`;
      overlay.style = `background: radial-gradient(
        circle at ${(1 - offsetX / (wrapper.offsetWidth / 1.2)) * 100}% ${
        (1 - offsetY / (wrapper.offsetHeight / 1.2)) * 100
      }%,
        rgba(171, 194, 208, 0.7) 0%,
        rgba(171, 194, 208, 0.5) 30%,
        rgba(171, 194, 208, 0.2) 60%,
        rgba(171, 194, 208, 0) 100%,
        transparent,
        transparent
      )`;
    });
  });

  wrapper.addEventListener("touchend", () => {
    requestAnimationFrame(() => {
      const overlay = ele.children[0];

      ele.style.transform = `rotateY(0) rotateX(0)`;
      ele.style.scale = 1;
      overlay.style = `radial-gradient(
        circle at -50% 50%,
        rgba(171, 194, 208, 0.8) 0%,
        rgba(171, 194, 208, 0.4) 10%,
        rgba(171, 194, 208, 0.1) 60%,
        transparent,
        transparent
      );`;
    });
  });
}

export default set3dCardEffect;
