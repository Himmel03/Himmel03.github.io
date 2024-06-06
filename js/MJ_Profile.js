/* ------------------------------------------------------------------------------ NEXT 버튼, 내비게이션 글씨 ------------------------------------------------------------------------------ */
const NextButton1 = document.getElementById('next-bttn-1');
const NextButton2 = document.getElementById('next-bttn-2');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

// // 헤더 NEXT 버튼1 눌렀을 때 //
NextButton1.addEventListener('click', () => {
    window.scrollBy({top: section1.getBoundingClientRect().top, behavior: 'smooth'});
}
);

// // 헤더 NEXT 버튼2 눌렀을 때 //
NextButton2.addEventListener('click', () => {
    window.scrollBy({top: section2.getBoundingClientRect().top, behavior: 'smooth'});
}
);

const nav_profile = document.getElementById('nav-profile');
const nav_project = document.getElementById('nav-project');

// // 내비게이션의 프로필 글씨를 눌렀을 때 //
nav_profile.addEventListener('click', () => {
    window.scrollBy({top: section1.getBoundingClientRect().top, behavior: 'smooth'});
}
);

// // 내비게이션의 프로젝트 글씨를 눌렀을 때 //
nav_project.addEventListener('click', () => {
    window.scrollBy({top: section2.getBoundingClientRect().top, behavior: 'smooth'});
}
);


/* ------------------------------------------------------------------------------ 캐러셀 ------------------------------------------------------------------------------ */
// 캐러셀 영역
const carousel1 = document.querySelector("#carousel1");
const carousel2 = document.querySelector("#carousel2");
const carousel3 = document.querySelector("#carousel3"); 
const carousel4 = document.querySelector("#carousel4");
const carousel5 = document.querySelector("#carousel5"); 

// 프로젝트 이미지
const pics1 = ["project1-1.jpg", "project1-2.jpg","project1-3.jpg"];
const pics2 = ["project2-1.jpg", "project2-2.jpg","project2-3.jpg", "project2-4.jpg", "project2-5.jpg"];
const pics3 = ["project3-1.jpg", "project3-2.jpg","project3-3.jpg", "project3-4.jpg", "project3-5.jpg", "project3-6.jpg", "project3-7.jpg", "project3-8.jpg", "project3-9.jpg", "project3-10.jpg", "project3-11.jpg"];
const pics4 = ["project4-1.jpg", "project4-2.jpg","project4-3.jpg", "project4-4.jpg", "project4-5.jpg"];
const pics5 = ["project5-1.jpg", "project5-2.jpg","project5-3.jpg", "project5-4.jpg", "project5-5.jpg"];

// 첫 번째 이미지 기본으로 표시
carousel1.style.backgroundImage = `url(img/${pics1[0]})`;
carousel2.style.backgroundImage = `url(img/${pics2[0]})`; 
carousel3.style.backgroundImage = `url(img/${pics3[0]})`;
carousel4.style.backgroundImage = `url(img/${pics4[0]})`;
carousel5.style.backgroundImage = `url(img/${pics5[0]})`;

// 화살표
const arrows1 = document.querySelectorAll(".arrow1");
const arrows2 = document.querySelectorAll(".arrow2");
const arrows3 = document.querySelectorAll(".arrow3");
const arrows4 = document.querySelectorAll(".arrow4");
const arrows5 = document.querySelectorAll(".arrow5");

// 배열 인덱스
let i = 0;

// 프로젝트1
arrows1.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if (e.target.id === "left1") { // 왼쪽 화살표 클릭하면
            i--; // 이전 이미지로 이동
            if (i < 0) { // 처음 이미지면
                i = pics1.length -1; // 마지막 이미지로
            }
        }
        else if (e.target.id ==="right1") { // 오른쪽 화살표 클릭하면
            i++; // 다음 이미지로 이동
            if (i >= pics1.length) { // 마지막 이미지면
                i = 0; // 처음 이미지로
            }
        }
        carousel1.style.backgroundImage = `url(img/${pics1[i]})` // 현재 이미지 표시
    });
});

// 프로젝트2
arrows2.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if (e.target.id === "left2") { // 왼쪽 화살표 클릭하면
            i--; // 이전 이미지로 이동
            if (i < 0) { // 처음 이미지면
                i = pics2.length -1; // 마지막 이미지로
            }
        }
        else if (e.target.id ==="right2") { // 오른쪽 화살표 클릭하면
            i++; // 다음 이미지로 이동
            if (i >= pics2.length) { // 마지막 이미지면
                i = 0; // 처음 이미지로
            }
        }
        carousel2.style.backgroundImage = `url(img/${pics2[i]})` // 현재 이미지 표시
    });
});

// 프로젝트3
arrows3.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if (e.target.id === "left3") { // 왼쪽 화살표 클릭하면
            i--; // 이전 이미지로 이동
            if (i < 0) { // 처음 이미지면
                i = pics3.length -1; // 마지막 이미지로
            }
        }
        else if (e.target.id ==="right3") { // 오른쪽 화살표 클릭하면
            i++; // 다음 이미지로 이동
            if (i >= pics3.length) { // 마지막 이미지면
                i = 0; // 처음 이미지로
            }
        }
        carousel3.style.backgroundImage = `url(img/${pics3[i]})` // 현재 이미지 표시
    });
});

// 프로젝트4
arrows4.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if (e.target.id === "left4") { // 왼쪽 화살표 클릭하면
            i--; // 이전 이미지로 이동
            if (i < 0) { // 처음 이미지면
                i = pics4.length -1; // 마지막 이미지로
            }
        }
        else if (e.target.id ==="right4") { // 오른쪽 화살표 클릭하면
            i++; // 다음 이미지로 이동
            if (i >= pics4.length) { // 마지막 이미지면
                i = 0; // 처음 이미지로
            }
        }
        carousel4.style.backgroundImage = `url(img/${pics4[i]})` // 현재 이미지 표시
    });
});

// 프로젝트5
arrows5.forEach( arrow => {
    arrow.addEventListener("click", (e) => {
        if (e.target.id === "left5") { // 왼쪽 화살표 클릭하면
            i--; // 이전 이미지로 이동
            if (i < 0) { // 처음 이미지면
                i = pics5.length -1; // 마지막 이미지로
            }
        }
        else if (e.target.id ==="right5") { // 오른쪽 화살표 클릭하면
            i++; // 다음 이미지로 이동
            if (i >= pics5.length) { // 마지막 이미지면
                i = 0; // 처음 이미지로
            }
        }
        carousel5.style.backgroundImage = `url(img/${pics5[i]})` // 현재 이미지 표시
    });
});