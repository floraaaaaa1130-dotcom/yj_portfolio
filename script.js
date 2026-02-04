// PDF 내용을 바탕으로 만든 포트폴리오 데이터
// 나중에 여기에 프로젝트를 계속 추가하면 자동으로 리스트가 생깁니다.
const tracks = [
    {
        id: 1,
        [cite_start]title: "Love to Work", // [cite: 68]
        artist: "SNS & Contents",
        [cite_start]genre: "Social Media", // [cite: 69]
        [cite_start]desc: "일본어 학습 니즈와 덕질을 결합한 숏폼 콘텐츠. 채널 개설 2개월 만에 1.6만 팔로워 달성.", // [cite: 76, 86]
        [cite_start]skills: "#기획 #트렌드분석 #일본어", // [cite: 72]
        thumb: "https://via.placeholder.com/50/FFC4D0/FFFFFF?text=JP" // 썸네일 이미지 주소
    },
    {
        id: 2,
        [cite_start]title: "밈을 요리하는 법", // [cite: 123]
        artist: "Creative & Edit",
        [cite_start]genre: "Video Editing", // [cite: 125]
        [cite_start]desc: "트렌드 음원과 참여형 게임(집중력 테스트)을 결합한 릴스. 조회수 143만 회 달성.", // [cite: 131, 134, 7]
        [cite_start]skills: "#포토샵 #프리미어 #게이미피케이션", // [cite: 127, 128]
        thumb: "https://via.placeholder.com/50/65D4C4/FFFFFF?text=Meme"
    },
    {
        id: 3,
        [cite_start]title: "Chemistry", // [cite: 275]
        artist: "Communication",
        [cite_start]genre: "Client Service", // [cite: 276]
        [cite_start]desc: "브랜드 협업 및 커뮤니케이션 능력. 꼼꼼한 피드백 반영으로 인센티브 추가 수령 경험.", // [cite: 287, 289]
        [cite_start]skills: "#커뮤니케이션 #영어 #스페인어", // [cite: 278]
        thumb: "https://via.placeholder.com/50/e0f7fa/000000?text=Com"
    }
];

const playlistEl = document.getElementById('playlist');
const albumArt = document.getElementById('albumArt');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const currentTitle = document.getElementById('currentTitle');
const currentArtist = document.getElementById('currentArtist');

// 모달 관련 요소
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalGenre = document.getElementById('modalGenre');
const modalSkills = document.getElementById('modalSkills');

let isPlaying = false;

// 1. 플레이리스트 렌더링 함수
function renderPlaylist() {
    playlistEl.innerHTML = '';
    tracks.forEach(track => {
        const li = document.createElement('li');
        li.className = 'track-item';
        li.innerHTML = `
            <img src="${track.thumb}" alt="thumb" class="track-thumb">
            <div class="track-details">
                <h4>${track.title}</h4>
                <span>${track.artist} · ${track.genre}</span>
            </div>
        `;
        // 리스트 클릭 시 모달 열기
        li.addEventListener('click', () => openModal(track));
        playlistEl.appendChild(li);
    });
}

// 2. 재생 버튼 기능 (회전 애니메이션 토글)
playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        albumArt.classList.add('rotating');
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        playBtn.style.transform = "scale(1.1)";
    } else {
        albumArt.classList.remove('rotating');
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        playBtn.style.transform = "scale(1)";
    }
});

// 3. 모달 열기 함수
function openModal(track) {
    modalTitle.textContent = track.title;
    modalGenre.textContent = track.genre;
    modalDesc.textContent = track.desc;
    modalSkills.textContent = `Used Skills: ${track.skills}`;
    
    // 메인 플레이어 정보도 업데이트
    currentTitle.textContent = track.title;
    currentArtist.textContent = track.artist;

    modal.style.display = "flex";
}

// 4. 모달 닫기
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

// 초기화
renderPlaylist();