const nftsMetadata = [
  {
    description: "It's actually a bison?",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://ipfs.io/ipfs/QmdsAeLoVrhu9APcXZuTGfnptgSrty2rfUULr5bqEEotLK",
    name: "Buffalo",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "green",
      },
      {
        trait_type: "Eyes",
        value: "googly",
      },
      {
        trait_type: "Stamina",
        value: 42,
      },
    ],
  },
  {
    description: "What is it so worried about?",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://ipfs.io/ipfs/Qmf5UMKoWMEmza91tYT9UPx5PeSaburp9VeeN5w6NUFVG8",
    name: "Zebra",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "blue",
      },
      {
        trait_type: "Eyes",
        value: "googly",
      },
      {
        trait_type: "Stamina",
        value: 38,
      },
    ],
  },
  {
    description: "What a horn!",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://ipfs.io/ipfs/QmZzYevVxn2bLwFWBpM67k74htu6m2pidsFnGcJebgtCA1",
    name: "Rhino",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "pink",
      },
      {
        trait_type: "Eyes",
        value: "googly",
      },
      {
        trait_type: "Stamina",
        value: 22,
      },
    ],
  },
  {
    description: "Is that an underbyte?",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://ipfs.io/ipfs/QmchotzQo58tXY6Qd8foo4bdVaCzUSyqZEabn4no5r8KrX",
    name: "Fish",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "blue",
      },
      {
        trait_type: "Eyes",
        value: "googly",
      },
      {
        trait_type: "Stamina",
        value: 15,
      },
    ],
  },
  // {
  //   description: "So delicate.",
  //   external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
  //   image: "https://austingriffith.com/images/paintings/flamingo.jpg",
  //   name: "Flamingo",
  //   attributes: [
  //     {
  //       trait_type: "BackgroundColor",
  //       value: "black",
  //     },
  //     {
  //       trait_type: "Eyes",
  //       value: "googly",
  //     },
  //     {
  //       trait_type: "Stamina",
  //       value: 6,
  //     },
  //   ],
  // },
  // {
  //   description: "Raaaar!",
  //   external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
  //   image: "https://austingriffith.com/images/paintings/godzilla.jpg",
  //   name: "Godzilla",
  //   attributes: [
  //     {
  //       trait_type: "BackgroundColor",
  //       value: "orange",
  //     },
  //     {
  //       trait_type: "Eyes",
  //       value: "googly",
  //     },
  //     {
  //       trait_type: "Stamina",
  //       value: 99,
  //     },
  //   ],
  // },
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
