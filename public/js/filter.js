function filterGoodsByBrand(brand) {
  const items = document.querySelectorAll(".goods-item");
  items.forEach((item) => {
    if (item.dataset.brand.includes(brand)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const brandElements = document.querySelectorAll("#brand-list li");
  brandElements.forEach((element) => {
    element.addEventListener("click", () => {
      const brand = element.getAttribute("data-brand");
      filterGoodsByBrand(brand);
    });
  });
});
