import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export function genericMessageSuccess(msg) {
    Toast.fire({
        icon: "success",
        title: msg
    });
}

export function genericMessageWarning(msg) {
    Toast.fire({
        icon: "warning",
        title: msg
    });
}