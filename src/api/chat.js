import { USER_INFO, CHATS, USERS, MESSAGES } from "@/mock";

export async function fetchUserInfo() {
  return USER_INFO;
}

export async function fetchChats() {
  return CHATS;
}

export async function fetchUsers() {
  return USERS;
}

export async function fetchMessages(chatId) {
  return MESSAGES.filter(({ chat }) => chat === chatId);
}
