// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

// //Challenge. Render all the notes inside notes.js as a seperate Note
// //component.

// const videoCardContainer = document.querySelector(".video-container");

// let API_KEY = "AIzaSyCDSsisKQftZqeJv9G1OTR1oa-q9hxtc-Q";
// let video_http = "https://www.googleapis.com/youtube/v3/videos?";
// let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

// fetch(video_http + new URLSearchParams({
//     key: API_KEY,
//     part: 'snippet',
//     chart: 'mostPopular',
//     maxResults: 12,
//     regionCode: 'IN'

// })).then(res => res.json())
//     .then(function (data) {
//         console.log(data);
//         data.items.forEach(item => {
//             getChannelIcon(item);
//         });
//     }).catch(err => console.log(err))

// const getChannelIcon = (video_data) => {
//     fetch(channel_http + new URLSearchParams({
//         key: API_KEY,
//         part: 'snippet',
//         id: video_data.snippet.channelId
//     })).then(res => res.json()
//     )
//         .then(function (data) {
//             video_data.channelTHumbnail = data.items[0].snippet.thumbnails.default.url;
//             makeVideoCard(video_data);
//             return console.log(video_data);
//         })
// }

// const makeVideoCard = (data) => {
//     videoCardContainer.innerHTML += `
//     <div className="video" onClick="location.href = 'https://www.youtube.com/watch?v=${data.id}'">
//                 <img src="${data.snippet.thumbnails.high.url}" className="thumbnail" alt=""></img>
//                 <div className="content">
//                     <img src="${data.channelTHumbnail}" class="channel-icon" alt="img2"></img>
//                     <div className="info">
//                     <h4 className="title">${data.snippet.title}</h4>
//                     <p className="channel-name">${data.snippet.channelTitle}</p>
//                     </div>
//                 </div>
//             </div>`
// }