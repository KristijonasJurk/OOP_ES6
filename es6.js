// viena funkcija giliau, this tampa window o ne button
// bet kai naudojam => susitvarka

const button = document.querySelector('.button');
button.addEventListener('click', function () {
    const yes = () => {
        console.log(this);
    }
    yes()
})
// kai paduodam tik viena elementa galim nutrinti
// function, skliaustus, lauztinius skliaustus
const array = ['jon', 'jones'];

const vardai = vardai => console.log(vardai);
// vardai(array)

// galim parasyti default reiksmias, jei netycia
// butu nieko nepaduota x=5(5 default)

const sum = function (x = 5, y = 6) {
    console.log(x + y);
}
sum(2, 1.5)
