import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured' colorWord='Tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const {
            id,
            img,
            date,
            title,
            description,
            icon,
            destination,
            days,
            cost,
          } = tour;
          return (
            <article key={id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={img} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    {destination}
                  </p>
                  <p>{days} days</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
