/*le but de l'algorithme est de savoir les 2 couleurs les plus populaires*/

let diff = ['rouge','jaune','blanc','rouge','jaune','noir','jaune','rouge','rouge'];
let color = [diff[0]];
let stock = [0];
//Rah mbola ts ao le color de push-ena anatnle tableau vide
for (let i = 1; i < diff.length; i++) {
    if (diff[0] != diff[i] && color.indexOf(diff[i]) == -1) {
        color.push(diff[i]);
        stock.push(0);
    }
}
//accumul-ena n couleur miverina rehetra
for (let i = 0; i < color.length; i++) {
    for (let j = 0; j < diff.length; j++) {
        if (color[i]==diff[j]) {
            stock[i] += 1;
        }
    }   
}
//Get max pour l'accumulateur[i]
let max = 0;
for (let i = 0; i < stock.length; i++) {
    if (stock[i+1] > stock[i]) {
        max = i+1;
    }
}
//Alana izay max ahazoana n second max
color.splice(max,1);
stock.splice(max,1);
//angalana n second max
let secondmax = 0;
for (let k = 0; k < stock.length; k++) {
    if (stock[k+1] > stock[k]) {
        secondmax = k+1;
    }
}
console.log("Les 2 couleurs  sont : \n"+ color[max]+color[secondmax]);

//Ceci est une sujet de battle dev Isograd