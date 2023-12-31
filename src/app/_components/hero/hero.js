import "./style.css";

export default function Hero() {
  return (
    <>
      <div className="hero__bg">
        <svg
          className="c"
          width="782"
          height="423"
          viewBox="0 0 782 423"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="hero__clip">
            <path
              d="M676.629 147.974C694.379 137.727 717.075 143.808 727.322 161.557L762.571 222.61C772.818 240.359 766.737 263.055 748.988 273.303V273.303C731.238 283.55 708.542 277.469 698.295 259.72L663.046 198.667C652.799 180.918 658.88 158.222 676.629 147.974V147.974Z"
              fill="#D9D9D9"
            />
            <path
              d="M54.4259 95.2511C84.4845 77.8967 121.625 85.9523 137.382 113.244L212.928 244.094C228.685 271.385 217.091 307.578 187.032 324.932V324.932C156.974 342.287 119.833 334.231 104.076 306.94L28.53 176.089C12.7732 148.798 24.3672 112.605 54.4259 95.2511V95.2511Z"
              fill="#D9D9D9"
            />
            <path
              d="M248.882 43.0641C289.651 19.5257 341.783 33.4944 365.322 74.2642L474.3 263.02C497.838 303.79 483.87 355.922 443.1 379.46V379.46C402.33 402.999 350.198 389.03 326.659 348.26L217.681 159.505C194.143 118.735 208.112 66.6026 248.882 43.0641V43.0641Z"
              fill="#D9D9D9"
            />
            <path
              d="M493.638 93.8274C522.334 77.2593 559.029 87.0915 575.597 115.788L652.304 248.648C668.872 277.345 659.039 314.039 630.343 330.607V330.607C601.646 347.176 564.951 337.343 548.383 308.647L471.677 175.787C455.109 147.09 464.941 110.395 493.638 93.8274V93.8274Z"
              fill="#D9D9D9"
            />
          </clipPath>
        </svg>
        <div className="hero__video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            width="782"
            height="423"
            src="/videos/hero_bg.mp4"
          ></video>
        </div>
      </div>
      <div className="hero__text-wrapper">
        <p className="hero__p">JangwonJe</p>
      </div>
      <div className="hero__text-wrapper">
        <p className="hero__p">FE developer in SEOUL</p>
      </div>
    </>
  );
}
