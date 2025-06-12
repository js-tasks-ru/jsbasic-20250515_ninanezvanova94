function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');

  button.addEventListener('click',()=>{
    if(text.hidden){
      text.removeAttribute('hidden','');
    } else {
      text.setAttribute('hidden','');
    }    
  });  
}
