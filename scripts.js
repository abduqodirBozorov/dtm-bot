var mainForm = document.querySelector(".main-form")
var otmSelect = document.getElementById("select-otm")
var yunalishSelect = document.getElementById("select-yunalish")
var userNameInput = document.getElementById("input-name")
var userPhoneInput = document.getElementById("input-phone")
var userOriginInput = document.getElementById("input-origin")

var otms = []

var selectedOtm = {}

var selectedYunalish = {}

var user = {}

for (let i = 0; i < insts.length; i++) {
  const otm = insts[i];
  otms.push(otm)
}

for (let i = 0; i < otms.length; i++) {
  const otm = otms[i];
  var otmOption = document.createElement("option")
  otmOption.innerHTML = otm.nomi
  otmOption.value = otm.otmID
  otmSelect.appendChild(otmOption)
}



otmSelect.addEventListener("change", function () {
  for (let i = 0; i < otms.length; i++) {
    const matchedOtm = otms[i];
    if (matchedOtm.otmID === otmSelect.value) {
      selectedOtm = matchedOtm
      yunalishSelect.innerHTML = ''
    }
  }

  for (let i = 0; i < selectedOtm.yunalishlar.length; i++) {
    const yunalishim = selectedOtm.yunalishlar[i];
    var yunalishOption = document.createElement("option")
    yunalishOption.textContent = yunalishim.nomi
    yunalishOption.value = yunalishim.mvdir

    yunalishSelect.appendChild(yunalishOption)
  }
})

yunalishSelect.addEventListener("change", function () {
  for (let i = 0; i < selectedOtm.yunalishlar.length; i++) {
    const matchedYunalish = selectedOtm.yunalishlar[i];
    if (matchedYunalish.mvdir === parseInt(yunalishSelect.value)) {
      selectedYunalish = matchedYunalish
    }
  }
})

mainForm.addEventListener("submit", function (e) {
  e.preventDefault()

  var userName = userNameInput.value.trim()
  var userPhone = userPhoneInput.value.trim()
  var userOrigin = userOriginInput.value.trim()

  if (selectedOtm.nomi && selectedYunalish.nomi && userName.length > 0 && userPhone.length > 0 && userOrigin.length > 0) {

    user.name = userName
    user.phone = userPhone
    user.origin = userOrigin
    user.otmID = selectedOtm.otmID
    user.otmNomi = selectedOtm.nomi
    user.yunalishID = selectedYunalish.mvdir
    user.yunalishNomi = selectedYunalish.nomi

    console.log(user);
  } else {
    alert("Someting went wrong!")
  }
})


