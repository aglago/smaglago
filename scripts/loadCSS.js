function loadCSS(href) {
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
}

loadCSS("styles.css");