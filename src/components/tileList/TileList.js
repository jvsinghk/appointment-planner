import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tilesObjArr}) => {

  return (
    <div>
      {tilesObjArr.map( (value, index) => {
        return <Tile value={value}  key={index} />
      })}
    </div>
  );
};
