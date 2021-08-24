`uce strict`

let form = document.getElementById('form');
let all =[];

form.addEventListener('submit', movie);
function movie(event){
    event.preventDefault();
    let name = event.target.name;
    let catagorey = event.target.image.value;
    let release = event.target.release.value;

    let movie = new MV(name, catagorey,release);
    
    movie.render();
    save();
}
function MV (name, catagorey, release){
    this.name= name;
    this.catagorey= catagorey;
    this.release= release;

    all.push(this);
}

MV.prototype.render= function() {
    let table = document.getElementById('table');

    let image = document.createElement('th');
    table.appendChild(image); 
    image.innerHTML =  `<img src="img/${this.catagorey.tolowercase ()}.png" alt="" width="50px">`;

    let type = document.createElement('th');
    table.appendChild(type);
    type.textContent= this.catagorey;

    let year= document.createElement('th');
    table.appendChild(year);
    year.textContent= this.release.toString () ;

}
function save (){
    localStorage.setItem('movie', JSON.stringify(all));
}
function fromLocal(){
    let Data = JSON.parse.getItem(all);
    if (Data !== null){
        for (let j = 0; j < Data.length; j++) {
            new MV(Data[j].name, Data[j].catagorey, Data[j].release);
            Data.render();
                }
    }
}
fromLocal();
