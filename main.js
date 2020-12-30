function Click(event) {
    
    event.preventDefault();
  
    /**
     * Lấy 2 giá trị từ người dùng nhập vào
     */
    var TongTien = document.getElementById("txtTongTien").value;
    var PhanTramTip = document.getElementById("slPhanTramTip").value;
    var SoNguoi = document.getElementById("txtSoNguoi").value;
  
    function tinhTip(tong, phantram, nguoi) {
        return (tong * phantram )/ 100/nguoi ;
      }
            
      var trungbinh = tinhTip(TongTien, PhanTramTip, SoNguoi);

    document.getElementById("txtThongBaoTienTip").innerHTML = "Tiền Tip mỗi người : " + trungbinh + "$";
    document.getElementById("txtThongBaoTienTip").style.display = "block";
    document.getElementById("txtThongBaoTienTip").className = "alert alert-success";
    
  }