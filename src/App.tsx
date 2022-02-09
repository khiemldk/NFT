import './fonts/AzoSans/styles.css';
import { useFontObserver } from 'hooks';
import { Layout } from 'components/Layout';
import { LoadingFullpage } from 'components/Loading';
import { Routes } from 'pages/Routes';

const loadingFullpage = <LoadingFullpage />;

function App() {
  const fontLoaded = useFontObserver();

  return (
    <>
      {!fontLoaded && loadingFullpage}
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
