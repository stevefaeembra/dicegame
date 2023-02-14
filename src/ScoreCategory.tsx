import React from "react";
import { Category } from "./Types";

type Props = {
  category: Category;
  acceptScore: Function;
};

export default function ScoreCategory({ category, acceptScore }: Props) {
  let maincolor = "btn-neutral btn-block";
  if (!category.disabled && category.score > 0) {
    maincolor = " btn-block btn-accent";
  }
  return (
    <div>
      <button onClick={acceptScore} key={`btn_${category.id}`} className={`px-1 ${maincolor}`}>
        {category.name}&nbsp;
        {category.score ? <div className="badge">{category.score}</div> : ""}
      </button>
    </div>
  );
}
