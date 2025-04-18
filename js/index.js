const wheel = document.querySelector('.wheel');
const btn = document.querySelector('.btn');
const pItem = document.querySelector('#price-item');
const pRes = document.querySelector('#price-result');

let arr = [
    { name: 'Knife', src: './assets/item-1.png' },
    { name: 'Gold Knife', src: './assets/item-2.png' },
    { name: 'Secret Knife', src: './assets/item-3.png' },
    { name: 'AUG', src: './assets/item-4.png' },
    { name: 'AWP CLASSIC', src: './assets/item-5.png' },
    { name: 'Kerambit', src: './assets/item-6.png' },
    { name: 'P90', src: './assets/item-7.png' },
    { name: 'AWP BOLT', src: './assets/item-8.png' }
];

let isSpin = false;
arr.reverse();

function spin() {
    if (isSpin) return;

    isSpin = true;

    const randomPrize = Math.floor(Math.random() * arr.length);
    const angle = 1080 + randomPrize * 45;

    // Звук (если есть)
    const audio = new Audio('./sound/spin.mp3');
    audio.play();

    // Крутим
    wheel.style.transition = 'all 8s ease';
    wheel.style.transform = `perspective(1000px) rotateY(${angle}deg)`;

    setTimeout(() => {
        isSpin = false;
        audio.pause();
        audio.currentTime = 0;

        // Показываем результат
        pItem.src = arr[randomPrize].src;
        pRes.style.display = 'flex';
    }, 9000);
}

btn.addEventListener('click', spin);

// Закрыть окно результата по клику
pRes.addEventListener('click', () => {
    pRes.style.display = 'none';
});
