const updateUI = (data) => {
    document.querySelector('#agreement').innerHTML = `${data.agreement.toLowerCase()}`;
    document.querySelector('#irony').innerHTML = `${data.irony.toLowerCase()}`;
    document.querySelector('#subjectivity').innerHTML = `${data.subjectivity.toLowerCase()}`;
    document.querySelector('#confidence').innerHTML = `${data.confidence}% confident`;
    document.querySelector('#results').style.display = 'block';
};

export { updateUI }