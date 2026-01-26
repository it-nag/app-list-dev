import React, {useEffect, useRef, useState} from "react";
import './Tooltip.css'

function Tooltip({ message, position }) {

  return (
    <div>
      <span className={`tooltip tooltip-${position}`}>{message}</span>
    </div>
  );
}

export default Tooltip