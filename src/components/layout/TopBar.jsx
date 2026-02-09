import Link from 'next/link';

const TopBar = () => (
    <div className="bg-brand-green py-2 text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-end gap-6 text-[13px] font-medium">
            <Link href="/career" className="hover:text-gray-200 transition-colors">Career</Link>
            <Link href="/modern-trade" className="hover:text-gray-200 transition-colors">Modern Trade</Link>
            <Link href="/food-outlet" className="hover:text-gray-200 transition-colors">Food Outlet</Link>
            <Link href="/export" className="hover:text-gray-200 transition-colors">Export</Link>
        </div>
    </div>
);

export default TopBar;