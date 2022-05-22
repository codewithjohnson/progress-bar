const progress = document.querySelector('#progress');
const increaseBtn = document.querySelector('.btn-increase');
const decreaseBtn = document.querySelector('.btn-decrease');
const completeBtn = document.querySelector('.btn-complete');
const resetBtn = document.querySelector('.btn-reset');
let initialValue = progress.value;
const maxValue = progress.max;
const resetValue = 0;



const increaseBar = ()=>{
    initialValue += 20;
    progress.value = initialValue;
};

const decreaseBar = ()=>{
    initialValue -= 20;
    progress.value = initialValue;
};

const completeBar = ()=>{
    progress.value = maxValue;
};

const resetBar = ()=>{
    progress.value = resetValue;
};



increaseBtn.addEventListener('click',()=>{
    console.log('HELLO INCREASE');
    increaseBar();
});


decreaseBtn.addEventListener('click',()=>{
    console.log('HELLO DECREASE');
    decreaseBar();
});


completeBtn.addEventListener('click',()=>{
    console.log('HELLO COMPLETE');
    completeBar();
});


resetBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    resetBar();
    location.reload();
});



