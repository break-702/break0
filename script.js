
// إضافة حدث النقر على الأيقونة لعرض/إخفاء القائمة
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // إضافة أو إزالة الفئة active لتفعيل القوائم
});



