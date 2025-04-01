document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', function () {
    if (navLinks.classList.contains('active')) {
      // Если меню открыто, запускаем анимацию закрытия
      navLinks.classList.add('closing');

      // После завершения анимации удаляем классы
      navLinks.addEventListener('animationend', function handleAnimationEnd() {
        navLinks.classList.remove('active', 'closing');
        navLinks.removeEventListener('animationend', handleAnimationEnd);
      });
    } else {
      // Если меню закрыто, открываем его
      navLinks.classList.remove('closing'); // на всякий случай удаляем класс закрытия
      navLinks.classList.add('active');
    }
  });
});
