const Buttom = ({ className, onclick, icon, title }) => {
  return (
    <button className={className} onClick={onclick}>
      {icon} <span className="not-mobile">{title}</span>
    </button>
  )
}

export default Buttom
