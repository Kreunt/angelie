import Head from 'next/head';
import React, { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import Layout from '../components/layout';
import FriendRow from '@/components/FriendRow';
import fetchFriendActivity from '@/lib/fetch-friend-activity';
import { SpotifyResponse } from '@/types/spotify';
import { Friend } from '@/types/friend';
import { convertFriendActivity } from '@/lib/convert-friend-activity';
import { Reorder } from "framer-motion"
import { useRouter } from 'next/router';

export async function getServerSideProps(context: any) {
    const spdc = context.req.cookies['sp_dc'];
    const friendActivity = await fetchFriendActivity({ spDcCookie: spdc });
    return {
        props: {
            friendActivity,
        },
    };
}

export default function FriendList({ friendActivity }: { friendActivity: SpotifyResponse[] }) {
    const router = useRouter();
    const [friends, setFriends] = React.useState<Friend[]>([]);

    const refreshData = () => {
        router.replace(router.asPath);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            refreshData();
            console.log('Table Updated');
        }, 15000)
        return () => clearInterval(interval);
    })

    useEffect(() => {
        setFriends(convertFriendActivity(friendActivity));
    }, [friendActivity]);
    return (
        <Layout>
            <Head>
                <title>Friend List</title>
            </Head>
            <ScrollArea className="flex-column">
                <Reorder.Group axis="y" values={friends} onReorder={setFriends}>
                    {friends.map((friend) => (
                        <FriendRow key={friend.id} friend={friend} />
                    ))}
                </Reorder.Group>
            </ScrollArea>
        </Layout>
    );
}
