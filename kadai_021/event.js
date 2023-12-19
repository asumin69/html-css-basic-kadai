const Btn = document.getElementById('btn');
const Text = document.getElementById('text');

Btn.addEventListener('click', ()=> {
    setTimeout(() => {
        Text.textContent = 'ボタンをクリックしました';
    },2000);
});
