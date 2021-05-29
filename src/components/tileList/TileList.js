import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {

  return (
    <div>
      {tiles.map((value, index) => {
        return <Tile value={value}  key={index} />
      })}
    </div>
  );
};
