
const BlogList = () => {
  const blogs = [
    {
      image: "/image.svg",
      author: "Olivia Rhye",
      date: "1 Jan 2023",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      tags: ["Design", "Research", "Presentation"],
    },
    {
      image: "/assets/image-1.svg",
      author: "Phoenix Baker",
      date: "1 Jan 2023",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking.",
      tags: ["Design", "Research"],
    },
    {
      image: "/assets/image-2.svg",
      author: "Lana Steiner",
      date: "1 Jan 2023",
      title: "Building your API Stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing APIs.",
      tags: ["Design", "Research"],
    },
  ];
  const allBlogs = [
    {
      image: "/assets/image-3.svg",
      author: "Alec Whitten",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description: "Like to know the secrets of transforming a team into a winning dynasty?",
      tags: ["Leadership", "Management"],
    },
    {
      image: "/assets/image-4.svg",
      author: "Demi Wilkinson",
      date: "1 Jan 2023",
      title: "PM mental models",
      description: "Mental models simplify complex processes.",
      tags: ["Product", "Research", "Frameworks"],
    },
    {
      image: "/assets/image-5.svg",
      author: "Candice Wu",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its principles.",
      tags: ["Design", "Research"],
    },
    {
      image: "/assets/image-6.svg",
      author: "Natal Craig",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      description: "Collaboration can make our teams stronger.",
      tags: ["Design", "Research"],
    },
    {
      image: "/assets/image-7.svg",
      author: "Drew Cano",
      date: "1 Jan 2023",
      title: "Our top 10 JavaScript frameworks to use",
      description: "JavaScript frameworks make development easy.",
      tags: ["Software Development", "Tools", "SaaS"],
    },
    {
      image: "/assets/image-8.svg",
      author: "Orlando Diggs",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      description: "Starting a community doesn’t need to be complicated.",
      tags: ["Podcasts", "Customer Success"],
    },
  ];


  return (
    <div className="py-12 px-8">
      {/* Recent Blog Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Recent blog posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* First Item (Left) */}
        <div className="col-span-1 lg:col-span-2 row-span-2">
          <div className=" rounded-lg overflow-hidden">
            <img src={blogs[0].image} alt={blogs[0].title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <p className="text-sm text-purple-600">{blogs[0].author} • {blogs[0].date}</p>
              <h3 className="text-lg font-semibold mt-2">{blogs[0].title}</h3>
              <p className="text-sm text-gray-600 mt-2 ">{blogs[0].description}</p>
              <div className="flex space-x-2 mt-4">
                {blogs[0].tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Two Items (Right) */}
        {blogs.slice(1).map((blog, index) => (
          <div key={index} className="grid lg:grid-cols-2 rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-sm text-purple-600">{blog.author} • {blog.date}</p>
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <div className="flex space-x-2 mt-4">
                {blog.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </section>





      <section className="px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Section */}
          <div>
            <img
              src="/assets/image-3.svg"
              alt="Featured Blog Post"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <p className="text-sm  text-purple-800 mb-2">
              Olivia Rhye • 1 Jan 2023
            </p>
            <h3 className="text-2xl font-bold mb-4">
              Grid system for better Design User Interface
            </h3>
            <p className="text-gray-600 text-md mb-4">
              A grid system is a design tool used to arrange content on a
              webpage. It is a series of vertical and horizontal lines that
              create a matrix of intersecting points, which can be used to align
              and organize page elements.
            </p>
            <div className="flex gap-2">
              <span className="bg-purple-200 text-purple-800 text-xs py-1 px-2 rounded">
                Design
              </span>
              <span className="bg-pink-200 text-red-800 text-xs py-1 px-2 rounded">
                Interface
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* All Blog Posts */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">All blog posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {allBlogs.map((blog, index) => (
            <div key={index} className=" rounded-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <p className="text-sm text-purple-600">{blog.author} • {blog.date}</p>
                <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                <div className="flex space-x-2 mt-4">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogList;

