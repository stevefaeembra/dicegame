import React from "react";
import DiceCard from "./DiceCard";
import RollButton from "./RollButton";

type Props = {};

export default function DiceBoard({}: Props) {
  return (
    <>
      <div className="mx-auto my-0 w-3/4 grid items-start gap-0 grid-cols-6">
        <figure className="w-100">
          <img src="/img/logo.png" />
        </figure>
      </div>
      <div className="mx-auto my-0 w-3/4 grid items-start gap-0 grid-cols-6">
        <RollButton rollsLeft={2} />
        <DiceCard roll={1} hold={false} />
        <DiceCard roll={6} hold={false} />
        <DiceCard roll={1} hold={false} />
        <DiceCard roll={1} hold={false} />
        <DiceCard roll={2} hold={false} />
      </div>
    </>
  );
}
