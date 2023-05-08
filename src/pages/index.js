import Head from 'next/head'
import Header from '../../components/header/Header'
import First from '../../components/first/First'
import Brands from '../../components/brands/Brands'
import Collection from '../../components/colllection/Collection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <First/>
      <Brands/>
      <Collection/>
    </>
  )
}
