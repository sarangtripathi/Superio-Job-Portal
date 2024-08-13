import { FiCalendar, FiClock, FiDollarSign, FiMapPin, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({data}) => {
    const {_id,companyLogo, jobTitle, companyName, jobLocation, employmentType, minPrice,maxPrice, postingDate, description} = data;
  return (
    <div>
        <section className='card'>
            <Link to={`/job/${_id}`} className="flex gap-4 flex-col sm:flex-row items-start">
                <img src={companyLogo} className="size-16" alt="" />
                <div className="">
                    <h4 className="mb-1 text-primary">{companyName}</h4>
                    <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

                    <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
                      <span className="flex items-center gap-2"><FiMapPin/> {jobLocation}</span>
                      <span className="flex items-center gap-2"><FiClock/> {employmentType}</span>
                      <span className="flex items-center gap-2"><FiDollarSign/> {minPrice}-{maxPrice}k</span>
                      <span className="flex items-center gap-2"><FiCalendar/> {postingDate}</span>
                    </div>

                    <p className="text-base text-primary/70">{description}</p>
                </div>
            </Link>
        </section>
    </div>
  )
}
export default Card