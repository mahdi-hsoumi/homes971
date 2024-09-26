import { NAV_LINKS } from '@/constants';
import Link from 'next/link';

type MenuProps = {
  showMenu: boolean;
};
const ResponsiveMenu = ({ showMenu }: MenuProps) => {
  return (
    <div
      className={`${
        showMenu ? 'left-0' : '-left-[-100%]'
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-beige-10 px-8 pb-6 pt-16 text-marron-10 duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <nav className='flex items-center justify-start gap-3'>
        <ul>
          {NAV_LINKS.map((links) => {
            return (
              <li key={links?.key} className='py-4'>
                <Link
                  href={links?.href}
                  className='text-xl font-medium text-black-10 duration-300'
                >
                  {links?.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
