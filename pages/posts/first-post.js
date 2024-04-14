import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost() {
    return ( <
        Layout home >
        <
        Head >
        <
        title > { siteTitle } < /title> < /
        Head > <
        section className = { utilStyles.headingMd } >
        <
        p > I am a person who is interested in trying anything new.I got a lot from this assignment. < /p>  < /
        section >
        <
        h2 >
        <
        Link href = "/" > ←Back to home < /Link> < /
        h2 > < /
        Layout >
    );
}