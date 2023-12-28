class Particle {
  constructor(CTX, x, y, color) {
    this.CTX = CTX;
    this.x = Math.random() * this.CTX.canvasWidth;
    this.y = 0;

    this.originX = x;
    this.originY = y;
    this.color = color;
    this.size = this.CTX.step;

    this.dx = 0;
    this.dy = 0;
    this.vx = 0;
    this.vy = 0;
    this.force = 0;
    this.angle = 0;
    this.distance = 0;
    this.friction = Math.random() * 0.6 + 0.23;
    this.ease = Math.random() * 0.1 + 0.05;
  }

  draw() {
    this.CTX.ctx.fillStyle = this.color;
    this.CTX.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update() {
    this.dx = this.CTX.mouse.x - this.x;
    this.dy = this.CTX.mouse.y - this.y;
    this.distance = this.dx * this.dx + this.dy * this.dy;
    this.force = -this.CTX.mouse.r / this.distance;

    if (this.distance < this.CTX.mouse.r && this.distance > 100) {
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

    this.text = null;
    this.mouse = {
      x: 0,
      y: 0,
      r: 20000,
    };
  }

  showAxis() {
    this.ctx.strokeStyle = "red";
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvasWidth / 2, 0);
    this.ctx.lineTo(this.canvasWidth / 2, this.canvasHeight);
    this.ctx.moveTo(0, this.canvasHeight / 2);
    this.ctx.lineTo(this.canvasWidth, this.canvasHeight / 2);
    this.ctx.stroke();
  }

  getGradient() {
    const gradient = this.ctx.createLinearGradient(
      30,
      0,
      this.canvasWidth - 30,
      this.canvasHeight
    );
    gradient.addColorStop(0, "#ffd89b");
    gradient.addColorStop(0.8, "#19547b");
    gradient.addColorStop(1, "#19227b");
    return gradient;
  }

  generateParticles(text, fontFamily = "Helvetica") {
    const browserWidth = window.innerWidth;
    let fontSize = null;

    if (browserWidth > 1023) {
      fontSize = 150;
      this.mouse.r = 20000;
      this.step = 2;
    } else if (browserWidth > 768) {
      fontSize = 120;
      this.mouse.r = 16000;
      this.step = 2;
    } else if (browserWidth > 479) {
      fontSize = 70;
      this.mouse.r = 12000;
      this.step = 1;
    } else {
      fontSize = 50;
      this.mouse.r = 7000;
      this.step = 1;
    }

    const lineHeight = fontSize + 10;

    this.text = text;
    this.ctx.fillStyle = this.getGradient();
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 1.5;
    this.ctx.font = `500 ${fontSize}px ${fontFamily}`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    const words = text.split(" ");
    const maxWidth = this.canvasWidth * 0.9;
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
      this.ctx.strokeText(
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

    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasWidth);

    for (let y = 0; y < this.canvasHeight; y += this.step) {
      for (let x = 0; x < this.canvasWidth; x += this.step) {
        const pixelIdx = (y * this.canvasWidth + x) * 4;

        if (pixels[pixelIdx + 3] > 0) {
          const color = `rgb(${pixels[pixelIdx]}, ${pixels[pixelIdx + 1]}, ${
            pixels[pixelIdx + 2]
          })`;

          this.particles.push(new Particle(this, x, y, color));
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
    console.log("anmation");
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.render();
    requestAnimationFrame(this.animate.bind(this));
  }

  resize(width, height) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.generateParticles(this.text);
  }
}

export default CTX;
