import React from "react";
import { Category } from "./Types";

type Props = {
  category: Category;
};

export default function ScoreCategory({ category }: Props) {
  return (
    <div>
      <button key={`btn_${category.id}`} className="btn gap-2">
        {category.name}
        <div className="badge">{category.score}</div>
      </button>
    </div>
  );
}
