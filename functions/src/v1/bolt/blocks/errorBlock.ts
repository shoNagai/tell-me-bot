import { Block, KnownBlock } from "@slack/bolt";

export const errorBlock = (): (Block | KnownBlock)[] => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "ごめんなさい..何か問題が発生したようですね..。",
      },
    },
    {
      type: "divider",
    },
  ];
};
