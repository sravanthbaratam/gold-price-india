 module.exports = function gpi() {
    var JSSoup = require('jssoup').default;
    const fetch = require("node-fetch");
    const Url = 'https://www.google.com/search?q=gold+price';

    fetch(Url).then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // This is the HTML from our response as a text string
        var soup = new JSSoup(html)
        //soup.find("div", class_ = "am3QBf")
        //console.log(soup.find("div", class_ = "am3QBf").text);
        var matchList = soup.findAll("div", "am3QBf")
        //console.log(matchList);
        //var result = [""];
        // matchList.forEach(match => {
        //     console.log(match.find("div", class_ = "am3QBf"));
        //     break;
        //     //result.push(match.find("div", class_ = "am3QBf").text)
        // });

         for(var match in matchList){
             console.log(match);
             break
            //var e = new JSSoup(match,false)
            //console.log(e);
            //var f = e.find("div", class_ = "am3QBf")
            //console.log(f);
         }
        //return result

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

 };