import {Link} from 'react-router-dom'

function SideBar(){
    return (
        <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center mb-5" href="/">
				<div className="sidebar-brand-icon mt-5">
					<img className="w-100 img-fluid " src="assets/images/prueba3.png" alt="Digital House"/>
				</div>
			</a>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0"/>

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - HebraLibre</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider"/>

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item" >
				<Link className="nav-link collapsed" to="/movies">
					<i className="fas fa-fw fa-box-open"></i>
					<span>Products</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/genres">
					<i className="fas fa-fw fa-tag"></i>
					<span>Categories</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/users">
					<i className="fas fa-fw fa-user"></i>
					<span>Users</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}

export default SideBar;