import React from "react";

// import { Container } from './styles';

const UserCardField: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex flex-col gap-[9px]">
      <h5 className="text-[14px] text-preto-label">
        Your
        <span className="font-bold">{label}</span>
      </h5>
      <div className="rounded-[9px] bg-cinza-input p-[16px] bg-branco-field text-[12px] text-preto-text">
        {value}
      </div>
    </div>
  );
};

export default UserCardField;
