import { v4 as uuidv4 } from "uuid";

import facebookSVG from "../images/icon-facebook.svg";
import twitterSVG from "../images/icon-twitter.svg";
import instagramSVG from "../images/icon-instagram.svg";
import youtubeSVG from "../images/icon-youtube.svg";

import upSVG from "../images/icon-up.svg";
import downSVG from "../images/icon-down.svg";

export const dataDashboard: any = [
  {
    id: uuidv4(),
    class: `-facebook`,
    platform: {
      class: `platform`,
      icon: {
        class: `icon`,
        src: facebookSVG,
        alt: `Facebook`,
      },
      username: {
        class: `username`,
        text: `@nathanf`,
      },
    },
    followers: {
      class: `followers`,
      count: {
        class: `count`,
        modifier: `big`,
        text: `1987`,
      },

      label: {
        class: `label`,
        text: `Followers`,
      },
    },
    change: {
      class: `change`,
      modifier: `big`,
      icon: {
        src: upSVG,
        alt: `Up Arrow`,
      },
      number: {
        class: `number`,
        text: `12 Today`,
      },
    },
  },
  {
    id: uuidv4(),
    class: `-twitter`,
    platform: {
      class: `platform`,
      icon: {
        class: `icon`,
        src: twitterSVG,
        alt: `Twitter`,
      },
      username: {
        class: `username`,
        text: `@nathanf`,
      },
    },
    followers: {
      class: `followers`,
      count: {
        class: `count`,
        modifier: `big`,
        text: `1044`,
      },

      label: {
        class: `label`,
        text: `Followers`,
      },
    },
    change: {
      class: `change`,
      modifier: `big`,
      icon: {
        src: upSVG,
        alt: `Up Arrow`,
      },
      number: {
        class: `number`,
        text: `99 Today`,
      },
    },
  },
  {
    id: uuidv4(),
    class: `-instagram`,
    platform: {
      class: `platform`,
      icon: {
        class: `icon`,
        src: instagramSVG,
        alt: `Instgram`,
      },
      username: {
        class: `username`,
        text: `@realnathanf`,
      },
    },
    followers: {
      class: `followers`,
      count: {
        class: `count`,
        modifier: `big`,
        text: `11k`,
      },

      label: {
        class: `label`,
        text: `Followers`,
      },
    },
    change: {
      class: `change`,
      modifier: `big`,
      icon: {
        src: upSVG,
        alt: `Up Arrow`,
      },
      number: {
        class: `number`,
        text: `1099 Today`,
      },
    },
  },
  {
    id: uuidv4(),
    class: `-youtube`,
    platform: {
      class: `platform`,
      icon: {
        class: `icon`,
        src: youtubeSVG,
        alt: `YouTube`,
      },
      username: {
        class: `username`,
        text: `Nathan F.`,
      },
    },
    followers: {
      class: `followers`,
      count: {
        class: `count`,
        modifier: `big`,
        text: `8239`,
      },

      label: {
        class: `label`,
        text: `Subscribers`,
      },
    },
    change: {
      class: `change`,
      modifier: `down`,
      icon: {
        src: downSVG,
        alt: `Down Arrow`,
      },
      number: {
        class: `number`,
        text: `144 Today`,
      },
    },
  },
];

export const dataOverview = [
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Page Views`,
      },
      icon: {
        src: facebookSVG,
        alt: "Facebook",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `87`,
      },
      change: {
        class: `change`,
        modifier: `up`,
        icon: {
          src: upSVG,
          alt: "Up Arrow",
        },
        number: {
          class: `number`,
          text: `3%`,
        },
      },
    },
  },
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Likes`,
      },
      icon: {
        src: facebookSVG,
        alt: "Facebook",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `52`,
      },
      change: {
        class: `change`,
        modifier: `down`,
        icon: {
          src: downSVG,
          alt: "Down Arrow",
        },
        number: {
          class: `number`,
          text: `2%`,
        },
      },
    },
  },
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Likes`,
      },
      icon: {
        src: instagramSVG,
        alt: "Instagram",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `5462`,
      },
      change: {
        class: `change`,
        modifier: `up`,
        icon: {
          src: upSVG,
          alt: "Up Arrow",
        },
        number: {
          class: `number`,
          text: `2257%`,
        },
      },
    },
  },
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Profile Views`,
      },
      icon: {
        src: instagramSVG,
        alt: "Instagram",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `52k`,
      },
      change: {
        class: `change`,
        modifier: `up`,
        icon: {
          src: upSVG,
          alt: "Up Arrow",
        },
        number: {
          class: `number`,
          text: `1375%`,
        },
      },
    },
  },
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Retweets`,
      },
      icon: {
        src: twitterSVG,
        alt: "Twitter",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `117`,
      },
      change: {
        class: `change`,
        modifier: `up`,
        icon: {
          src: upSVG,
          alt: "Up Arrow",
        },
        number: {
          class: `number`,
          text: `303%`,
        },
      },
    },
  },
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Likes`,
      },
      icon: {
        src: twitterSVG,
        alt: "Twitter",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `507`,
      },
      change: {
        class: `change`,
        modifier: `up`,
        icon: {
          src: upSVG,
          alt: "Up Arrow",
        },
        number: {
          class: `number`,
          text: `553%`,
        },
      },
    },
  },
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Likes`,
      },
      icon: {
        src: youtubeSVG,
        alt: "YouTube",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `107`,
      },
      change: {
        class: `change`,
        modifier: `down`,
        icon: {
          src: downSVG,
          alt: "Down Arrow",
        },
        number: {
          class: `number`,
          text: `19%`,
        },
      },
    },
  },
  {
    id: uuidv4(),
    class: `-grid`,
    overview: {
      subtitle: {
        class: `subtitle`,
        text: `Total Views`,
      },
      icon: {
        src: youtubeSVG,
        alt: "YouTube",
      },
      count: {
        class: `count`,
        modifier: `small`,
        text: `1047`,
      },
      change: {
        class: `change`,
        modifier: `down`,
        icon: {
          src: downSVG,
          alt: "Down Arrow",
        },
        number: {
          class: `number`,
          text: `12%`,
        },
      },
    },
  },
];
