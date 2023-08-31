import Image from 'next/image'
import React from 'react'

const NavBar = () => {
    return (
        <div>
            <Image src ='/logo.png'
            alt='logo'
            width={150}
            height={100}
            />
        </div>
    )
}

export default NavBar