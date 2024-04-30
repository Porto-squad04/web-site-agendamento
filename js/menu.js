document.getElementById('open-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const sideItems = document.querySelectorAll('.side-item');
  
    sideItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            const submenu = item.querySelector('.submenu');
            if (submenu.style.display === "none") {
                submenu.style.display = "block";
            } else {
                submenu.style.display = "none";
            }
        });
    });
  });
  document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  