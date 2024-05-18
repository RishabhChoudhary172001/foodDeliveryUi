import Link from 'next/link'
import Menu from "./Menu"
import CartIcon from './CartIcon';
import Image from 'next/image';

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
      {/* {LEFT LINKS} */}
      <div className="hidden md:flex gap-4 flex-1">
        {links.map((item) => (
          <Link key={item.id} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
      {/* {LOGO} */}
      <div className="md:font-bold text-xl flex-1">
        <Link  href="/">
          MASSIMO
        </Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      {/* {RIGHT LINKS} */}
      <div className="hidden md:flex gap-4 items-center flex-1">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>123 456 78</span>
        </div>
         {!user ? (
           <Link href="/login">
              Login
            </Link>
         ):(
           <Link href="/orders">
              Orders
            </Link>
         )}
         <CartIcon/>
      </div>
    </div>
  );
}

export default Navbar
