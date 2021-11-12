let dogs = [
    {   
        Dogimage : "boerboel",
        Dogname : "Boerboel",
        Price: "N300.000"
    },

    {   
        Dogimage : "Chihuahua",
        Dogname : "Chihuahua",
        Price: "N350.000"
    },

    {   
        Dogimage : "Tosa",
        Dogname : "Japanese Tosa",
        Price: "N250.000"
    },

    {   
        Dogimage : "pug-2",
        Dogname : "Pug",
        Price: "N400.000"
    },

    {   
        Dogimage : "weimaraner",
        Dogname : "Weimaraner",
        Price: "N200.000"
    },

    {   
        Dogimage : "dachshund",
        Dogname : "Dachshund",
        Price: "N300.000"
    },

    {   
        Dogimage : "corgi",
        Dogname : "Corgi",
        Price: "N300.000"
    },

    {   
        Dogimage : "dalmatian",
        Dogname : "Dalmatian",
        Price: "N230.000"
    },

    {   
        Dogimage : "boerboel",
        Dogname : "Doberman",
        Price: "N500.000"
    },

    {   
        Dogimage : "doberman",
        Dogname : "Doberman",
        Price: "N500.000"
    },

    {   
        Dogimage : "Labra",
        Dogname : "Labrador Retriever ",
        Price: "N300.000"
    },

    {   
        Dogimage : "rhodesian-ridgeback",
        Dogname : "Rhodesian",
        Price: "N300.000"
    }

]

let gallerySection = document.getElementById("dog-card");
let html ="";
dogs.forEach(element => {
  
    html += ` 
    <div class="card mx-auto my-3" style="width: 18rem" pt-3>
        <img src="../images/${element.Dogimage}.jpg" alt="" class="img-fluid px-3">
        <div class="card-body ms-3">
            <h5 class="card-title">Breed : ${element.Dogname}</h5>
            <p class="card-text">Price : ${element.Price}</p>
         </div>

    </div>

    `
    console.log(element)
    gallerySection.innerHTML = html
});
