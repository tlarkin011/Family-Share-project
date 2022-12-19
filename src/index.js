import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'))

root.render(<GoogleOAuthProvider clientId='898480453811-8leo1f0mm6oonk397sb2e92b21fgj2br.apps.googleusercontent.com'>
  <Router>
    <App />
  </Router>
</GoogleOAuthProvider>);