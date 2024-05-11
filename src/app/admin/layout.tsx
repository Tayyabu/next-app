import Nav, { NavLink } from "@/components/Nav";



export default function AdminLayout(){
    return <>
    <Nav>
        <NavLink href={'/admin'}>Dashboard</NavLink>
        <NavLink href={'/admin/products'}>Products</NavLink>
    </Nav>
    </> 
}