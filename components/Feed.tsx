import React, { useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import TweetBox from "./TweetBox";
import { Tweet } from "../typings";
import TweetComponent from "./TweetComponent";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}
const Feed = ({ tweets: tweetsProps }: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProps);
  const [addTweet, setAddTweet] = useState<Tweet[]>([]);
  const handleRefresh = async () => {
    const tweets = await fetchTweets();

    setTweets(tweets);
  };
  // React.Dispatch<React.SetStateAction<never[]>>
  return (
    <div className="col-span-5">
      <div className="flex items-center justify-center">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-blue-500 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      <div>
        <TweetBox setAddTweet={setAddTweet} />
      </div>
      <div>
        {tweets.map((item, i) => (
          <TweetComponent key={i} tweet={item} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
