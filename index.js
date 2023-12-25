console.clear();

let btns = document.querySelectorAll('button');

for (i of btns) {
  i.addEventListener('click', function() {
    document.querySelector('.msg').innerHTML = this.innerHTML;
  });
}