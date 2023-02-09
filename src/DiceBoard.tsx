import React from "react";
import DiceCard from "./DiceCard";
import RollButton from "./RollButton";

type Props = {};

export default function DiceBoard({}: Props) {
  return (
    <div className="mx-auto w-3/4 grid gap-0 grid-cols-6">
      <RollButton rollsLeft={3} />
      <DiceCard roll={0} hold={false} />
      <DiceCard roll={0} hold={false} />
      <DiceCard roll={0} hold={false} />
      <DiceCard roll={0} hold={false} />
      <DiceCard roll={0} hold={false} />
    </div>
  );
}
