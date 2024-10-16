import '../../styles/globals.css';
import Layout from '@/components/layout';
import LoginWithSpotify from '@/components/LoginWithSpotify';

export const metadata = {
    title: 'Angelie',
    description: 'Angelie login page using Spotify',
}
export default async function Home() {
    return (
        <Layout>
            <LoginWithSpotify />
        </Layout>
    );
}
