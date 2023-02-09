import React from "react";
import DiceCard from "./DiceCard";
import RollButton from "./RollButton";

type Props = {};

export default function DiceBoard({}: Props) {
  return (
    <div className="mx-auto w-3/4 grid grid-cols-6">
      <RollButton rollsLeft={3} />
      <DiceCard roll={2} hold={false} />
      <DiceCard roll={1} hold={true} />
      <DiceCard roll={4} hold={false} />
      <DiceCard roll={3} hold={false} />
      <DiceCard roll={6} hold={false} />
    </div>
  );
}
