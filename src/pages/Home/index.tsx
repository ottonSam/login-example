import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import UserCard from "../../components/UserCard";
import { UserProfile } from "../../types/UserProfile";
import { getProfile } from "../../service/api";

const Home: React.FC = () => {
  const { singOut } = useContext(AuthContext);

  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    getProfile().then((response) => setProfile(response));
  }, []);

  const profileData = profile && {
    avatar: {
      high: profile.avatar.high,
      medium: profile.avatar.medium,
      low: profile.avatar.low,
    },
    name: profile.name,
    email: profile.email,
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex py-[13px] px-[34px] bg-branco-base">
        <div
          className="flex ml-auto cursor-pointer justify-center w-[272px] bg-azul-primary rounded-[6px] py-[14px]"
          onClick={singOut}
        >
          <h2 className="font-bold text-[16px] text-branco-text mx-auto">
            Logout
          </h2>
        </div>
      </div>
      {profileData && <UserCard profile={profileData} />}
    </div>
  );
};

export default Home;
