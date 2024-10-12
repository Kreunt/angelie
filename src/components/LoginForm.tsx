'use client';
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import { KeyIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
    const [spdc, setSpdc] = useState('');
    const router = useRouter();

    if (typeof document !== 'undefined' && document.cookie.includes('sp_dc')) {
        router.push('/friend-list');
    }
    return (
        <Card className="flex flex-col items-center justify-center dark p-5 gap-4">
            <div>
                <Input id="sp_dc" value={spdc} placeholder="Enter the sp_dc cookie" onChange={(e) => setSpdc(e.target.value)} />
            </div>
            <Button asChild variant="outline" onClick={() => {
                document.cookie = `sp_dc=${spdc}; path=/; max-age=${60 * 60 * 24 * 30}`; // Set cookie for 30 days
            }}>
                <Link href="/friend-list">
                    <KeyIcon className="mr-2 h-4 w-4" />
                    Login using sp_dc cookie
                </Link>
            </Button>
        </Card>
    )
};

export default LoginForm;
