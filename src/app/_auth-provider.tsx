'use client';

import React, { FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface AuthProviderProps {
	children: ReactNode;
	session: any;
}
const NextAuthProvider: FC<AuthProviderProps> = ({ children ,session}) => {
	return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default NextAuthProvider;
