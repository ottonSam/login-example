import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import UserCard from "../../components/UserCard";

const Home: React.FC = () => {
  const { singOut } = useContext(AuthContext);
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
      <UserCard />
    </div>
  );
};

export default Home;
