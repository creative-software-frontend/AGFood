import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/constants/news";


export default function NewsPage() {
return (
<section className="bg-[#F8FAFC] py-16">
<div className="container mx-auto px-4">
<h1 className="text-4xl font-bold text-[#0F172A] mb-10">Latest News</h1>


<div className="grid md:grid-cols-3 gap-8">
{newsData.map((news) => (
<div
key={news.id}
className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden"
>
<Image
src={news.image}
alt={news.title}
width={400}
height={250}
className="w-full h-52 object-cover"
/>


<div className="p-6">
<p className="text-sm text-[#475569] mb-2">{news.date}</p>
<h3 className="text-lg font-semibold text-[#0F172A] mb-3">
{news.title}
</h3>
<p className="text-[#475569] mb-4">{news.excerpt}</p>


<Link
href={`/news/${news.id}`}
className="text-[#1F7A4D] font-medium hover:underline"
>
Read More →
</Link>
</div>
</div>
))}
</div>
</div>
</section>
);
}