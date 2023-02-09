import React from "react";

type Props = {
  roll: Number;
  hold: boolean;
};

export default function DiceCard({ roll, hold }: Props) {
  const diceFileName = `/img/${roll}${hold ? "h" : ""}.png`;
  const holdFileName = `/img/${hold && roll > 0 ? "hold1.png" : roll === 0 ? "0.png" : "hold0.png"}`;
  return (
    <div className="grid grid-rows-2">
      <div>
        <figure>
          <img className="object-contain" src={diceFileName} alt={roll.toString()} />
        </figure>
      </div>
      <div>
        <figure>
          <img className="object-contain" src={holdFileName}></img>
        </figure>
      </div>
    </div>
  );
}
