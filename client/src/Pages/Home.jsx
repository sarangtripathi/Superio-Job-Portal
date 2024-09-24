import React,{useState,useEffect, createElement, cloneElement} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../Sidebar/Sidebar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage]  = useState(1);
  const itemsPerPage = 5;

    useEffect(() => {
      setIsLoading(true);
      // fetch("jobs.json").then....
      fetch("https://superio-job-portal.onrender.com/all-jobs").then(res => res.json()).then(data => {
        // console.log(data);
        setJobs(data);
        setIsLoading(false);
      })
    }, []);

    // Input filtering
    const [query, setQuery] = useState("");
    const handleInputChange = (e) => {
        setQuery(e.target.value);    
    }

    const filteredItems = jobs.filter(
      (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1 )
      console.log(filteredItems);

    // Case sensitive filtering without converting to lower-case
    // const filteredItems1 = jobs.filter(
    //   (job) => job.jobTitle.indexOf(query) !== -1
    // )
    // console.log(filteredItems1);

    // Radio filtering
    const handleChange = (e) => {
      setSelectedCategory(e.target.value);
    }

    // Button filtering
    const handleClick = (e) => {
      setSelectedCategory(e.target.value);
    }

    // Function to calculate the index range for the current page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Function to handle next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

    // main function
    const filteredData = (jobs, selected, query) => {
      let filteredJobs = jobs;

      if(query){
        filteredJobs = filteredItems;
      }

      if(selected) {
        filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => 
          jobLocation.toLowerCase() === selected.toLowerCase() || 
          parseInt(maxPrice) <= parseInt(selected) || 
          postingDate >= selected ||
          experienceLevel === selected || 
          salaryType.toLowerCase() === selected.toLowerCase() || 
          employmentType.toLowerCase() === selected.toLowerCase()
        )
        console.log(filteredJobs);
      }

      // Slice data based on current page
      const {startIndex,endIndex} = calculatePageRange();
      filteredJobs = filteredJobs.slice(startIndex,endIndex);
      return filteredJobs.map((data, i) => <Card key={i} data={data} />);
    }

    const result = filteredData(jobs, selectedCategory, query);
    
    


    
      

  return (
    <div >
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className='bg-white p-4 rounded'> 
        <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className='bg-white p-4 rounded col-span-2'>
        {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}
          {/* pagination */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        
        </div>
        <div className='bg-white p-4 rounded'>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}

export default Home