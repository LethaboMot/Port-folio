function openNav(open) {
  document.getElementById('slidemenu').style.width = "100%";
  console.log('hello');
  return open;
}
openNav("hello");

function closeNav(close) {
  document.getElementById('slidemenu').style.width = "0";
  console.log('goodbye');
  return close;
}
closeNav('goodbye');
