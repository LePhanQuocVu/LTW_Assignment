import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachDiaChiAction } from '../../../redux/actions/QuanLyDiaChiAction';
const { TabPane } = Tabs;

const Demo = () => {
    const { arrProduct } = useSelector(state => state.QuanLyDiaChiReducer);

    const renderStore = () => {
        return arrProduct.map((product, index) => {
            // Kiểm tra nếu index bằng 1, nếu đúng thì sử dụng className "rounded-full fs-1", nếu không thì chỉ sử dụng "rounded-full"
            const imgClass = index === 1 ? "rounded-full fs-1" : "rounded-full";

            return (
                <TabPane tab={<img src="https://picsum.photos/200" alt="img" className={imgClass} width="50" />} key={index}>
                    <div>
                        <p className='font-weight-bold'><i className="fa fa-store"></i> {index + 1}.{product.province} - 1 cửa hàng</p>
                        <p className="font-weight-bold"><i className="fa fa-map-marker-alt"></i> Phone Store ({product.address})</p>
                        <p className="font-weight-bold"><i className="fa fa-phone"></i> <a href="tel:+4733378901">{product.phone}</a></p>
                    </div>
                </TabPane>
            );
        });
    }

    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachDiaChiAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    const [tabPos, setTabPosition] = useState('left');
    useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth <= 768) {
              setTabPosition('top');
            } else {
              setTabPosition('left');
            }
          };
      
          handleResize(); // Set initial tab position
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
          }, []);

    return (
        <>
            <Tabs tabPosition={tabPos}>
                {renderStore()}
            </Tabs>
        </>
    );
}

export default Demo;
