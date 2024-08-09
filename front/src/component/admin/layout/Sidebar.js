import React from 'react'
import SidebarItem from './SidebarItem'
import Link from 'next/link'

export default function Sidebar() {
  return (
<div id="sidebar">
    <div className="logo">
        <h1>
            <Link href="/admin">
                <img src="/img/logo_off_new.png" alt="" className="off -mov" width="200"/>
            </Link>
        </h1>
    </div>
    <SidebarItem/>
</div>
  )
}
