import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
const logo = '/images/logo.png';

const Navbar = () => {
    const router = useRouter();

    const linkStyle = (path: string) => ({
        color: router.pathname === path ? '#9945FF' : '#14F195',
        textDecoration: 'none'
    });

    return (
        <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#1E1E1E' }}>
            <Link href="/">
                <Image src={logo} alt="Logo" width={50} height={50} />
            </Link>
            <Link href="/">
                <h1 style={{ margin: '0 20px', textDecoration: 'none', color: '#14F195' }}>SolEx</h1>
            </Link>
            <div style={{ marginRight: 'auto', display: 'flex', alignItems: 'center', width: '60%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', flex: 1 }}>
                    <Link href="/" style={linkStyle('/')}>Create Token</Link>
                    <Link href="/ManageLiquidity" style={linkStyle('/ManageLiquidity')}>Manage Liquidity</Link>
                    <Link href="/TrendingTokens" style={linkStyle('/TrendingTokens')}>Copy Trending Tokens</Link>
                </div>
            </div>
            <button style={{ marginLeft: 'auto', marginRight: '50px', padding: '15px 30px', backgroundColor: '#9945FF', color: '#fff', border: 'none', borderRadius: '5px' }}>Select Wallet</button>
        </nav>
    );
};

export default Navbar;