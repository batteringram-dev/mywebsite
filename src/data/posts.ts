export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: string;
}

export const posts: Post[] = [
  // Example blog post structure:
  // {
  //   id: "unique-post-identifier",           // URL-friendly identifier (lowercase, hyphens)
  //   title: "Your Blog Post Title",          // The title of your blog post
  //   date: "2024-12-25",                     // Publication date (YYYY-MM-DD format)
  //   excerpt: "Short description...",        // Brief summary shown on blog listing
  //   content: `Your full blog post content here.
  // 
  // You can use markdown formatting:
  // 
  // ## Headings
  // 
  // **Bold text** and *italic text*
  // 
  // - Bullet points
  // - More points
  // 
  // > Blockquotes
  // 
  // Regular paragraphs of text.`,
  //   category: "Technology",                 // Category for filtering (e.g., "Technology", "Data Engineering", "Tutorials")
  //   readingTime: "5 min read"               // Estimated reading time
  // },
];

export const categories = Array.from(new Set(posts.map(post => post.category)));
