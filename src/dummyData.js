import { v4 as uuidv4 } from "uuid";
export const dummyDatas = [
  {
    id: uuidv4(),
    title: "今からやること",
    tasks: [
      { id: uuidv4(), title: "react学習" },
      { id: uuidv4(), title: "散歩" },
      { id: uuidv4(), title: "勉強" },
    ],
  },
  {
    id: uuidv4(),
    title: "明日やること",
    tasks: [
      { id: uuidv4(), title: "react学習" },
      { id: uuidv4(), title: "散歩" },
      { id: uuidv4(), title: "勉強" },
    ],
  },
  {
    id: uuidv4(),
    title: "今年やること",
    tasks: [
      { id: uuidv4(), title: "react学習" },
      { id: uuidv4(), title: "散歩" },
      { id: uuidv4(), title: "勉強" },
    ],
  },
];
