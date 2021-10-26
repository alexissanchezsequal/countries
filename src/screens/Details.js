/* eslint-disable react/jsx-key */
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"

// ** components
import Buttom from "../components/Buttom"
import Country from "../components/Country"

// ** React Query
import { useQuery } from "react-query"
// ** Services
import { getInfo, getBorder } from "../services"

const icon = <IoArrowBackOutline size={18} />

const Details = ({ match }) => {
  const [items, setItems] = useState([])
  const { name, border } = match.params
  const nameCountry = !border ? name : border

  const { isLoading, isError, isSuccess } = useQuery(
    [name, border],
    () => (!border ? getInfo(nameCountry) : getBorder(nameCountry)),
    {
      onSuccess: (data) => {
        console.log(data)
        setItems(data)
      }
    }
  )

  if (isError) {
    return (
      <>
        <div className="search-wrapper">
          <Link to={"/"}>
            <Buttom icon={icon} title="Back" className="btn" />
          </Link>
        </div>
      </>
    )
  } else if (isLoading) {
    return (
      <>
        <div className="search-wrapper">
          <Link to={"/"}>
            <Buttom icon={icon} title="Back" className="btn" />
          </Link>
        </div>
        <p>Loading...</p>
      </>
    )
  } else if (isSuccess) {
    return (
      <div>
        <div className="search-wrapper">
          <Link to={"/"}>
            <Buttom icon={icon} title="Back" className="btn" />
          </Link>
        </div>
        {items.length > 0 && (
          <Country
            data={
              !border ? items[0] : items.filter((e) => e.cca3 === border)[0]
            }
          />
        )}
      </div>
    )
  } else {
    return null
  }
}

export default Details
