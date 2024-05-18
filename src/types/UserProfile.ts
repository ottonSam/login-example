export type UserProfile = {
  id: string;
  avatar: {
    id: number;
    high: string;
    medium: string;
    low: string;
  };
  name: string;
  last_name: string;
  email: string;
  role: {
    value: number;
    label: string;
  };
  last_login: Date;
  staff_role: {
    value: number;
    label: string;
  };
};
