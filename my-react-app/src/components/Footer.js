function Footer() {
  return (
      <div className="bg-white p-8 mt-8 mx-36">
          <div className="grid grid-cols-4 gap-8">
              <div>
                  <h3 className="font-bold mb-2">VỀ GEARVN</h3>
                  <ul>
                      <li className="mb-1">Giới thiệu</li>
                      <li className="mb-1">Tuyển dụng</li>
                      <li className="mb-1">Black Friday 2024</li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-bold mb-2">CHÍNH SÁCH</h3>
                  <ul>
                      <li className="mb-1">Chính sách bảo hành</li>
                      <li className="mb-1">Chính sách giao hàng</li>
                      <li className="mb-1">Chính sách bảo mật</li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-bold mb-2">THÔNG TIN</h3>
                  <ul>
                      <li className="mb-1">Hệ thống cửa hàng</li>
                      <li className="mb-1">Hướng dẫn mua hàng</li>
                      <li className="mb-1">Hướng dẫn thanh toán</li>
                      <li className="mb-1">Hướng dẫn trả góp</li>
                      <li className="mb-1">Tra cứu địa chỉ bảo hành</li>
                  </ul>
              </div>
              <div>
                  <h3 className="font-bold mb-2">TỔNG ĐÀI HỖ TRỢ (8:00 - 21:00)</h3>
                  <ul>
                      <li className="mb-1">Mua hàng: <a href="tel:19005301" className="text-blue-500">1900.5301</a></li>
                      <li className="mb-1">Bảo hành: <a href="tel:19005325" className="text-blue-500">1900.5325</a></li>
                      <li className="mb-1">Khiếu nại: <a href="tel:18006173" className="text-blue-500">1800.6173</a></li>
                      <li className="mb-1">Email: <a href="mailto:cskh@gearvn.com" className="text-blue-500">cskh@gearvn.com</a></li>
                  </ul>
              </div>
              
          </div>
      </div>
  );
}
export default Footer;