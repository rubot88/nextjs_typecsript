import Link from "next/link";
import Head from "next/head";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="nextjs, react,js,javascript,typescript"
        />
        <meta
          name="description"
          content="this is project for learning NextJS"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NextJS | Home</title>
      </Head>
      <h1>Hello Next!!!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
        ratione!
      </p>
    </>
  );
};

export default Index;
