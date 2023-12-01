// import io from 'socket.io-client'
// require('dotenv').config();
import Swal from 'sweetalert2';


export const config = {

    lngs: [
        { code: "en", native: "English" },
        { code: "ar", native: "Arabic" },
    ],
    serverUrl: process.env.REACT_APP_SERVER_URL,
    TOAST_TIMMER:2000,
    // liveServerUrl: process.env.REACT_APP_LIVE_SERVER_URL,
    // socket: io.connect("http://localhost:8080"),
    // Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION}`,
    // x_access_token: JSON.parse(localStorage.getItem("userToken")),
    // x_auth_token: process.env.REACT_APP_X_AUTH_TOKEN,
    // media_url: process.env.REACT_APP_MEDIA_URL,

}

export const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: config.TOAST_TIMMER,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });