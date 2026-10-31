
const titles = Array.from(document.querySelectorAll('.services-title'));
console.log('Services titles count:', titles.length);
titles.forEach((t, i) => {
    console.log('Title ' + i + ' text:', t.innerText, 'chars count:', t.querySelectorAll('div, span').length);
});
