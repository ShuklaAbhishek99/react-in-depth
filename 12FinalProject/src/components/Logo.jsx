import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        className="b rounded-full"
        src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"
        width={width}
      />
    </div>
  );
}

export default Logo;
