import type { NextApiRequest, NextApiResponse } from 'next';
import { Connection, PublicKey } from '@solana/web3.js';

// Replace with your actual DRIZZ mint address
const DRIZZ_MINT = '8rSczAV2xeVQVNGHs12WqaAK5LJUDVPjKSRcjLPXxcSH';
const REQUIRED_BALANCE = 250;

const connection = new Connection('https://api.mainnet-beta.solana.com');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { wallet } = req.query;

  if (!wallet || typeof wallet !== 'string') {
    return res.status(400).json({ success: false, error: 'Missing wallet param' });
  }

  try {
    const walletPubKey = new PublicKey(wallet);

    // Get all SPL Token Accounts by owner
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(walletPubKey, {
      programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
    });

    let balance = 0;

    for (const { account } of tokenAccounts.value) {
      const info = account.data.parsed.info;
      const mint = info.mint;
      const amount = parseInt(info.tokenAmount.amount);

      if (mint === DRIZZ_MINT) {
        // Convert to readable decimals (assuming 9 decimals)
        balance = amount / Math.pow(10, 9);
        break;
      }
    }

    if (balance >= REQUIRED_BALANCE) {
      return res.status(200).json({ success: true, balance });
    } else {
      return res.status(200).json({ success: false, balance });
    }
  } catch (error) {
    console.error('Token check error:', error);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}
