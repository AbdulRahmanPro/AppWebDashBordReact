import NavBar from "./components/Admin/NavbarLeft"
import TableUser from "./components/Admin/TableUsers"
export default function PageDashBord(){

    return(
        <div className=" bg-neutral-200 background_dashbord h-screen w-screen flex flex-row  ">
            <NavBar/>
            <TableUser/>
        </div>
    )
}