import React, { useState, useEffect } from 'react';
import styles from '../styles/blog.module.css';
// import type {  GetServerSideProps } from 'next'
import Link from 'next/link';

export default function Blog(props) {
    const [blogs, setblogs] = useState(props.blogdata);




    return (
        <div className='container m-5'>
            <main>
                { blogs.map((item) => {
                    return <div key={ item.slug } className={ `${styles.blogItem}  my-5` }>
                        <Link href={ `/BlogPost/${item.slug}` }>
                            <h3>{ item.title }</h3>
                        </Link>
                        <p>{ item.description.substr(0, 200) }</p>
                    </div>

                }) }
            </main>
        </div>
    );
}
export async function getServerSideProps(context) {

    const response = await fetch('http://localhost:3000/api/blogs');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const blogdata = await response.json();
    return {

        props: { blogdata }
    }

}



