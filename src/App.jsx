import Navbar from './components/Navbar'
import BlogList from './components/BlogList'
// import Pagination from './components/Pagination'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto">
        <BlogList />
      </main>
    </div>
  );
};

export default App;