import Image from "next/image";
import { newsData } from "@/constants/news";


export function generateStaticParams() {
return newsData.map((item) => ({
id: item.id,
}));
}


export default async function NewsDetails({ params }) {
const { id } = await params;
const news = newsData.find(
(item) => item.id === id
);


if (!news) {
return (
<section className="py-20 text-center">
<h2 className="text-2xl font-semibold">News not found</h2>
</section>
);
}


return (
<section className="bg-[#F8FAFC] py-16">
<div className="container mx-auto px-4 max-w-4xl">
<p className="text-[#475569] mb-3">{news.date}</p>
<h1 className="text-3xl font-bold text-[#0F172A] mb-6">
{news.title}
</h1>


<Image
src={news.image}
alt={news.title}
width={900}
height={450}
className="rounded-xl mb-8 w-full"
/>


<p className="text-[#475569] leading-relaxed">
{news.content}
</p>
</div>
</section>
);
}