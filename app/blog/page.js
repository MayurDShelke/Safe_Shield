import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Blog | Content Shield",
  description: "Insights, guides, and industry news on content moderation, platform safety, and community guidelines.",
};

const posts = [
  {
    title: "Content Review Solutions: Enhancing Digital Safety",
    slug: "content-review-solutions",
    description: "Discover how specialized content review solutions are helping businesses protect their digital ecosystems from emerging threats.",
    date: "March 15, 2026",
    readTime: "5 min read",
    category: "Safety Solutions"
  },
  {
    title: "Scaling Content Review Solutions for Global Platforms",
    slug: "content-review-solutions-scale",
    description: "A deep dive into the architecture and processes required to scale human and AI moderation to millions of daily impressions.",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Scalability"
  },
  {
    title: "Designing an Efficient Content Review Workflow",
    slug: "content-review-workflow",
    description: "Learn how to build a unified workflow that drastically reduces the time between a report being logged and an action being taken.",
    date: "March 02, 2026",
    readTime: "6 min read",
    category: "Operations"
  },
  {
    title: "The Role of AI in Modern Content Review",
    slug: "ai-in-content-review",
    description: "AI is fundamentally changing how rapidly we can identify toxic text and illegal imagery. Here is what you need to know about implementation.",
    date: "February 24, 2026",
    readTime: "7 min read",
    category: "Technology"
  },
  {
    title: "Why Human Moderation remains Irreplaceable",
    slug: "human-moderation",
    description: "While AI handles the volume, human teams provide the nuance required for high-stakes decisions and contextual understanding.",
    date: "February 18, 2026",
    readTime: "5 min read",
    category: "Best Practices"
  },
  {
    title: "Top Content Review Challenges in 2026",
    slug: "content-review-challenges",
    description: "From sophisticated deepfakes to organized harassment campaigns, we explore the hardest challenges currently facing Trust & Safety teams.",
    date: "February 12, 2026",
    readTime: "9 min read",
    category: "Industry Trends"
  }
];

export default function BlogIndex() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-outfit text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Blog</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Learn how to build, maintain, and scale safer digital communities with insights from our Trust & Safety experts.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start justify-between group">
              <div className="w-full relative shadow-sm ring-1 ring-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center gap-x-4 text-xs">
                   <time dateTime={post.date} className="text-gray-500 flex items-center gap-1">
                     <Calendar className="h-3 w-3" />
                     {post.date}
                   </time>
                   <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                     {post.category}
                   </span>
                 </div>
                 <div className="group relative">
                   <h3 className="mt-5 font-outfit text-xl font-bold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                     <Link href={`/blog/${post.slug}`}>
                       <span className="absolute inset-0" />
                       {post.title}
                     </Link>
                   </h3>
                   <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                     {post.description}
                   </p>
                 </div>
                 <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
                    <span className="flex items-center text-xs text-gray-500 gap-1">
                       <Clock className="h-3 w-3" />
                       {post.readTime}
                    </span>
                    <span className="text-sm font-semibold text-blue-600 flex items-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                       Read article <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                 </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
