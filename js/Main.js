const siteButtons = document.querySelectorAll('.siteButton');
const siteFrame = document.getElementById('siteFrame');
const closeButton = document.getElementById('closeButton');

siteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');

    fetch(url) // 해당 URL의 HTML 파일을 가져옴
        .then(response => response.text()) // 가져온 HTML을 텍스트로 변환
        .then(html => {
            siteFrame.style.display = 'block';
            siteFrame.srcdoc = html; // 아이프레임에 HTML 내용을 표시
            closeButton.style.display = 'block';
        })
        .catch(error => console.error('Fetch Error:', error));
    });
});

closeButton.addEventListener('click', function() {
    siteFrame.style.display = 'none';
    siteFrame.srcdoc = ''; // 아이프레임 비우기
    closeButton.style.display = 'none';
});
