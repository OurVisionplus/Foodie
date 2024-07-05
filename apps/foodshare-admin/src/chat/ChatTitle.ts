import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "recipient";

export const ChatTitle = (record: TChat): string => {
  return record.recipient?.toString() || String(record.id);
};
