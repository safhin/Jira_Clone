import React from "react";

const Task = () => {
  return (
    <div
      className="relative flex flex-col items-start p-4 mt-3 bg-gray-700 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
      draggable="true"
    >
      <h4 className="mt-3 text-base font-semibold text-white">
        This is the title of the card for the thing that needs to be done.
      </h4>
      <p className="mt-1 text-sm text-current">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
        assumenda, natus consequuntur pariatur recusandae molestias hic, eos
        voluptatem, voluptas vel ipsam. Aliquam ea nesciunt sapiente hic vitae
        cupiditate excepturi molestiae.
      </p>
    </div>
  );
};

export default Task;
