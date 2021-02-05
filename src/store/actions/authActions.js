export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({ type:'LOGIN_ERROR', err});
        });
    };
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'CLEAR_FILTERED_LIST'});
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    };
};

export const recoverPassword = (email) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().sendPasswordResetEmail(email).then(() => {
            window.alert("An email has been sent to you! Please check your inbox.");
            dispatch({type: 'RECOVER_PASSWORD_SUCCESS'});
        }).catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Message:" + errorMessage)
            dispatch({type: 'RECOVER_PASSWORD_ERROR'});
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            if (newUser.company) {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    role:  newUser.role,
                    company: newUser.company,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                });
            } else {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                role:  newUser.role,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }); }
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        });
    };

}