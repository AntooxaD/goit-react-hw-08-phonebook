const getIsLoggetIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const authSelectors = {
    getIsLoggetIn,
    getUsername,
};
export default authSelectors;
