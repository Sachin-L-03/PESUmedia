import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [], // Retrieve users from localStorage
  loggedInUser: JSON.parse(localStorage.getItem('loggedInUser')) || null, // Retrieve logged-in user
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const newUser = action.payload;
      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.users)); // Save to localStorage
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Save logged-in user
      } else {
        throw new Error('Invalid credentials');
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
      localStorage.removeItem('loggedInUser'); // Clear logged-in user
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
