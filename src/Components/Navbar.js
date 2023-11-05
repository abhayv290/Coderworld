import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { useEffect } from 'react'


export default function Navbar() {



    const pathname = usePathname();
    useEffect(() => {
        console.log(pathname);
    }, [pathname])







    return (

        <>
            <nav className="navbar navbar-expand-md navbar-expand-lg bg-body-primary bg-primary-subtle">
                <div className="container-fluid ">
                    <Link className="navbar-brand" href={'/'}><strong>CoderWorld</strong></Link>
                    <button className={`btn btn-primary ${styles.menubtn}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        Toggle
                    </button>
                    <div className={`offcanvas offcanvas-start  ${styles.navcanvas}`} data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <ul className="navbar-nav fs-5">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname == "/" ? styles.navcolor : ""}`} aria-current="page" href={'/'}>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/Contests' ? styles.navcolor : ""}`} href={'/Contests'}>Contests</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/Blog' ? styles.navcolor : ""}`} href={'/Blog'}>Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/About' ? styles.navcolor : ""}`} href={'/About'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/Contact' ? styles.navcolor : ""}`} href={'/Contact'}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/Service' ? styles.navcolor : ""}`} href={'/Service'}>Services</Link>
                            </li>
                        </ul>
                        <button type="button" className={`btn-close text-center align-center ${styles.menubtn}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>

                    </div>
                </div>
            </nav >

        </>


    )
}
