import React from "react";

const SingleComment = (props) => {
  return (
    <div className="single-comment">
      <h4 className="userName">{props.commentUser}<span> commented</span></h4>
      <p className="userText">{props.commentText}</p>
      {/* <button className="modalButton">😊</button> */}
    </div>
  );
};

export default SingleComment;
