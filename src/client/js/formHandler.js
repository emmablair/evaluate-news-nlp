async function handleSubmit(e) {

    // prevent submit default
    e.preventDefault()

    // const userEntry = document.querySelector('#entry').value;
    console.log("::: Form Submitted :::");

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