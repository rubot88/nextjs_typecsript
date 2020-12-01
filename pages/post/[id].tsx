import { route } from "next/dist/next-server/server/router";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>NextJS | Post</title>
      </Head>
      <h1>Post {router.query.id}</h1>
    </>
  );
}
