import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div style={{ margin: '0 100px', backgroundColor: '#000', color: '#fff' }}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
