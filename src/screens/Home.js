import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// ** components
import Card from "../components/Card"
// ** React Query
import { useQuery } from "react-query"
// ** Services
import { getAllCountries } from "../services"

const Home = () => {
  const [search, setSearch] = useState("")
  const [region, setRegion] = useState("All")
  const [list, setList] = useState([])

  const { isLoading, isError, isSuccess } = useQuery("ALL", getAllCountries, {
    onSuccess: (data) => {
      setList(data)
    }
  })

  const filterList = (items) => {
    let array = items.filter((row) => {
      return row.name.common.toLowerCase().includes(search.toLowerCase())
    })
    if (region !== "All") {
      array = array.filter((row) => {
        return row.region.toLowerCase().includes(region.toLowerCase())
      })
    }
    return array
  }

  useEffect(() => {
    console.log(region)
  }, [region])

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (isError) {
    return <p>Error connecting to country api</p>
  } else {
    return (
      <>
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="sr-only">Search for a country...</span>
          </label>
          <div className="select">
            <select
              onChange={(e) => {
                setRegion(e.target.value)
              }}
              className="custom-select"
              aria-label="Filter Countries By Countries"
            >
              <option value="All">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <ul className="card-grid">
          {filterList(list).map((item, index) => (
            <li key={index}>
              <Link to={`/${item?.name?.common}`}>
                <Card data={item} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="marginBtm"></div>
      </>
    )
  }
}

export default Home
