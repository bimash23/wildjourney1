// document.addEventListener("DOMContentLoaded", function(){
//     const player = document.getElementById("music");
//
//     player.addEventListener("play", function(e){
//        document.getElementById("play-btn").style.display = "none" ;
//        document.getElementById("pause-btn").style.display = "block";
//     });
//
//     player.addEventListener("pause", function(e){
//         document.getElementById("pause-btn").style.display = "none";
//         document.getElementById("play-btn").style.display ="block";
//     });
//
//     player.addEventListener("timeupdate", function(e){
//         const currentTime = parseInt(e.target.currentTime);
//
//         const minute = parseInt(currentTime/60);
//         let second = currentTime - minute * 60;
//
//         if (second <= 9) {
//             second = "0" + second;
//         }
//
//         if (currentTime >= 35) {
//             player.pause();
//             player.currentTime = 0;
//         }
//
//         document.getElementById("duration").innerText = minute + ":" +
//             second;
//     });
// });
//
// function play() {
//     const player = document.getElementById('music');
//     player.play();
// }
//
// function pause() {
//     const player = document.getElementById('music');
//     player.pause();
// }

document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById("music");

    player.addEventListener("timeupdate", function(e) {
        const currentTime = parseInt(e.target.currentTime);

        const minute = parseInt(currentTime / 60);
        let second = currentTime - minute * 60;

        if (second <= 9) {
            second = "0" + second;
        }

        if (currentTime >= 35) {

            player.pause();
            player.currentTime = 0;


            document.getElementById('play-pause-btn').classList.remove('paused');


        }


        document.getElementById("duration").innerText = minute + ":" +
            second;
    });

    const play_pause_btn = document.getElementById('play-pause-btn');
    play_pause_btn.addEventListener('click', function(e) {
        e.preventDefault();

        if (this.classList.contains('paused')) {
            player.pause();
            this.classList.remove('paused');

            return;
        }

        player.play();
        this.classList.add('paused');
    });
});


