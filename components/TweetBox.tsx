import React, { MouseEvent, SetStateAction, useRef, useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { Tweet, TweetBody } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  setAddTweet: React.Dispatch<React.SetStateAction<Tweet[]>>;
}

const TweetBox = ({ setAddTweet }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  const [imageUrlIsOpen, setImageUrlIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;
    setImage(inputRef.current.value);
    setImageUrlIsOpen(false);
  };
  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: "",
      profileImg: "",
    };
    const res = await fetch("/api/addTweet", {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    });
    const json = await res.json();
    const newTweet = await fetchTweets();
  };

  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    postTweet();
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https://links.papareact.com/gll"
        alt=""
        className="mt-4 h-14 w-14 rounded-full object-cover"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="what happening"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-blue-700">
              <PhotographIcon
                onClick={() => setImageUrlIsOpen(!imageUrlIsOpen)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150"
              />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input}
              className="bg-blue-600 py-2 font-bold rounded-full text-white px-5 disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          {imageUrlIsOpen && (
            <form className="flex mt-5 rounded-full bg-blue-500 py-2 px-4">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                placeholder="Enter Image Url"
              />
              <button type="submit" className="font-bold text-white">
                Add Image
              </button>
            </form>
          )}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
