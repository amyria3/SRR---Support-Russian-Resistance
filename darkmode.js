const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia(
    "(prefers color-scheme: dark)"
  ).matches;

export function themeCheck() {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    return;
  }
}

themeCheck();
