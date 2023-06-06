
import React from 'react';
class TinhDiemTrungBinh1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        diemhk1:"0" ,
        diemhk2: "0",
        diemTrungBinh: "",
        xepLoai: '',
        ketqua:'',
        tableData: [], // Thêm một trường dữ liệu để lưu trữ các dữ liệu vào bảng
      };
    }
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: Number(event.target.value) });
    };
  
    tinhDiemTrungBinh = () => {
      const { diemhk1, diemhk2, tableData } = this.state;
      const diemTrungBinh = [diemhk1 +( diemhk2*2)] / 3;
      let xepLoai;
      if (diemTrungBinh >= 8.5 && diemTrungBinh <= 10) {
        xepLoai = 'Giỏi';
      } else if (diemTrungBinh >= 7 && diemTrungBinh < 8.5) {
        xepLoai = 'Khá';
      } else if (diemTrungBinh >= 5 && diemTrungBinh < 7) {
        xepLoai = 'Trung bình';
      } else {
        xepLoai = 'Yếu';
      }

      let ketqua;
      if (diemTrungBinh >= 8.5 && diemTrungBinh <= 10) {
        ketqua = 'Được lên lớp nhận 20 cuốn vở';
      } else if (diemTrungBinh >= 7 && diemTrungBinh < 8.5) {
        ketqua = 'Được lên lớp nhận 10 cuốn vở';
      } else if (diemTrungBinh >= 5 && diemTrungBinh < 7) {
        ketqua = 'Được lên lớp không được nhận vở';
      } else {
        ketqua = 'Bị thi lại';
      }
  
      // Thêm các dữ liệu mới vào mảng tableData
      const newData = {
        diemhk1,
        diemhk2,
        diemTrungBinh,
        xepLoai,
        ketqua
      };
      this.setState({ diemTrungBinh, xepLoai, ketqua, tableData: [...tableData, newData] });
    };
  
    render() {
      const { diemhk1, diemhk2, diemTrungBinh, xepLoai,ketqua, tableData } = this.state;
  
      // Render bảng dữ liệu
      const renderTableData = () => {
        return tableData.map((data, index) => {
          const { diemhk1, diemhk2, diemTrungBinh, xepLoai } = data;
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{diemhk1}</td>
              <td>{diemhk2}</td>
              <td>{diemTrungBinh}</td>
              <td>{xepLoai}</td>
              <td>{ketqua}</td>
            </tr>
          );
        });
      };
  
      return (
        <center>
        <div>
          <h3>Kết quả học tập</h3>
          <form>
            <div>
              <label>Điểm HK1:</label>
              <input className='input' type="number" name="diemhk1" value={diemhk1} onChange={this.handleChange} />
            </div><br></br><br></br>
            <div>
              <label>Điểm HK2:</label>
              <input className='input' type="number" name="diemhk2" value={diemhk2} onChange={this.handleChange} />
            </div>
            <br></br><br></br>
            <button className='btn btn-primary' type="button" onClick={this.tinhDiemTrungBinh}>
              Tính điểm trung bình
            </button>
          </form>
          <br></br>
          <div>
            <p>Điểm trung bình: {diemTrungBinh}</p>
            <p>Xếp loại: {xepLoai}</p>
            <p>Kết quả: {ketqua}</p>
          </div>
          <br></br>
          {/* Hiển thị bảng dữ liệu */}
          {tableData.length > 0 && (
            <div className='container'>
            <table className='table' border="1">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Điểm HK1</th>
                  <th>Điểm  HK2</th>
                  <th>Điểm trung bình</th>
                  <th>Xếp loại</th>
                  <th>Kết quả</th>
                </tr>
                </thead>
              <tbody>{renderTableData()}</tbody>
            </table>
            </div>
          )}
        </div>
        </center>
      );
    }
  }
  export default TinhDiemTrungBinh1;