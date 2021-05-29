import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const { tiles } = props;
  return (
    <div>
      {tiles.map((value, index) => 
      <Tile value={value}  key={index} />)}
    </div>
  );
};
