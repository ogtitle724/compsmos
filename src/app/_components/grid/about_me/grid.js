import Image from "next/image";
import "./style.css";

function GridAM() {
  return (
    <section className="grid-am">
      <div className="grid-am__card grid-am__card-a"></div>
      <div className="grid-am__card grid-am__card-b"></div>
      <div className="grid-am__card grid-am__card-c">
        {/* <Image
          className="grid-am__img-logo"
          alt="about-me-logo"
          src={"/images/WJ.svg"}
          width={70}
          height={70}
        ></Image> */}
      </div>
      <div className="grid-am__card grid-am__card-d"></div>
      <div className="grid-am__card grid-am__card-e"></div>
      <div className="grid-am__card grid-am__card-f"></div>
    </section>
  );
}

export default GridAM;
