
// wallet-adapter.js

import {
  WalletAdapterNetwork,
} from "https://cdn.skypack.dev/@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
} from "https://cdn.skypack.dev/@solana/wallet-adapter-wallets";
import {
  Connection,
  PublicKey,
} from "https://cdn.skypack.dev/@solana/web3.js";

const TOKEN_ADDRESS = "8rSczAV2xeVQVNGHs12WqaAK5LJUDVPjKSRcjLPXxcSH";
const THRESHOLD = 250;
const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";

const wallets = [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter(),
  new BackpackWalletAdapter(),
];

let selectedWallet = null;

async function connectAndVerify() {
  try {
    if (!selectedWallet) {
      for (const wallet of wallets) {
        await wallet.connect();
        if (wallet.connected) {
          selectedWallet = wallet;
          break;
        }
      }
    }

    if (!selectedWallet || !selectedWallet.connected) {
      alert("No wallet connected. Please try again.");
      return;
    }

    const publicKey = selectedWallet.publicKey;
    const connection = new Connection(RPC_ENDPOINT);

    const accounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      { programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") }
    );

    const drizzAccount = accounts.value.find(
      (acc) => acc.account.data.parsed.info.mint === TOKEN_ADDRESS
    );

    const amount = drizzAccount?.account?.data?.parsed?.info?.tokenAmount?.uiAmount || 0;

    if (amount >= THRESHOLD) {
      alert("✅ Access granted! Welcome to the exclusive content.");
    } else {
      document.getElementById("access-blocker").style.display = "flex";
    }
  } catch (err) {
    console.error("Wallet connection or verification failed:", err);
    alert("Failed to connect or verify wallet. Please try again.");
  }
}

// Attach to global scope for buttons
window.connectWallet = connectAndVerify;
