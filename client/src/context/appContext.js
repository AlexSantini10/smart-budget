import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

import reducer from "./reducer";
import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    SETUP_USER,
    SETUP_USER_END,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    DELETE_USER_BEGIN,
    DELETE_USER_SUCCESS,
    DELETE_USER_ERROR,
    CREATE_TRANSACTION_BEGIN,
    CREATE_TRANSACTION_SUCCESS,
    CREATE_TRANSACTION_ERROR,
    UPDATE_TRANSACTION_BEGIN,
    UPDATE_TRANSACTION_SUCCESS,
    UPDATE_TRANSACTION_ERROR,
    DELETE_TRANSACTION_BEGIN,
    DELETE_TRANSACTION_SUCCESS,
    DELETE_TRANSACTION_ERROR,
    CREATE_CONTO_BEGIN,
    CREATE_CONTO_SUCCESS,
    CREATE_CONTO_ERROR,
    UPDATE_CONTO_BEGIN,
    UPDATE_CONTO_SUCCESS,
    UPDATE_CONTO_ERROR,
    DELETE_CONTO_BEGIN,
    DELETE_CONTO_SUCCESS,
    DELETE_CONTO_ERROR,
    CREATE_CATEGORIA_BEGIN,
    CREATE_CATEGORIA_SUCCESS,
    CREATE_CATEGORIA_ERROR,
    UPDATE_CATEGORIA_BEGIN,
    UPDATE_CATEGORIA_SUCCESS,
    UPDATE_CATEGORIA_ERROR,
    DELETE_CATEGORIA_BEGIN,
    DELETE_CATEGORIA_SUCCESS,
    DELETE_CATEGORIA_ERROR
} from './actions';


const initialState = {
    user: null,
    isUserLoading: true,
    isUserSetupLoading: true,
    isApplicationLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    transazioni: [],
    conti: [],
    page: 1,
    totalPages: 1
}

const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const authAxios = axios.create({
        baseURL: 'http://localhost:5000/api/v1/auth',
        withCredentials: true
    });

    authAxios.interceptors.request.use((response) => {
        return response;
    }, (error) => {
        console.log(error);
        if (error.response.status === 401) {
            console.log('Unauthorized');
        }
        return Promise.reject(error);
    });

    const displayAlert = (alertText, alertType) => {
        dispatch({type: REGISTER_USER_ERROR, payload: {alertText, alertType}});
    
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT});
        }, 3000);
    }

    const registerUser = async ({nome, cognome, email, password}) => {
        dispatch({type: REGISTER_USER_BEGIN});

        try {
            const response = await authAxios.post('/register', {nome, cognome, email, password});

            const {user} = response.data;

            dispatch({type: REGISTER_USER_SUCCESS, payload: {user: response.data.user}});
        } catch (error) {
            dispatch({type: REGISTER_USER_ERROR, payload: {alertText: error.response.data.msg, alertType: 'error'}});
        }
        
        clearAlert();
    }

    const loginUser = async ({email, password}) => {
        dispatch({type: LOGIN_USER_BEGIN});

        try {
            const response = await authAxios.post('/login', {email, password});

            const {user} = response.data;

            dispatch({type: LOGIN_USER_SUCCESS, payload: {user: response.data}});
        } catch (error) {
            dispatch({type: LOGIN_USER_ERROR, payload: {alertText: error.response.data.msg, alertType: 'error'}});
        }
        
        clearAlert();
    }

    const getCurrentUser = async () => {
        dispatch({type: SETUP_USER});

        try {
            const response = await authAxios.get('/getCurrentUser')
                .catch((error) => {
                    if (error.response.status === 401) {
                        // Nulla
                    }
                    else {
                        throw error;
                    }
                });

            const {user} = response.data;

            dispatch({type: SETUP_USER_END, payload: {user: response.data.user}});
        } catch (error) {
            dispatch({type: SETUP_USER_END});
        }
        
        clearAlert();
    }

    const updateUser = async (currentUser) => {
        dispatch({type: UPDATE_USER_BEGIN});

        try {
            const response = await authAxios.put('/updateUser', currentUser);

            const {user} = response.data;

            dispatch({type: UPDATE_USER_SUCCESS, payload: {user: response.data}});
        } catch (error) {
            if (error.response.status === 401) {
                logoutUser();
            } else {
                dispatch({type: UPDATE_USER_ERROR, payload: {alertText: error.response.data.error}});
            }
        }
        
        clearAlert();
    }

    const logoutUser = async () => {
        await authAxios.get('/logout');
        Cookies.remove('token');
        dispatch({type: LOGOUT_USER});
    }

    return (
        <AppContext.Provider value={{
                                    ...state, 
                                    dispatch,
                                    displayAlert,
                                    clearAlert,
                                    registerUser,
                                    loginUser,
                                    getCurrentUser,
                                    logoutUser
                                    }}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { useAppContext, AppProvider, initialState };