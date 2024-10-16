'use client';
import React from 'react';
import { Button } from './ui/button';
import { KeyIcon } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function LoginWithSpotify() {
    const supabase = createClient()

    async function signInWithSpotify() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'spotify',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
                scopes: 'user-read-recently-played user-follow-read',
            },
        });
        if (error) {
            console.error('An error occurred during login:', error);
        }
    }
    return (
        <Button asChild onClick={signInWithSpotify}>
            <div className="flex items-center">
                <KeyIcon className="mr-2 h-4 w-4" />
                Login with Spotify
            </div>
        </Button>
    );
};

