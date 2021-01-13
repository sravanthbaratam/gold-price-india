module.exports = async function gpi() {

    var JSSoup = require('jssoup').default;
    const fetch = require("node-fetch");

    const Url = 'https://www.google.com/search?q=gold+price';

    
     const priceList = await fetch(Url).then(function (response) {
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
        let soup = new JSSoup(html)
        let matchList = soup.findAll("div", "am3QBf")
        let result = []
         for(let i=0;i<matchList.length;i++){
            let e = new JSSoup(matchList[i],false)
            let f = e.find("div", class_ = "am3QBf").text
            result.push(f)
         }
         console.log(result)
        return result

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    return priceList;

 };
