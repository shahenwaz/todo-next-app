import React from "react";
import sample_image from "../../assets/sample_image.jpg";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <h1>We will show the image here</h1>
      <Image src={sample_image} alt="Sample Image" />
      <Image src={sample_image} alt="Sample Image" width={500} />
    </div>
  );
};
export default Page;
