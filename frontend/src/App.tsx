import React, { useCallback, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import GamesPage from './features/games/GamesPage';
import { getGames } from './features/games/gameSlice';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from './store/store';

function App() {
  const dispatch = useAppDispatch();
  const initApp = useCallback(async () => {
    await dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
