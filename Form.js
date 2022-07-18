
let copytext = document.getElementById("#Roshni");
copytext.getElementById("button").addEventListener("click",function(){
    let input =  copytext.getElementById("input.text");
    input.select();
    document.execCommand("copy");
    copytext.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        copytext.classList.remove("active");
    },3000);
});

