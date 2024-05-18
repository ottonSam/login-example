import React from "react";

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
            profile.avatar.high || profile.avatar.medium || profile.avatar.low
          }
          alt="profile picture"
        />
      </div>
      <div className="flex flex-col gap-[9px]">
        <h5 className="text-[14px] text-preto-label">
          Your
          <span className="font-bold"> Name</span>
        </h5>
        <div className="rounded-[9px] bg-cinza-input p-[16px] bg-branco-field text-[12px] text-preto-text">
          {`${profile.name}`}
        </div>
      </div>
      <div className="flex flex-col gap-[9px]">
        <h5 className="text-[14px] text-preto-label">
          Your
          <span className="font-bold"> E-mail</span>
        </h5>
        <div className="rounded-[9px] bg-cinza-input p-[16px] bg-branco-field text-[12px] text-preto-text">
          {profile.email}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
