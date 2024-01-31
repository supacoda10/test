import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import LoginPage from './pages/Login.js';
import NotfoundPage from './pages/Notfound.js';
import Dashboard1Page from './pages/Dashboard1.js';
import Dashboard2Page from './pages/Dashboard2.js';
import FormsPage from './pages/Forms.js';
import ContentPage from './pages/Content.js';
import RichtextPage from './pages/Richtext.js';
import ModalsPage from './pages/Modals.js';
import Modals2Page from './pages/Modals2.js';
import PaymentPage from './pages/Payment.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/login" element={<LoginPage />} />
         
      <Route path="/notfound" element={<NotfoundPage />} />
         
      <Route path="/dashboard1" element={<Dashboard1Page />} />
         
      <Route path="/dashboard2" element={<Dashboard2Page />} />
         
      <Route path="/forms" element={<FormsPage />} />
         
      <Route path="/content" element={<ContentPage />} />
         
      <Route path="/richtext" element={<RichtextPage />} />
         
      <Route path="/modals" element={<ModalsPage />} />
         
      <Route path="/modals2" element={<Modals2Page />} />
         
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;
