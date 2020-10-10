const updateUI = (data) => {
    document.querySelector('#agreement').innerHTML = `${data.agreement.toLowerCase()}`;
    document.querySelector('#irony').innerHTML = `${data.irony.toLowerCase()}`;
    document.querySelector('#subjectivity').innerHTML = `${data.subjectivity.toLowerCase()}`;
    document.querySelector('#confidence').innerHTML = `${data.confidence}% confident`;
    // change curser back
    document.querySelector('#submit').style.cursor = 'pointer';
    document.querySelector('.bg').style.cursor = 'default';
    // remove pending msg & ADD display results
    document.querySelector('#label').style.visibility = 'hidden';
    document.querySelector('#label').style.opacity = '0';
    document.querySelector('#results').style.maxHeight = 'none';
    document.querySelector('#results').style.visibility = 'visible';
    document.querySelector('#results').style.opacity = '1';
};

const updateSummary = (data) => {
    document.querySelector('#summary').innerHTML = `${data.summary}`;
}

export { updateUI }
export { updateSummary }