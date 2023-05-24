const hitungLuas = () => {
  const sisi = document.getElementById('sisi-luas').value
  const result = sisi ** 2
  if (sisi <= 0) {
    document.getElementById('sisi-luas').style.border = '2px solid red'
  } else {
    document.getElementById('sisi-luas').style.border = '1px solid #b7b7b7'
    document.getElementById('sisi1-luas').innerHTML = sisi
    document.getElementById('sisi2-luas').innerHTML = sisi
    document.getElementById('result-luas').style.display = 'block'
    document.getElementById('output_luas').innerHTML = result
  }
}

const hitungKeliling = () => {
  const sisi = document.getElementById('sisi-keliling').value
  const result = sisi * 4
  if (sisi <= 0) {
    document.getElementById('sisi-keliling').style.border = '2px solid red'
  } else {
    document.getElementById('sisi-keliling').style.border = '1px solid #b7b7b7'
    document.getElementById('sisi1-keliling').innerHTML = sisi
    document.getElementById('result-keliling').style.display = 'block'
    document.getElementById('output_keliling').innerHTML = result
  }
}

const resetLuas = () => {
  document.getElementById('sisi-luas').value = ''
  document.getElementById('result-luas').style.display = 'none'
}

const resetKeliling = () => {
  document.getElementById('sisi-keliling').value = ''
  document.getElementById('result-keliling').style.display = 'none'
}
