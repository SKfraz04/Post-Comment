import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                <Link href="/">Home</Link>
                    {/* <Link href="/">
                        <a>Home</a>
                    </Link> */}
                </li>
                <li>
                <Link href="/add-post">Add post</Link>
                    {/* <Link href="/add-post">
                        <a id="link">Add post</a>
                    </Link> */}
                </li>
            </ul>
        </nav>
    );
}