import { SpotifyResponse } from "@/types/spotify"

const buddyList = require('spotify-buddylist')

export default async function fetchFriendActivity() {
    const spDcCookie = 'sp_dc token here'
    
    try {
        const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
        const friendActivity = await buddyList.getFriendActivity(accessToken)
        
        return friendActivity.friends.sort((a:SpotifyResponse, b:SpotifyResponse) => b.timestamp - a.timestamp) as SpotifyResponse[]
    } catch (error) {
        console.log('Error fetching friend activity', error)
    } 
}