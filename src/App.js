import { Layout } from 'antd';
import { Header, Footer } from './components';
import { Search } from './pages';
import './App.css';

function App() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Search />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;
