import Login from "../components/Login";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <audio
        id="audio-element"
        hidden
        playsInline
        onVolumeChange={(e) => updateVolume(e)}
        onTimeUpdate={(e) => updateProgress(e)}
      />
      <Login />
    </div>
  );
}
