import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/app/store.js';

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='78307967119-o4o1f4cpijag3fefs221cgpso3kfkfne.apps.googleusercontent.com'>
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  </GoogleOAuthProvider>
)
