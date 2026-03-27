const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// para las secciones del menu 
 
const menuItems = document.querySelectorAll("#sidebar ul li");
const sections = document.querySelectorAll(".section");
const title = document.getElementById("title");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    
    // quitar active de todas
    sections.forEach(sec => sec.classList.remove("active"));

    // obtener sección
    const sectionId = item.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");

    // cambiar título
    title.textContent = item.textContent.trim();
  });
});

// 
document.getElementById("form-producto").addEventListener("submit", e => {
  e.preventDefault();
  alert("Producto registrado 🔥");
});

document.getElementById("form-proveedor").addEventListener("submit", e => {
  e.preventDefault();
  alert("Proveedor registrado 🔥");
});