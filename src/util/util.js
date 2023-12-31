export function isMobileDevice() {
  if (
    typeof window !== "undefined" &&
    /Mobi|Android/i.test(navigator.userAgent)
  ) {
    console.log(navigator.userAgent);
    return true;
  } else {
    return false;
  }
}
