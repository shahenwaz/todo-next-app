import React from "react";

const Page = ({ params }) => {
  return (
    <div>
      <h1>Nice to meet you. {params.name} </h1>
    </div>
  );
};
export default Page;
