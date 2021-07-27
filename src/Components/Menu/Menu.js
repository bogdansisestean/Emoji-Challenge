import React from "react";
import "./Menu.css"

const Menu = () => {
  return (
    <div className="emoji-menu">
      <div className="row no-margin">
        <div className="col-1 emoji-picker-menu">
          <a href="#smileys-and-emotion">
            <span>😀</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#people-and-body">
            <span>👨‍❤️‍👨</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#animals-and-nature">
            <span>🐱</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#food-and-drink">
            <span>🍇</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#travel-and-places">
            <span>🌍</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#activities">
            <span>🎃</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#objects">
            <span>👓</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#symbols">
            <span>🚮</span>
          </a>
        </div>
        <div className="col-1 emoji-picker-menu">
          <a href="#flags">
            <span>🏁</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
