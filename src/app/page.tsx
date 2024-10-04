import Link from 'next/link';
import { Button } from "@/components/ui/button"
import '../styles/globals.css';



export const metadata = {
  title: 'Angelie',
  description: 'Angelie start page',
}

export default function Home() {
  return (
    <div>
      <Button asChild>
        <Link href="/friend-list">Go to Friend List</Link>
      </Button>
    </div>
  );
}
