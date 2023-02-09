import React from "react";
import DiceCard from "./DiceCard";

type Props = {};

export default function DiceBoard({}: Props) {
  return (
    <div className="grid grid-cols-6">
      <div />
      <DiceCard roll={2} hold={true} />
      <DiceCard roll={3} hold={false} />
      <DiceCard roll={4} hold={false} />
      <DiceCard roll={5} hold={true} />
      <DiceCard roll={6} hold={false} />
    </div>
  );
}
