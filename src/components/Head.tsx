import Image from "next/image";
import Foto from "/public/fotoAfi.jpg";

type Props = {
  myName : String
};

const Head = (props: Props) => {
  return (
    <>
      <Image
        src={Foto}
        alt=""
        width={300}
        className="rounded-full mx-auto my-4"
      />
      <div id="myName" className="">{props.myName}</div>
    </>
  );
};

export default Head;
