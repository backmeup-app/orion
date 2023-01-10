import { TAccordtionItem } from "..";

export const faqs: TAccordtionItem[] = [
  {
    title: "What can I backup ?",
    content:
      "Any kind of file basically. JSON, Word Documents, Images, Music even.",
  },
  {
    title: "How do I setup backups ?",
    content:
      "Every resource you decide to backup gets a unique Dome URL. Make backups requests to this URL in any language of your choice or even with command line utilities like curl.",
  },
  {
    title: "How long are backups stored for ?",
    content:
      "There are three different backup duration options. 1 week, 1 month and 3 months.",
  },
  {
    title: "Are my backups safe ?",
    content: "Yes. Your backups are safe and can only be accessed by you.",
  },
  {
    title: "How often can I backup ?",
    content: "There is currently no cap on backups.",
  },
  {
    title: "How can I be notified about my backups ?",
    content:
      "For now, via email. We'll be rolling out Telegram and Slack integrations in the coming months.",
  },
];
