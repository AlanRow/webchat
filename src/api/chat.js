import { USER_INFO, CHATS, USERS, MESSAGES } from "@/mock";
import { delay, getIntRandom } from "@/utils/testing";

export async function fetchUserInfo() {
  return await delay(() => USER_INFO, getIntRandom(1, 5) * 1000);
}

export async function fetchChats() {
  return await delay(() => CHATS, getIntRandom(1, 5) * 1000);
}

export async function fetchUsers() {
  return await delay(() => USERS, getIntRandom(1, 5) * 1000);
}

export async function fetchMessages(chatId) {
  return await delay(
    () => MESSAGES.filter(({ chat }) => chat === chatId),
    getIntRandom(1, 5) * 1000
  );
}
