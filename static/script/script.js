document.addEventListener("DOMContentLoaded", function () {
    const songList = document.getElementById("song-list");

    songs.forEach((song) => {
        const songItem = document.createElement("div");
        songItem.classList.add("song");

        songItem.innerHTML = `
            <div class="song-content">
                <img src="${song.thumbnail}" alt="${song.title}">
                <div class="song-info">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                </div>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${song.video_id}?si=nD1uyEvyonicl-YG"
                    title="YouTube video player - ${song.title}" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </div>
        `;

        const videoContainer = songItem.querySelector(".video-container");

        songItem.addEventListener("click", () => {
            if (videoContainer.style.maxHeight && videoContainer.style.maxHeight !== "0px") {
                videoContainer.style.maxHeight = "0px"; // Thu nhỏ dần
                setTimeout(() => videoContainer.style.display = "none", 500); // Ẩn sau khi animation kết thúc
            } else {
                videoContainer.style.display = "block"; // Hiển thị trước
                setTimeout(() => {
                    videoContainer.style.maxHeight = "350px"; // Mở rộng dần
                }, 10); // Chờ một chút để `display: block` áp dụng trước
            }
        });

        songList.appendChild(songItem);
    });
});
