let contactBtnToconfirm = document.getElementById('contact-btn-toconfirm')

function goToConfirm() {

    let companyNamevalue = document.getElementById('companyName').value
    let companyNameFuriganavalue = document.getElementById('companyNameFurigana').value
    let namevalue = document.getElementById('name').value
    let nameFuriganavalue = document.getElementById('nameFurigana').value
    let emailAdressvalue = document.getElementById('emailAdress').value
    let phoneNumbervalue = document.getElementById('phoneNumber').value
    let contentTextvalue = document.getElementById('content-text').value
    let arr = []
    arr.push(companyNamevalue, companyNameFuriganavalue, namevalue, nameFuriganavalue, emailAdressvalue, phoneNumbervalue, contentTextvalue)
    console.log(arr)
}