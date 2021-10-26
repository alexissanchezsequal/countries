/* eslint-disable no-tabs */
/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom"

const Country = ({ data }) => {
  function json2array(json) {
    const result = []
    const keys = Object.keys(json)
    keys.forEach(function (key) {
      result.push(json[key])
    })
    return result
  }
  return (
    <>
      <article>
        <aside className="article-flag">
          <img src={data?.flags?.png} alt={data?.name?.common} />
        </aside>
        <div className="article-main">
          <h3>{data?.name?.common}</h3>
          <div className="flex f-btw">
            <div className="row">
              <ol className="items">
                <li>
									Native Name: <span>{data?.name?.common}</span>
                </li>
                <li>
									Population: <span>{data?.population}</span>
                </li>
                <li>
									Region: <span>{data?.region}</span>
                </li>
                <li>
									Sub Region: <span>{data?.subregion}</span>
                </li>
                <li>
									Capital:{" "}
                  <span>
                    {data?.capital?.length > 0 ? data?.capital[0] : "N/A"}
                  </span>
                </li>
              </ol>
            </div>
            <div className="last-row">
              <ol className="items">
                <li>
									Top Level Domain:{" "}
                  <span>{data?.tld?.length > 0 ? data?.tld[0] : "N/A"}</span>
                </li>
                <li>
									Currencies:{" "}
                  <span>
                    {json2array(data?.currencies).map(
                      (items) => `${items.name}, `
                    )}
                  </span>
                </li>
                <li>
									Languages:{" "}
                  <span>
                    {json2array(data?.languages).map((items) => `${items}, `)}
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div className="article-end">
            <h4>Border Countries: </h4>
            {data?.borders?.map((item) => (
              <Link to={`/${data?.name?.common}/borders/${item}`}>
                <span>{item}</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}

export default Country
