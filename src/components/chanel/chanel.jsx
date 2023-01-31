import { Button } from "@mui/material"
import { Link , useParams} from "react-router-dom"


const Chanel = () => {
    const params = useParams()
   console.log(params);
  return (
    <Link to={'/'}>
        <Button variant="contained">Main</Button>
    </Link>
  )
}

export default Chanel