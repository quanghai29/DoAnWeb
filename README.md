# DoAnWeb
web autcion


Link references: 
-

-- frame work alert:
https://sweetalert.js.org/guides/ 

-- make slider:
https://bxslider.com

-- hỗ trợ selector (coi lại datalist của html 5)
https://select2.org/

-- hỗ trợ ngày tháng năm
https://eonasdan.github.io/bootstrap-datetimepicker/

-- shadow linear cho ảnh :
https://lokeshdhakar.com/projects/lightbox2/

-- hiêu ứng 
https://wowjs.uk/
https://daneden.github.io/animate.css/

Sơ lược về ý nghĩa thư mục 
- contents
 .images
 . css
 .javascript
- routes
  . admin
  . user
- views
  . _layouts
  . prototype
  . vwadmin
  . vwDetailProduct
  *home.hbs
  *login.hbs
  *signup.hbs
- app.js

  
css: để bỏ css ( tạm thời là một file main.css dùng chung)
javacript: để bỏ file javacript 
routes có hai routes 
- admin là đứa có taì khoản để đăng nhập bao gồm các view như xem thông tin cá nhân giỏ hàng, đặt cọc đăng hàng
- user là đứa không có tài khoản chỉ xem được sản phẩm chi tiết sản phẩm
- app.js cho những route chung mà user admin đều xem như nhau
