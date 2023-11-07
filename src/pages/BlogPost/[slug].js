import { React, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function slug() {
    const router = useRouter();
    const [blogs, setblogs] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!router.isReady) return;
                // console.log(router.query);
                const { slug } = router.query;
                const response = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const parsed = await response.json();
                setblogs(parsed);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [router.isReady]);
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
