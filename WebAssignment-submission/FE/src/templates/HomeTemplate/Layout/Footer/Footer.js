// import { AppleOutlined, FacebookOutlined } from '@ant-design/icons'
// import { layThongTinChiTietDiaChi } from "../../../../redux/actions/QuanLyDiaChiAction";
// import React, { useEffect } from 'react'
// import logo from '../../../../assets/apple_resized_aspect_fixed.png'
// import { useSelector, useDispatch } from "react-redux";
// export default function Footer(props) {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         //Lấy thông tin param từ url


//         dispatch(layThongTinChiTietDiaChi(1));

//     }, []);


//     const productDetail = useSelector(
//         (state) => state.QuanLyDiaChiReducer.productDetail
//     );



//     return (
//         <footer className="py-6 bg-coolGray-100 text-coolGray-900 bg-gray-800">
//             <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
//                 <div className="grid grid-cols-12">
//                     <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
//                         <btn href="#" className="flex justify-center space-x-3 md:justify-start text-black">
//                             <img src={logo} alt="cyberlearn.vn" />
//                         </btn>
//                     </div>

//                     <div className="col-span-6 text-center md:text-left md:col-span-3">
//                         <p className="pb-1 text-lg font-medium text-white">Thông tin liên hệ</p>
//                         <p className='text-white'>
//                             Địa chỉ: {productDetail[0]?.address}</p>
//                         <p className='text-white'>Gọi số: <a href={`tel:${productDetail[0]?.phone}`}>{productDetail[0]?.phone}</a></p>
//                         <div className="grid grid-cols-3" style={{ color: '#fff' }}>
//                             <div >
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
//                         <p className="pb-1 text-lg font-medium">Kết nối với chúng tôi</p>
//                         <div className="flex text-white">
//                             <div className="mr-5">
//                                 <AppleOutlined className="text-2xl" />
//                             </div>
//                             <div>
//                                 <FacebookOutlined className="text-2xl" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pt-6 lg:justify-between text-white" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//                     <div>©2023 All rights reserved</div>
//                 </div>
//             </div>
//         </footer>

//     )
// }

import { AppleOutlined, FacebookOutlined } from '@ant-design/icons'
import { layThongTinChiTietDiaChi } from "../../../../redux/actions/QuanLyDiaChiAction";
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import logo from '../../../../assets/apple_resized_aspect_fixed.png';
 
function LongDialog(title,content) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Typography
        color="white"
        onClick={handleOpen}
        className="py-1.5 font-normal mb-0 transition-colors hover:text-blue-gray-900"
        >
        {title}
        </Typography>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody className="h-[20rem] overflow-scroll">
          <Typography className="font-normal">
            {content}
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            Đóng
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
 
const currentYear = new Date().getFullYear();
 
export default function FooterWithSocialLinks(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        //Lấy thông tin param từ url


        dispatch(layThongTinChiTietDiaChi(1));

    }, []);


    const productDetail = useSelector(
        (state) => state.QuanLyDiaChiReducer.productDetail
    );

  return (
    <footer className="relative w-full pt-2 bg-gray-800 text-white">
      <div className="mx-auto w-full max-w-7xl px-8">
            <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div className=''>
                <btn href="/" className="flex justify-center space-x-3">
                    <img src={logo} alt="logo" />
                </btn>
                <div className="col-span-6 text-center md:text-left md:col-span-3">
                    <p className="pb-1 text-lg font-medium text-white">Thông tin liên hệ</p>
                    <p className='text-white'>
                        Địa chỉ: {productDetail[0]?.address}</p>
                    <p className='text-white'>Gọi số: <a href={`tel:${productDetail[0]?.phone}`}>{productDetail[0]?.phone}</a></p>
                    <div className="grid grid-cols-3" style={{ color: '#fff' }}>
                        <div >
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 justify-between gap-4">
                <ul key="Hệ thống cửa hàng">
                    <Typography variant="small" className="mb-3 font-medium opacity-40">
                        Hệ thống cửa hàng
                    </Typography>

                    <li key="Nội quy cửa hàng">
                        {LongDialog ("Nội quy cửa hàng",
                            (
                            <>
      <h2 align="center" style={{ textAlign: "left" }}>
        <strong>NỘI QUY CỬA HÀNG PHONE STORE</strong>
      </h2>

      <p>Áp dụng từ ngày: 22/10/2021</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>Điều 1: Thời gian hoạt động của cửa hàng</strong>
        </span>
      </p>

      <p>Cửa hàng hoạt động từ 7h30 đến 21h hàng ngày. Tết và các ngày khác sẽ có thông báo riêng.</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>Điều 2: Quy định hàng hóa, dịch vụ kinh doanh tại cửa hàng</strong>
        </span>
      </p>

      <p>
        - Hàng hóa, dịch vụ kinh doanh tại cửa hàng phải phù hợp với các mặt hàng đã đăng ký trong giấy chứng nhận đăng ký kinh doanh và không thuộc danh mục pháp luật cấm kinh doanh.
      </p>

      <p>- Không kinh doanh hàng nhái, hàng lậu, hàng giả, hàng không rõ nguồn gốc.</p>

      <p>
        - Hàng hóa có bảo hành thì giấy bảo hành phải ghi rõ thời gian bảo hành và địa điểm bảo hành. Tất cả hàng hóa dịch vụ kinh doanh tại cửa hàng phải có thương mại, giá bán phải niêm yết tại địa điểm kinh doanh bằng VNĐ.
      </p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>Điều 3: Quy định về người đến giao dịch mua bán, tham quan, thi hành công vụ tại cửa hàng</strong>
        </span>
      </p>

      <p>
        <strong>- </strong>Mọi người đến cửa hàng giao dịch mua bán, tham quan, thi hành công vụ phải chấp hành nghiêm chỉnh nội quy tại cửa hàng, các quy định pháp luật hiện hành và sự hướng dẫn của cán bộ nhân viên cửa hàng.
      </p>

      <p>- CBNV cơ quan nhà nước vào cửa hàng để thi hành nhiệm vụ phải thông báo, xuất trình chứng minh nhân dân và các giấy tờ có liên quan đến việc thi hành nhiệm vụ với người có thẩm quyền ở cửa hàng.</p>

      <p>
        <span style={{ fontSize: "14pt" }}>
          <strong>Điều 4: Quy định đối với cán bộ nhân viên tại cửa hàng</strong>
        </span>
      </p>

      <p>- Thực hiện đúng chức trách, nhiệm vụ được phân công, có tác phong đúng mực, thái độ hòa nhã, khiêm tốn khi giao tiếp và giải quyết công việc.</p>

      <p>- Hướng dẫn tận tình cho mọi người trong cửa hàng hiểu rõ và chấp hành theo đúng quy định của cửa hàng và các quy định của nhà nước.</p>

      <p>- Nghiêm cấm mọi biểu hiện tiêu cực, gian lận, gây cản trở khó khăn trong kinh doanh của cửa hàng.</p>
                            </>)
                        )}
                    </li>
                    <li key="Chất lượng phục vụ">
                        {LongDialog ("Chất lượng phục vụ",
                            (
                            <>
                                <h2>CHÍNH SÁCH NÂNG CAO CHẤT LƯỢNG PHỤC VỤ KHÁCH HÀNG ONLINE</h2>
      <p>Áp dụng từ ngày: 22/10/2021</p>

      <p>
        Kính chào quý khách, với cam kết đặt khách hàng làm trung tâm trong mọi suy nghĩ và hành động của mình, TopZone đã có một số thay đổi dịch vụ Online để chất lượng phục vụ ngày càng tốt hơn:
      </p>

      <p>
        <strong>
          <span style={{ fontSize: "14pt" }}>1. Tổng đài hỗ trợ khách hàng</span>
        </strong>
      </p>

      <p>
        TỔNG ĐÀI 1900.986843 (phục vụ từ 7:30 - 22:00 mỗi ngày) với gần 200 nhân viên phục vụ trên 10.000 cuộc gọi/ngày từ khách hàng.
      </p>

      <p>
        <strong>
          <span style={{ fontSize: "14pt" }}>2. Chất lượng</span>
        </strong>
      </p>

      <p>
        Website Topzone.vn luôn cập nhật sản phẩm mới nhất, hình ảnh và chức năng sản phẩm được kiểm tra thực tế. Cập nhật giá cả và khuyến mãi nhanh chóng kịp thời nhằm phục vụ Quý khách quan tâm lĩnh vực sản phẩm công nghệ.
      </p>

      <p>
        Chúng tôi cũng duy trì một đội ngũ quản trị viên đông đúc để cập nhật thông tin và giải đáp phản hồi của Quý khách trên website nhanh nhất hiện nay.
      </p>

      <p>
        <strong>
          <span style={{ fontSize: "14pt" }}>3. Phục vụ chu đáo</span>
        </strong>
      </p>

      <p>
        Với hệ thống siêu thị rộng khắp trên toàn quốc, chúng tôi cảm kết khi quý khách đặt hàng Online trên website sẽ được giao hàng tận nơi nhanh chóng.
      </p>

      <p>
        Chúng tôi rất trân trọng sự tin yêu của Quý khách đã sử dụng dịch vụ Online trong thời gian qua, đó cũng là động lực để chúng tôi không ngừng nỗ lực và hoàn thiện mình ngày một tốt hơn.
      </p>

      <p>
        Với năng lực tiếp nhận vẫn còn nhiều giới hạn nên trong thời gian gần đây chúng tôi có thể chưa phục vụ hết 100% khách hàng trọn vẹn với cam kết trên. Do đó, chúng tôi xin phép được "ƯU TIÊN PHỤC VỤ" những khách hàng thật sự có nhu cầu thật sự cần tư vấn hoặc mua hàng, đồng thời HẠN CHẾ PHỤC VỤ các khách hàng liên hệ tổng đài 1900.1216 nhiều lần nhưng chưa rõ mục đích, hoặc yêu cầu đặt hàng nhiều lần trên website nhưng không nhận hàng.
      </p>

      <p>
        Điều này có thể giúp chúng tôi phục vụ những khách hàng thật sự một cách tốt nhất và nhanh nhất. Trong một vài trường hợp, Quy trình phục vụ làm Quý khách phiền lòng, mong quý khách thông cảm và vui lòng phản hồi cho chúng tôi kiểm tra và khắc phục. TopZone cam kết luôn nỗ lực để phục vụ khách hàng ngày một tốt hơn!
      </p>
                            </>)
                        )}
                    </li>
                    <li key="Chính sách bảo hành & đổi trả">
                        {LongDialog ("Chính sách bảo hành & đổi trả",
                            (
                            <>
<h2>CHÍNH SÁCH BẢO HÀNH, ĐỔI TRẢ SẢN PHẨM TOPZONE.VN</h2>
  <p>Áp dụng từ ngày: 22/10/2021</p>
  <p>
    Khách hàng muốn bảo hành, đổi trả sản phẩm chọn 1 trong các phương thức bên
    dưới:
  </p>
  <div>
    <table border={1} cellSpacing={0} cellPadding={10} style={{border:'1px solid black'}}>
      <tbody >
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>NỘI DUNG CHÍNH SÁCH</strong>
            </p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>ĐIỀU KIỆN ÁP DỤNG</strong>
            </p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>1) BẢO HÀNH CÓ CAM KẾT TRONG 12 THÁNG</strong>
            </p>
            <p>
              - Chỉ áp dụng cho sản phẩm chính, KHÔNG áp dụng cho phụ kiện đi
              kèm sản phẩm chính
            </p>
            <p>
              + Bảo hành trong vòng 15 ngày (tính từ ngày TopZone nhận máy ở
              trạng thái lỗi và đến ngày gọi khách hàng ra lấy lại máy đã bảo
              hành)
            </p>
            <p>
              + Sản phẩm không bảo hành lại lần 2 trong 30 ngày kể từ ngày máy
              được bảo hành xong.
            </p>
            <p>
              + Nếu TopZone vi phạm cam kết (bảo hành quá 15 ngày hoặc phải bảo
              hành lại sản phẩm lần nữa trong 30 ngày kể từ lần bảo hành trước),
              Khách hàng được áp dụng phương thức{" "}
              <strong>Hư gì đổi nấy ngay và luôn</strong> hoặc{" "}
              <strong>Hoàn tiền</strong> với <strong>mức phí giảm 50%</strong>.
            </p>
            <p>
              + Từ tháng thứ 13 trở đi, không áp dụng bảo hành cam kết, chỉ áp
              dụng bảo hành hãng (nếu có)
            </p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>- Sản phẩm đủ điều kiện bảo hành của hãng.</p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>2) HƯ GÌ ĐỔI NẤY NGAY VÀ LUÔN </strong>(KHÔNG áp dụng cho
              Apple Watch)
            </p>
            <p>
              Sản phẩm hư gì thì đổi đó (cùng model, cùng dung lượng, cùng màu
              sắc...) đối với sản phẩm chính và đổi tương đương đối với phụ kiện
              đi kèm, cụ thể:
            </p>
            <p>
              <strong>2.1) Hư sản phẩm chính thì đổi sản phẩm chính mới</strong>
            </p>
            <p>- Tháng đầu tiên kể từ ngày mua: miễn phí</p>
            <p>
              - Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.
            </p>
            <p>(VD: tháng thứ 2 phí 10%, tháng thứ 3 phí 20%...)</p>
            <p>
              Lưu ý: Nếu không có sản phẩm chính đổi cho Khách hàng thì áp dụng
              chính sách <strong>Bảo hành có cam kết </strong>hoặc{" "}
              <strong>Hoàn tiền</strong> với mức phí giảm 50%.
            </p>
            <p>
              <strong>
                2.2) Hư phụ kiện đi kèm thì đổi phụ kiện có cùng công năng mà
                TopZone đang kinh doanh
              </strong>
            </p>
            <p>
              Phụ kiện đi kèm được đổi miễn phí trong vòng 12 tháng kể từ ngày
              mua sản phẩm chính bằng hàng phụ kiện TopZone đang kinh doanh mới
              với chất lượng tương đương.
            </p>
            <p>
              Lưu ý: Nếu không có phụ kiện tương đương hoặc Khách hàng không
              thích thì áp dụng bảo hành hãng
            </p>
            <p>
              <strong>2.3) Lỗi phần mềm</strong> không áp dụng, mà chỉ khắc phục
              lỗi phần mềm
            </p>
            <p>
              <strong>2.4) Trường hợp Khách hàng muốn đổi full box</strong>{" "}
              (nguyên thùng, nguyên hộp): ngoài việc áp dụng mức phí đổi trả tại
              Mục 2.1 thì Khách hàng sẽ trả thêm phí lấy full box tương đương
              20% giá trị hóa đơn.
            </p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>
              - Sản phẩm đổi trả phải giữ nguyên 100% hình dạng ban đầu và đủ
              điều kiện bảo hành của hãng.
            </p>
            <p>
              - Thân máy không trầy xước màn hình (áp dụng cho iPhone, iPad,
              iMac, Mac, MacBook)
            </p>
            <p>
              - Sản phẩm chỉ dùng cho mục đích sử dụng cá nhân, không áp dụng
              việc sử dụng sản phẩm cho mục đích thương mại.{" "}
            </p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>3) HOÀN TIỀN:</strong> Áp dụng cho sản phẩm lỗi và không
              lỗi.
            </p>
            <p>- Tháng đầu tiên kể từ ngày mua: phí 20% giá trị hóa đơn</p>
            <p>
              - Tháng thứ 2 đến tháng thứ 12: phí 10% giá trị hóa đơn/tháng.
            </p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>
              - Sản phẩm đổi trả phải giữ nguyên 100% hình dạng ban đầu và đủ
              điều kiện bảo hành của hãng.
            </p>
            <p>
              - Thân máy không trầy xước màn hình (áp dụng cho iPhone, iPad,
              iMac, Mac, MacBook, Apple Watch)
            </p>
            <p>
              - Sản phẩm chỉ dùng cho mục đích sử dụng cá nhân, không áp dụng
              việc sử dụng sản phẩm cho mục đích thương mại.
            </p>
            <p>- Hoàn trả lại đầy đủ hộp, sạc, phụ kiện đi kèm:</p>
            <p>
              + Mất hộp thu phí 2% giá trị hóa đơn đối với nhóm iPhone, iPad,
              iMac, Mac, MacBook, Apple Watch
            </p>
            <p>
              + Mất phụ kiện thu phí theo giá bán tối thiểu trên website TopZone
              và chính hãng (tối đa 5% giá trị hóa đơn) cho tất cả nhóm sản phẩm
            </p>
            <p>
              - Hoàn trả toàn bộ hàng khuyến mãi. Nếu mất hàng khuyến mãi sẽ thu
              phí theo mức giá đã được công bố.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>
    <strong>Ghi chú:</strong> Chính sách đổi trả cho chuỗi Topzone sẽ giống TGDĐ
    ngoại trừ: Topzone không có chính sách đổi trả cho máy đã qua sử dụng/ trưng
    bày bỏ mẫu vì Topzone không có kinh doanh sản phẩm đã qua sử dụng/trưng bày
    bỏ mẫu. TopZone cũng sẽ không áp dụng chính sách bảo hành/đổi trả cho sản
    phẩm khuyến mãi.
    <br />
    <br />
    Trong trường hợp sản phẩm của khách hàng gặp vấn đề hoặc có nhu cầu về đổi
    trả, hoàn tiền, quý khách có thể lựa chọn 1 trong 2 cách sau để thông tin về
    lỗi của sản phẩm và sẽ được nhân viên hỗ trợ chi tiết về quy trình bảo hành,
    đổi trả sản phẩm:
  </p>
  <p>- Liên hệ đến tổng đài: 1900.8668.54 (7:30 - 22:00).</p>
  <p>- Ghé trực tiếp siêu thị TopZone bất kỳ để được hỗ trợ.</p>
                            </>)
                        )}
                    </li>
                </ul>
                <ul key="Hỗ trợ khách hàng">
                    <Typography variant="small" className="mb-3 font-medium opacity-40">
                        Hỗ trợ khách hàng
                    </Typography>
                    <li key="Điều kiện giao dịch chung">
                        {LongDialog ("Điều kiện giao dịch chung",
                            (
                            <>
<>
  <h2>
    <strong>ĐIỀU KIỆN GIAO DỊCH CHUNG WEBSITE TOPZONE.VN</strong>
  </h2>
  <p>Áp dụng từ ngày: 22/10/2021</p>
  <p>
    <span style={{ fontSize: "14pt" }}>
      <strong>1. Nguyên tắc chung</strong>
    </span>
  </p>
  <p>
    - Website thương mại điện tử Topzone.vn do công ty Cổ Phần Thế Giới Di Động
    ("Công ty") thực hiện hoạt động và vận hành. Đối tượng phục vụ là tất cả
    khách hàng trên 63 tỉnh thành Việt Nam có nhu cầu mua hàng nhưng không có
    thời gian đến siêu thị hoặc đặt trước để khi đến siêu thị là đảm bảo có
    hàng.
  </p>
  <p>
    - Sản phẩm được kinh doanh tại www.topzone.vn phải đáp ứng đầy đủ các quy
    định của pháp luật, không bán hàng nhái, hàng không rõ nguồn gốc, hàng xách
    tay.
  </p>
  <p>
    - Hoạt động mua bán tại thegiodidong.com phải được thực hiện công khai, minh
    bạch, đảm bảo quyền lợi của người tiêu dùng.
  </p>
  <p>
    <span style={{ fontSize: "14pt" }}>
      <strong>2. Quy định chung</strong>
    </span>
  </p>
  <p>
    <strong>Tên Miền website Thương mại Điện tử:</strong>
  </p>
  <p>
    Website thương mại điện tử Topzone.vn do Công ty Cổ phần Thế Giới Di Động
    phát triển với tên miền giao dịch là: www.topzone.vn (sau đây gọi tắt là:
    "Website TMĐT Topzone.vn")
  </p>
  <p>
    <strong>Định nghĩa chung:</strong>
  </p>
  <p>
    <strong>Người bán</strong> là công ty cổ phần Thế Giới Di Động.
  </p>
  <p>
    <strong>Người mua</strong> là công dân Việt Nam trên khắp 63 tỉnh thành.
    Người mua có quyền đăng ký tài khoản hoặc không cần đăng ký để thực hiện
    giao dịch.
  </p>
  <p>
    <strong>Thành viên</strong> là bao gồm cả người mua và người tham khảo thông
    tin, thảo luận tại website.
  </p>
  <p>
    Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành của Việt Nam.
    Thành viên khi tham gia website TMĐT Topzone.vn phải tự tìm hiểu trách nhiệm
    pháp lý của mình đối với luật pháp hiện hành của Việt Nam và cam kết thực
    hiện đúng những nội dung trong Quy chế này.
  </p>
  <p>
    <span style={{ fontSize: "14pt" }}>
      <strong>3. Quy trình giao dịch &amp; giao nhận vận chuyển</strong>
    </span>
  </p>
  <p>
    <strong>Dành cho người mua hàng tại website TMĐT Topzone.vn</strong>
  </p>
  <p>
    <strong>Bước 1:</strong> Tìm sản phẩm cần mua.
  </p>
  <p>
    <strong>Bước 2:</strong> Xem giá và thông tin chi tiết sản phẩm đó, nếu quý
    khách đồng ý muốn đặt hàng, quý khách ấn vào 1 trong 3 nút mua hàng:
  </p>
  <p>- Đặt giữ hàng tại siêu thị.</p>
  <p>- Mua trả góp.</p>
  <p>- Mua ngay, giao hàng tận nơi.</p>
  <p>
    <strong>Bước 3: </strong>Quý khách điền đầy đủ thông tin theo mua hàng theo
    mẫu:
  </p>
  <p>
    - Nếu quý khách có Mã giảm giá, bạn có thể nhập trực tiếp vào form Đặt mua
    để nhân viên giao hàng có thể phục vụ bạn tốt hơn với 1 mức giá chính xác
    sau khi đã giảm.
  </p>
  <p>
    - Quý khách hàng đang sử dụng thẻ ATM nội địa hoặc thẻ tín dụng Visa, Master
    quý khách có thể thanh toán đơn hàng bằng cách lick vào “Thanh toán trực
    tuyến (ATM, VISA, MASTER)” và làm theo hướng dẫn của ngân hàng.
  </p>
  <p>
    - Nếu quý khách đang sở hữu "Phiếu quà tặng Topzone.vn", quý khách hãng cào
    lớp bạc trên thẻ nhập "Mã giảm giá" vào khung "Mã giảm giá" để được trừ tiền
    trực tiếp vào đơn hàng.
  </p>
  <p>
    <strong>Bước 4: </strong>Sau khi nhận đơn hàng của người mua, Topzone.vn sẽ
    liên lạc với khách hàng qua thông tin số điện quý khách hàng cung cấp bằng
    tổng đài 18001060 hoặc 08.38102102 để xác thực thông tin đơn hàng.
  </p>
  <p>
    <strong>Bước 5:</strong> Topzone.vn giao hàng tận nhà đến cho khách hàng
    hoặc khách hàng đến trực tiếp các siêu thị Topzone.vn trên toàn quốc để nhận
    hàng.
  </p>
  <p>
    <strong>Dành cho bên bán hàng là Topzone.vn</strong>
  </p>
  <p>
    - Chuẩn bị sản xuất nội dung gồm: hình ảnh sản phẩm chụp thực tế hoặc hình
    ảnh do hãng sản xuất cung cấp, bài viết giới thiệu, thông tin cấu hình sản
    phẩm.
  </p>
  <p>- Nhập liệu bằng công cụ quản lý riêng dành cho nhân viên Topzone.vn.</p>
  <p>- Định dạng hình ảnh sử dụng trên website: jpg, png.</p>
  <p>
    <strong>Quy trình giao nhận vận chuyển</strong>
  </p>
  <p>
    Topzone.vn thực hiện giao hàng trên toàn quốc. Khi nhận đơn hàng từ người
    mua và sau khi đã xác thông tin mua hàng qua điện thoại, Topzone.vn sẽ tiến
    hành giao hàng theo yêu cầu của quý khách hàng
  </p>
  <div data-html-id={969}>
    <p>
      <span style={{ fontSize: "14pt" }}>
        <strong>4. Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật</strong>
      </span>
    </p>
    <p>
      - Website TMĐT Topzone.vn cam kết nỗ lực đảm bảo sự an toàn và ổn định của
      toàn bộ hệ thống kỹ thuật. Tuy nhiên, trong trường hợp xảy ra sự cố do lỗi
      của Topzone.vn, Topzone.vn sẽ ngay lập tức áp dụng các biện pháp để đảm
      bảo quyền lợi cho người mua hàng.
    </p>
    <p>
      - Khi thực hiện các giao dịch trên Sàn, bắt buộc các thành viên phải thực
      hiện đúng theo các quy trình hướng dẫn.
    </p>
    <p>
      - Ban quản lý website TMĐT Topzone.vn cam kết cung cấp chất lượng dịch vụ
      tốt nhất cho các thành viên tham gia giao dịch. Trường hợp phát sinh lỗi
      kỹ thuật, lỗi phần mềm hoặc các lỗi khách quan khác dẫn đến thành viên
      không thể tham gia giao dịch được thì các thành viên thông báo cho Ban
      quản lý website TMĐT qua địa chỉ email cskh@topzone.vn hoặc qua điện thoại
      1900.9868.43 (từ 8:00 – 21:30 hằng ngày) chúng tôi sẽ khắc phục lỗi trong
      thời gian sớm nhất, tạo điều kiện cho các thành viên tham gia website TMĐT
      Topzone.vn.
    </p>
    <p>
      - Tuy nhiên, Ban quản lý website TMĐT Topzone.vn sẽ không chịu trách nhiệm
      giải quyết trong trường hợp thông báo của các thành viên không đến được
      Ban quản lý, phát sinh từ lỗi kỹ thuật, lỗi đường truyền, phần mềm hoặc
      các lỗi khác không do Ban quản lý gây ra.
    </p>
    <p id="giai-quyet-khieu-nai">
      <span style={{ fontSize: "14pt" }}>
        <strong>5. Quy trình tiếp nhận &amp; giải quyết khiếu nại</strong>
      </span>
    </p>
    <p>
      <strong>Bước 1:</strong> người mua hàng có thể gửi khiếu nại của mình đến
      TopZone qua các phương tiện sau:
    </p>
    <p>
      - Qua tổng đài giải quyết khiếu nại:{" "}
      <a href="tel:1900986843">1900.9868.43</a> (8:00 - 21:30)
    </p>
    <p>
      - Qua email: <a href="mailto:cskh@topzone.vn">cskh@topzone.vn</a>
    </p>
    <p>- Trực tiếp tại các siêu thị TopZone toàn quốc</p>
    <p>
      - Tại văn phòng công ty: Tòa nhà MWG Lô T2-1.2, Đường D1, Khu Công Nghệ
      Cao, P. Tân Phú, Q. 9 , TP. Hồ Chí Minh
    </p>
    <p>
      <strong>Bước 2: </strong>TopZone sẽ liên lạc với khách hàng để tìm hiểu
      nguyên nhân để thoả thuận đền bù (khi cần).
    </p>
    <p>
      <span style={{ fontSize: "14pt" }}>
        <strong>
          6. Quyền và nghĩa vụ của Ban quản lý website TMĐT Topzone.vn
        </strong>
      </span>
    </p>
    <p>
      <strong>1. Quyền của Ban quản lý Topzone.vn:</strong>
    </p>
    <p>
      - Website TMĐT Topzone.vn sẽ tiến hành cung cấp các dịch vụ, sản phẩm cho
      khách hàng sau khi đã hoàn thành các thủ tục và các điều kiện bắt buộc mà
      nêu ra.{" "}
    </p>
    <p>
      - Topzone.vn sẽ tiến hành xây dựng các chính sách dịch vụ trên Trang web.
      Các chính sách này sẽ được công bố trên Topzone.vn.{" "}
    </p>
    <p>
      - Trong trường hợp có cơ sở để chứng minh thành viên cung cấp thông tin
      cho Sàn giao dịch điện tử Topzone.vn không chính xác, sai lệch, không đầy
      đủ hoặc có dấu hiệu vi phạm pháp luật hay thuần phong mỹ tục Việt Nam thì
      Sàn giao dịch điện tử Topzone.vn có quyền từ chối, tạm ngừng hoặc chấm dứt
      quyền sử dụng dịch vụ của thành viên.{" "}
    </p>
    <p>
      - Website TMĐT Topzone.vn có thể chấm dứt quyền thành viên và quyền sử
      dụng một hoặc tất cả các dịch vụ của thành viên trong trường hợp thành
      viên vi phạm các Quy chế của Website TMĐT Topzone.vn, hoặc có những hành
      vi ảnh hưởng đến hoạt động kinh doanh trên Website TMĐT Topzone.vn.{" "}
    </p>
    <p>
      - Website TMĐT Topzone.vn có thể chấm dứt ngay quyền sử dụng dịch vụ và
      quyền thành viên của thành viên nếu Website TMĐT Topzone.vn phát hiện
      thành viên đã phá sản, bị kết án hoặc đang trong thời gian thụ án, trong
      trường hợp thành viên tiếp tục hoạt động có thể gây cho Website TMĐT
      Topzone.vn trách nhiệm pháp lý, có những hoạt động lừa đảo, giả mạo, gây
      rối loạn thị trường, gây mất đoàn kết đối với các thành viên khác của
      Website TMĐT Topzone.vn, hoạt động vi phạm pháp luật hiện hành của Việt
      Nam.{" "}
    </p>
    <p>
      - Trong trường hợp chấm dứt quyền thành viên và quyền sử dụng dịch vụ thì
      tất cả các chứng nhận, các quyền của thành viên được cấp sẽ mặc nhiên hết
      giá trị và bị chấm dứt.
    </p>
    <p>
      - Website TMĐT Topzone.vn giữ bản quyền sử dụng dịch vụ và các nội dung
      trên Website TMĐT Topzone.vn theo các quy định pháp luật về bảo hộ sở hữu
      trí tuệ tại Việt Nam. Tất cả các biểu tượng, nội dung theo các ngôn ngữ
      khác nhau đều thuộc quyền sở hữu của Website TMĐT Topzone.vn. Nghiêm cấm
      mọi hành vi sao chép, sử dụng và phổ biến bất hợp pháp các quyền sở hữu
      trên.{" "}
    </p>
    <p>
      - Website TMĐT Topzone.vn giữ quyền được thay đổi bảng, biểu giá dịch vụ
      và phương thức thanh toán trong thời gian cung cấp dịch vụ cho thành viên
      theo nhu cầu và điều kiện khả năng của Website TMĐT Topzone.vn và sẽ báo
      trước cho thành viên thời hạn là một (01) tháng.
    </p>
    <p>
      <strong>2. Nghĩa vụ của Ban quản lý Topzone.vn</strong>
    </p>
    <p>
      - Website TMĐT Topzone.vn chịu trách nhiệm xây dựng dịch vụ bao gồm một số
      công việc chính như: nghiên cứu, thiết kế, mua sắm các thiết bị phần cứng
      và phần mềm, kết nối Internet, xây dựng chính sách phục vụ cho hoạt động
      Website TMĐT Topzone.vn trong điều kiện và phạm vi cho phép.{" "}
    </p>
    <p>
      - Website TMĐT Topzone.vn sẽ tiến hành triển khai và hợp tác với các đối
      tác trong việc xây dựng hệ thống các dịch vụ, các công cụ tiện ích phục vụ
      cho việc giao dịch của các thành viên tham gia và người sử dụng trên
      Website TMĐT Topzone.vn
    </p>
    <p>
      - Website TMĐT Topzone.vn chịu trách nhiệm xây dựng, bổ sung hệ thống các
      kiến thức, thông tin về: nghiệp vụ ngoại thương, thương mại điện tử, hệ
      thống văn bản pháp luật thương mại trong nước và quốc tế, thị trường nước
      ngoài, cũng như các tin tức có liên quan đến hoạt động của Website TMĐT
      Topzone.vn.{" "}
    </p>
    <p>
      - Website TMĐT Topzone.vn sẽ tiến hành các hoạt động xúc tiến, quảng bá
      Website TMĐT Topzone.vn ra thị trường nước ngoài trong phạm vi và điều
      kiện cho phép, góp phần mở rộng, kết nối đáp ứng các nhu cầu tìm kiếm bạn
      hàng và phát triển thị trường nước ngoài của các thành viên tham gia
      Website TMĐT Topzone.vn.{" "}
    </p>
    <p>
      - Website TMĐT Topzone.vn sẽ cố gắng đến mức cao nhất trong phạm vi và
      điều kiện có thể để duy trì hoạt động bình thường của Website TMĐT
      Topzone.vn và khắc phục các sự cố như: sự cố kỹ thuật về máy móc, lỗi phần
      mềm, hệ thống đường truyền internet, nhân sự, các biến động xã hội, thiên
      tai, mất điện, các quyết định của cơ quan nhà nước hay một tổ chức liên
      quan thứ ba. Tuy nhiên nếu những sự cố trên xảy ra nằm ngoài khả năng kiểm
      soát, là những trường hợp bất khả kháng mà gây thiệt hại cho thành viên
      thì Website TMĐT Topzone.vn không phải chịu trách nhiệm liên đới.
    </p>
    <p>
      <strong>Website TMĐT Topzone.vn phải có trách nhiệm:</strong>
    </p>
    <p>
      - Xây dựng và thực hiện cơ chế để đảm bảo việc đăng thông tin trên Website
      TMĐT Topzone.vn được thực hiện chính xác.{" "}
    </p>
    <p>
      - Không đăng tải những thông tin bán hàng hóa, dịch vụ thuộc danh mục hàng
      hóa, dịch vụ cấm kinh doanh theo quy định của pháp luật và hàng hóa hạn
      chế kinh doanh theo quy định tại Thông tư 47/2014/TT-BCT.
    </p>
    <p>
      <span style={{ fontSize: "14pt" }}>
        <strong>
          7. Quyền và trách nhiệm thành viên tham gia website TMĐT Topzone.vn
        </strong>
      </span>
    </p>
    <p>
      <strong>1. Quyền của Thành viên Website TMĐT Topzone.vn</strong>
    </p>
    <p>
      - Khi đăng ký trở thành thành viên của Topzone.vn và được Topzone.vn đồng
      ý, thành viên sẽ được tham gia thảo luận, đánh giá sản phẩm, mua hàng tại
      Topzone.vn .
    </p>
    <p>
      - Thành viên có quyền đóng góp ý kiến cho Website TMĐT Topzone.vn trong
      quá trình hoạt động. Các kiến nghị được gửi trực tiếp bằng thư, fax hoặc
      email đến cho Website TMĐT Topzone.vn.
    </p>
    <p>
      <strong>2. Nghĩa vụ của Thành viên Website TMĐT Topzone.vn</strong>
    </p>
    <p>
      - Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ và mọi hoạt động
      sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình.
    </p>
    <p>
      - Thành viên cam kết những thông tin cung cấp cho Website TMĐT Topzone.vn
      và những thông tin đang tải lên Website TMĐT Topzone.vn là chính xác.
    </p>
    <p>
      - Thành viên cam kết không được thay đổi, chỉnh sửa, sao chép, truyền bá,
      phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do Website
      TMĐT Topzone.vn cung cấp cho một bên thứ ba nếu không được sự đồng ý của
      Website TMĐT Topzone.vn trong Quy định này.
    </p>
    <p>
      - Thành viên không được hành động gây mất uy tín của Website TMĐT
      Topzone.vn dưới mọi hình thức như gây mất đoàn kết giữa các thành viên
      bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc tuyên
      truyền, phổ biến những thông tin không có lợi cho uy tín của Website TMĐT
      Topzone.vn.
    </p>
    <p>
      <span style={{ fontSize: "14pt" }}>
        <strong>
          8. Những trường hợp từ chối hoặc hạn chế phục vụ khách hàng của
          Website TMĐT Topzone.vn
        </strong>
        <strong> (*)</strong>
      </span>
    </p>
    <p>
      Trong quá trình giải quyết thắc mắc/khiếu nại của Khách hàng, Topzone.vn
      có quyền từ chối hoặc hạn chế phục vụ Khách hàng trong một số trường hợp
      đặc biệt sau:
    </p>
    <div>
      <table border={1} cellSpacing={0} cellPadding={10}>
        <tbody>
          <tr>
            <td>
              <p>
                <strong>
                  <strong>STT</strong>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <strong>Trường hợp đặc biệt</strong>
                </strong>
              </p>
            </td>
            <td>
              <p>
                <strong>
                  <strong>Hướng xử lý</strong>
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>1</p>
            </td>
            <td>
              <p>
                <strong>Các trường hợp từ chối phục vụ: </strong>
              </p>
              <p>
                - Khách hàng lợi dụng những chính sách bán hàng và chính sách
                Chăm sóc Khách hàng của Topzone.vn để trục lợi cá nhân và/ hoặc
                có những yêu cầu bất hợp lý mà Topzone.vn cho rằng không phù hợp
                hoặc không chính đáng.
              </p>
              <p>
                - Khách hàng/giao dịch có dấu hiệu không sử dụng cho mục đích
                tiêu dùng cuối cùng mà để mua đi bán lại.
              </p>
              <p>
                - Khách hàng/giao dịch có dấu hiệu giả tạo hoặc lừa dối dưới bất
                kì hình thức nào.
              </p>
              <p>
                - Khách hàng có lời nói và/ hoặc hành động mang tính chất đe
                dọa, khiếm nhã, kích động bạo lực, không phù hợp với thuần phong
                mỹ tục, chống phá nhà nước hoặc vi phạm pháp luật.
              </p>
              <p>
                - Khách hàng có những yêu cầu và/ hoặc trao đổi thông tin nằm
                ngoài phạm vi Topzone.vn kinh doanh.
              </p>
            </td>
            <td>
              <p>
                Topzone.vn có quyền từ chối phục vụ Khách hàng tại các chuỗi cửa
                hàng của Topzone.vn, trên website và qua các hình thức giao
                dịch, tương tác khác. (tổng đài, email, facebook,...)
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2</p>
            </td>
            <td>
              <p>
                <strong>
                  Trường hợp KH đã bị chặn đặt hàng, KH muốn mua hàng thì đến
                  trực tiếp cửa hàng mua hình thức offline.
                </strong>
              </p>
              <p>
                - Trường hợp, SĐT đặt hàng có 02 đơn hàng bị hủy tự động nhưng
                đặt lần thứ 03 có đến siêu thị xem hàng thì được reset lại
              </p>
              <p>
                - 01 số điện thoại chỉ được đặt giữ 01 sản phẩm cùng loại, nếu
                muốn đặt giữ tiếp sản phẩm cùng loại khác phải ra siêu thị xem
                hàng hoặc chờ hệ thống hủy tự động của đơn hàng đã đặt. Sau đó,
                số điện thoại này mới được đặt giữ tiếp sản phẩm cùng loại.
              </p>
              <p>
                - 01 số điện thoại chỉ được đặt giữ 03 sản phẩm cùng lúc nhưng
                không cùng loại.
              </p>
            </td>
            <td>
              <p>Chặn đặt hàng trên website: Topzone.vn</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <span style={{ color: "#b22222" }}>
          <em>(*)Ngày cập nhật: 16/01/2023.</em>
        </span>
      </p>
    </div>
    <p>
      <span style={{ fontSize: "14pt" }}>
        <strong>9. Điều khoản áp dụng</strong>
      </span>
    </p>
    <p>
      - Mọi tranh chấp phát sinh giữa Website TMĐT Topzone.vn và thành viên sẽ
      được giải quyết trên cơ sở thương lượng. Trường hợp không đạt được thỏa
      thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa án nhân
      dân có thẩm quyền tại Thành phố Hồ Chí Minh để giải quyết.
    </p>
    <p>
      - Quy chế của Website TMĐT Topzone.vn chính thức có hiệu lực thi hành kể
      từ ngày ký Quyết định ban hành kèm theo Quy chế này, Topzone.vn có quyền
      và có thể thay đổi Quy chế này bằng cách thông báo lên Website TMĐT
      Topzone.vn cho các thành viên biết. Quy chế sửa đổi có hiệu lực kể từ ngày
      Quyết định về việc sửa đổi Quy chế có hiệu lực. Việc thành viên tiếp tục
      sử dụng dịch vụ sau khi Quy chế sửa đổi được công bố và thực thi đồng
      nghĩa với việc họ đã chấp nhận Quy chế sửa đổi này.
    </p>
    <p>
      <span style={{ fontSize: "14pt" }}>
        <strong>10. Điều khoản cam kết</strong>
      </span>
    </p>
    <p>Địa chỉ liên lạc chính thức của Website TMĐT Topzone.vn:</p>
    <p>- Website TMĐT Topzone.vn</p>
    <p>- Công ty/Tổ chức: Công ty Cổ Phần Thế Giới Di Động</p>
    <p>- Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.HCM</p>
    <p>
      - Văn phòng: Tòa nhà MWG - Lô T2-1.2, Đường D1, Khu Công Nghệ Cao, P. Tân
      Phú, Quận 9, TP. Hồ Chí Minh
    </p>
    <p>
      - Hotline: <a href="tel:1900986843">1900.9868.43</a> | Email:{" "}
      <a href="mailto:cskh@thegioididong.com">cskh@topzone.vn</a>
    </p>
  </div>
</>

                            </>)
                        )}
                    </li>
                    <li key="Chính sách giao hàng">
                        {LongDialog ("Chính sách giao hàng",
                            (
                            <>
<h2>CHÍNH SÁCH GIAO HÀNG TOPZONE.VN</h2>
  <p>Áp dụng từ ngày: 22/10/2021</p>
  <p dir="ltr">
    <strong>
      <span style={{ fontSize: "14pt" }}>1. Phạm vi áp dụng</span>
    </strong>
  </p>
  <p dir="ltr">
    Những khu vực tỉnh thành có{" "}
    <a
      href="https://www.topzone.vn/he-thong-cua-hang"
      title="Hệ thống siêu thị TopZone"
    >
      hệ thống siêu thị TopZone
    </a>
    .
  </p>
  <p dir="ltr">
    <strong>
      <span style={{ fontSize: "14pt" }}>2. Thời gian nhận hàng</span>
    </strong>
  </p>
  <p dir="ltr">
    TopZone nhận giao nhanh trong ngày với khoảng cách từ các siêu thị có hàng
    đến điểm giao là 20 km. Khoảng cách lớn hơn nhân viên của chúng tôi sẽ tư
    vấn cách thức giao hàng thuận tiện nhất cho khách hàng. Cụ thể:
  </p>
  <div>
    <table border={1} cellPadding={10} cellSpacing={0} style={{border:'1px solid black'}}>
      <tbody>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>
                Khoảng cách đến nhà khách từ siêu thị gần nhất có hàng
              </strong>
            </p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>TP. HCM</strong>
            </p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>Tỉnh khác</strong>
            </p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>Dưới 5 km</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Giao trong 30 phút</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Giao trong 30 phút</p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>5 - 10 km</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Giao trong 1 tiếng</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Giao trong 1 tiếng</p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>10 - 20 km</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Giao trong 2 tiếng</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Giao trong 2 tiếng</p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>Lưu ý</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Thời gian giao hàng 9:00 đến 21:00</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>Thời gian giao hàng 9:00 đến 20:00</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p dir="ltr">
    Riêng đối với đơn hàng giá rẻ online, sản phẩm sẽ được giao sớm nhất là 1
    ngày sau khi đặt.
  </p>
  <p dir="ltr">
    <strong>
      <span style={{ fontSize: "14pt" }}>3. Phí giao hàng</span>
    </strong>
  </p>
  <div>
    <table border={1} cellPadding={10} cellSpacing={0} style={{border:'1px solid black'}}>
      <tbody>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>MỨC GIÁ</strong>
            </p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>
              <strong>PHÍ GIAO</strong>
            </p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>Giá trên 500.000đ</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>- Miễn phí 10km đầu tiên</p>
            <p>- Mỗi km tiếp theo tính phí 5.000đ/km</p>
            <p>
              <em>
                VD: Sạc dự phòng giá 600.000đ, khoảng cách giao hàng là 13 km
                &gt;&gt;&gt; Phí giao hàng là: 15.000đ
              </em>
            </p>
          </td>
        </tr>
        <tr style={{border:'1px solid black'}}>
          <td style={{border:'1px solid black'}}>
            <p>Giá 500.000đ trở xuống</p>
          </td>
          <td style={{border:'1px solid black'}}>
            <p>- Phí giao hàng 20.000đ cho 10km đầu tiên</p>
            <p>- Mỗi km tiếp theo tính phí 5.000đ/km</p>
            <p>
              <em>
                VD: Sạc dự phòng 500.000đ, khoảng cách giao hàng là 13 km
                &gt;&gt;&gt; Phí giao hàng là: 20.000đ + 15.000đ = 35.000đ
              </em>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <p dir="ltr">
        <strong>Lưu ý:</strong>
      </p>
      <p dir="ltr">
        - Khoảng cách tính phí giao hàng: được tính từ kho xuất hàng đến nhà
        khách hàng.
      </p>
      <p dir="ltr">
        - Hàng online only có chuyển hàng qua đối tác thì tổng đài 1900.9696.42
        (7:30 - 22:00) sẽ tư vấn cách thức giao hàng &amp; phí chuyển hàng phù
        hợp.
      </p>
    </div>
  </div>
                            </>)
                        )}
                    </li>
                    <li key="Hướng dẫn thanh toán">
                        {LongDialog ("Hướng dẫn thanh toán",
                            (
                                <>
                                <h2>
    <strong>CHÍNH SÁCH THANH TOÁN TẠI TOPZONE.VN</strong>
  </h2>
  <p>Áp dụng từ ngày: 22/10/2021</p>
  <p>
    <strong>
      <span data-mce-style="font-size: 14pt;" style={{ fontSize: "14pt" }}>
        1. Quy trình thanh toán
      </span>
    </strong>
  </p>
  <p>
    Người mua và bên bán có thể tham khảo các phương thức thanh toán sau đây và
    lựa chọn áp dụng phương thức phù hợp:
  </p>
  <p>
    <span
      data-mce-style="text-decoration: underline;"
      style={{ textDecoration: "underline" }}
    >
      <strong>
        Cách 1: Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ bên bán):
      </strong>
    </span>
  </p>
  <p>
    - Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.
  </p>
  <p>
    - Bước 2: Người mua đến địa chỉ bán hàng là các siêu thị bán hàng của
    Topzone.vn.
  </p>
  <p>
    - Bước 3: Người mua thanh toán bằng tiền mặt, thẻ ATM nội địa hoặc thẻ tín
    dụng và nhận hàng.
  </p>
  <p>
    <span
      data-mce-style="text-decoration: underline;"
      style={{ textDecoration: "underline" }}
    >
      <strong>
        Cách 2: Thanh toán sau (COD – giao hàng và thu tiền tận nơi):
      </strong>
    </span>
  </p>
  <p>
    - Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.
  </p>
  <p>- Bước 2: Người mua xác thực đơn hàng (điện thoại, tin nhắn, email).</p>
  <p>- Bước 3: Người bán xác nhận thông tin Người mua.</p>
  <p>- Bước 4: Người bán chuyển hàng.</p>
  <p>
    - Bước 5: Người mua nhận hàng và thanh toán bằng tiền mặt, thẻ ATM nội địa
    hoặc thẻ tín dụng.
  </p>
  <p>
    <span
      data-mce-style="text-decoration: underline;"
      style={{ textDecoration: "underline" }}
    >
      <strong>Cách 3: Thanh toán online qua thẻ tín dụng, chuyển khoản:</strong>
    </span>
  </p>
  <p>
    - Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng tin.
  </p>
  <p>- Bước 2: Người mua xác thực đơn hàng (điện thoại, tin nhắn, email).</p>
  <p>- Bước 3: Người bán xác nhận thông tin Người mua.</p>
  <p>- Bước 4: Người mua thanh toán.</p>
  <p>- Bước 5: Người bán chuyển hàng.</p>
  <p>- Bước 6: Người mua nhận hàng.</p>
  <p>
    <strong>
      <span data-mce-style="font-size: 14pt;" style={{ fontSize: "14pt" }}>
        2. Hướng dẫn thanh toán
      </span>
    </strong>
  </p>
  <p>
    <span data-mce-style="font-size: 12pt;" style={{ fontSize: "12pt" }}>
      <strong>2.1. Thanh toán tiền mặt</strong>
    </span>
  </p>
  <strong>Tại siêu thị</strong>
  <p>
    Quý khách có thể đến mua hàng &amp; thanh toán trực tiếp tại{" "}
    <a
      data-mce-href="https://www.topzone.vn/he-thong-cua-hang"
      href="https://www.topzone.vn/he-thong-cua-hang"
      title="Hệ thống siêu thị TopZone"
    >
      hệ thống siêu thị TopZone
    </a>
    .
  </p>
  <strong>Tại nhà/nơi nhận hàng</strong>
  <p>
    Thanh toán cho nhân viên giao hàng trực tiếp của Topzone.vn tại bất kỳ đâu
    bạn yêu cầu (trong phạm vi 20 km tính từ siêu thị TopZone có hàng).
  </p>
  <p data-mce-style="font-weight: 400;" style={{ fontWeight: 400 }}>
    <span data-mce-style="font-size: 12pt;" style={{ fontSize: "12pt" }}>
      <strong>2.2 Thanh toán bằng thẻ ATM, Visa, MasterCard</strong>
    </span>
  </p>
  <strong>Tại siêu thị</strong>
  <p>Cà thẻ trực tiếp tại hệ thống Topzone.vn trên toàn quốc.</p>
  <strong>Tại nhà/nơi nhận hàng</strong>
  <p>
    Khách hàng vui lòng yêu cầu trước để nhân viên đem theo máy hỗ trợ thanh
    toán và cà thẻ.
  </p>
  <p>
    Lưu ý: Để an toàn cho chủ thẻ, TopZone chỉ hỗ trợ thanh toán thẻ cho quý
    khách đến thanh toán chính là chủ thẻ.
  </p>
  <p data-mce-style="font-weight: 400;" style={{ fontWeight: 400 }}>
    <span data-mce-style="font-size: 12pt;" style={{ fontSize: "12pt" }}>
      <strong>2.3. Chuyển khoản</strong>
    </span>
  </p>
  <strong>
    Chuyển khoản qua ngân hàng MBBank cho chúng tôi theo thông tin:
  </strong>
  <div>
    <table border={1} cellPadding={10} cellSpacing={0}>
      <tbody>
        <tr>
          <td>
            <p>
              <strong>Tên ngân hàng</strong>
            </p>
          </td>
          <td>
            <p>Ngân hàng Thương Mại Cổ Phần Quân Đội (MB)</p>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Chi nhánh</strong>
          </td>
          <td>Sở Giao Dịch 2, TP. HCM</td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Chủ tài khoản</strong>
            </p>
          </td>
          <td>
            <p>CÔNG TY CỔ PHẦN THẾ GIỚI DI ĐỘNG</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Số tài khoản</strong>
            </p>
          </td>
          <td>
            <p>979979</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Nội dung</strong>
            </p>
          </td>
          <td>
            <p>Tên khách hàng - Số điện thoại</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>
    <span data-mce-style="font-size: 12pt;" style={{ fontSize: "12pt" }}>
      <strong>2.4. Thanh toán trực tuyến</strong>
    </span>
  </p>
  <strong>Thanh toán qua thẻ ATM nội địa (có internet banking)</strong>
  <p>
    Điều kiện để thanh toán là thẻ ATM có hỗ trợ thanh toán trực truyến bằng
    OnePay:
  </p>
  <p>Ngân hàng của bạn thuộc liên minh với OnePay.</p>
  <p>
    <img
      data-mce-src="https://cdn.tgdd.vn/2021/10/content/bank-lien-ket-onepay-1-800x286.jpg"
      src="https://cdn.tgdd.vn/2021/10/content/bank-lien-ket-onepay-1-800x286.jpg"
    />
  </p>
  <p>
    <em>Hotline: 1900 633 927</em>
  </p>
  <p>
    Bạn phải đăng ký với ngân hàng dịch vụ giao dịch qua SMS (tin nhắn điện
    thoại di động) hoặc thiết bị TOKEN, Internet Banking.
  </p>
  <p>
    Chỉ cần bạn có hai điều kiện trên thì bạn đã có thể thanh toán trực tuyến
    thông qua hệ thống thanh toán OnePay.
  </p>
  <p>
    <u>
      <strong>Cách thức thanh toán:</strong>
    </u>
  </p>
  <p>
    Sau khi chọn hình thức thanh toán qua thẻ ATM nội địa, hệ thống chuyển sang
    giao diện thanh toán của OnePay.
  </p>
  <p>
    <img
      data-mce-src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-1-800x584.jpg"
      src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-1-800x584.jpg"
    />
  </p>
  <p>Hãy điền các thông tin theo hướng dẫn để hoàn tất việc đặt hàng.</p>
  <p>
    <img
      data-mce-src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-02-800x436.jpg"
      src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-02-800x436.jpg"
    />
  </p>
  <p>Ở đây có một số mục quan trọng cần bạn quan tâm:</p>
  <p>
    - Tên in trên thẻ: Là username mà ngân hàng cấp cho bạn để bạn sử dụng dịch
    vụ thanh toán online.
  </p>
  <p>- Số thẻ: 16 - 19 số ở mặt trước thẻ.</p>
  <strong>Thanh toán qua thẻ Visa/Master/JCB</strong>
  <p>
    Để thanh toán trực tuyến qua thẻ Visa/Master bạn cần sở hữu 1 thẻ
    Visa/Master/JCB.
  </p>
  <p>
    <img
      data-mce-src="https://cdn.tgdd.vn/2021/10/content/cac-loai-the-800x173.jpg"
      src="https://cdn.tgdd.vn/2021/10/content/cac-loai-the-800x173.jpg"
    />
  </p>
  <p>
    <u>
      <strong>Cách thức thanh toán:</strong>
    </u>
  </p>
  <p>
    Sau khi chọn hình thức thanh toán qua thẻ Visa/Master/JCB hệ thống chuyển
    sang giao diện thanh toán của OnePay. Hãy điền các thông tin theo hướng dẫn
    để hoàn tất việc đặt hàng.
  </p>
  <p>
    <img
      data-mce-src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-3-800x339.jpg"
      src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-3-800x339.jpg"
    />
  </p>
  <strong>Thanh toán qua VNPAY QR</strong>
  <p>
    Sau khi chọn hình thức thanh toán qua VNPAY QR, hệ thống chuyển sang giao
    diện thanh toán của VNPAY. Hãy mở App ngân hàng quét mã QR trên để hoàn tất
    việc đặt hàng.
  </p>
  <p>
    <img
      data-mce-src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-4-800x631.jpg"
      src="https://cdn.tgdd.vn/2021/10/content/giao-dien-thanh-toan-4-800x631.jpg"
    />
  </p>
  <p data-mce-style="font-weight: 400;" style={{ fontWeight: 400 }}>
    Vậy là bạn đã hoàn thành một bước mua hàng online tại Topzone.vn một cách dể
    dàng và tiện lợi chưa đến 2 phút. Thân chúc các bạn có những giây phút mua
    hàng online vui vẻ tại Topzone.vn.
  </p>
  <p>
    <span data-mce-style="font-size: 14pt;" style={{ fontSize: "14pt" }}>
      <strong>3. Quy định về hoàn trả tiền khi thanh toán trực tuyến</strong>
    </span>
  </p>
  <p>
    Trong trường hợp quý khách hàng đã mua hàng &amp; thanh toán trực tuyến
    thành công nhưng dư tiền, hoặc trả sản phẩm, TopZone sẽ hoàn tiền vào thẻ
    quý khách đã dùng để thanh toán, theo thời hạn như sau:
  </p>
  <p>
    <strong>- Đối với thẻ ATM: </strong>Thời gian khách hàng nhận được tiền hoàn
    từ 7 - 10 ngày (trừ Thứ 7, Chủ Nhật và Ngày lễ) kể từ khi TopZone nhận được
    đề nghị của khách hàng. Nếu qua thời gian trên không nhận được tiền, TopZone
    sẽ hỗ trợ liên hệ ngân hàng của khách hàng để giải quyết.
  </p>
  <p>
    <strong>- Đối với thẻ Visa/Master card/JCB: </strong>Thời gian khách hàng
    nhận được tiền hoàn từ 7 - 15 ngày làm việc kể từ khi TopZone nhận được đề
    nghị của khách hàng. Nếu qua thời gian trên không nhận được tiền, TopZone sẽ
    hỗ trợ liên hệ ngân hàng của khách hàng để giải quyết.
  </p>
  <p>
    <strong>- Đối với thanh toán bằng hình thức VNPAY QR:</strong> Thời gian
    Khách hàng nhận được tiền hoàn 3 - 8 ngày. Nếu qua thời gian trên khách hàng
    không nhận được tiền, khách hàng liên hệ TopZone để được giải quyết.
  </p>
  <p>
    <span data-mce-style="font-size: 14pt;" style={{ fontSize: "14pt" }}>
      <strong>4. Đảm bảo an toàn giao dịch</strong>
    </span>
  </p>
  <p>
    Ban quản lý đã sử dụng các dịch vụ để bảo vệ thông tin về nội dung mà người
    bán đăng sản phẩm trên Topzone.vn. Để đảm bảo các giao dịch được tiến hành
    thành công, hạn chế tối đa rủi ro có thể phát sinh.
  </p>
  <p>
    Người mua nên cung cấp thông tin đầy đủ (tên, địa chỉ, số điện thoại, email)
    khi tham gia mua hàng của Topzone.vn để Topzone.vn có thể liên hệ nhanh lại
    với người mua trong trường hợp xảy ra lỗi.
    <br />
    <br />
    Trong trường hợp giao dịch nhận hàng tại nhà của người mua, thì người mua
    chỉ nên thanh toán sau khi đã kiểm tra hàng hoá chi tiết và hài lòng với sản
    phẩm.
  </p>
  <p>
    Khi thanh toán trực tuyến bằng thẻ ATM nội địa, Visa, Master người mua nên
    tự mình thực hiện và không được để lộ thông tin thẻ. Topzone.vn không lưu
    trữ thông tin thẻ của người mua sau khi thanh toán, mà thông qua hệ thống
    của ngân hàng liên kết. Nên tuyệt đối bảo mật thông tin thẻ cho khách hàng.
  </p>
  <p>
    Trong trường lỗi xảy ra trong quá trình thanh toán trực tuyến, Topzone.vn sẽ
    là đơn vị giải quyết cho khách hàng trong vòng 1 giờ làm việc từ khi tiếp
    nhận thông tin từ người thực hiện giao dịch.
  </p>
  <p>
    <strong>Đối với giao dịch của Topzone.vn</strong>
  </p>
  <p>Topzone.vn tiếp nhận khiếu nại qua các hình thức sau:</p>
  <p>- Qua tổng đài giải quyết khiếu nại: 1900.9868.43</p>
  <p>- Qua email: cskh@topzone.vn</p>
  <p>- Trực tiếp tại các siêu thị bán hàng của Topzone.vn.</p>
  <p>
    - Tại văn phòng công ty: Lô T2-1.2, Đường D1, Khu Công Nghệ Cao, Phường Tân
    Phú, TP Thủ Đức, TP Hồ Chí Minh
  </p>
                                </>
                            )
                        )}
                    </li>
                </ul>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="/">Phone Store</a>
          </Typography>
          <div className="flex gap-4 sm:justify-center">
            <Typography as="a" href="https://www.facebook.com/topzone.vn?locale=vi_VN" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="https://shopee.vn/top_zone_official" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </Typography>
            <Typography as="a" href="https://github.com/loccolloc/WebAssignment" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>

          </div>
          
        </div>
      </div>
    </footer>
  );
}