document.getElementById("searchBtn").addEventListener("click", function() {
  const searchedName = document.getElementById("nameSearch").value;
  if (searchedName) {
    window.location.href = `greeting.html?name=${searchedName}`;
  }

  if(searchedName === ''){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Enter Your Name, Dear 🥰',
  });
  }
});