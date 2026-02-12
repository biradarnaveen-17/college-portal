// js/common.js

function qs(sel) {
  return document.querySelector(sel);
}

function qsa(sel) {
  return document.querySelectorAll(sel);
}

function setText(idOrSel, text) {
  const el = idOrSel.startsWith("#") ? qs(idOrSel) : document.getElementById(idOrSel);
  if (el) el.textContent = text;
}

function show(el) {
  if (typeof el === "string") el = qs(el);
  if (el) el.style.display = "";
}

function hide(el) {
  if (typeof el === "string") el = qs(el);
  if (el) el.style.display = "none";
}

function toast(msg, type = "info") {
  const box = qs("#toast");
  if (!box) {
    alert(msg);
    return;
  }

  box.className = `toast ${type}`;
  box.textContent = msg;
  box.style.display = "block";

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    box.style.display = "none";
  }, 2600);
}
