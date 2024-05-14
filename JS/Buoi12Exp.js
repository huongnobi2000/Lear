// * Mô tả bài 1: Quản lý nhân viên												
// 	1. Viết mã JavaScript để tạo cấu trúc dữ liệu cho nhân viên bao gồm:											
// 		+ id: Mã nhân viên (int)										
// 		+ fullName: Họ tên (string)										
// 		+ position: Chức vụ (string)										
// 		+ department: Phòng ban (string)										
// 		+ salary: Lương (floag)										
												
// 	2. Tạo các hàm để thực hiện các chức năng:											
// 		+ getAllEmployees(): Lấy danh sách tất cả nhân viên.										
// 		+ getEmployeeById(id): Lấy thông tin nhân viên theo mã nhân viên.										
// 		+ addEmployee(employee): Thêm nhân viên mới.										
// 		+ updateEmployee(employee): Cập nhật thông tin nhân viên.										
// 		+ deleteEmployeeById(id): Xóa nhân viên theo mã nhân viên.										
// 		+ searchEmployeesByName(name): Tìm kiếm nhân viên theo tên.										
												
												
												
// 	4. Gọi các hàm để thực hiện các thao tác quản lý nhân viên như:											
// 		+ Hiển thị danh sách nhân viên lên console.										
// 		+ Thêm nhân viên mới.										
// 		+ Cập nhật thông tin nhân viên.										
// 		+ Xóa nhân viên.										
// 		+ Tìm kiếm nhân viên theo tên.			


const employees = [
    {
        id: 1,
        code: 444322,
        fullName: 'Vũ Thị Ngọc Mai',
        position: 'BrSE',
        department: 'KTCN',
        salary: 3000
    },
    {
        id: 2,
        code: 444325,
        fullName: 'Trần Kim Quốc',
        position: 'PO',
        department: 'KTCN',
        salary: 4000
    },
    {
        id: 3,
        code: 444326,
        fullName: 'Trịnh Thị Hoa',
        position: 'Test',
        department: 'KTCN',
        salary: 1000
    },
    {
        id: 4,
        code: 444327,
        fullName: 'Nguyễn Thị Hương',
        position: 'QA',
        department: 'KTCN',
        salary: 3500
    },
    {
        id: 5,
        code: 444329,
        fullName: 'Nguyễn Gia Trường',
        position: 'Dev',
        department: 'KTCN',
        salary: 5000
    }
];

function getEmployees () {
    return employees;
}













































































