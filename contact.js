
let contactBtnToconfirm = document.getElementById('contact-btn-tosend')

contactBtnToconfirm.addEventListener('click', function () {

    // if (window.confirm('この内容で送信しますがよろしいでしょうか？')) {
    //     return goToConfirm();
    // } else {
    //     return false;
    // }
    goToConfirm()
}, false);



function goToConfirm() {

    let labels = document.getElementsByClassName('labelsForPurpose');
    let inputs = document.getElementsByClassName('checkboxes-purpose'),
        selectedCheckboxes = [];
    // console.log(inputs.length)
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            selectedCheckboxes.push(labels[i].textContent);
            // selectedCheckboxes.push(inputs[i].value);
        }
    }

    // let arr = []
    // arr.push(selectedCheckboxes)
    // let companyNamevalue = document.getElementById('companyName').value
    // let companyNameFuriganavalue = document.getElementById('companyNameFurigana').value
    // arr.push(companyNamevalue, companyNameFuriganavalue, namevalue, nameFuriganavalue, emailAdressvalue, phoneNumbervalue, contentTextvalue)
    // // console.log(arr)
    // let labelsArr = ["お問い合わせ内容", "会社名", "会社名(フリガナ)", "お名前", "お名前(フリガナ)", "メールアドレス", "電話番号", "お問い合わせ内容"]
    // let test = []
    // for (let i = 0; i < labelsArr.length; i++) {
    //     let item = []
    //     item.push(labelsArr[i])
    //     item.push(arr[i])
    //     test.push(item)
    // }

    // error
    let errorContainer = document.getElementById('error-container')
    errorContainer.innerHTML = '';
    // let contactFormInputWrap = document.getElementById('contact-form-input-wrap')
    // contactFormInputWrap.innerHTML = '';

    //  checkboxes of purpose 
    let contactCheckboxWrapPurpose = document.querySelector('#contact-checkbox-wrap-purpose');

    let checked = contactCheckboxWrapPurpose.querySelectorAll('input[type="checkbox"]:checked')

    if (checked.length >= 1) {
        document.getElementById('checkbox-policy').style.outline = "";
        document.getElementById('recruit').style.outline = "";
        document.getElementById('work').style.outline = "";
        document.getElementById('other').style.outline = "";
    } else {
        let errorContainer = document.getElementById('error-container')
        errorContainer.style.display = "";
        let checkboxesPurposeErrorMessage = document.createElement('p')
        let checkboxesPurposeErrorMessageText = document.createTextNode('●お問い合わせ種別は最低１つ選択してください。')
        checkboxesPurposeErrorMessage.appendChild(checkboxesPurposeErrorMessageText)
        errorContainer.appendChild(checkboxesPurposeErrorMessage)
        document.getElementById('recruit').style.outline = "solid 2px red";
        document.getElementById('work').style.outline = "solid 2px red";
        document.getElementById('other').style.outline = "solid 2px red";
    }

    // requred input if not filled
    let requredLabelsArr = ["お名前", "お名前(フリガナ)", "メールアドレス", "電話番号", "内容・ご相談等"]

    let nameInput = document.getElementById('name')
    let nameFuriganaInput = document.getElementById('nameFurigana')
    let emailAdressInput = document.getElementById('emailAdress')
    let phoneNumberInput = document.getElementById('phoneNumber')
    let contentTextInput = document.getElementById('content-text')

    let requredInput = [nameInput, nameFuriganaInput, emailAdressInput, phoneNumberInput, contentTextInput]

    let namevalue = document.getElementById('name').value
    let nameFuriganavalue = document.getElementById('nameFurigana').value
    let emailAdressvalue = document.getElementById('emailAdress').value
    let phoneNumbervalue = document.getElementById('phoneNumber').value
    let contentTextvalue = document.getElementById('content-text').value

    let requredInputArr = [namevalue, nameFuriganavalue, emailAdressvalue, phoneNumbervalue, contentTextvalue]
    for (let r = 0; r < requredInputArr.length; r++) {
        let arr = []
        if (requredInputArr[r] === '') {
            console.log(requredInputArr[r])
            arr.push(requredLabelsArr[r])
            arr.push(requredInputArr[r])
            console.log(arr)

            let errorContainer = document.getElementById('error-container')
            errorContainer.style.display = "";
            let checkboxesRequredErrorMessage = document.createElement('p')
            let checkboxesRequredErrorMessageText = document.createTextNode('●' + requredLabelsArr[r] + 'を入力してください。')
            checkboxesRequredErrorMessage.appendChild(checkboxesRequredErrorMessageText)
            errorContainer.appendChild(checkboxesRequredErrorMessage)

            requredInput[r].style.outline = "solid 2px red";

        } else {
            requredInput[r].style.outline = "";
        }

    }


    // checkbox privacy policy
    let checkboxPolicy = document.getElementById('checkbox-policy');
    if (!checkboxPolicy.checked) {
        let errorContainer = document.getElementById('error-container')
        errorContainer.style.display = "";
        let checkboxesPrivacyPolicyMessage = document.createElement('p')
        let checkboxesPrivacyPolicyMessageText = document.createTextNode('●プライバシーポリシーの同意にチェックをしてください。')
        checkboxesPrivacyPolicyMessage.appendChild(checkboxesPrivacyPolicyMessageText)
        errorContainer.appendChild(checkboxesPrivacyPolicyMessage)
        document.getElementById('checkbox-policy').style.outline = "solid 2px red";
    } else {
        document.getElementById('checkbox-policy').style.outline = "";
    }

        // checkbox anti eigyo
        let checkboxAntieigyo = document.getElementById('checkbox-antieigyo');
        if (!checkboxAntieigyo.checked) {
            let errorContainer = document.getElementById('error-container')
            errorContainer.style.display = "";
            let checkboxesCheckboxAntieigyoMessage = document.createElement('p')
            let checkboxesCheckboxAntieigyoMessageText = document.createTextNode('●営業目的の問い合わせではありません。にチェックをしてください。')
            checkboxesCheckboxAntieigyoMessage.appendChild(checkboxesCheckboxAntieigyoMessageText)
            errorContainer.appendChild(checkboxesCheckboxAntieigyoMessage)
            document.getElementById('checkbox-antieigyo').style.outline = "solid 2px red";
        } else {
            document.getElementById('checkbox-antieigyo').style.outline = "";
        }
}

