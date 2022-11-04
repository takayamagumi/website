

function get_result() {

    let url = `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_ID}/posts?key=${BLOGGER_API_KEY}`
    fetch(url)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            const bloggerdata = data.items;
            console.log(bloggerdata)
            let AmountOfArticle = bloggerdata.length
            let titleOfArticle;
            let dateOfArticle;
            let blogUrl;
            for (let i = 0; i < 3; i++) {
                titleOfArticle = bloggerdata[i].title;
                dateOfArticle = bloggerdata[i].published;
                blogUrl = bloggerdata[i].url
                getDates(dateOfArticle)
                console.log(blogUrl)
            }

            let createDivForWrap = document.createElement('div');
            createDivForWrap.classList.add("divForWrap");


            function getDates(dateOfArticle) {
                let year = parseInt(dateOfArticle);
                let time = new Date(dateOfArticle)
                let month = time.getMonth() + 1
                let date = time.getDate()
                let publishedDateArr = []

                publishedDateArr.push(year, month, date)
                let publishedDateArrComma = publishedDateArr.join('.')
                console.log(publishedDateArrComma)
                appendDateNew(publishedDateArrComma, titleOfArticle)
            }




            function appendDateNew(date, titleOfArticle) {
                // append published date in p div

                let createDivForListWrap = document.createElement('div');
                createDivForListWrap.classList.add("createDivForListWrap");

                // wrap for published date
                let createPForYear = document.createElement('p')
                createPForYear.classList.add("createPForTime");
                let publishedDateArrTextnode = document.createTextNode(date)
                createPForYear.appendChild(publishedDateArrTextnode)
                createDivForListWrap.appendChild(createPForYear)


                // label for new
                const currentTime = Date.now()
                let timestampDateOfArticle = new Date(dateOfArticle).valueOf()
                let timeGap = currentTime - timestampDateOfArticle
                const threeDays = 86400000 * 3
                if (timeGap < threeDays) {
                    let createdivForNew = document.createElement('div')
                    createdivForNew.classList.add("createDivForNew");
                    let NewTextnode = document.createTextNode('NEW')
                    createdivForNew.appendChild(NewTextnode)
                    createDivForListWrap.appendChild(createdivForNew)
                } else {
                    let createdivForNew = document.createElement('div')
                    createdivForNew.classList.add("createDivForEmpty");
                    let NewTextnode = document.createTextNode('old')
                    createdivForNew.appendChild(NewTextnode)
                    createDivForListWrap.appendChild(createdivForNew)
                }

                // wrap for title Of Article
                console.log(titleOfArticle)
                let createaFortitleOfArticle = document.createElement('a')
                createaFortitleOfArticle.classList.add("createaFortitleOfArticle");
                createaFortitleOfArticle.href = blogUrl
                let titleOfArticleTextnode = document.createTextNode(titleOfArticle)
                createaFortitleOfArticle.appendChild(titleOfArticleTextnode)
                createDivForListWrap.appendChild(createaFortitleOfArticle)




                let newsContentWrap = document.getElementById('news-content-wrap')
                newsContentWrap.appendChild(createDivForListWrap)
                console.log(date)


            }
            // console.log(bloggerdata[1].title)
        })
}

get_result()