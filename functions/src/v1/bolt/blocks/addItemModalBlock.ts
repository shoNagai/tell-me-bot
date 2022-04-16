import { Block, KnownBlock } from "@slack/bolt";

export const addItemModalBlock = (
  searchWord: string
): (Block | KnownBlock)[] => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "気軽に追加してくださいね。もし間違っていたら誰かが修正してくれますよ。",
      },
    },
    {
      type: "input",
      block_id: "word",
      label: {
        type: "plain_text",
        text: "用語",
      },
      element: {
        type: "plain_text_input",
        action_id: "word_input",
        initial_value: searchWord,
      },
    },
    {
      type: "input",
      block_id: "description",
      label: {
        type: "plain_text",
        text: "説明",
      },
      element: {
        type: "plain_text_input",
        action_id: "description_input",
        multiline: true,
      },
    },
  ];
};
