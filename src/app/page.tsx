import '../styles/globals.css';
import Layout from '@/components/layout';
import LoginForm from '@/components/LoginForm';
export const metadata = {
  title: 'Angelie',
  description: 'Angelie start page',
}

export default function Home() {

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}
