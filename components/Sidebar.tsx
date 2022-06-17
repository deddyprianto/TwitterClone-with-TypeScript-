import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const signOut = () => {
    return "haloo word";
  };
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-center ">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="Bookmark" />
      <SidebarRow Icon={CollectionIcon} title="List" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow onClick={signOut} Icon={UserIcon} title="Sign IN" />
      <SidebarRow Icon={HomeIcon} title="More" />
    </div>
  );
};

export default Sidebar;
