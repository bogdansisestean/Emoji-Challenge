import React from "react";
import "./SingleEmoji.css"

const SingleEmoji = (props) => {
  return (
      <div className="col-2 singleEmojiCol">
        <span className="singleEmoji" onClick={props.pickHandler}>{props.emojiPic}</span>
      </div>
  );
};
export default SingleEmoji;
