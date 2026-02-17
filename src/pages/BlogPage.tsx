import { useState } from "react";
import SectionTag from "@/components/chef/SectionTag";
import NewsletterBanner from "@/components/chef/NewsletterBanner";
import Footer from "@/components/chef/Footer";
import { blogPosts, categories, cookingTips } from "@/data/blogData";
import featuredImg from "@/assets/chef-joey-116.jpg";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Recipes");

  const featuredPost = blogPosts.find((p) => p.featured);
  const recentPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="pt-36 pb-12 text-center px-6">
        <SectionTag>From the Kitchen</SectionTag>
        <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-dark mt-5 mb-4">
          Chef Joey's <em className="font-normal">Blog</em>
        </h1>
        <p className="font-sans text-lg text-dark/60 max-w-[500px] mx-auto">
          Recipes, tips, and stories from behind the apron.
        </p>
      </section>

      {/* Category Navigation */}
      <div className="max-w-[800px] mx-auto px-6 mb-16">
        <div className="flex justify-center gap-4 md:gap-8 border-b border-border overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`pb-3 text-center transition-all duration-200 border-b-2 -mb-px ${
                activeCategory === cat.label
                  ? "border-purple text-purple"
                  : "border-transparent text-dark/50 hover:text-dark/80"
              }`}
            >
              <span className="font-sans text-sm font-semibold block">{cat.label}</span>
              <span className="font-sans text-xs text-dark/40 block mt-0.5">{cat.subtitle}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post + Tips Sidebar */}
      <section className="max-w-[1100px] mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-[1fr_320px] gap-8">
          {/* Featured post */}
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src={featuredImg}
                alt="Featured blog post"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-orange text-white text-xs font-bold font-sans px-3 py-1 rounded-full uppercase tracking-wider">
                Featured
              </span>
              <span className="absolute bottom-4 left-4 text-white/80 text-sm font-sans">
                {featuredPost?.date}
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark mt-6 mb-3 leading-tight">
              {featuredPost?.title}
            </h2>
            <p className="font-sans text-dark/60 leading-relaxed text-[15px]">
              {featuredPost?.excerpt}
            </p>
          </div>

          {/* Cooking Tips Sidebar */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-border h-fit">
            <h3 className="font-serif text-lg font-bold text-dark mb-5">🍳 Cooking Tips</h3>
            <div className="space-y-5">
              {cookingTips.map((tip, i) => (
                <div key={i}>
                  <h4 className="font-sans text-sm font-bold text-dark mb-1">{tip.title}</h4>
                  <p className="font-sans text-sm text-dark/55 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
            <button className="mt-6 font-sans text-sm font-semibold text-purple hover:underline">
              More Tips →
            </button>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-[1100px] mx-auto px-6 mb-20">
        <SectionTag>Recent Posts</SectionTag>
        <div className="mt-8 space-y-0">
          {recentPosts.map((post, i) => (
            <div
              key={post.id}
              className={`py-6 ${i < recentPosts.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold font-sans text-purple bg-purple-pale px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs font-sans text-dark/40">{post.readTime}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-dark mb-1 cursor-pointer hover:text-purple transition-colors">
                {post.title}
              </h3>
              <p className="font-sans text-sm text-dark/55">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default BlogPage;
