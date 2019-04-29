const baki = document.querySelector('#p1')
const instuments = document.querySelector('#p2')
const nasosi = document.querySelector('#p3')
const podvodki = document.querySelector('#p4')
const card = document.getElementsByClassName('second')

function checkpoint(e) {
  let id = e.id
  let check = document.querySelector('#check_' + id)
  check.classList.toggle('st1')
  check.classList.toggle('st2')
}
