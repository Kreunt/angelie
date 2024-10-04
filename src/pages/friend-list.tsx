import Head from 'next/head';
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import Layout from '../components/layout';
import FriendRow from '@/components/FriendRow';

export default function FriendList() {
    return (
        <Layout>
            <Head>
                <title>Friend List</title>
            </Head>
            <ScrollArea className="flex-column">
                <FriendRow friend={{
                    id: 0,
                    name: 'John Doe',
                    listening: 'Song 1 by Artist 1',
                    listeningAgo: '1h',
                }} />
                <FriendRow friend={{
                    id: 0,
                    name: 'John Doe',
                    listening: 'Song 1 by Artist 1',
                    listeningAgo: '1h',
                }} />
            </ScrollArea>
        </Layout>
    );
}
