"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Calendar, Clock, Tag, 
  ArrowRight, ArrowLeft, BookOpen, 
  LayoutGrid, LayoutList, Star, 
  ChevronDown, X, Bookmark
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Cybersecurity in 2025",
    excerpt: "Explore the emerging trends and technologies that will shape the cybersecurity landscape in the coming year.",
    date: "2025-11-15",
    readTime: "8 min",
    category: "Industry Insights",
    tags: ["trends", "future", "technology"],
    featured: true,
    image: "/cyber-future.jpg"
  },
  {
    id: 2,
    title: "How to Implement Zero Trust Architecture",
    excerpt: "A practical guide to implementing Zero Trust security model in your organization for enhanced protection.",
    date: "2025-11-08",
    readTime: "12 min",
    category: "Technical Guides",
    tags: ["zero trust", "architecture", "security"],
    featured: false,
    image: "/zero-trust.jpg"
  },
  {
    id: 3,
    title: "Top 10 Vulnerabilities in Web Applications",
    excerpt: "Discover the most critical web application vulnerabilities and how to protect against them.",
    date: "2025-10-29",
    readTime: "10 min",
    category: "Web Security",
    tags: ["vulnerabilities", "OWASP", "web"],
    featured: true,
    image: "/web-vulnerabilities.jpg"
  },
  {
    id: 4,
    title: "The Psychology of Social Engineering Attacks",
    excerpt: "Understanding the human element behind social engineering and how to train your team against it.",
    date: "2025-10-20",
    readTime: "9 min",
    category: "Social Engineering",
    tags: ["psychology", "phishing", "training"],
    featured: false,
    image: "/social-engineering.jpg"
  },
  {
    id: 5,
    title: "Cloud Security Best Practices for Enterprises",
    excerpt: "Essential strategies for securing your cloud infrastructure in a multi-cloud environment.",
    date: "2025-10-12",
    readTime: "11 min",
    category: "Cloud Security",
    tags: ["cloud", "AWS", "Azure", "GCP"],
    featured: false,
    image: "/cloud-security.jpg"
  },
  {
    id: 6,
    title: "AI and Machine Learning in Threat Detection",
    excerpt: "How artificial intelligence is revolutionizing the way we detect and respond to cyber threats.",
    date: "2025-10-05",
    readTime: "14 min",
    category: "AI Security",
    tags: ["AI", "machine learning", "threat detection"],
    featured: true,
    image: "/ai-security.jpg"
  },
  {
    id: 7,
    title: "Building a Security Awareness Training Program",
    excerpt: "Step-by-step guide to creating an effective security awareness program for your organization.",
    date: "2025-09-28",
    readTime: "7 min",
    category: "Training",
    tags: ["training", "awareness", "education"],
    featured: false,
    image: "/security-training.jpg"
  },
  {
    id: 8,
    title: "The Evolution of Ransomware Attacks",
    excerpt: "How ransomware has evolved and what organizations can do to protect themselves in 2025.",
    date: "2025-09-20",
    readTime: "10 min",
    category: "Threat Analysis",
    tags: ["ransomware", "malware", "threats"],
    featured: false,
    image: "/ransomware.jpg"
  },
];

const categories = [
  "All Topics",
  "Industry Insights",
  "Technical Guides",
  "Web Security",
  "Cloud Security",
  "AI Security",
  "Threat Analysis",
  "Social Engineering",
  "Training"
];

const tags = [
  "trends", "future", "technology", "zero trust", 
  "architecture", "security", "vulnerabilities", 
  "OWASP", "web", "psychology", "phishing", 
  "training", "cloud", "AWS", "Azure", "GCP", 
  "AI", "machine learning", "threat detection",
  "awareness", "education", "ransomware", "malware"
];

const BlogPage = () => {
  const [posts, setPosts] = useState(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Filter posts based on search, category, and tags
  useEffect(() => {
    let filtered = blogPosts;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Category filter
    if (selectedCategory !== 'All Topics') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.every(tag => post.tags.includes(tag))
      );
    }
    
    setPosts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, selectedTags]);
  
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  
  // Handle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            AXUM SEC Blog
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Insights, strategies, and expert analysis on cybersecurity trends, threats, and best practices.
          </motion.p>
          
          <motion.div 
            className="mt-10 max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Input
              type="text"
              placeholder="Search articles, topics, or keywords..."
              className="py-6 pl-12 pr-4 text-lg shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar - Filters */}
          <motion.div 
            className={`md:w-1/4 ${showMobileFilters ? 'block fixed inset-0 z-50 bg-white dark:bg-gray-900 p-6 overflow-y-auto' : 'hidden md:block'}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {showMobileFilters && (
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            )}
            
            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <LayoutGrid className="w-5 h-5 mr-2 text-red-500" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      className={`w-full justify-start ${selectedCategory === category ? 'bg-red-600' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Popular Tags */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-red-500" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300' : ''}`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Featured Posts */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-red-500" />
                  Featured Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(post => post.featured)
                    .slice(0, 3)
                    .map(post => (
                      <div 
                        key={post.id} 
                        className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                        onClick={() => {
                          setSelectedCategory(post.category);
                          setShowMobileFilters(false);
                        }}
                      >
                        <h4 className="font-medium line-clamp-2">{post.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            
            {/* Clear Filters Button */}
            {(selectedCategory !== 'All Topics' || selectedTags.length > 0) && (
              <Button 
                variant="outline" 
                className="w-full mt-8 text-red-600 border-red-600"
                onClick={() => {
                  setSelectedCategory('All Topics');
                  setSelectedTags([]);
                }}
              >
                Clear All Filters
              </Button>
            )}
          </motion.div>
          
          {/* Main Content */}
          <div className="md:w-3/4">
            {/* Header with controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  {selectedCategory === 'All Topics' ? 'All Articles' : selectedCategory}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {posts.length} articles found
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="md:hidden"
                  onClick={() => setShowMobileFilters(true)}
                >
                  <ChevronDown className="w-5 h-5" />
                </Button>
                
                <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Button 
                    variant={layout === 'grid' ? 'default' : 'ghost'} 
                    size="icon"
                    onClick={() => setLayout('grid')}
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant={layout === 'list' ? 'default' : 'ghost'} 
                    size="icon"
                    onClick={() => setLayout('list')}
                  >
                    <LayoutList className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Selected Tags */}
            {selectedTags.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="default"
                      className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300"
                    >
                      {tag}
                      <button 
                        onClick={() => toggleTag(tag)}
                        className="ml-2"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Blog Posts */}
            {currentPosts.length > 0 ? (
              <motion.div 
                className={layout === 'grid' ? 
                  "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : 
                  "space-y-8"
                }
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentPosts.map(post => (
                  <motion.div 
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className={layout === 'grid' ? 
                      "bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800" : 
                      "bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row"
                    }
                  >
                    <div className={layout === 'grid' ? 
                      "h-48 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 relative" : 
                      "md:w-1/3 h-48 md:h-auto bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 relative"
                    }>
                      {/* Image placeholder - in real app would use next/image */}
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-xl" />
                      {post.featured && (
                        <Badge className="absolute top-4 left-4 bg-red-600">
                          <Star className="w-4 h-4 mr-1" /> Featured
                        </Badge>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-4 right-4 bg-white/80 dark:bg-gray-900/80"
                      >
                        <Bookmark className="w-5 h-5" />
                      </Button>
                    </div>
                    
                    <div className={layout === 'grid' ? "p-6" : "p-6 md:w-2/3"}>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="text-red-600 dark:text-red-300 border-red-600 dark:border-red-500">
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <Badge 
                            key={tag} 
                            variant="outline"
                            className="cursor-pointer hover:bg-red-50 dark:hover:bg-red-900/20"
                            onClick={() => toggleTag(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="link" className="text-red-600 dark:text-red-400 pl-0">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4 text-red-600 border-red-600"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Topics');
                    setSelectedTags([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {posts.length > postsPerPage && (
              <div className="flex justify-center mt-16">
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Ahead of Cyber Threats
            </h2>
            
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter for the latest security insights, expert analysis, and industry updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="py-6 px-6 text-lg bg-white/10 border-white/20 placeholder:text-white/70"
              />
              <Button 
                className="bg-white text-red-600 hover:bg-gray-100 py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
                size="lg"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;