const Title = ({ title, colorWord }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{colorWord}</span>
      </h2>
    </div>
  );
};
export default Title;
