const selectUser = state => state.auth.user;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectIsRefreshing = state => state.auth.isRefreshing;

export { selectUser, selectIsLoggedIn, selectIsRefreshing };