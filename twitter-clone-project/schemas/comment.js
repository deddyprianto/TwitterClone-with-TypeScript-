export default {
  name: "comment",
  title: "Comments",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
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
      name: "tweet",
      title: "Tweet",
      description: "Reference the tweet the comment is associated",
      type: "reference",
      to: {
        type: "tweet",
      },
    },
  ],
};
