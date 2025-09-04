const loadLesson = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(data => displayLesson(data.data));
}

const lessonCardContainer = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(json => displayLevelWord(json.data))
    
}
const displayLevelWord = (words) => {
   const wordContainer = document.getElementById('word-container');
   //wordContainer.innerHTML = "";

   words.forEach(word => {
    
    const wordCard = document.createElement('div');
    wordCard.innerHTML = `
    
    `;

    wordContainer.append(wordCard)
   })
}
const displayLesson = (lessons) => {
    
//1. get the container empty
    const LessonContainer = document.getElementById('lesson-container');
    LessonContainer.innerHTML = "";

    // //2.get lesson one by one

    lessons.forEach(lesson => {
       //3.creat new element
       const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
         <button onclick="lessonCardContainer(${lesson.level_no})" class="btn  btn-soft btn-primary border-[1px] border-[#422AD5]"><i class="ri-book-open-fill"></i>lesson- ${lesson.level_no}</button>
         `
        LessonContainer.append(btnDiv); 
    });
    //     console.log(lesson);
        
        // const btnDiv = document.createElement('div');
        // btnDiv.innerHTML = `
        // <button class="btn btn-soft btn-primary border-[1px] border-[#422AD5]"><i class="ri-book-open-fill"></i> ${lesson.name}-</button>
        
        // `
        // LessonContainer.appendChild(btnDiv);   
    };
    loadLesson()
