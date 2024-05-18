import React from "react";
import UserCardField from "../UserCardField";

const UserCard: React.FC<{
  profile: {
    avatar: {
      high: string;
      medium: string;
      low: string;
    };
    name: string;
    email: string;
  };
}> = ({ profile }) => {
  return (
    <div className="flex flex-col w-[356px] p-[30px] gap-[30px] bg-branco-card rounded-[16px] shadow-card-user mt-[95px] mx-auto">
      <div className="flex flex-col gap-[9px] mx-auto">
        <h6 className="font-semibold text-[12px] text-preto-text">
          Profile picture
        </h6>
        <img
          className="w-[56px] h-[56px] mx-auto rounded-[8px]"
          src={
            profile.avatar.low || profile.avatar.medium || profile.avatar.high
          }
          alt="profile picture"
        />
      </div>
      <UserCardField label="Name" value={profile.name} />
      <UserCardField label="E-mail" value={profile.email} />
    </div>
  );
};

export default UserCard;
