import { Friend } from '@/types/friend';
import { SpotifyResponse } from '@/types/spotify';

function getTimeAgo(timestamp: number): string {
    const now = Date.now();
    const diffMs = now - timestamp;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    return `${diffHours}h`;
  }

export function convertFriendActivity(friendActivity: SpotifyResponse[]) : Friend[] 
{
    if (!friendActivity) {
        return [];
    }
    console.log('here', friendActivity)
    return friendActivity.map((activity) => {
        return {
            id: activity.user.uri,
            name: activity.user.name,
            listening: activity.track.name,
            listeningAgo: getTimeAgo(activity.timestamp),
        }
    })
}