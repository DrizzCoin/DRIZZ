# Security Policy

## Supported Versions
We actively maintain security for the latest deployed version of the DRIZZ web app. Older versions are not guaranteed to receive patches.

## Reporting a Vulnerability
If you discover a security issue in DRIZZ, please report it responsibly:

- Email: [support@drizz.io](mailto:support@drizz.io)
- GitHub Issues: Mark with `[SECURITY]` in the title if posting publicly.

We request responsible disclosure. Please allow us time to assess and respond before any public disclosure.

## Data Protection
- No private keys or wallet seed data are stored by the DRIZZ app.
- Wallet integration uses Solana’s wallet-adapter framework with non-custodial interaction.
- Any analytics stored (e.g., click logs) are anonymous and used only for insight purposes.

## Third-party Services
- Wallet adapters: [@solana/wallet-adapter-react](https://github.com/solana-labs/wallet-adapter)
- Database: Supabase with RLS enabled for write protection

## Community Responsibility
We encourage contributors to report, fix, and document potential vulnerabilities. Please avoid testing exploits on live DRIZZ infrastructure.

Thank you for helping keep DRIZZ safe and secure.

— The DRIZZ Dev Team 🧠⚡

