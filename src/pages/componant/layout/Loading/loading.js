import React from "react";

export default function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white grid place-items-center max-w-[100%]">
      <div className="w-[10vmax] h-[10vmax] border-b-4 border-[rgb(110,110,110)] rounded-[50%] loader"></div>
    </div>
  );
}
