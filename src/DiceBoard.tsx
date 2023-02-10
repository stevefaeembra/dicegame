import React from "react";
import DiceCard from "./DiceCard";
import RollButton from "./RollButton";

type Props = {};

export default function DiceBoard({}: Props) {
  return (
    <div className="grid mx-auto grid-rows-2">
      <div className="mx-auto my-0 w-3/4 h-100 grid items-start gap-0 grid-cols-6">
        <div></div>

        <figure className="col-span-3 grow mx-auto">
          <img className="object-cover w-48" src="/img/logo.png" />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mx-auto my-0 w-3/4 grid items-start gap-0 grid-cols-6">
        <RollButton rollsLeft={2} />
        <DiceCard roll={1} hold={true} />
        <DiceCard roll={6} hold={false} />
        <DiceCard roll={2} hold={true} />
        <DiceCard roll={1} hold={false} />
        <DiceCard roll={3} hold={true} />
      </div>
    </div>
  );
}
