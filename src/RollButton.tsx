import React from "react";

type Props = {
  rollsLeft: Number;
};

export default function RollButton({ rollsLeft }: Props) {
  const rollsFileName = `/img/roll${rollsLeft}.png`;
  return (
    <div>
      <figure>
        <img className="object-contain shadow-2xl" src={rollsFileName}></img>
      </figure>
    </div>
  );
}
