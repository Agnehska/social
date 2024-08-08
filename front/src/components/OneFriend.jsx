import React from "react";

const OneFriend = ({ user }) => {
  return (
    // bg-teal-500 bg-purple-500
    <div className={`flex-shrink-0 m-6 relative overflow-hidden ${user.id % 3 === 2 ? 'bg-blue-400': user.id % 3 === 1 ? 'bg-purple-500' : 'bg-teal-500'}  rounded-lg max-w-xs shadow-lg`}>
      <svg
        className="absolute bottom-0 left-0 mb-8 transform"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 gradient"></div>
        <img
          className="relative w-40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png"
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">{user.first_name}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{user.last_name}</span>
        </div>
      </div>
    </div>
  );
};

export default OneFriend;
