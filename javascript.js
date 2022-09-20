var text=document.querySelector('.text')
var words=document.querySelector('.word')
var char=document.querySelector('.char')
text.addEventListener('input',()=>{
    char.textContent=text.value.length
    var txt=text.value.trim()
    words.textContent=txt.split(/\s+/).filter((item)=>item).length
})