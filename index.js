const progress = document.querySelector('#progress');
const increaseBtn = document.querySelector('.btn-increase');
const decreaseBtn = document.querySelector('.btn-decrease');
const completeBtn = document.querySelector('.btn-complete');
const resetBtn = document.querySelector('.btn-reset');
let initialValue = progress.value;
const maxValue = progress.max;
const resetValue = 0;



const increaseBar = () => {
    if (progress.value !== maxValue) {
        initialValue += 20;
        progress.value = initialValue;
    }
};

const decreaseBar = () => {
    initialValue -= 20;
    progress.value = initialValue;
};

const completeBar = () => {
    progress.value = maxValue;
};

const resetBar = () => {
    progress.value = resetValue;
};



increaseBtn.addEventListener('click', () => {
    increaseBar();
});


decreaseBtn.addEventListener('click', () => {
    decreaseBar();
});


completeBtn.addEventListener('click', () => {
    completeBar();
});


resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    resetBar();
    location.reload();
});