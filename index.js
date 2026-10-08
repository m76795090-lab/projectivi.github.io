const menuItems = document.querySelectorAll('.nav-item');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    menuItems.forEach(nav => nav.classList.remove('active'));
    
    this.classList.add('active');
  });
});