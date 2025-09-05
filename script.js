const loadLesson = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(data => displayLesson(data.data));
}

const removeActive = () =>{
  
const lessonsBtns =  document.querySelectorAll('.lesson-btn');
 // console.log(lessonsBtns);
  lessonsBtns.forEach(btn => btn.classList.remove('active'))
} 


const lessonCardContainer = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(json => {
      removeActive()//remove all
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      // console.log(clickBtn);
      clickBtn.classList.add('active')
      
      displayLevelWord(json.data)
    })
    

};

const loadWordDetail = async(id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  console.log(url);
  const res = await fetch(url);
  const details = await res.json();
  displayWordDetails(details.data)
  
}
// "word": "Eager",
// "meaning": "আগ্রহী",
// "pronunciation": "ইগার",
// "level": 1,
// "sentence": "The kids were eager to open their gifts.",
// "points": 1,
// "partsOfSpeech": "adjective",
// "synonyms": [
// "enthusiastic",
// "excited",
// "keen"
const displayWordDetails = (word) => {
  // console.log(word);
  
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = `
   <div class="text-left p-3 border-1 border-[#edf7ff]">
        <h2 class="text-4xl/[40px] font-bold">
          ${word.word} (<i class="ri-mic-2-fill"></i>:${word.pronunciation})
        </h2>
        <h4 class="text-xl/[40px] font-semibold">
          Meaning
        </h4>
        <p class="bangla text-[24px]/[40px] font-medium text-[#79716B]">
          ${word.meaning}
        </p>
        <h4 class="text-xl/[40px] font-bold">
          Example
        </h4>
        <p class="text-[24px]/[40px] font-medium text-[#79716B]">
          ${word.sentence}
        </p>
        <p class="bangla text-xl/[40px] font-medium text-[#79716B] pb-3">
          সমার্থক শব্দ গুলো
        </p>
        <div class="flex justify-start items-center gap-3 ">

          <p class="bg-[#edf7ff75] text-[16px] font-medium text-[#79716B] rounded-lg p-5">${word.synonyms[0]}</p>
          <p class="bg-[#edf7ff75] text-[16px] font-medium text-[#79716B] rounded-lg p-5">${word.synonyms[1]}</p>
          <p class="bg-[#edf7ff75] text-[16px] font-medium text-[#79716B] rounded-lg p-5">${word.synonyms[2]}</p>
           
        </div>
      </div>
    <button class="btn btn-soft btn-primary botrder-[1px] border-[#422AD5] mt-6">Complete Learning</button>
    `;
    document.getElementById('my_World').showModal();

}
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
const displayLevelWord = (words) => {
   const wordContainer = document.getElementById('word-container');
   wordContainer.innerHTML = "";

   if(words.length === 0 ){
    wordContainer.innerHTML = `
    <div class="grid col-span-full rounded-xl py-10 spece-y-6 bangla text-center">
          <img src="assets/alert-error.png" alt="" class="mx-auto">
          <p class="text-[13px]/[24px] font-medium text-[#79716B] pb-6">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <h2 class="text-3xl font-medium ">
          নেক্সট Lesson এ যান
          </h2>
        </div>
    `
   }

   words.forEach(word => {
    
    const wordCard = document.createElement('div');
    //
     wordCard.innerHTML = `     
      <div class="bg-white text-center py-8 px-3 rounded-[12px]">
          
          <h2 class="text-2xl font-bold pb-4">
            ${word.word ? word.word : 'NO Word Has Found'}
          </h2>
          <p class="text-xl font-medium text-[#18181B] pb-4">
            Meaning /Pronounciation
          </p>
          <div class="bangla text-xl font-medium text-[#18181B] pb-10">           
              "${word.meaning ? word.meaning : "No Meaning Has Found"} / ${word.pronunciation ? word.pronunciation : 'No pronounciation Has Found'}"
          </div>

          <div class="flex justify-between pt-5">
            <!-- icons -->
             <button onclick="loadWordDetail(${word.id})" class="transition-[.5s]  px-2.5 py-2 text-[#374957] text-xl bg-[#1a90ff3f] rounded-lg hover:text-[#000000] hover:bg-[#1a90ff9a]">
               <i class="ri-information-fill"></i>
             </button>

             <button class="transition-[.5s]  px-2.5 py-2 text-[#374957] text-xl bg-[#1a90ff3f] rounded-lg hover:text-[#000000] hover:bg-[#1a90ff9a]">
               <i class="ri-volume-down-fill"></i>
             </button>
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
         <button id="lesson-btn-${lesson.level_no}" onclick="lessonCardContainer(${lesson.level_no})" class="btn  btn-soft btn-primary border-[1px] border-[#422AD5] lesson-btn"><i class="ri-book-open-fill"></i>lesson- ${lesson.level_no}</button>
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
