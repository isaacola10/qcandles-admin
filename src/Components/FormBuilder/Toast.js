import React from 'react';
import Swal from "sweetalert2";

export const Toast = ({message}) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    {
        Toast.fire({
            icon: 'success',
            title: message
        })
    }
    return (
        <>
        </>
    );
}