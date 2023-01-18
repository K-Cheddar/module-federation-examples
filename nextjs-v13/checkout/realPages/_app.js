import App from 'next/app';
import dynamic from 'next/dynamic';
const Nav = dynamic(
  () => {
    const mod = import('home/nav').catch(console.error);
    return mod;
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div>Remove me to force a hot reload!</div>
      <Component {...pageProps} />
    </>
  );
}
MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return appProps;
};

export default MyApp;
