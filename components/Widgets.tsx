import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

const Widgets = () => {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      <div className="mt-2 flex items-center bg-gray-100 space-x-2 rounded-full p-3">
        <SearchIcon className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search Twiter"
          className="bg-transparent flex-1 outline-none"
        />
      </div>
      {/* embed */}
    </div>
  );
};

export default Widgets;
