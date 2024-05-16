$(document).ready(function() {
    const array = []
    const url = "https://dev.to"
    const list = "div[data-tag-id]"

    /*
		list element that gonna be scrap
    */
    const tag = ".crayons-tag"
    const text = "p[class='mb-6 fs-s color-base-70 truncate-at-3']"
    const numberposts = "div[class='fs-xs color-base-60']"
    const image = {
    	element:"img",
    	attribute:"src"
    }
    const link = {
    	element:"a",
    	attribute:"href"
    }

    // Go to the dev.to tags page and get the HTML code 
    $.get(url+"/tags", (html) => {
        // Find elements with crayons-tag class inside the HTML page received 
        [...$(html).find(list)].forEach((el) => {
            // Get the text(tag name) inside of each element with crayons-tag class 
            //const text = $(el).text(); 
            //.crayons-tag
            const object = {}
            object.tag = $(el).find(tag).text()
            object.text = $(el).find(text).text();
            object.numberposts = $(el).find(numberposts).text();
            //
            object.image = $(el).find(image.element).attr(image.attribute) ? $(el).find(image.element).attr(image.attribute) : "null";
            object.link = url+$(el).find(link.element).attr(link.attribute);

            array.push(object)
            
        })
        //print data on html page
        const data = JSON.stringify(array, undefined, 2);
        document.getElementById("app").innerHTML = data;
    })
});