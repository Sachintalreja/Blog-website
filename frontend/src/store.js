import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer';
import {  blogListReducer, blogDetailsReducer, blogDeleteReducer, blogCreateReducer, blogUpdateReducer } from './reducers/blogReducer';

const reducer = combineReducers({
	blogList: blogListReducer,
	blogDetails: blogDetailsReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	blogDelete: blogDeleteReducer,
	blogCreate: blogCreateReducer,
	blogUpdate: blogUpdateReducer,
});


const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middlewares = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
