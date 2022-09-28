
var btn = document.getElementsByTagName("button")[0]

var count  = document.getElementsByTagName("span")[0]

btn.onclick = function() {
    var value = Number(count.innerText)
    document.body.style.backgroundColor = `rgb(${value * value%5}, ${value *(value%8)}, ${value%50 * value})`
    count.innerText = Number(count.innerText) + 1
    if(Number(count.innerText) > 50){
        count.style.color = "red"
    } else {
        count.style.color = "blue"
    }
}



