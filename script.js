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
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
const displayLevelWord = (words) => {
   const wordContainer = document.getElementById('word-container');
   wordContainer.innerHTML = "";

   words.forEach(word => {
    
    const wordCard = document.createElement('div');
    //
     wordCard.innerHTML = `     
      <div class="bg-white text-center py-10 px-5 rounded-[12px]">
          
          <h2 class="text-2xl font-bold pb-4">
            ${word.word}
          </h2>
          <p class="text-xl font-medium text-[#18181B] pb-4">
            Meaning /Pronounciation
          </p>
          <div class="bangla text-xl font-medium text-[#18181B] pb-10">           
              "${word.meaning} / ${word.pronunciation}"
          </div>

          <div class="flex justify-between pt-5">
            <!-- icons -->
             <i class="transition-[.5s] ri-information-fill px-2.5 py-2 text-[#374957] text-xl bg-[#1a90ff3f] rounded-lg hover:text-[#000000] hover:bg-[#1a90ff9a]"></i>
             <i class="transition-[.5s] ri-volume-down-fill px-2.5 py-2 text-[#374957] text-xl bg-[#1a90ff3f] rounded-lg hover:text-[#000000] hover:bg-[#1a90ff9a]"></i>
          </div>
        </div>
    
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
