const ipInput = document.querySelector('.search-bar__input');

export function validateIp(ip) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ip
    )
  ) {
    ipInput.style.boxShadow = 'none';

    return true;
  } else {
    ipInput.style.boxShadow = 'rgb(255 67 67) 0px 0px 6px 2px';
    return false;
  }
}
