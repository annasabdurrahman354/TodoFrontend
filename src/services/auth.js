import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = "http://localhost:3120/api/"

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const Dialog = Swal.mixin({
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
})

export function isLoggedIn(setAuthState){
    var user = JSON.parse(localStorage.getItem('user'))
    if(user){
        setAuthState(true)
    }
    else{
        setAuthState(false)
        console.log("User data not found")
    }
}

export function login(username, password, setAuthState, setLoading, setMessage, history) {
    setLoading(true)
    axios.post(API_URL + 'Authenticate/login', {
        "username": username,
        "password": password
        }).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data))
            Toast.fire({
                icon: 'success',
                title: 'Welcome back @' + response.data.username
            })              
            setLoading(false)
            setAuthState(true)
            console.log(JSON.stringify(response.data))
        }).catch(function (error) {
            if (error.response) {
                if(error.response.data.message === "User account has not been confirmed!"){
                    Dialog.fire({
                        icon: 'error',
                        title: 'Email Not Verified',
                        text: "Verify your email first!",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            history.push('/send-email-verification/' + username)
                        }
                    })
                }
                setMessage(error.response.data)
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            setLoading(false)
            console.log(error.config);
        });
}

export function register(username, email, firstname, lastname, password, setLoading, setMessage, history) {
    setLoading(true)
    axios.post(API_URL + 'Authenticate/register', {
        "username": username,
        "email": email,
        "firstname": firstname,
        "lastname": lastname,
        "password": password,
        }).then(response => {
            setLoading(false)
            console.log(JSON.stringify(response.data))
            Dialog.fire({
                icon: 'success',
                title: 'Register Success',
                text: "Check your email to verify your account!",
            }).then((result) => {
                if (result.isConfirmed) {
                  history.push('/login')
                }
            })
        }).catch(function (error) {
            if (error.response) {
                setMessage(error.response.data)
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            setLoading(false)
            console.log(error.config);
        });
}

export function forgotPassword(email, setLoading, setMessage, history) {
    setLoading(true)
    axios.get(API_URL + 'Authenticate/forgot-password', {params: {email: email}})
        .then(response => {
            setLoading(false)
            console.log(JSON.stringify(response.data))
            Dialog.fire({
                icon: 'success',
                title: 'Request Success',
                text: "Check your email to change your accounts password!",
            }).then((result) => {
                if (result.isConfirmed) {
                  history.push('/login')
                }
            })
        }).catch(function (error) {
            if (error.response) {
                setMessage(error.response.data)
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            setLoading(false)
            console.log(error.config);
        });
}

export function resetPassword(email, token, newPassword, confirmPassword, setLoading, setMessage, history) {
    setLoading(true)
    axios.post(API_URL + 'Authenticate/reset-password', 
        {
            newPassword : newPassword, 
            confirmPassword : confirmPassword
        },
        {   params: 
            {email: email, token: token}
        })
        .then(response => {
            setLoading(false)
            console.log(JSON.stringify(response.data))
            Dialog.fire({
                icon: 'success',
                title: 'Password Changed Successfully',
                text: "You can login with your new password now!",
            }).then((result) => {
                if (result.isConfirmed) {
                  history.push('/login')
                }
            })
        }).catch(function (error) {
            if (error.response) {
                setMessage(error.response.data)
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            setLoading(false)
            console.log(error.config);
        });
}

export function sendEmailConfirmation(username, setLoading, setMessage, history) {
    setLoading(true)
    axios.get(API_URL + 'Authenticate/send-verification-email', {params: {username: username}})
        .then(response => {
            setLoading(false)
            console.log(JSON.stringify(response.data))
            Dialog.fire({
                icon: 'success',
                title: 'Request Success',
                text: "Check your email to verify your account!",
            }).then((result) => {
                if (result.isConfirmed) {
                  history.push('/login')
                }
            })
        }).catch(function (error) {
            if (error.response) {
                setMessage(error.response.data)
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            setLoading(false)
            console.log(error.config);
        });
}

export function logout(setAuthState){
    localStorage.removeItem('user')
    setAuthState(false)
    Toast.fire({
        icon: 'success',
        title: 'See you later!'
    })  
}