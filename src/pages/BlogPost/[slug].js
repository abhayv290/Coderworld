import React from 'react'
import { useRouter } from 'next/router'
export default function slug() {
    const router = useRouter();
    console.log(router.query);
    const { slug } = router.query;
    return (
        <div>this is Slug : {slug}</div>
    )
}
