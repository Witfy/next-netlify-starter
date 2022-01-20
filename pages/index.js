import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Heya; I am Witfy! I used to own on of the biggest guilds in Hypixel called "Cassia" (Aka. FLWR). I own a stupidly cool server which is really pog :o ! I really love genshin impact! My UID is 734893093. ADD ME ON SNAPCHAT OR BAD LUCK FOR 69 MINUTES! No cap!
        </p>
      </main>

      <Footer />
    </div>
  )
}
