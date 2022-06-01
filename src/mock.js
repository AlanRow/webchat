export const USER_INFO = {
  id: 0,
  name: "Ben",
};

export const USERS = [
  {
    id: 1,
    name: "Alan",
  },
  {
    id: 2,
    name: "Diana",
  },
  {
    id: 3,
    name: "John",
  },
  {
    id: 4,
    name: "James",
  },
  {
    id: 5,
    name: "Alex",
  },
  {
    id: 6,
    name: "Sam",
  },
  {
    id: 7,
    name: "Julia",
  },
];

export const CHATS = [
  {
    id: 1,
    name: null,
    users: [0, 2],
  },
  {
    id: 2,
    name: null,
    users: [0, 3],
  },
  {
    id: 3,
    name: null,
    users: [0, 1, 4],
  },
  {
    id: 4,
    name: "Беседка",
    users: [0, 5, 6, 7],
  },
];

export const MESSAGES = [
  /** chat 1 */
  {
    id: 1,
    chat: 1,
    sender: 0,
    text: "Hi, Alex!",
    time: new Date("2022-01-12 10:05:12"),
  },
  {
    id: 2,
    chat: 1,
    sender: 2,
    text: "Hi!",
    time: new Date("2022-01-12 10:07:12"),
  },
  /** chat 2 */
  {
    id: 3,
    chat: 2,
    sender: 0,
    text: "Hi, John!",
    time: new Date("2022-01-12 10:05:12"),
  },
  {
    id: 4,
    chat: 2,
    sender: 3,
    text: "Hi!",
    time: new Date("2022-01-12 10:07:12"),
  },
  /** chat 3 */
  {
    id: 5,
    chat: 3,
    sender: 0,
    text: "Hi, Alan!",
    time: new Date("2022-01-12 10:05:12"),
  },
  {
    id: 6,
    chat: 3,
    sender: 1,
    text: "Hi!",
    time: new Date("2022-01-12 10:07:12"),
  },
  {
    id: 7,
    chat: 3,
    sender: 0,
    text: "Hi, James!",
    time: new Date("2022-01-12 10:10:12"),
  },
  {
    id: 8,
    chat: 3,
    sender: 4,
    text: "Hi!",
    time: new Date("2022-01-12 10:11:12"),
  },
  /** chat 4 */
  {
    id: 9,
    chat: 4,
    sender: 0,
    text: "Hi, Alex!",
    time: new Date("2022-01-12 10:05:12"),
  },
  {
    id: 10,
    chat: 4,
    sender: 5,
    text: "Hi!",
    time: new Date("2022-01-12 10:07:12"),
  },
  {
    id: 11,
    chat: 4,
    sender: 0,
    text: "Hi, Sam!",
    time: new Date("2022-01-12 10:10:12"),
  },
  {
    id: 12,
    chat: 4,
    sender: 6,
    text: "Hi!",
    time: new Date("2022-01-12 10:11:12"),
  },
  {
    id: 13,
    chat: 4,
    sender: 0,
    text: "Hi, Julia!",
    time: new Date("2022-01-12 10:13:12"),
  },
  {
    id: 14,
    chat: 4,
    sender: 7,
    text: "Hi!",
    time: new Date("2022-01-12 10:18:12"),
  },
];
