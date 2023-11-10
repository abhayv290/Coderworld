import { React, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function slug(props) {

    const [blogs, setblogs] = useState(props.blogdata);



    // console.log(blogs);
    return (
        <div className='container my-5'>
            <h3>{blogs && blogs.title}</h3>
            <hr />
            <p>{blogs && blogs.description}</p>
            <ul>
                <li>{blogs && blogs.steps}</li>
            </ul>
        </div>

    )
}
export async function getServerSideProps(context) {

    const { slug } = context.query;
    const response = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const blogdata = await response.json();
    return {

        props: { blogdata }
    }

}
