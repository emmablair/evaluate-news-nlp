// const baseURL = 'http://api.meaningcloud.com/sentiment-2.1='
// const apiKey = '';

const handleSubmit = async (e) => {
    
    // prevent submit default
    e.preventDefault()

    // const userEntry = document.querySelector('#entry').value;
    console.log("::: Form Submitted :::")

    // grabAPI(baseURL, userEntry, apiKey)

    const userInput = document.querySelector('#entry').value;
    const postInput = await fetch('/input', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({input: userInput})
    });
    console.log(postInput)
    console.log(userInput)
}


// api key from server
// const getKey = async () => {
//     const req = await fetch('/api');
//     try {
//         const data = await req.json();
//         console.log(data);
//         return data;
//     }catch(error){
//         console.log('error', error);
//     }
// }

// Call API web address
// const grabAPI = async (baseURL, userEntry, apiKey) => {
//     const res = await fetch(`${baseURL}key=${apiKey}&lang=en&ilang=en&url="${userEntry}"`);
//     try {
//         const apiData = await res.json();
//         console.log(apiData);
//         return apiData;
//     }catch(error){
//         console.log('error', error);
//     }
// }


export { handleSubmit }
// export { getKey }
// export { grabAPI }
/*
document.getElementById('submit').addEventListener('click', (e) => {
    // user input
    const userURL = document.querySelector('#url').value;
    // function called by event listener
    grabAPI(baseURL, userURL, apiKey)
});
*/