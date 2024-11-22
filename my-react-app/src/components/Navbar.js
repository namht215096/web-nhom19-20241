import '../css/button.css';

function Navbar() {
    return (

      <>
      <div className="bg-red-600 p-4">
        <div className="mx-36 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://placehold.co/50x50"
            className="h-10 mr-2"
            alt="logo"
          ></img>
        </div>
        
        <button className="button-1 w-24 h-11 mx-2">Danh mục</button>
    
        <div className="flex items-center bg-white rounded h-11 p-1 w-1/2">
          <input
            type="text"
            placeholder="Bạn cần tìm gì?"
            className="flex-grow outline-none text-gray-600"
          />
        </div>
        <div className="flex items-center space-x-4 text-white">
          <div className=" items-center">
            <span className="text-xs ml-2 mr-1">Hotline</span>
            <div className="ml-1 text-xs">1900.5301</div>
          </div>
          <div className="flex items-center">
            <span className="text-xs mr-1">Hệ thống Showroom</span>
          </div>
          <div className="flex items-center">
            
            <span className="text-xs mr-1">Tra cứu đơn hàng</span>
          </div>
          <div className="flex items-center">
            
            <span className="text-xs mr-1">Giỏ hàng</span>
          </div>
          <div className="flex items-center bg-red-700 p-2 rounded">
            <i className="fas fa-user mr-1"></i>
            <span>Đăng nhập</span>
          </div>
        </div>
        </div>
        
      </div>
      </>
    );
  }
  export default Navbar;
  