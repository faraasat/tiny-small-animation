import Swal from "sweetalert2";

export default function StartAlert() {
  Swal.fire({
    title: "<strong>Disclaimer</strong>",
    icon: "info",
    timerProgressBar: true,
    html:
      "This Website is a clone of " +
      '<a href="https://www.cortexcopywriter.com/">Cortex Copywriter</a>!<br />' +
      "The rights of all images and design belongs to its respective author.",
    showCloseButton: true,
    focusConfirm: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Got it!',
    confirmButtonAriaLabel: "Thumbs up, great!",
    timer: 10000,
  });
}
