

const buttonsOne = document.getElementById('buttonCatagoryAll');
const buttonTwo = document.getElementById('secondButtons')
const buttonsThree = document.getElementById('buttonsthree')
const buttonsFours = document.getElementById('buttonFour')
const buttons = [buttonsOne, buttonTwo, buttonsThree, buttonsFours]

const activeButtonsHandler = (active) => {
    inActiveButtonsHandler();
    active.classList.remove("text-gray-700", "hover:bg-gray-300", "bg-gray-200");
    active.classList.add("bg-[#FF1F3D]", "hover:bg-[#dc2d44]", "text-white");
}


const inActiveButtonsHandler = async () =>{
    for (let i = 0; i<buttons.length; i++){
        const button = buttons[i];
        button.classList.remove("bg-[#FF1F3D]", "hover:bg-[#dc2d44]", "text-white");
        button.classList.add("text-gray-700", "hover:bg-gray-300", "bg-gray-200");
    }
}










const loadAllCatagoryAPI = async () => {


    activeButtonsHandler(buttonsOne);
    funLoadingSpinner(true)
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    const valu = await res.json()
    // console.log(data)
    // const alldata = valu.data;

    // showAllCatagory(alldata);


    if (valu.status === true) {
        showAllCatagory(valu.data);
    }
    else {

        console.log('Data no found')
    }
    // console.log(alldata)

}

const loadCatagoryMusicAPI = async () => {
    activeButtonsHandler(buttonTwo);
    funLoadingSpinner(true)
    const refs = await fetch(`https://openapi.programming-hero.com/api/videos/category/1001`)
    const convert = await refs.json();
    // const data = convert.data;
    // showAllCatagory(data);

    if (convert.status === true) {
        showAllCatagory(convert.data);
    }
    else {

        console.log('Data no found')
    }
}

const loadCatagoryComedyAPI = async () => {
    activeButtonsHandler(buttonsThree);
    funLoadingSpinner(true)
    const refs = await fetch(`https://openapi.programming-hero.com/api/videos/category/1003`)
    const convert = await refs.json();
    // const comedy = convert.data;
    // showAllCatagory(comedy);

    if (convert.status === true) {
        showAllCatagory(convert.data);
    }
    else {

        console.log('Data no found')
    }
}
const loadCatagoryDrawingAPI = async () => {
    activeButtonsHandler(buttonsFours);
    funLoadingSpinner(true)
    const refs = await fetch(`https://openapi.programming-hero.com/api/videos/category/1005`)
    const convert = await refs.json();
    // const drawing = convert.data;
    // showAllCatagory(drawing);
    if (convert.status === true) {
        showAllCatagory(convert.data);
    }
    else {

        funLoadingSpinner(false);
        const mainContainItems = document.getElementById('mainContainItems');
        mainContainItems.innerHTML = ` 
        <div class="mt-44 col-span-4">
          <h1 class="text-center text-4xl"> Data is Not a Founds. </h1>
        </div>
        `;

    }
}



/* const fastBittons = document.querySelector('#secondButtons');
fastBittons.addEventListener('click', () => {
fastBittons.style.backgroundColor = '#FF1F3D';
fastBittons.style.color = 'white';

}) */


const showAllCatagory = alldata => {



    const mainContainItems = document.getElementById('mainContainItems');
    mainContainItems.innerHTML = ' ';

    alldata.forEach(element => {
        console.log(element)
        const AllCatagoryCreatElement = document.createElement('div');
        AllCatagoryCreatElement.innerHTML = `
                <div class=" w-80 bg-base-100 mb-8">
                    <figure><img  class="rounded-lg h-48 w-80" src="${element.thumbnail}"
                            alt="Shoes" /></figure>
                    <div class="py-6">
                        <div class="flex">
                            <div>
                                <img class="w-12 h-12 rounded-full" src="${element.authors[0].profile_picture}">
                            </div>
                            <div class="pl-4">
                                <h4 class="leading-6 text-1xl manrope-uniquifier font-bold">${element.title}</h4>
                                <div class="inline-flex">
                                    <p class="leading-8">${element.authors[0].profile_name}</p>
                                    <div class="grid ml-1 place-items-center "><img class="w-4 h-4 mt-1 "
                                            src="./img/Group 3.png" alt=""></div>
                                </div>
                                <h5>91K views</h5>
                            </div>
                        </div>
                    </div>
                </div>
    `;

        mainContainItems.appendChild(AllCatagoryCreatElement);


    });

    funLoadingSpinner(false);

}



/* loadAllCatagoryAPI(); */


const funLoadingSpinner = (isloading) => {
    const loadingSpiner = document.getElementById('loading');
    if (isloading) {
        loadingSpiner.classList.remove("hidden");
    }
    else {
        loadingSpiner.classList.add("hidden");
    }
}








