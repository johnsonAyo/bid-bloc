import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import useStore from "../store/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const color = useStore((state) => state.color);
  const changeColor = useStore((state) => state.changeColor);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div> */}
        <div onClick={changeColor} className="iconBox">
          ..rest code..
        </div>
        <h1> {color} </h1>
      </main>
    </>
  );
}
