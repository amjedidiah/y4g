type Individual = {
  name: string;
  phone: string;
  email?: string;
};

export type TeamData = {
  [key: string]: Individual[];
};
