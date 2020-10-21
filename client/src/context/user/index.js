import React, {
  createContext,
  useEffect,
  useCallback,
  useReducer,
  useContext,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { app } from '../../config/firebase';
import { listenForUserChanges } from '../../services/user';

const UserContext = createContext();

const ACTION_TYPES = {
  UPDATE_USER: 'UPDATE_USER',
};

const useUserContext = () => {
  return useContext(UserContext);
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.UPDATE_USER: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      throw Error`Unhandled action in user reducer of type ${type}`;
    }
  }
};

export default (props) => {
  const [user, loading] = useAuthState(app.auth());

  const history = useHistory();

  const [state, dispatch] = useReducer(reducer, {});

  const updateUser = useCallback((payload) => {
    dispatch({ type: ACTION_TYPES.UPDATE_USER, payload });
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user) {
      history.push('/login');
      return;
    }

    updateUser({
      email: user.email,
      uid: user.uid,
    });

    let unsubscribe = listenForUserChanges(user.email).onSnapshot((query) => {
      updateUser(query.data());
    });

    return () => {
      unsubscribe();
    };
  }, [loading, updateUser, user, history]);

  return !loading ? (
    <UserContext.Provider
      {...props}
      value={{
        state,
        updateUser,
      }}
    />
  ) : null;
};

export const useUpdateUser = () => {
  const { updateUser } = useUserContext();

  return updateUser;
};

export const useGetUser = () => {
  const { state } = useUserContext();

  return state;
};
