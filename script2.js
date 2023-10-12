const listEl = document.querySelector('.feedbackList');
const storageList = localStorage.getItem('Feedback');
let feedbackList = storageList ? JSON.parse(storageList) : {};
console.log(feedbackList);
for (const key in feedbackList) {
    if (feedbackList.hasOwnProperty(key)) {
        console.log(feedbackList[key].length);
        if (feedbackList[key].length === 0) {
            delete feedbackList[key];
            localStorage.setItem('Feedback', JSON.stringify(feedbackList));
        }
    }
}
for (const key in feedbackList) {
    if (feedbackList.hasOwnProperty(key)) {

        const liEl = document.createElement('li');
        liEl.textContent = key;
        liEl.classList.add('fbEl');
        listEl.appendChild(liEl);
        let flag = false;
        liEl.addEventListener('click', () => {
            if (!flag) {
                feedbackList[key].forEach(element => {
                    const elementBlock = document.createElement('div');
                    elementBlock.classList.add('elementBlock');
                    const elementText = document.createElement('p');
                    elementText.textContent = element;
                    liEl.appendChild(elementText);
                    const removeBtn = document.createElement('button');
                    removeBtn.textContent = 'Remove';
                    removeBtn.classList.add('removeBtn');
                    liEl.appendChild(removeBtn);
                    removeBtn.addEventListener('click', () => {
                        const index = feedbackList[key].indexOf(element);
                        if (index > -1) {
                            feedbackList[key].splice(index, 1);
                        };
                        localStorage.setItem('Feedback', JSON.stringify(feedbackList));
                        liEl.removeChild(elementText);
                        liEl.removeChild(removeBtn);
                    });
                    flag = true;
                });
            };
        });
    };
};
