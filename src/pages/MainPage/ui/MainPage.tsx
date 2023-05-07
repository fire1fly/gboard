import { Link } from "react-router-dom"

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/about">About</Link>
      <Link to="/privacy">Privacy</Link>
    </div>
  )
}

export default MainPage;