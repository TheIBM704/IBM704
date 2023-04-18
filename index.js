var currentscroll = 0;

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollRatio = scrollTop / scrollHeight;
  document.documentElement.style.setProperty('--scroll', scrollRatio);
  if (document.getElementById('arrow').classList.contains('show')) {
    document.getElementById('arrow').classList.remove('show');
  }
  console.log(scrollY);

  if (scrollY >= 29) {
    if (document.getElementById('midinfoh1')) {
      document.getElementById('midinfoh1').classList.add('show')
    }
  }

  if (scrollY >= 75) {
    if (this.document.getElementById('midinfoh2')) {
      this.document.getElementById('midinfoh2').classList.add('show')
    }
  }

  this.document.getElementById('zindextest').innerHTML = scrollY;

});

function checkScroll() {
  let oldscroll = currentscroll;
  let newscroll = window.scrollY;
  if (newscroll == oldscroll) {
    let arrowElement = document.getElementById('arrow');
    arrowElement.classList.add('show');
  } else {
    currentscroll = window.scrollY;
  }
}

setInterval(checkScroll, 10000)