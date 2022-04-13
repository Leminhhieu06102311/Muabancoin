6.1.	Hiển thị tất cả mặt hàng. Danh sách sắp xếp theo đơn giá tăng dần.
--> hàng hóa -> sắp xếp cột đơn giá (ASC)


6.2.	Hiển thị tất cả các mặt hàng thuộc loại hàng “Thời trang”. Thông tin gồm: mã mặt hàng, tên mặt hàng, đơn vị tính, đơn giá, loại hàng.
--> sử dụng phép tích hoặc inner join nối bảng lại


6.3.	Thống kê số mặt hàng theo loại hàng, thông tin gồm: mã loại hàng, tên loại hàng, tổng số mặt hàng. Danh sách sắp xếp theo tổng số mặt hàng giảm dần.
select lh.maloai, lh.tenloai, count(hh.loai)
from loaihang lh, hanghoa hh
where ....
group by lh.maloai, lh.tenloai
order by count(hh.loai) desc


6.4.	Liệt kê số phiếu xuất, ngày xuất hàng, tên cửa hàng, mã mặt hàng, tên mặt hàng, tên loại hàng, số lượng, đơn giá, thành tiền.
--> sử dụng inner join, phép để liên kết những bảng (px, cuahang, hanghoa, loaihang,ctpx) -> thành tiền: soluong * dongia

6.5.	Thống kế tổng thành tiền hàng đã xuất mỗi tháng trong năm 2021 theo cửa hàng, thông tin gồm: tháng/năm, tên cửa hàng, tổng thành tiền.
--> sử dụng inner join, phép để liên kết những bảng (px, cuahang, hanghoa,ctpx) --> 
select concat(month(ngayxuat),'/',year(ngayxuat)), tench, sum(songia*sl)
from ....
where .... and year(ngayxuat) = 2021
group by ....

6.6.	Liệt kê 5 mặt hàng có số lượng xuất kho nhiều nhất trong tháng 10 năm 2021.
--> sử dụng inner join, phép để liên kết những bảng (px,hanghoa,ctpx)
--> sum(soluong) --> xuat lương xuất kho
--> order by sum(soluong) desc limit 5

6.7.	Thống kê số hàng nhập về cửa hàng Vân Thanh Fashion - chi nhánh quận 3, thông tin hiển thị: Tên cửa hàng, số lần nhập hàng, số tiền thanh toán.
--> sử dụng inner join, phép để liên kết những bảng (px, cuahang, hanghoa,ctpx)

6.8.	Thống kê sô lượng hàng xuất kho theo ngày, thông tin hiển thị: Ngày xuất hàng, tổng số lần xuất hàng, tổng thành tiền.
--> sử dụng inner join, phép để liên kết những bảng (px, hanghoa,ctpx)
select ngayxuat, count(sophieu), sum(dongia*soluong)
from
where
group by ngayxuat

6.9.	Cập nhật ngày xuất hàng là ngày hiện hành cho các phiếu xuất chưa có ngày xuất 
6.10.	Cập nhật đơn giá của “Đồng phục học sinh” giảm 10% trên đơn giá hiện tại.
6.11.	Thực hiện xóa các cửa hàng chưa có thông tin xuất hàng.


6.12.	Liệt kê danh sách các mặt hàng có số lượng xuất hàng thấp nhất: Mã hàng, tên hàng, tổng số lượng xuất kho.
select sum(soluong)
from ctpx
group by mahh
order by sum(soluong) asc
limit 1

select mahh, tenhh, sum(songluong)
from ctpx, hanghoa
where ....
group by mahh, tenhh
having sum(soluong) = (select sum(soluong)
								from ctpx
								group by mahh
								order by sum(soluong) asc
								limit 1)

6.13.	Liệt kê những mặt hàng chưa từng xuất cho các cửa hàng, thông tin gồm: Mã mặt hàng, tên mặt hàng, tên loại hàng.

select ...
from hanghoa, loaihang
where hh.mahh not in (select mahh
						from ctpx)
