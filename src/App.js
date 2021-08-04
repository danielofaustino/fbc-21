import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import NavBar from './components/NavBar';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
    <Layout>
      <Header><NavBar /></Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
