document.getElementById("searchBtn").addEventListener("click", function() {
  const searchedName = document.getElementById("nameSearch").value;
  if (searchedName) {
    window.location.href = `greeting.html?name=${searchedName}`;
  }
});