// write cool JS hwere!!


// normal function

function gimmiStuff() {

    return "stuff"
}



function getStuff() {

    const result = gimmiStuff();
    console.log(result);

}

getStuff()


// promises og async functions

function waitforSeconds() {

    // promise oprettelse
    return new Promise((resolve) => {

        // timeout arrow function der executer når perioden er gået
        setTimeout(() => {
            console.log('timeout');
            resolve('resolved');
        }, 8000 // tid i ms);

    });
}

async function asyncCall() {
    console.log('calling waitforSeconds');

    const result = await waitforSeconds();

    console.log('asyncCall: ' + result);

    // Expected output: "resolved"
}


//asyncCall();




// fetch med promise



// fetch med .then chain

function getDog() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.table(data);

        })
        .catch((error) => {
            console.log(error);

        })
}

//getDog()