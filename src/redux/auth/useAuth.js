import { useSelector } from 'react-redux';
// import { getIsLoggedIn, getUserName, selectUser } from './auth-selectors.js';
import authSelectors from './auth-selectors.js';
export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const user = useSelector(authSelectors.selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
