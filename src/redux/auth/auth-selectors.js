const getIsLoggedIn = state => state.auth.isLoggedIn
const selectIsRefreshing = state => state.auth.isRefreshing;
const getUserName = state => state.auth.user.name
const selectUser = state => state.auth.user;
const authSelectors = {
  getIsLoggedIn,
  getUserName,
  selectIsRefreshing,
  selectUser,
};

export default authSelectors    