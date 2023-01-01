import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Game } from '../../interfaces/Game';

interface GameState {
  games: Game[] | null;
  loading: boolean;
  singleGame: Game | null;
}

const initialState: GameState = {
  games: [],
  singleGame: null,
  loading: false,
};

//actions are processes that get data from backend
export const getGames = createAsyncThunk<Game[]>(
  'games/getGames',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8080/api/games');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//reducers -> reduce to a specific state -> changes state
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<Game[]>) => {
      state.games = action.payload;
    },
  },
});
