import { SpotifyResponse } from "@/types/spotify"

const buddyList = require('spotify-buddylist')
interface Props {
    spDcCookie: string
}

export default async function fetchFriendActivity({ spDcCookie }: Props) {
    try {
        const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
        const friendActivity = await buddyList.getFriendActivity(accessToken)
        
        return friendActivity.friends.sort((a:SpotifyResponse, b:SpotifyResponse) => b.timestamp - a.timestamp) as SpotifyResponse[]
    } catch (error) {
        console.log('Error fetching friend activity', error)
    } 
}