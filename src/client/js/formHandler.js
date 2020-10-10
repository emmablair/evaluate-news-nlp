async function handleSubmit(e) {

    // prevent submit default action
    e.preventDefault()
    const userInput = document.querySelector('#entry').value;
    const valid = Client.urlChecker(userInput);
    if(!valid) {
        return
    }else{
        console.log("::: Form Submitted: SENTIMENT :::");

        // do this on submition
        Client.onSubmit();
        
        // user input
        // const userInput = document.querySelector('#entry').value;

        // API call
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
        handleSummary(e);
        Client.updateUI(response);
    }
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