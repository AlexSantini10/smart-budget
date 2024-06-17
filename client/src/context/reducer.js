import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
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

const reducer = (state, action) => {

    if (action.type === DISPLAY_ALERT) {
        return {...state, 
            showAlert: true, 
            alertText: action.payload.alertText, 
            alertType: action.payload.alertType
        };
    }
    
    if (action.type === CLEAR_ALERT) {
        return {...state,
            showAlert: false,
            alertText: '',
            alertType: ''
        }
    }

    if (action.type === REGISTER_USER_BEGIN) {
        return {
            ...state,
            isUserLoading: true,
            isApplicationLoading: true
        };
    }

    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            isUserLoading: false,
            user: action.payload.user,
            showAlert: true,
            alertText: 'Registrazione avvenuta con successo',
            alertType: 'success',
            isApplicationLoading: false
        };
    }

    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            isUserLoading: false,
            showAlert: true,
            alertText: action.payload.alertText,
            alertType: action.payload.alertType,
            isApplicationLoading: false
        };
    }

    if (action.type === LOGIN_USER_BEGIN) {
        return {
            ...state,
            isUserLoading: true,
            isApplicationLoading: true
        };
    }

    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            isUserLoading: false,
            user: action.payload.user,
            showAlert: true,
            alertText: 'Accesso effettuato con successo',
            alertType: 'success',
            isApplicationLoading: false
        };
    }

    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            isUserLoading: false,
            showAlert: true,
            alertText: action.payload.alertText,
            alertType: 'error',
            isApplicationLoading: false
        };
    }

    if (action.type === LOGOUT_USER) {
        return {
            ...state,
            user: null
        };
    }

    if (action.type === UPDATE_USER_BEGIN) {
        return {
            ...state, 
            isUserLoading: true
        };
    }

    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state, 
            isUserLoading: false, 
            user: action.payload.user,
            showAlert: true,
            alertText: 'Utente aggiornato con successo',
            alertType: 'success'
        };
    }

    if (action.type === UPDATE_USER_ERROR) {
        return {
            ...state, 
            isUserLoading: false,
            showAlert: true,
            alertText: action.payload.alertText,
            alertType: 'error'
        };
    }

    if (action.type === DELETE_USER_BEGIN) {
        return {
            ...state, 
            isUserLoading: true
        };
    }

    if (action.type === DELETE_USER_SUCCESS) {
        return {
            ...state, 
            isUserLoading: false,
            user: null,
            showAlert: true,
            alertText: 'Utente eliminato con successo',
            alertType: 'success'
        };
    }

    if (action.type === DELETE_USER_ERROR) {
        return {
            ...state, 
            isUserLoading: false,
            showAlert: true,
            alertText: action.payload.alertText,
            alertType: 'error'
        };
    }

    if (action.type === CREATE_TRANSACTION_BEGIN) {
        return {
            ...state,
            isApplicationLoading: true
        };
    }

    if (action.type === CREATE_TRANSACTION_SUCCESS) {
        return {
            ...state,
            isApplicationLoading: false,
            transazioni: [...state.transazioni, action.payload.transazioni],
            showAlert: true,
            alertText: 'Transazione creata con successo',
            alertType: 'success'
        };
    }

    if (action.type === CREATE_TRANSACTION_ERROR) {
        return {
            ...state,
            isApplicationLoading: false,
            showAlert: true,
            alertText: action.payload.alertText,
            alertType: 'error'
        };
    }

}

export default reducer;