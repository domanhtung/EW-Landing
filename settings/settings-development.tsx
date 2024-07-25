const API_WEB_URL = process.env.NEXT_PUBLIC_WEB_API_ENDPOINT;
const URL_WEB_URL = process.env.NEXT_PUBLIC_URL_ENDPOINT
const settings = {
    graphql: {
      uri: API_WEB_URL,
    },
    meta: {
      rootUrl: URL_WEB_URL,
      title: "The Epic War - the 1st FPS blockchain game.",
      description: "Battle&#128163;. Earn. Shoot&#127919;. Grow&#128684;. Be the Hero of Your Own Epic Story &#128740;. Let's build the world of dreamers together!",
      social: {
        graphic:
          "/thumbnail.jpg",
        twitter: "@the_epic_war",
      },
    },
    routes: {
      authenticated: {
        pathAfterFailure: "/",
      },
      public: {
        pathAfterFailure: "/_document",
      },
    },
  };
  
  export default settings;