import Navigation from "./Navigation";

function Header() {
    return (
    <div className="container-fluid bg-secondary">
      <div className='row'>
        <Navigation />
        <div clas="col-12"><h1>Header</h1></div>
      </div>
    </div>
    );
  }

  
export default Header;