fetch('./work.json')
    .then((response) => response.json())
    .then((json) => {
        let workdata = json
        console.log(workdata.workdata[0])
        let workdatayear = workdata.workdata[0]['施工実績年度']
        let workdatayeardata = workdata.workdata[0]['施工実績データ']
        console.log(workdatayeardata[0]['工事名'])
    }
    )