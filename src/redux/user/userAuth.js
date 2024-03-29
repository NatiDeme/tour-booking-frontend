const LOGIN_USER = 'LOGIN_USER';
const LOGIN = 'https://tour-booking.onrender.com/login';
const SIGNUP = 'https://tour-booking.onrender.com/signup';
const SIGNUP_USER = 'SIGNUP_USER';
const SIGNOUT_USER = 'SIGNOUT_USER';

const user = JSON.parse(localStorage.getItem('user')) || [];
export const logInUser = (payload) => ({
  type: LOGIN_USER,
  payload
});
export const signUp = (payload) => ({
  type: SIGNUP_USER,
  payload
});
export const signOut = () => ({
  type: SIGNOUT_USER
});
export const authUser = (data) => async (dispatch) => {
  const res = await fetch(LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.status === 200) {
    const final = await res.json();
    dispatch(logInUser(final));
  }
};

export const signUpUser = (data) => async () => {
  const res = await fetch(SIGNUP, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.status === 201) {
    const final = await res.json();
    alert(`${final.name} Thank you for joining please login with`);
    return true;
  }
  return false;
};

export const removeUser = () => (dispatch) => {
  dispatch(signOut());
};

const userReducer = (state = user, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return [action.payload];
    case SIGNUP_USER:
      return [action.payload];
    case SIGNOUT_USER:
      return [];
    default:
      return state;
  }
};

export default userReducer;
