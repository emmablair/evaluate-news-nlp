const onSubmit = () => {
    // hide previous results after each submit
    document.querySelector('#results').style.visibility = 'hidden';
    document.querySelector('#results').style.opacity = '0';
    // display results pending msg
    document.querySelector('#label').style.opacity = '1';
    document.querySelector('#label').style.visibility = 'visible';
    // change cursors after submit
    document.querySelector('.bg').style.cursor = 'wait';
    document.querySelector('#submit').style.cursor = 'wait';
};

export { onSubmit }