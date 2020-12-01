import { useRouter } from "next/router";

import Router from "next/router";

const About: React.FC = () => {
  const homeClickHandler = () => {
    Router.push("/");
  };

  const postsClickHandler = () => {
    Router.push("/posts");
  };
  return (
    <>
      <h1>About page</h1>
      <button onClick={homeClickHandler}>Go Home</button>
      <button onClick={postsClickHandler}>Go to Posts</button>
    </>
  );
};

export default About;
