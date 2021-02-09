import Link from 'next/link';
import Head from 'next/head';
import NavBar from './Nav';

export default ({ children }) => (
    <div>
        <Head>
            <title>87 Lux</title>
        </Head>
        <header>
            <NavBar />
        </header>

        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        
    </div>
)