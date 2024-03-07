




fetch('./work.json')
    .then((response) => response.json())
    .then((json) => {
        let workdata = json
        let workdatabyarrays = workdata.workdata
        console.log(workdatabyarrays.length)

        // here to get Number of era name(reiwa) 
        let reiwaYearArr = []
        for (let i = 0; i < workdatabyarrays.length; i++) {
            reiwaYearArr.push(2 + i)
        }
        // console.log(reiwaYearArr)

        // here to get an array of era name(reiwa) year X
        for (let i = 0; i < reiwaYearArr.length; i++) {
            let reiwaYear = reiwaYearArr[i]
            let workdatabyarraydatarreiwayear = workdatabyarrays[i]['施工実績データ']
            console.log(reiwaYearArr.length)

            for (let k = 0; k < workdatabyarraydatarreiwayear.length; k++) {

                let workdatabyarraydatatd = workdatabyarraydatarreiwayear[k];
                let kojiDate = workdatabyarraydatatd['完成年月']
                let kojiName = workdatabyarraydatatd['工事名']
                let kojiPlace = workdatabyarraydatatd['工事場所']
                let kojiOrderer = workdatabyarraydatatd['工事発注者']
                let kojiPict = workdatabyarraydatatd['写真']


                if (kojiPict === "") {
                    kojiPict = "無し"
                }

                let kojiDatetextnode = document.createTextNode(kojiDate);
                let kojiNametextnode = document.createTextNode(kojiName);
                let kojiPlacetextnode = document.createTextNode(kojiPlace);
                let kojiOrderertextnode = document.createTextNode(kojiOrderer);
                let kojiPicttextnode = document.createTextNode(kojiPict);


                let td;
                let tr;
                tr = document.createElement("tr");

                td = document.createElement("td");
                td.appendChild(kojiOrderertextnode)
                tr.appendChild(td)

                td = document.createElement("td");
                td.appendChild(kojiNametextnode)
                tr.appendChild(td)

                td = document.createElement("td");
                td.appendChild(kojiPlacetextnode)
                tr.appendChild(td)

                td = document.createElement("td");
                td.appendChild(kojiDatetextnode)
                tr.appendChild(td)

                td = document.createElement("td");
                let imglink = document.createElement('a')

                if (kojiPict === "無し") {
                    td.appendChild(kojiPicttextnode)
                } else {
                    imglink.href = kojiPict
                    imglink.appendChild(kojiPicttextnode)
                    td.appendChild(imglink)
                }

                tr.appendChild(td)


                    let reiwaYear = 2 + i
                    let tableforworkreiwaYear = document.getElementById('tableforworkr' + reiwaYear)
                    tableforworkreiwaYear.appendChild(tr)

            }
            


        }



    })


// jumpToYear-btn function

let jumpToYearBtn = document.getElementById('jumpToYear-btn')
let workyears = document.getElementById('workyears')
let workyearsValues = workyears.innerHTML

jumpToYearBtn.addEventListener('click', () => GetSelectedWorkYear('workyears'))

function GetSelectedWorkYear(el) {
    let selectedWorkYear = document.getElementById(el);
    let selectedWorkYearValue = selectedWorkYear.options[selectedWorkYear.selectedIndex].value
    console.log(selectedWorkYearValue);

    let selectedDivId = document.getElementById(selectedWorkYearValue)
    selectedDivId.scrollIntoView();
}
