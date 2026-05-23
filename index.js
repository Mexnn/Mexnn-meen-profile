document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = hamburgerBtn.querySelector('.header__main-ham-menu');
  const closeIcon = hamburgerBtn.querySelector('.header__main-ham-menu-close');

  hamburgerBtn.addEventListener('click', () => {
    const isActive = mobileMenu.classList.toggle('header__sm-menu--active');
    
    // สลับหน้าตาไอคอน (เปิด/ปิด)
    openIcon.classList.toggle('d-none', isActive);
    closeIcon.classList.toggle('d-none', !isActive);
  });

  // คลิกแล้วเลื่อนไปหน้า Section และปิดเมนูทันที
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('header__sm-menu--active');
      openIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
    });
  });
});