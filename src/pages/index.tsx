import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary" style={{padding: '4rem 0'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle" style={{marginBottom: '1.5rem'}}>{siteConfig.tagline}</p>

          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <Link className="button button--primary button--lg" to="/docs/docs/intro">
              Get started
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/docs/Demos/account-settings">
              View demos
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section style={{maxWidth: 960, margin: '2rem auto', padding: '0 1rem'}}>
          <h2>Welcome</h2>
          <p>
            This documentation hub contains guides for Clients, Robot Owners, and Pilots.
            Use the "Get started" button to jump into the docs, or explore the quick demos to see flows in action.
          </p>
        </section>
      </main>
    </Layout>
  );
}
