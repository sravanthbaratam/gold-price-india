//module.exports = function gpi() {
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
        console.log(soup.find("div", class_ = "am3QBf").text);
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

  //};