class Particle {
  constructor(CTX, x, y, color) {
    this.CTX = CTX;
    this.x = CTX.canvasWidth * Math.random();
    this.y = CTX.canvasHeight * Math.random();

    this.originX = x;
    this.originY = y;
    this.color = color;
    this.r = 3;

    this.dx = 0;
    this.dy = 0;
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
    this.angle = 0;
    this.distance = 0;
    this.friction = Math.random() * 0.3 + 0.5;
    this.ease = 0.1 * Math.random() + 0.04;

    this.frameFlag = 0;
  }

  draw() {
    if (this.frameFlag === 4) {
      this.r = 6 * Math.random();
      this.frameFlag = 0;
    }

    this.CTX.ctx.fillStyle = this.color;
    this.CTX.ctx.beginPath();
    this.CTX.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.CTX.ctx.fill();

    this.frameFlag++;
  }

  update() {
    this.dx = this.CTX.mouse.x - this.x;
    this.dy = this.CTX.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    this.force = -Math.min(this.CTX.mouse.r / this.distance, 60);

    if (this.distance < this.CTX.mouse.r) {
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx += this.force * Math.cos(this.angle);
      this.vy += this.force * Math.sin(this.angle);
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
  }
}

class CTX {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.particles = [];
    this.step = 2;
    this.fontSize = 200;
    this.text = null;
    this.mouse = {
      x: 0,
      y: 0,
      r: 5000,
    };
    this.boundingRect = {
      top: this.canvasHeight,
      bottom: 0,
      left: this.canvasWidth,
      right: 0,
    };
  }

  generateParticles(text, fontFamily = "Helvetica") {
    let fontSize = this.fontSize;

    if (this.canvasWidth < 370) fontSize = 150;

    this.text = text;
    this.ctx.fillStyle = "white";
    this.ctx.letterSpacing = "10px";
    this.ctx.font = `700 ${fontSize}px ${fontFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    const lineHeight = fontSize + 10;
    const words = text.split(" ");
    const maxWidth = this.canvasWidth * 0.95;
    const lineArray = [""];

    for (let word of words) {
      const newLine = lineArray.at(-1) + word + " ";

      if (this.ctx.measureText(newLine).width > maxWidth) {
        lineArray.push(word + " ");
      } else {
        lineArray[lineArray.length - 1] = newLine;
      }
    }

    const textBlockHeight = (lineArray.length - 1) * lineHeight;
    const initialBaseLine = (this.canvasHeight - textBlockHeight) / 2;

    lineArray.forEach((line, idx) => {
      this.ctx.fillText(
        line.slice(0, -1),
        this.canvasWidth / 2,
        initialBaseLine + lineHeight * idx
      );
    });

    this.convertToParticles();
  }

  convertToParticles() {
    this.particles = [];

    const pixels = this.ctx.getImageData(
      0,
      0,
      this.canvasWidth,
      this.canvasHeight
    ).data;

    for (let y = 0; y < this.canvasHeight; y += this.step) {
      for (let x = 0; x < this.canvasWidth; x += this.step) {
        const pixelIdx = (y * this.canvasWidth + x) * 4;
        const alpha = pixels[pixelIdx + 3];

        if (alpha > 5) {
          const color = `rgb(${pixels[pixelIdx]}, ${pixels[pixelIdx + 1]}, ${
            pixels[pixelIdx + 2]
          })`;

          this.particles.push(new Particle(this, x, y, color));
          this.boundingRect.top = Math.min(this.boundingRect.top, y);
          this.boundingRect.bottom = Math.max(this.boundingRect.bottom, y);
          this.boundingRect.right = Math.max(this.boundingRect.right, x);
          this.boundingRect.left = Math.min(this.boundingRect.left, x);
        }
      }
    }
  }

  render() {
    this.particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.generateParticles(this.text);
  }

  isTextArea(offsetX, offsetY) {
    if (
      offsetX > this.boundingRect.left - 20 &&
      offsetY < this.boundingRect.right + 20 &&
      offsetY > this.boundingRect.top - 20 &&
      offsetY < this.boundingRect.bottom + 20
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default CTX;
