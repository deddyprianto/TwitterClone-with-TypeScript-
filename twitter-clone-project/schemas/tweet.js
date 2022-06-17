export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text in Tweet",
      type: "string",
    },
    {
      name: "BlockTweet",
      title: "Block Tweet",
      description: "Admin Controls: Toggle if tweet is deemed inappriority",
      type: "boolean",
    },

    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "image",
      title: "Tweet Image",
      type: "string",
    },
  ],
};
