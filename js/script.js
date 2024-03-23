document.addEventListener("DOMContentLoaded", () => {
  const btnToggleDrawer = document.getElementById("btnToggleDrawer");
  const drawerMenu = document.getElementById("drawerMenu");

  btnToggleDrawer.addEventListener("click", () => {
    drawerMenu.classList.toggle("show");
  });
});
