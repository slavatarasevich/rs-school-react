import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Spinner from './components/Spinner';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About/'));
const FormPage = React.lazy(() => import('./pages/Form/'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

class App extends React.Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    );
  }
}

export default App;
