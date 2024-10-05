import Head from 'next/head';
import React, { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import Layout from '../components/layout';
import FriendRow from '@/components/FriendRow';
import fetchFriendActivity from '@/lib/fetch-friend-activity';
import { SpotifyResponse } from '@/types/spotify';
import { Friend } from '@/types/friend';
import { convertFriendActivity } from '@/lib/convert-friend-activity';

export async function getStaticProps() {
    const friendActivity = await fetchFriendActivity();
    return {
        props: {
            friendActivity,
        },
    };
}

export default function FriendList({ friendActivity }: { friendActivity: SpotifyResponse[] }) {
    const [friends, setFriends] = React.useState<Friend[]>([]);
    useEffect(() => {
        setFriends(convertFriendActivity(friendActivity));
    }, [friendActivity]);
    return (
        <Layout>
            <Head>
                <title>Friend List</title>
            </Head>
            <ScrollArea className="flex-column">
                {friends.map((friend) => (
                    <FriendRow key={friend.id} friend={friend} />
                ))}
            </ScrollArea>
        </Layout>
    );
}
