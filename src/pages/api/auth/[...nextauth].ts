import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.AzureADB2C({
      id: 'azure-ad-b2c',
      clientId: process.env.NEXT_PUBLIC_AZURE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_AZURE_CLIENT_SECRET,
      scope: 'offline_access openid',
      tenantId: process.env.NEXT_PUBLIC_AZURE_TENANT_ID,
    }),
  ],

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
