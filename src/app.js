const kgInput = document.querySelector("#kg-input");
const lbInput = document.querySelector("#lb-input");
const bothInputs = document.querySelectorAll("input");

let kgInlb;
let lbInkg;

kgInput.addEventListener("input", () => {
  kgInlb = kgInput.value * 2.20462;
  kgInlb = kgInlb.toFixed(3);
  lbInput.value = kgInlb;
});

lbInput.addEventListener("input", () => {
  lbInkg = lbInput.value / 2.20462;
  lbInkg = lbInkg.toFixed(3);
  kgInput.value = lbInkg;
});
