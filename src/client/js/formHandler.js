async function handleSubmit(e) {

    // prevent submit default
    e.preventDefault()

    // const userEntry = document.querySelector('#entry').value;
    console.log("::: Form Submitted: SENTIMENT :::");
    // do this on submition
    Client.onSubmit();
    document.querySelector('#results').style.maxHeight = '0';
    // grabAPI(baseURL, userEntry, apiKey)
    const userInput = document.querySelector('#entry').value;
    const response = await fetch('/input',  {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput })
    })
    .then(res => {
        const postData = res.json();
        return postData;
    })
    .catch((error) => {
        console.log('HANDLE SUBMIT promise error', error);
    });
    console.log(response);
    document.querySelector('#results').style.maxHeight = 'none';
    handleSummary(e);
    Client.updateUI(response);
}

// Summary API call
async function handleSummary(e) {

    console.log("::: Form Submitted: SUMMARY :::");

    const userInput = document.querySelector('#entry').value;
    const response = await fetch('/summary',  {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput })
    })
    .then(res => {
        const postData = res.json();
        return postData;
    })
    .catch((error) => {
        console.log('HANDLE SUMMARY promise error', error);
    });
    console.log(response);
    Client.updateSummary(response);
}

export { handleSubmit }