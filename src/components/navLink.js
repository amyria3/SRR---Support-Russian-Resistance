import Link from 'next/link'

function NavLink() {
  return (
    <Link
    className="navLink"
    href="/about" legacyBehavior>
      <a>About Us</a>
    </Link>
  )
}

export default NavLink
