import axios from "axios";

// function getAuthorization(){
//     axios.get("https://accounts.spotify.com/api/token", {
//             headers: {
//             Accept: "application/json",
//             Authorization: `Basic ${process.env.client_id+":"+process.env.client_secret}`,
//             "Content-Type": "application/x-www-form-urlencoded"
//             }
//         })
//             .then(res=>{
//                 console.log(res)
//                 // const tracks = res.data.tracks.items;
//                 // tracks.map(song=>{
//                 //     console.log(song.track.name)
//                 // })
                
//             })
//             .catch(console.error)
// }    

// getAuthorization();


//This function works if you get an updating OAuth key and put
function SpotifyAxios(){
    axios.get("https://api.spotify.com/v1/playlists/24qeMQk4FpwEqxzMY8PEhy", {
        headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SpotifyOAuth}`,
        "Content-Type": "application/json"
        }
    })
        .then(res=>{
            console.log(res.data)
            // const tracks = res.data.tracks.items;
            // tracks.map(song=>{
            //     console.log(song.track.name)
            // })
            
        })
        .catch(console.error)
}

export default SpotifyAxios();

