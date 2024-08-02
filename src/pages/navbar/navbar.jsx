<div>
     <div className="nav flex justify-between mx-[100px]">
    <div className="logo flex items-center">
    <img src={logo} alt="" className="w-[15%]"/>
    <h1 className="text-[20px]">G R I D  W O R K</h1>
    </div>
    <div className="links flex gap-10 p-10 text-[25px]">
    <Link to={'/home'} className="hover:border-b-2 hover:border-black">Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/projects'}>Projects</Link>
    <Link to={'/'}>Login</Link>
    </div>
  
        </div>
         <Routes>
          <Route path="/" element={<h1>login</h1>}/>
          <Route path="/projects" element={<h1>projects page</h1>}/>
     
          <Route path="/about" element={<h1>about page</h1>}/>
          <Route path="/home" element={<Navbar/>}/>
         </Routes>
   </div>