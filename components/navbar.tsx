'use client';
import React, { useEffect, useState } from 'react'
import '@/styles/navbar.css'
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToSkills = () => {
        document
            .querySelector(".section-skills")
            ?.scrollIntoView({ behavior: "smooth" ,});
    };
    const scrollToProduct = () => {
        document
            .querySelector(".section-product")
            ?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        document
            .querySelector(".section-contact")
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <nav className={scrolled ? 'scrolled' : ''}>
                <div className="name-logo">NARAWIT
                </div>

                <div className="name-item">
                    <Link href="/" >
                        <div className='nav-home' >
                            หน้าแรก
                        </div>
                    </Link>
                    <div className='nav-skills' onClick={scrollToSkills}>ทักษะ</div>
                    <div className='nav-product' onClick={scrollToProduct}>ผลงาน</div>
                    <div className='nav-contact' onClick={scrollToContact}>ติดต่อ</div>

                </div>



            </nav>
        </div>
    )
}
