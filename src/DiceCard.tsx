import React from "react";

type Props = {
  roll: Number;
  hold: boolean;
};

export default function DiceCard({ roll, hold }: Props) {
  const diceFileName = `/img/${roll}${hold ? "h" : ""}.png`;
  const holdFileName = `img/${hold ? "hold1.png" : "hold0.png"}`;
  return (
    <div className="grid grid-rows-2">
      <div>
        <figure>
          <img className="object-fill h-48 w-96 shadow-2xl" src={diceFileName} alt={roll.toString()} />
        </figure>
      </div>
      <div>
        <figure>
          <img className="object-fill h-48 w-96 shadow-2xl" src={holdFileName}></img>
        </figure>
      </div>
    </div>
  );
}
