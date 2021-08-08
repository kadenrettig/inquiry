import React from "react";

const Example = ({ label }) => {
  const [toggled, setToggled] = React.useState(false);

  const classes = [
    "px-4 py-3 text-white rounded-full font-bold",
    "select-none cursor-pointer",
    "transition-all hover:scale-125",
    toggled
      ? "transform rotate-6 bg-green-500"
      : "transform -rotate-6 bg-indigo-500",
    toggled
      ? "hover:rotate-3 hover:bg-green-400"
      : "hover:-rotate-3 hover:bg-indigo-400",
  ].join(" ");

  const on_click_pill = () => {
    setToggled((t) => !t);
  };

  return (
    <div className={classes} onClick={on_click_pill}>
      {label}
    </div>
  );
};

export default Example;
