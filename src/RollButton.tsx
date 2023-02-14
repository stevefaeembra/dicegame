import React from "react";

type Props = {
  rollsLeft: Number;
  triggerRoll: Function;
};

export default function RollButton({ rollsLeft, triggerRoll }: Props) {
  const rollsFileName = `/img/roll${rollsLeft}.png`;
  return (
    <div>
      <figure>
        <img
          onClick={() => (rollsLeft > 0 ? triggerRoll() : () => {})}
          className="object-contain shadow-2xl"
          src={rollsFileName}
        ></img>
      </figure>
    </div>
  );
}
