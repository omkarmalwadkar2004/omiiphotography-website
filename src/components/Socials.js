import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden x1:flex text-white">
      <ul className="flex gap-x-4">
        <li className="">
          <a href="http://www.facebook.com" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://www.pinterest.com" target="_blank">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com" target="_blank">
            <ImInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
