const urlChecker = (userInput) => {
    const validURL = userInput.match(/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    // userInput.match(validURL);
    if (validURL == null) {
        console.log('Invalid URL!')
        alert('Please input a valid URL.');
        return false;
    }else{
        console.log('Valid URL!')
        return true;
    }
}

export { urlChecker }