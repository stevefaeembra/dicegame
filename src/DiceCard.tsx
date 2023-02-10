import React from "react";
import { Die } from "./Types";

type Props = {
  die: Die;
};

export default function DiceCard({ die }: Props) {
  console.log("die", die);
  const diceFileName = `/img/${die.roll}${die.hold ? "h" : ""}.png`;
  const holdFileName = `/img/${die.hold && die.roll > 0 ? "hold1.png" : die.roll === 0 ? "0.png" : "hold0.png"}`;
  return (
    <div className="grid grid-rows-2">
      <div>
        <figure>
          <img className="object-contain" src={diceFileName} alt={die.roll.toString()} />
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
