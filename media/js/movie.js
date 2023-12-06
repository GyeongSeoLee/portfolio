var video; //전역변수 선언

function changeVideo(linkBtn){ //linkBtn=>클릭한 a태그
	video=document.getElementById('testVideo'); //video 태그 객체 생성
        //video태그
	video.src=linkBtn.href; // 'movie/video01.mp4' 비디오 경로 수정
	video.load(); //연결된 비디오를 로딩한다.
	video.type='video/mp4'; //해당 코덱을 지정한다 (생략가능)
	video.play(); //비디오를 재생한다.
	return false;
}

// <a href="movie/video01.mp4" title="잡스아저씨1">