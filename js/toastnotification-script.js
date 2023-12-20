const toastBox = document.getElementById('toastBox');
 
const successMsg = ' <i class="fa fa-check-circle" aria-hidden="true"></i> Successfully Submitted';
const errorMsg = '<i class="fa fa-times-circle" aria-hidden="true"></i> Please Fix the error';
const invalidMsg = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Invalid input, Check Again';

showToast = (msg) => {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes('error')) {
    toast.classList.add('error');
  }
  if (msg.includes('Invalid')) {
    toast.classList.add('invalid');
  }

  setTimeout(() => {
    toast.remove();
    },6000)
}

