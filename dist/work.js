




fetch('./work.json')
    .then((response) => response.json())
    .then((json) => {
        let workdata = json
        let workdatabyarrays = workdata.workdata
        console.log(workdatabyarrays)
        let workdatayear = workdatabyarrays[0]['施工実績年度']
        let workdatayeardata = workdatabyarrays[0]['施工実績データ']



        // reiwa 3 nen
        let workdatabyarraydatar3 = workdatabyarrays[0]['施工実績データ']

        for (let k = 0; k < workdatabyarraydatar3.length; k++) {
            let workdatabyarraydatatd = workdatabyarraydatar3[k];
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

            let tableforworkr3 = document.getElementById('tableforworkr3')
            tableforworkr3.appendChild(tr)
        }

        // reiwa 3 nen
        let workdatabyarraydatar2 = workdatabyarrays[1]['施工実績データ']

        for (let k = 0; k < workdatabyarraydatar2.length; k++) {
            let workdatabyarraydatatd = workdatabyarraydatar2[k];
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
                imglink.href = kojiPicttextnode
                imglink.appendChild(kojiPicttextnode)
                td.appendChild(imglink)
            }

            tr.appendChild(td)

            let tableforworkr2 = document.getElementById('tableforworkr2')
            tableforworkr2.appendChild(tr)
        }







    })


// jumpToYear-btn function

let jumpToYearBtn = document.getElementById('jumpToYear-btn')
let workyears = document.getElementById('workyears')
let workyearsValues = workyears.innerHTML

jumpToYearBtn.addEventListener('click', ()=> GetSelectedWorkYear('workyears'))

function GetSelectedWorkYear(el)
{
    let selectedWorkYear = document.getElementById(el);
    let selectedWorkYearValue = selectedWorkYear.options[selectedWorkYear.selectedIndex].value
    console.log(selectedWorkYearValue);

    let selectedDivId = document.getElementById(selectedWorkYearValue)
    selectedDivId.scrollIntoView(); 
}
