/* eslint-disable no-tabs */
const Card = ({ data, id }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={data?.flags?.png} alt={data?.name?.official} />
        </div>
        <div className="card-content">
          <span className="card-name">{data?.name?.official}</span>
          <ol className="card-list">
            <li>
              <span className="card-sub">Population: </span>
              <span className="card-info">{data?.population}</span>
            </li>
            <li>
              <span className="card-sub">Region: </span>
              <span className="card-info">{data?.region}</span>
            </li>
            <li>
              <span className="card-sub">Capital: </span>
              <span className="card-info">
                {data?.capital?.length > 0 ? data?.capital[0] : "N/A"}
              </span>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default Card
