class Person {

  constructor( name, surname, age, gender, height, weight,pets, img, rating, like, inRelation) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.pets=pets
    this.img = img;
    this.rating = rating;
    this.like = 0;
    this.inRelation = inRelation;
  }

 
  render(i) {
    let msg ='';
     msg+= `
    <div class="pers class="col-lg-2 col-md-6 col-sm-12 col-xs-12">
        <div class="pic">
          <img src="${this.img}">
        </div>
        <div class="text">
          <h4> Name: ${this.name}</h4>
          <h4> Surname: ${this.surname}</h4>
          <p> Gender: ${this.gender}</p>
          <p> Age: ${this.age}</p>
          <p> ${this.height}, ${this.weight}</p>
          <p> Pets: ${this.pets}</p>

          <button onclick="like(`+ i +`)"><i class="glyphicon glyphicon-thumbs-up"></i>Like</button>
          <span id="like`+ i +`">${this.like} </span><img src="img/like.png">
        </div>
      </div>
      `;
    return msg;
  }
}


function like (index){
  persAll[index].like=persAll[index].like+1;
  document.getElementById('like' + index).innerHTML=persAll[index].like;
           }



var persAll = [
  new Person("Stefan", "Reitmeier", 25, "male", "1,87 m", "88 kg", "2 Dogs and 1 Turtle", "img/boy1.jpg"),
  new Person("Linda", "Winter", 29,  "female", "1,71 m", "59 kg", "4 Ferrets", "img/girl1.jpg"),  
  new Person("Kate", "Nelson", 22,"female", "1,74 m", "60 kg", "2 Cats", "img/girl2.jpg"),
  new Person("Richard", " Cebener", 28, "male", "1,90 m", "92 kg", "2 Rabbits", "img/boy2.jpg"),
  new Person("Lisa", "Tailor", 34, "female", "1,66 m", "61 kg", "No pets", "img/girl3.jpg"),
  new Person("Liam", "James", 33,  "male", "1,75 m", "75 kg", "2 Dogs, 1 Cat", "img/boy3.jpg"),  
  new Person("Iva", "Fernandes", 29,"female", "1,73 m", "62 kg", "1 Dog", "img/girl4.jpg"),
  new Person("Elina", "Rider", 24, "female", "1,68 m", "55 kg", "4 Chinchillas", "img/girl5.jpg"),  
  new Person("Bastian", "Neumaier", 31, "male", "1,88 m", "84 kg", "No pets", "img/boy4.jpg"),
  new Person("Ivana", "Gercic", 22,  "female", "1,77 m", "52 kg", "No pets", "img/girl6.jpg"),  
  new Person("Loreen", "Tercic", 24, "female", "1,76 m", "55 kg", "4 Birds", "img/girl9.jpg"),
  new Person("Lina", "Weber", 21,  "female", "1,70 m", "53 kg", "2 Dogs", "img/girl8.jpg"),  
  new Person("Richie", "Stringini", 31,"male", "1,75 m", "73 kg", "2 Cats", "img/boy5.jpg"),
  new Person("Vanessa", "Hudgens", 28, "female", "1,64 m", "53 kg", " No pets", "img/girl11.jpg"),  
  new Person("Chris", "Watrin", 33, "male", "1,83 m", "75 kg", "1 Cat and 2 Turtles", "img/boy6.jpg")
  ];


//Funktionen für index.html - Seite

function allList() {
  let allList = document.getElementById("allPerson");
  for (var i = 0; i < persAll.length; i++) {

    allList.innerHTML += persAll[i].render(i);
  }
}



//Funktion für die women.html - Seite

function onlyWomen() {
  let allList = document.getElementById("women");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "female") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}



//Funktion für die men.html - Seite

function onlyMen() {
  let allList = document.getElementById("men");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "male") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}