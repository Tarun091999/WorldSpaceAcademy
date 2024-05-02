const Card = (img, cardTitle,  progressValue, progressStatus, description) => {
  return (
    <div className="comon-overview shadow mb-4 mb-lg-0">
      <div className="d-flex w-100 px-3 justify-content-between align-items-center">
        <div className=" d-flex  align-items-center">
          <img src={img} alt="image"/>
          <h5 className="ms-2">{cardTitle}</h5>
        </div>
        <CircularProgress bgcolor="#4CAF50" percentage={progressValue} />
      </div>
      <div className="cinfo">
        <p>{progressStatus}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
