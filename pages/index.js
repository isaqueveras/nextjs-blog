import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Isaque Veras, I've been a web developer since middle school, I've been studying php ever since, now I'm studying nextjs, nodejs and react native</p>
        <hr />

        <Link href="/posts/first-post">
          <a><h3>1. First Post</h3></a>
        </Link>
      </section>
    </Layout>
  )
}
