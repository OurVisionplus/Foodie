export type Chat = {
  createdAt: Date;
  id: string;
  message: string | null;
  recipient: string | null;
  sender: string | null;
  updatedAt: Date;
};
