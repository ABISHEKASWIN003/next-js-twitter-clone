import Head from "next/head";
import SideBar from "../components/SideBar";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FeedBar from "../components/FeedBar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Widgets from "../components/Widgest";
import { useRecoilState } from "recoil";
import Modal from ".././components/Modal";

import { modalState } from "../atoms/modalAtoms";

export default function Home({ providers, trendingResults, followResults }) {
  const { data: session } = useSession();
  if (!session) return <Login providers={providers} />;
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <div>
      <Head>
        <title>Twitter | Clone</title>
        <meta
          name="Cloning The Twitter"
          content="This Twitter Clone was design and development by Abishek with help of Next.js Recoil, Firebase v-9 , NextAuth v-4 and Tailwind CSS v-3 "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-slate-900 min-h-screen flex max-w-[1500px] mx-auto">
        <SideBar />
        <FeedBar />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />

        {isOpen && <Modal />}
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const trendingResults = await fetch("g").then((res) => res.json());
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
