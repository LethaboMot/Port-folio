function openNav(open) {
  document.getElementById('slidemenu').style.width = '100%';
  return open;
}
openNav('hello');

function closeNav(close) {
  document.getElementById('slidemenu').style.width = '0';
  return close;
}
closeNav('goodbye');
