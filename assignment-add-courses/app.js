const courseNameInput = document.querySelector('#input-course-name');
const courseRatingInput = document.querySelector('#input-course-rating');
const addCourseBtn = document.querySelector('#btn-add-course');
const clearBtn = document.querySelector('#btn-clear');
const coursesList = document.querySelector('#courses-list');
const alertCtrl = document.querySelector('ion-alert-controller');

const clear = () => {
    courseNameInput.value = '';
    courseRatingInput.value = '';
};

addCourseBtn.addEventListener('click', () => {
    const enteredCourseName = courseNameInput.value;
    const enteredCourseRating = courseRatingInput.value;

    if (enteredCourseName.trim().length <= 0 || enteredCourseRating.trim().length <= 0 || enteredCourseRating <= 0) {
        alertCtrl.create({
            message: 'Please enter valid course name and rating',
            header: 'Invalid inputs',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredCourseName + ' - ' + enteredCourseRating + '/5'; 

    coursesList.appendChild(newItem);
    
    clear();
});

clearBtn.addEventListener('click', clear);