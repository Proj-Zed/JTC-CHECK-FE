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
        cancelButtonText: "Wag, Ayaw ko!"
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

    //TODO => Add Account Function
    document.getElementById("saveAccount").addEventListener("click", function() {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question",
            confirmButtonColor: "#112D4E",
        });
    })
});
