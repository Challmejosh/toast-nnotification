/*let icon = document.createElement('i');
 icon.classList.add('fa-circle-check');*/
 let toast = document.querySelector('.toast');
let success = 'Submitted successful';
let error =  'Please fix the error!';
let invalid = 'Invalid input, check again';

function toastDone(msg){
    let toastElement = document.createElement('div');
    toastElement.classList.add('toastBox');
    toast.appendChild(toastElement);
    toastElement.textContent = msg;

    if(msg.includes('error')){
        toastElement.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toastElement.classList.add('invalid');
    }

    setTimeout(()=>{
        toastElement.remove();
    },6000);
} 