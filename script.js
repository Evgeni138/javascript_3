const inputProduct = document.querySelector('.productName');
const inputFeedback = document.querySelector('.feedbackText');
const addFeedback = document.querySelector('.add');

addFeedback.addEventListener('click', () => {
    const item = localStorage.getItem('Feedback');
    const feedback = inputFeedback.value;
    const product = inputProduct.value;

    let feedbackList = item ? JSON.parse(item) : {};

    if (feedbackList[product]) {
        feedbackList[product].push(feedback);
    } else {
        feedbackList[product] = [feedback];
    }

    localStorage.setItem('Feedback', JSON.stringify(feedbackList))

    inputFeedback.value = '';
    inputProduct.value = '';
});
