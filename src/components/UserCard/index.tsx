import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const UserCard: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col w-[356px] p-[30px] gap-[30px] bg-branco-card rounded-[16px] shadow-card-user mt-[95px] mx-auto">
      <div className="flex flex-col gap-[9px] mx-auto">
        <h6 className="font-semibold text-[12px] text-preto-text">
          Profile picture
        </h6>
        <img
          className="w-[56px] h-[56px] mx-auto rounded-[8px]"
          src={user!.avatar.image_low_url}
          alt="profile picture"
        />
      </div>
      <div className="flex flex-col gap-[9px]">
        <h5 className="text-[14px] text-preto-label">
          Your
          <span className="font-bold"> Name</span>
        </h5>
        <div className="rounded-[9px] bg-cinza-input p-[16px] bg-branco-field text-[12px] text-preto-text">
          {`${user!.name} ${user!.last_name}`}
        </div>
      </div>
      <div className="flex flex-col gap-[9px]">
        <h5 className="text-[14px] text-preto-label">
          Your
          <span className="font-bold"> E-mail</span>
        </h5>
        <div className="rounded-[9px] bg-cinza-input p-[16px] bg-branco-field text-[12px] text-preto-text">
          {user!.email}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
