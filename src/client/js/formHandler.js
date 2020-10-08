async function handleSubmit(e) {

    // prevent submit default
    e.preventDefault()

    // const userEntry = document.querySelector('#entry').value;
    console.log("::: Form Submitted :::");
    // hide previous results after each submit
    document.querySelector('#results').style.visibility = 'hidden';
    document.querySelector('#results').style.opacity = '0';
    // display results pending msg
    document.querySelector('#label').style.opacity = '1';
    document.querySelector('#label').style.visibility = 'visible';
    // change cursors after submit
    document.querySelector('.bg').style.cursor = 'wait';
    document.querySelector('#submit').style.cursor = 'wait';
    // grabAPI(baseURL, userEntry, apiKey)
    const userInput = document.querySelector('#entry').value;
    const response = await fetch('/input', {
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
        console.log('promise error', error);
    });
    console.log(response);
    Client.updateUI(response);
}

export { handleSubmit }