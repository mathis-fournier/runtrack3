document.addEventListener('keyup', (e) => 
{
const textarea = document.getElementById("keylogger");
textarea.value = textarea.value + e.key;
})
