import React from "react";

function Footer() {
  return (
    <>
      <div className="py-10 text-center bg-[#000] px-7">
        <p>
          Designed and Developed by{" "}
          <a
            href="https://github.com/yashpatil182000"
            className="underline"
            target="_blank"
          >
            Yash Patil
          </a>{" "}
          | Powered by
          <a
            href="https://spoonacular.com/"
            className="underline"
            target="_blank"
          >
            {" "}
            Spoonacular Api
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
