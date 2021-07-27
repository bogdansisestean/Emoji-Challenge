import React, { useCallback, useState } from "react";
import SingleComment from "./SingleComment";
import { Button, Modal } from "react-bootstrap";
import * as emojiData from "../EmojiData";
import Menu from "../Menu/Menu";
import SingleEmoji from "../SingleEmoji/SingleEmoji";
import "./Comments.css";

const Comments = () => {
  let commentsArray = [
    {
      key: 1,
      user: "Bogdan Sisestean",
      text: "Hey, welcome to my Emoji Picker, enjoy!",
    },
  ];
  console.log(commentsArray);
  const [updateCommentsArray, setupdateCommentsArray] = useState(commentsArray);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const emojiArr = emojiData.default;
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEmojiPick = (event) => {
    let newValue = value + event.target.innerHTML;
    setValue(newValue);
  };
  const renderComments = useCallback(() => {
    return updateCommentsArray.map((comment) => (
      <SingleComment commentUser={comment.user} commentText={comment.text} />
    ));
  }, [updateCommentsArray]);
  const arrayUpdateHandler = (event) => {
    if (event.key === "Enter") {
      let updatedArrayPush = updateCommentsArray;
      updatedArrayPush.push({
        key: commentsArray.length + 1,
        user: "Bogdan Sisestean",
        text: event.target.value,
      });
      console.log("variable", updatedArrayPush);
      setupdateCommentsArray(updatedArrayPush);
      console.log("componentArray", updateCommentsArray);
      // value = "";
    }
  };
  return (
    <div className="main-box">
      {renderComments()}
      <div className="row align-items-center">
        <div className="col-2">
          <div>
            <input
            className="commentInput"
              type="text"
              id="commentInput"
              name="commentInput"
              placeholder="Add a comment"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyPress={arrayUpdateHandler}
            />
          </div>
        </div>
        <div className="col-2 button-modal-icons">
          <Button variant="primary" onClick={handleShow}>
          😀
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="picker-card">
            <Menu />
            <div className="first-row ">
              <input
              className="searchInput"
                type="text"
                id="searchInput"
                name="searchInput"
                placeholder="Cată un emoji"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
            <div id="smileys-and-emotion">
              <h2>Smileys & Emotion</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Smileys & Emotion" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="people-and-body">
              <h2>People & Body</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "People & Body" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="animals-and-nature">
              <h2>Animals & Nature</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Animals & Nature" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="food-and-drink">
              <h2>Food & Drink</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Food & Drink" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="travel-and-places">
              <h2>Travel & Places</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Travel & Places" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="activities">
              <h2>Activities</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Activities" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="objects">
              <h2>Objects</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Objects" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="symbols">
              <h2>Symbols</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Symbols" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
            <div id="flags">
              <h2>Flags</h2>
              <div className="row">
                {emojiArr
                  .filter(
                    (emojiData) =>
                      emojiData.category === "Flags" &&
                      emojiData.description.includes(searchTerm)
                  )
                  .map((emoji) => (
                    <SingleEmoji
                      pickHandler={handleEmojiPick}
                      emojiPic={emoji.emoji}
                    />
                  ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Comments;
