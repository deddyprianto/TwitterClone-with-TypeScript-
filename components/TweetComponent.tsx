import React, { useEffect, useState } from "react";
import { Comment, Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../utils/fetchComments";

interface Props {
  tweet: Tweet;
}
const TweetComponent = ({ tweet }: Props) => {
  const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };
  useEffect(() => {
    refreshComments();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div>
        <img src={tweet.profileImg} alt="logoPhoto" />
        <div>
          <div>
            <p>{tweet.username}</p>
            <p>@{tweet.username.replace(/\s+/g, "").toLowerCase()}</p>
            <TimeAgo
              date={tweet._createdAt}
              className="text-sm text-gray-500"
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              className="ml-5  mb-1 max-h-60 rounded-lg object-cover shadow-sm"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>
      {/* comment box Logic */}
      {commentBoxVisible && (
        <form onSubmit={handleSubmit} className="mt-3 w-full space-x-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
            type="text"
            placeholder="Write a comment"
          />
          <button type="submit" className="text-sky-400 disabled:text-gray-200">
            Post
          </button>
        </form>
      )}
      {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5">
          {comments.map((item, i) => (
            <div key={i} className="relative  flex space-x-2">
              <hr className="absolute left-5 top-10 h-8 border-x border-blue-400" />
              <img
                src={item.profileImg}
                alt=""
                className="mt-2 h-7 w-7 rounded-full object-cover "
              />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{item.username}</p>
                  <p className="hidden text-sm text-gray-50 lg:inline">
                    @{item.username.replace(/\s+/g, "").toLowerCase()} .
                  </p>
                </div>
                <TimeAgo
                  className="text-sm text-gray-500"
                  date={item._createdAt}
                />
              </div>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TweetComponent;
