let contactBtnToconfirm = document.getElementById('contact-btn-toconfirm')

function goToConfirm() {

    let labels = document.getElementsByClassName('labelsForPurpose');
    let inputs = document.getElementsByClassName('checkboxes-purpose'),
        selectedCheckboxes = [];
    console.log(inputs.length)
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            selectedCheckboxes.push(labels[i].textContent);
            // selectedCheckboxes.push(inputs[i].value);
        }
    }

    let arr = []
    arr.push(selectedCheckboxes)
    let companyNamevalue = document.getElementById('companyName').value
    let companyNameFuriganavalue = document.getElementById('companyNameFurigana').value
    let namevalue = document.getElementById('name').value
    let nameFuriganavalue = document.getElementById('nameFurigana').value
    let emailAdressvalue = document.getElementById('emailAdress').value
    let phoneNumbervalue = document.getElementById('phoneNumber').value
    let contentTextvalue = document.getElementById('content-text').value

    arr.push(companyNamevalue, companyNameFuriganavalue, namevalue, nameFuriganavalue, emailAdressvalue, phoneNumbervalue, contentTextvalue)
    console.log(arr)



    return arr;


}