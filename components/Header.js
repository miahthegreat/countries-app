import React from "react";

function Header() {
  return (
    <div className="fixed z-20 mx-auto w-full border-b border-gray-500/20 bg-gray-900/90 px-2 py-4 shadow backdrop-blur-sm">
      <h1 className="text-center text-3xl font-bold text-gray-50">
        Countries of the Earth
      </h1>
      <h2 className="font-base text-center text-xs uppercase tracking-widest text-gray-50">
        I do not know how else to explain it{" "}
      </h2>
    </div>
  );
}

export default Header;
