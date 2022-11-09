
## Installation

**Database**
* Sử dụng [phpMyadmin](https://www.phpmyadmin.net/) (nền tảng MySQL) để quản lý thông tin database:

> Import file [Users.sql](https://github.com/AnhVu910/Backend_Nodejs/blob/main/Users.sql "Users.sql") trong thư mục vào trong phpMyadmin để có thể tạo
> database


**Backend**

	    git clone https://github.com/AnhVu910/Backend_Nodejs.git
        cd Backend_Nodejs
        echo 'PORT=8080' > .env
        npm install
        npm start
        

**Frontend**
 1. For non-regex
		

		    git clone https://github.com/AnhVu910/BT_WebAT.git
            cd BT_WebAT
            npm install 
            npm start
        
2. For regex

	    git clone https://github.com/AnhVu910/BT_WebAT.git
        cd BT_WebAT
        git checkout web_regex
        npm install 
        npm start

> Sau khi khởi chạy 3 thành phần trên thành công thì truy cập vào frontend http://127.0.0.1:3000/ 

## Demo

[Demo các trường hợp đối với web cho phép đăng ký, đăng nhập thông tin khách hàng](https://drive.google.com/drive/folders/1w5qdRyB8yJ_xgZ4zA7uZe14Vish__j4u?usp=share_link)
