document.addEventListener("DOMContentLoaded", function () {
  /* Bank Accounts Sweet Alert Functions*/

  //TODO => Check if the id is given or existing
  document
    .getElementById("bankAccountDelete")
    .addEventListener("click", function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#112D4E",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //TODO => SQL LOGIC DELETE HERE
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
});
