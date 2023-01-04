import Head from 'next/head';
import Layout, { siteTitle } from '../components/layaout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Michel. I'm a software developer and I model as a hobby. You can contact me on <Link href="https://instagram.com/mi3chelcuba?igshid=YmMyMTA2M2Y=">Insta</Link></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}