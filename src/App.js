import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from 'react-router-dom';

import Layout from '../src/components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        test
      </Layout>
    </BrowserRouter>
  );
}

export default App;
