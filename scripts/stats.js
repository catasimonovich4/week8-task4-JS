// ------------- API request and connection ----------- 
const API_URL = "https://amazing-events.herokuapp.com/api/events"

const getStats = async() => {
    try {
        // ---- Connection to API URL 
        const getFetch = await fetch(API_URL)
        const getData = await getFetch.json()
        console.log(getData)
    }
    catch(error) {
        console.log("Error: ", error.message)
    }
} 

// Data ----------> La API esta caida, utilizamos la informacion desde un array
const data = {
    "currentDate":"2022-01-01",
    "events":[
        {
            "_id":"628d7b61c2126f956d8fe950",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
            "name":"Collectivities Party",
            "date":"2021-12-12",
            "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category":"Food Fair",
            "place":"Room A",
            "capacity":"45000",
            "assistance":"42756",
            "price":5,
            "__v":0
        },
        {
            "_id":"628d7b79c2126f956d8fe953",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
            "name":"Jurassic Park",
            "date":"2021-11-02",
            "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category":"Museum",
            "place":"Field",
            "capacity":"82000",
            "assistance":"65892",
            "price":15,
            "__v":0
        },
        {
            "_id":"628d7bb0c2126f956d8fe955",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
            "name":"Halloween Night","date":"2022-02-12",
            "description":"Come with your scariest costume and win incredible prizes.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":"12000",
            "estimate":"9000",
            "price":12,
            "__v":0
        },
        {
            "_id":"628d7bb9c2126f956d8fe957",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
            "name":"Metallica in concert",
            "date":"2022-01-22",
            "description":"The only concert of the most emblematic band in the world.",
            "category":"Music Concert",
            "place":"Room A",
            "capacity":"138000",
            "estimate":"138000",
            "price":150,
            "__v":0
        },
        {
            "_id":"628d7bd3c2126f956d8fe95a",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
            "name":"10K 4 life",
            "date":"2021-03-01",
            "description":"Come and exercise, improve your health and lifestyle.",
            "category":"Race",
            "place":"Football field",
            "capacity":"30000",
            "assistance":"25698",
            "price":3,
            "__v":0
        },
        {
            "_id":"628d7bf3c2126f956d8fe95c",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
            "name":"School's book fair",
            "date":"2022-10-15",
            "description":"Bring your unused school book and take the one you need.",
            "category":"Book Exchange",
            "place":"Room D1",
            "capacity":"150000",
            "estimate":"123286",
            "price":1,
            "__v":0
        },
        {
            "_id":"628d7c0dc2126f956d8fe95e",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
            "name":"Avengers",
            "date":"2022-10-15",
            "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":"9000",
            "estimate":"9000",
            "price":250,
            "__v":0
        },
        {
            "_id":"628d7c1ac2126f956d8fe960",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine1.jpg",
            "name":"Spiderman",
            "date":"2022-9-15",
            "description":"Spiderman's Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":"9000",
            "estimate":"9000",
            "price":250,
            "__v":0
        },
        {
            "_id":"628d7c27c2126f956d8fe962",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
            "name":"Batman",
            "date":"2021-3-11",
            "description":"Come see Batman fight crime in Gotham City.",
            "category":"Cinema",
            "place":"Room D1",
            "capacity":"11000",
            "assistance":"9300",
            "price":225,
            "__v":0
        },
        {
            "_id":"628d7c30c2126f956d8fe964",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine4.jpg",
            "name":"Fredy",
            "date":"2021-3-11",
            "description":"The most terrifying character comes back.",
            "category":"Cinema",
            "place":"Room D2",
            "capacity":"11000",
            "assistance":"10300",
            "price":225,
            "__v":0
        },
        {
            "_id":"628d7c42c2126f956d8fe966",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
            "name":"Korean style",
            "date":"2021-08-12",
            "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category":"Food Fair",
            "place":"Room A",
            "capacity":"45000",
            "assistance":"42756",
            "price":10,
            "__v":0
        },
        {
            "_id":"628d7c59c2126f956d8fe968",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas3.jpg",
            "name":"Japanese style",
            "date":"2021-06-15",
            "description":"Enjoy the best Japanese dishes, with international chefs and awesome events.",
            "category":"Food Fair",
            "place":"Room A","capacity":"45000","assistance":"42756",
            "price":10,
            "__v":0
        },
        {
            "_id":"628d7c66c2126f956d8fe96a",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas4.jpg",
            "name":"Straight from Middle East","date":"2021-10-12",
            "description":"We gather Middle East's collectivities in a unique event to enjoy in family.",
            "category":"Food Fair",
            "place":"Room B",
            "capacity":"45000",
            "assistance":"43000",
            "price":70,
            "__v":0
        },
        {
            "_id":"628d7c6fc2126f956d8fe96c",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas5.jpg",
            "name":"Take away",
            "date":"2021-10-12",
            "description":"Are you a fast food lover? We have the event for you, were we gather the best fast food chains.",
            "category":"Food Fair",
            "place":"Room C",
            "capacity":"45000",
            "assistance":"27000",
            "price":30,
            "__v":0
        },
        {
            "_id":"628d7c7cc2126f956d8fe96e",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas6.jpg",
            "name":"Italian style","date":"2021-10-12",
            "description":"Enjoy the best dishes in this awesome culinary event.",
            "category":"Food Fair",
            "place":"Room A2",
            "capacity":"55000",
            "assistance":"48000",
            "price":40,
            "__v":0
        },
        {
            "_id":"628d7c87c2126f956d8fe970",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros1.jpg",
            "name":"Fantasy books",
            "date":"2022-3-13",
            "description":"The best literary works of a captivating genre full of mythical characters.",
            "category":"Book Exchange",
            "place":"Room D4",
            "capacity":"150000",
            "estimate":"123286",
            "price":3,
            "__v":0
        },
        {
            "_id":"628d7c94c2126f956d8fe972",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros2.jpg",
            "name":"University textbook exchange",
            "date":"2022-11-09",
            "description":"Bring your unused textbooks and take one that you need.",
            "category":"Book Exchange",
            "place":"Room D1",
            "capacity":"170000",
            "estimate":"143288",
            "price":1,
            "__v":0
        },
        {
            "_id":"628d7c9bc2126f956d8fe974",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
            "name":"Just for your kitchen",
            "date":"2021-11-09",
            "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category":"Book Exchange",
            "place":"Room D6",
            "capacity":"130000",
            "assistance":"90000",
            "price":100,
            "__v":0
        },
        {
            "_id":"628d7ca6c2126f956d8fe976",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros4.jpg",
            "name":"BestSeller",
            "date":"2021-10-06",
            "description":"Get to know the best works of literature and take the one that catches you the most.",
            "category":"Book Exchange",
            "place":"Room D6",
            "capacity":"140000",
            "assistance":"110000",
            "price":200,
            "__v":0
        },
        {
            "_id":"628d7cb1c2126f956d8fe978",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros5.jpg",
            "name":"Horror and mistery novels",
            "date":"2021-10-06",
            "description":"Come get novels from some of the most acclaimed literature genres.",
            "category":"Book Exchange",
            "place":"Room D1",
            "capacity":"14000",
            "assistance":"13000",
            "price":80,
            "__v":0
        },
        {
            "_id":"628d7cbac2126f956d8fe97a",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros6.jpg",
            "name":"Just Harry",
            "date":"2021-10-06",
            "description":"If you're a Potterhead you'll love this unique convention held in the city.",
            "category":"Book Exchange",
            "place":"Room D6",
            "capacity":"140000",
            "assistance":"129000",
            "price":300,
            "__v":0
        },
        {
            "_id":"628d7cc6c2126f956d8fe97c",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
            "name":"Comicon",
            "date":"2021-02-12",
            "description":"For comic lovers, all your favourite characters gathered in one place.",
            "category":"Costume Party",
            "place":"Room C",
            "capacity":"120000",
            "assistance":"110000",
            "price":54,
            "__v":0
        },
        {
            "_id":"628d7cd3c2126f956d8fe97e",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces3.jpg",
            "name":"Comicon 2022",
            "date":"2022-02-12",
            "description":"If you enjoyed last year's, you'll love this one's.",
            "category":"Costume Party",
            "place":"Room D",
            "capacity":"220000",
            "estimate":"220000",
            "price":104,
            "__v":0
        },
        {
            "_id":"628d7cdcc2126f956d8fe980",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces4.jpg",
            "name":"Spring Day",
            "date":"2022-09-21",
            "description":"Come celebrate spring dressed as your favourite character.",
            "category":"Costume Party",
            "place":"Room H",
            "capacity":"220000",
            "estimate":"220000",
            "price":104,
            "__v":0
        },
        {
            "_id":"628d7ce7c2126f956d8fe982",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces5.jpg",
            "name":"Cultures",
            "date":"2021-06-21",
            "description":"A unique cultural event awaits you.",
            "category":"Costume Party",
            "place":"Room G",
            "capacity":"220000",
            "assistance":"185000",
            "price":200,
            "__v":0
        },
        {
            "_id":"628d7cefc2126f956d8fe984",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces6.jpg",
            "name":"For the little ones",
            "date":"2021-09-23",
            "description":"Bring your kid with his favourite costume.",
            "category":"Costume Party",
            "place":"Room G",
            "capacity":"10000",
            "assistance":"9327",
            "price":2,
            "__v":0
        },
        {
            "_id":"628d7d9bc2126f956d8fe987",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces7.jpg",
            "name":"Epic party",
            "date":"2021-09-23",
            "description":"Come dressed as a pirate, firefighter, or a nurse, and we'll see who wins the big prize.",
            "category":"Costume Party",
            "place":"Room H",
            "capacity":"2000",
            "assistance":"1856",
            "price":160,
            "__v":0
        },
        {
            "_id":"628d7daac2126f956d8fe989",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces8.jpg",
            "name":"Halloween 2022",
            "date":"2022-10-31",
            "description":"Trick or treat? Come along with your scariest costume.",
            "category":"Costume Party",
            "place":"Room F",
            "capacity":"20000",
            "estimate":"20000",
            "price":160,
            "__v":0
        },
        {
            "_id":"628d7dc1c2126f956d8fe98b",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
            "name":"15K NY",
            "date":"2021-03-01",
            "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category":"Race",
            "place":"New York",
            "capacity":"3000000",
            "assistance":"2569800",
            "price":3,
            "__v":0
        },
        {
            "_id":"628d7dd2c2126f956d8fe98d",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton4.jpg",
            "name":"Buenos Aires 2022",
            "date":"2022-03-01",
            "description":"Come join us in this marathon's 3ed edition.",
            "category":"Race",
            "place":"Buenos Aires",
            "capacity":"300000",
            "estimate":"300000",
            "price":2,
            "__v":0
        },
        {
            "_id":"628d7de7c2126f956d8fe98f",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton5.jpg",
            "name":"New York 2022",
            "date":"2022-03-01",
            "description":"We'll be expecting you in the 6th edition across the Big Apple.",
            "category":"Race",
            "place":"New York",
            "capacity":"5000000",
            "estimate":"5000000",
            "price":2,
            "__v":0
        },
        {
            "_id":"628d7df5c2126f956d8fe991",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton6.jpg",
            "name":"For Life 2nd Edition",
            "date":"2022-03-01",
            "description":"If you enjoyed las year's edition you'll love this one.",
            "category":"Race",
            "place":"Cordoba",
            "capacity":"200000",
            "estimate":"200000",
            "price":1,
            "__v":0
        },
        {
            "_id":"628d7dfcc2126f956d8fe993",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton7.jpg",
            "name":"Cancer Marathon",
            "date":"2021-03-01",
            "description":"We'll be raising funds for the cancer patients.",
            "category":"Race",
            "place":"Mar del Plata",
            "capacity":"1800000",
            "assistance":"1800000",
            "price":1,
            "__v":0
        },
        {
            "_id":"628d7e1cc2126f956d8fe995",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
            "name":"Electronic Fest",
            "date":"2021-01-22",
            "description":"The best national and international DJs gathered in one place.",
            "category":"Music Concert",
            "place":"Room A",
            "capacity":"138000",
            "assistance":"110300",
            "price":250,
            "__v":0
        },
        {
            "_id":"628d7e27c2126f956d8fe997",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica3.jpg",
            "name":"Popular Music",
            "date":"2021-05-22",
            "description":"The best popular hits gathered in a unique event for the hole family to enjoy.",
            "category":"Music Concert",
            "place":"Room C",
            "capacity":"238000",
            "assistance":"183300",
            "price":40,
            "__v":0
        },
        {
            "_id":"628d7e3bc2126f956d8fe999",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica4.jpg",
            "name":"Classics",
            "date":"2021-05-22",
            "description":"Come enjoy the best classics.",
            "category":"Music Concert",
            "place":"Room B",
            "capacity":"38000",
            "assistance":"13300",
            "price":20,
            "__v":0
        },
        {
            "_id":"628d7e47c2126f956d8fe99b",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica5.jpg",
            "name":"Opera",
            "date":"2022-05-22",
            "description":"We gathered the best opera singers just for you.",
            "category":"Music Concert",
            "place":"Room F",
            "capacity":"138000",
            "estimate":"138000",
            "price":1500,
            "__v":0
        },
        {
            "_id":"628d7e53c2126f956d8fe99d",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica6.jpg",
            "name":"Reggaeton 2022",
            "date":"2022-06-23",
            "description":"Get ready to dance to the rhythm of the best bands.",
            "category":"Music Concert",
            "place":"Room G",
            "capacity":"2138000",
            "estimate":"2138000",
            "price":300,
            "__v":0
        },
        {
            "_id":"628d7e5bc2126f956d8fe99f",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica7.jpg",
            "name":"Metallica in Buenos Aires",
            "date":"2021-06-23",
            "description":"We'll be having three opportunities for you to come listen to this 80s mythical band's hits.",
            "category":"Music Concert",
            "place":"Buenos Aires",
            "capacity":"138000",
            "assistance":"137560",
            "price":1300,
            "__v":0
        },
        {
            "_id":"628d7e65c2126f956d8fe9a1",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica8.jpg",
            "name":"San Francisco's Symphony",
            "date":"2021-06-23",
            "description":"You can't miss the opportunity to come see one of the world's best symphonies live.",
            "category":"Music Concert",
            "place":"Buenos Aires",
            "capacity":"38000",
            "assistance":"36560",
            "price":1300,
            "__v":0
        },
        {
            "_id":"628d7e72c2126f956d8fe9a3",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
            "name":"Parisian Museum",
            "date":"2022-11-02",
            "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
            "category":"Museum",
            "place":"Paris",
            "capacity":"8200",
            "estimate":"8200",
            "price":3500,
            "__v":0
        },
        {
            "_id":"628d7e80c2126f956d8fe9a5",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo2.jpg",
            "name":"Abstract Art",
            "date":"2022-11-02",
            "description":"An exhibition of selected artists explores the diverse approaches to abstraction developed since 1950.",
            "category":"Museum",
            "place":"Buenos Aires",
            "capacity":"1200",
            "estimate":"1200",
            "price":1500,
            "__v":0
        },
        {
            "_id":"628d7e88c2126f956d8fe9a7",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo3.jpg",
            "name":"Buenos Aires' Museum 2022",
            "date":"2022-11-02",
            "description":"Unique works by international and national artists are waiting for you in this year's exhibition.",
            "category":"Museum",
            "place":"Buenos Aires",
            "capacity":"800",
            "estimate":"800",
            "price":700,
            "__v":0
        },
        {
            "_id":"628d7ea7c2126f956d8fe9aa",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo4.jpg",
            "name":"Buenos Aires' Museum",
            "date":"2021-11-02",
            "description":"Come enjoy the best wokrs by our local artists.",
            "category":"Museum",
            "place":"Buenos Aires",
            "capacity":"600",
            "assistance":"550",
            "price":500,
            "__v":0
        },
        {
            "_id":"628d7ebdc2126f956d8fe9ac",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo6.jpg",
            "name":"Acropolis",
            "date":"2021-11-02",
            "description":"One of the most important museums in the world, houses the findings of only one archaeological site, the Athenian Acropolis.",
            "category":"Museum",
            "place":"Athens",
            "capacity":"1600",
            "assistance":"1540",
            "price":8500,
            "__v":0
        },
        {
            "_id":"628d7ec6c2126f956d8fe9ae",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo7.jpg",
            "name":"British Museum",
            "date":"2022-09-02",
            "description":"Culture and history combined in this unique space.",
            "category":"Museum",
            "place":"England",
            "capacity":"1200",
            "estimate":"1140",
            "price":6500,
            "__v":0
        },
        {
            "_id":"628d7f40c2126f956d8fe9b0",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine5.jpg",
            "name":"Aladdin",
            "date":"2021-3-11",
            "description":"We invite you watch Disney's classic character in new adventures.",
            "category":"Cinema",
            "place":"Room D2",
            "capacity":"10000",
            "assistance":"8300",
            "price":125,
            "__v":0
        },
        {
            "_id":"628d7f6cc2126f956d8fe9b2",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine6.jpg",
            "name":"X-men",
            "date":"2022-3-11",
            "description":"New characters, new adventures and a world in which they are not welcomed.",
            "category":"Cinema",
            "place":"Room D2",
            "capacity":"10000",
            "estimate":"10000",
            "price":200,
            "__v":0
        }
        ,{
            "_id":"628d7f88c2126f956d8fe9b4",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas1.jpg",
            "name":"Arabic holidays",
            "date":"2021-10-12",
            "description":"An invitation to enjoy Middle East's flavours.",
            "category":"Food Fair",
            "place":"Room A",
            "capacity":"45000",
            "assistance":"42756",
            "price":10,
            "__v":0
        },
        {
            "_id":"628d7fe5c2126f956d8fe9b6",
            "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton2.jpg",
            "name":"15K Buenos Aires",
            "date":"2021-03-01",
            "description":"Join us for a healthier life and a cleaner city.",
            "category":"Race",
            "place":"Buenos Aires",
            "capacity":"300000",
            "assistance":"256980",
            "price":2,
            "__v":0
        }
    ]
}

var array = [
    ...data.events
]
console.log("Array", array)


// ------------- Create an array ordered by capacity -------------
let sortedCapacity = array.sort((a,b) => 
    b.capacity - a.capacity
)
//console.log("sortedCapacity", sortedCapacity)
let topCapacity = sortedCapacity.slice(0, (sortedCapacity.length*0.1));
console.log("topCapacity", topCapacity)

// Otra forma
/* let sortedCapacity = array.sort((a,b) => {
        if (Number(a.capacity) > Number(b.capacity)) {
          return 1;
        }
        if (Number(a.capacity) < Number(b.capacity)) {
          return -1;
        }
        // a must be equal to b
        return 0;
})
console.log(sortedCapacity) */
 
/* let topCapacity = sortedCapacity.slice(sortedCapacity.length - (sortedCapacity.length*0.1), sortedCapacity.length);
// para redondear Math.round(sortedCapacity.length - (sortedCapacity.length*0.1))
console.log(topCapacity) */



// ------------- Create an array ordered by assistance -------------
let arrayAssistance = []
for (let i = 0; i < array.length; i++) {
    if (array[i].assistance) {
        arrayAssistance.push(array[i])
    }
}
console.log("arrayAssistance", arrayAssistance)

let sortedAssistance = arrayAssistance.sort((a,b) => 
    (b.assistance*100)/b.capacity - (a.assistance*100)/a.capacity
)
console.log("sortedAssistance", sortedAssistance) 

// Array with highest porcentage of assistance 
let highAssistanceTop = sortedAssistance.slice(0, Math.round(sortedAssistance.length*0.1)+2)
console.log("highAssistanceTop", highAssistanceTop)

// Array with lowest porcentage of assistance
let lowAssistanceTop = sortedAssistance.slice(sortedAssistance.length - Math.round(sortedAssistance.length*0.1)-2, sortedAssistance.length).reverse()
console.log("lowAssistanceTop", lowAssistanceTop)  




// ------------- Create an array with categories -------------
//Date convertion:
//1 Date to convert
//2 Split
//3 Convert to Date 
//4 Convert to timestamp gettime
const dateToCompare = data.currentDate;
//console.log(dateToCompare);
const dateSplit = dateToCompare.split("-");
//console.log(dateSplit);
const dateToCompareParsed = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]);
//console.log(dateToCompareParsed);
const dateTimeStamp = dateToCompareParsed.getTime();
//console.log(dateTimeStamp);

function dateConvert(event) {
  let dateEventToCompare; 
  let dateEventSplit; 
  let dateEventParsed;
  let dateEventTimeStamp; 
  dateEventToCompare = data.events[event].date;
  dateEventSplit = dateEventToCompare.split("-");
  dateEventParsed = new Date(dateEventSplit[0],dateEventSplit[1]-1,dateEventSplit[2]);
  dateEventTimeStamp = dateEventParsed.getTime();
  return dateEventTimeStamp;
}

//Array with Upcoming Events
let arrayUpcomingEvents = []
for (let i=0; i < data.events.length; i++) {
    if (dateTimeStamp < dateConvert(i)) {
        arrayUpcomingEvents.push(data.events[i])
    }
}
console.log("arrayUpcomingEvents", arrayUpcomingEvents) 

// Upcoming Events categories array
let upEventsCategories = arrayUpcomingEvents.map(ev => ev.category)
const upEventsCatNoRep = [... new Set(upEventsCategories)];
console.log("upEventsCatNoRep", upEventsCatNoRep); 

//Array without repeated categories from Past Events
let arrayPastEvents = []
for (let i=0; i < data.events.length; i++) {
    if (dateTimeStamp > dateConvert(i)) {
        arrayPastEvents.push(data.events[i])
    }
}
console.log("arrayPastEvents", arrayPastEvents)

let pastEventsCategories = arrayPastEvents.map(ev => ev.category)
const pastEventsCatNoRep = [... new Set(pastEventsCategories)];
console.log("pastEventsCatNoRep", pastEventsCatNoRep); 



// ------------- Revenues calculation -------------
function revenuesUpEvents(event) {
    let counter = Number(event.estimate) * event.price
    return counter
}

function revenuesPastEvents(event) {
    let counter = Number(event.assistance) * event.price
    return counter 
}

// Upcoming Events revenues 
let arrayUpEvRevenues = [];
let upCounter = 0;
for (let i = 0; i < upEventsCatNoRep.length; i++) {
    arrayUpEvRevenues.push(upEventsCatNoRep[i]);
    for(let e = 0; e < arrayUpcomingEvents.length; e++) {
        if (upEventsCatNoRep[i] === arrayUpcomingEvents[i].category) {
            upCounter = upCounter + revenuesUpEvents(arrayUpcomingEvents[i])
        } 
    }
    arrayUpEvRevenues.push(upCounter)
}
console.log("arrayUpEvRevenues", arrayUpEvRevenues)


// Past Events revenues 
let arrayPastEvRevenues = [];
let pastCounter = 0;
for (let i = 0; i < pastEventsCatNoRep.length; i++) {
    arrayPastEvRevenues.push(pastEventsCatNoRep[i]);
    for (let e = 0; e < arrayPastEvents.length; e++) {
        if (pastEventsCatNoRep[i] === arrayPastEvents[i].category) {
            pastCounter = pastCounter + revenuesPastEvents(arrayPastEvents[i])
        }
    }
    arrayPastEvRevenues.push(pastCounter)
}
console.log("arrayPastEvRevenues", arrayPastEvRevenues) 


// ------------- Attendance calculation -------------

/*
    function attendanceUpEvents(event) {
        let counter = Math.round((event.estimate*100)/event.capacity)
        return counter
    }

    function attendancePastEvents(event) {
        let counter = Math.round((event.assistance*100)/event.capacity)
        return counter
    }
*/

// Upcoming Events attendance percentage
let upCapacity = 0;
let upEstimate = 0;
let perUEAttendance = 0;
let arrayUpEvAttendance = [];
for (let i = 0; i < upEventsCatNoRep.length; i++) {
    arrayUpEvAttendance.push(upEventsCatNoRep[i])
    for ( let e = 0; e < arrayUpcomingEvents.length; e++) {
        if (upEventsCatNoRep[i] === arrayUpcomingEvents[e].category) {
            //console.log(arrayUpcomingEvents[e].capacity)
            upCapacity = upCapacity + Number(arrayUpcomingEvents[e].capacity)
            console.log("upCapacity", upCapacity)
            //console.log(arrayUpcomingEvents[e].estimate)
            upEstimate = upEstimate + Number(arrayUpcomingEvents[e].estimate)
            console.log("upEstimate", upEstimate)
        }
        //console.log("upCapacity", upCapacity)
        //console.log("upEstimate", upEstimate)
    }
    perUEAttendance = Math.round( ( upEstimate * 100 ) / upCapacity )
    console.log("perUEAttendance", perUEAttendance)
    arrayUpEvAttendance.push(perUEAttendance)
}
console.log("arrayUpEvAttendance", arrayUpEvAttendance)


// Past Events attendance percentage 
let pastCapacity = 0;
let pastAssistance = 0;
let perPEAttendance = 0;
arrayPastEvAttendance = [];
for (let i = 0; i < pastEventsCatNoRep.length; i++) {
    arrayPastEvAttendance.push(pastEventsCatNoRep[i])
    for ( let e = 0; e < arrayPastEvents.length; e++) {
        if (pastEventsCatNoRep[i] === arrayPastEvents[e].category) {
            pastCapacity = pastCapacity + Number(arrayPastEvents[e].capacity)
            console.log("pastCapacity", pastCapacity)
            pastAssistance = pastAssistance + Number(arrayPastEvents[e].assistance)
            console.log("pastAssistance", pastAssistance)
        }
    }
    perPEAttendance = Math.round( ( pastAssistance * 100 ) / pastAssistance )
    console.log("perPEAttendance", perPEAttendance)
    arrayPastEvAttendance.push(perPEAttendance)
}
console.log("arrayPastEvAttendance", arrayPastEvAttendance)





// ------------- Set stats in table -------------

// Highest porcentage of attendance column
const tdHA = document.getElementById("high-assistance")
const tdHighAssistance = document.querySelectorAll(".high-assistance")
highAssistanceTop.forEach(event => {
    const divHighAttendance = document.createElement("div")
    divHighAttendance.innerHTML = `
        <div class="stats-text" style="display:flex; justify-content: space-between;">
            <span style="font-weight: bold;">${event.name}</span>
            <p>%${Math.round((event.assistance*100)/event.capacity)}
        </div>
    `
    tdHA.appendChild(divHighAttendance)
})


// Lowest porcentage of attendance column
const tdLA = document.getElementById("low-assistance")
const tdLowhAssistance = document.querySelectorAll(".low-assistance")
lowAssistanceTop.forEach(event => {
    const divLowAttendance = document.createElement("div")
    divLowAttendance.innerHTML = `
        <div class="stats-text" style="display:flex; justify-content: space-between;">
            <span style="font-weight: bold;">${event.name}</span>
            <p>%${Math.round((event.assistance*100)/event.capacity)}
        </div>
    `
    tdLA.appendChild(divLowAttendance)
})


// Larger capacity
const tdLargerCapacity = document.querySelectorAll(".larger-capacity")
const tdLC = document.getElementById("larger-capacity")
topCapacity.forEach(event => {
    const divTopCapacity = document.createElement("div")
    divTopCapacity.innerHTML = `
        <div class="stats-text" style="display:flex; justify-content: space-between;">
            <span style="font-weight: bold;">${event.name}</span>
            <p>${event.capacity}</p>
        </div>
    `
    tdLC.appendChild(divTopCapacity)
})


// Upcoming events statistics by category
// Categories
const tdUCategories = document.querySelectorAll(".cat-UEvents-stats")
const tdUCategoriesByID = document.getElementById("cat-UEvents-stats")
upEventsCatNoRep.forEach(event => {
    const divCategory = document.createElement("div")
    divCategory.innerHTML = `
        <div>
            <span>${event}</span>
        </div>
    `
    tdUCategoriesByID.appendChild(divCategory)
})

// Revenues 
const tdUpRevenues = document.querySelectorAll(".revenue-up-stats")
const tdUpRevenuesByID = document.getElementById("revenue-up-stats")
for (let i = 0; i < arrayUpEvRevenues.length - 1; i++) {
    const divRevenue = document.createElement("div")
    for (let e = 0; e < upEventsCatNoRep.length; e++) {
        if (arrayUpEvRevenues[i] === upEventsCatNoRep[e]) {
            divRevenue.innerHTML = `
                <div style="display: flex; justify-content: space-between;" >
                    <p style="margin: 0;">$${arrayUpEvRevenues[i+1]}</p>
                </div>
            `
            tdUpRevenuesByID.appendChild(divRevenue)
        }
    }
}

// Attendance
const tdUpAttendance = document.querySelectorAll(".attendance-stats")
const tdUpAttendanceByID = document.getElementById("attendance-up-stats")
for (let i = 0; i < arrayUpEvAttendance.length - 1; i++) {
    const divAttendance = document.createElement("div")
    for (let e = 0; e < upEventsCatNoRep.length; e++) {
        if (arrayUpEvAttendance[i] === upEventsCatNoRep[e]) {
            divAttendance.innerHTML = `
                <div style="display: flex; justify-content: space-between;" >
                    <p style="margin: 0;">%${arrayUpEvAttendance[i+1]}</p>
                </div>
            `
            tdUpAttendanceByID.appendChild(divAttendance)
        }
    }
}




// Past events statistics by category
// Categories
const tdPCategories = document.querySelectorAll(".cat-PEvents-stats")
const tdPCategoriesByID = document.getElementById("cat-PEvents-stats")
pastEventsCatNoRep.forEach(event => {
    const divCategory = document.createElement("div")
    divCategory.innerHTML = `
        <div>
            <span>${event}</span>
        </div>
    `
    tdPCategoriesByID.appendChild(divCategory)
})

// Revenues 
const tdPastRevenues = document.querySelectorAll(".revenue-stats")
const tdPastRevenuesByID = document.getElementById("revenue-past-stats")
for (let i = 0; i < arrayPastEvRevenues.length - 1; i++) {
    const divRevenue = document.createElement("div")
    for (let e = 0; e < pastEventsCatNoRep.length; e++) {
        if (arrayPastEvRevenues[i] === pastEventsCatNoRep[e]) {
            divRevenue.innerHTML = `
                <div style="justify-content: space-between;" >
                    <p style="margin: 0;">$${arrayPastEvRevenues[i+1]}</p>
                </div>
            `
            tdPastRevenuesByID.appendChild(divRevenue)
        }
    }
}

// Attendance
const tdPastAttendance = document.querySelectorAll(".attendance-stats")
const tdPastAttendanceByID = document.getElementById("attendance-past-stats")
for (let i = 0; i < arrayPastEvAttendance.length - 1; i++) {
    const divAttendance = document.createElement("div")
    for (let e = 0; e < pastEventsCatNoRep.length; e++) {
        if (arrayPastEvAttendance[i] === pastEventsCatNoRep[e]) {
            divAttendance.innerHTML = `
                <div style="display: flex; justify-content: space-between;" >
                    <p style="margin: 0;">%${arrayPastEvAttendance[i+1]}</p>
                </div>
            `
            tdPastAttendanceByID.appendChild(divAttendance)
        }
    }
}