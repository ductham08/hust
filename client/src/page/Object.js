import React from "react";
import Menu from "../components/Menu";
import { useAppContext } from "../Context";
import { Link } from "react-router-dom";

const Object = (props) => {

  const {list_products} = props

  const { handleLogout } = useAppContext();

  const search = (e) => {
    e.preventDefault()

    const key_search = document.querySelector(".text_search").value

    props.setSearch(key_search)
  }
  return (
    <div>
      <div id="wrapper">
        <div id="header">
          <a href="" className="logo">
            <img src="/logo.png" alt="" />
          </a>
          <Menu />
          <div id="actions">
            <div className="item">
              <button className="sign-up" onClick={handleLogout}>
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
        <div id="banner">
          <div className="box-left">
            <h2>
              <span>TÌM ĐỒ</span>
              <br />
              <span>MẤT HUST</span>
            </h2>
            <p>
              Hỗ trợ mọi người trao trả và nhận lại các đồ vật bị mất trong khu
              vực trường HUST
            </p>
            <button>Truy cập ngay</button>
          </div>
          <div className="box-right">
            <img src="/img_2.png" alt="" />
          </div>
          <div className="to-bottom"></div>
        </div>
        <div id="wp-products">
          <h2>ĐỒ VẬT THẤT LẠC</h2>

          <div className="col-md-8 mx-auto">
            <div className="input-group pb-5">
              <form onSubmit={(e) => search(e)} className="form_search">
                <input className="text_search" placeholder="Tìm kiếm.."/>
                <button>Tìm</button>
              </form>
            </div>
          </div>

          <div className="row data">
            <div className="col-3 filter">
              <div className="filter-search">
                <i className="fa-solid fa-filter"></i>
                <div className="filter-status">BỘ LỌC TÌM KIẾM</div>
              </div>

              <div className="group-header">Theo danh mục</div>
              <div className="group-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                  />
                  <label className="form-check-label" for="check1">
                    Option 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                  />
                  <label className="form-check-label" for="check2">
                    Option 2
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="check3" />
                  <label className="form-check-label" for="check3">
                    Option 3
                  </label>
                </div>

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="check4" />
                  <label className="form-check-label" for="check4">
                    Option 4
                  </label>
                </div>
                <hr />
              </div>

              <div className="group-header">Theo sản phẩm</div>
              <div className="group-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                  />
                  <label className="form-check-label">Option 1</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                  />
                  <label className="form-check-label">Option 2</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="check3" />
                  <label className="form-check-label">Option 3</label>
                </div>

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="check4" />
                  <label className="form-check-label">Option 4</label>
                </div>
                <hr />
              </div>

              <div className="group-header">Theo thương hiệu</div>
              <div className="group-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                  />
                  <label className="form-check-label">Option 1</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                  />
                  <label className="form-check-label">Option 2</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="check3" />
                  <label className="form-check-label">Option 3</label>
                </div>

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="check4" />
                  <label className="form-check-label">Option 4</label>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-9 list_products">
              {/* START LIST PRODUCTS */}

              {
                list_products.map((item) => 
                  <div className="item_products">
                      <img src={item.img} width="100%" />
                      <b className="name">
                        <Link to={`./${item._id}`}>{item.name}</Link>
                      </b>
                      <p className="style_color">Màu sắc: <i>{item.color}</i></p>
                      <p className="desc">Chi tiết: <i>{item.detail}</i></p>
                  </div>
                )
              }

              {/* END START LIST PRODUCTS */}
            </div>
          </div>
        </div>
        <div id="comment">
          <h2>PHẢN HỒI CỦA MỌI NGƯỜI</h2>
          <div id="comment-body">
            <div className="prev-cmt">
              <a href="#">
                <img src="/prev.png" alt="" />
              </a>
            </div>
            <ul id="list-comment">
              <li className="item">
                <div className="avatar">
                  <img src="/avatar_1.png" alt="" />
                </div>

                <div className="name">Nguyễn Thị Hồng Vân</div>

                <div className="text">
                  <p>
                    Rất cảm ơn ai đó đã nhặt được và gửi trả mình chiếc ví màu
                    hồng mà mình lỡ để quên trên giảng đường S3 hôm trước. Cảm
                    ơn bạn rất nhiều.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="avatar">
                  <img src="/avatar_2.png" alt="" />
                </div>

                <div className="name">Ngọc Thanh Vân</div>

                <div className="text">
                  <p>
                    Rất cảm ơn ai đó đã nhặt được và gửi trả mình chiếc ví màu
                    hồng mà mình lỡ để quên trên giảng đường S3 hôm trước. Cảm
                    ơn bạn rất nhiều.
                  </p>
                </div>
              </li>
              <li className="item">
                <div className="avatar">
                  <img src="/avatar_3.png" alt="" />
                </div>

                <div className="name">Nguyễn Trần Vi</div>

                <div className="text">
                  <p>
                    Rất cảm ơn ai đó đã nhặt được và gửi trả mình chiếc ví màu
                    hồng mà mình lỡ để quên trên giảng đường S3 hôm trước. Cảm
                    ơn bạn rất nhiều.
                  </p>
                </div>
              </li>
            </ul>
            <div className="next-cmt">
              <a href="#">
                <img src="/next.png" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div id="footer">
          <div className="box">
            <div className="logo">
              <img src="/logo.png" alt="" />
            </div>
            <p>
              Hỗ trợ nhiệt tình trao trả các đồ vật thất lạc trong khu vực
              trường
            </p>
          </div>
          <div className="box">
            <h3>NỘI DUNG</h3>
            <ul className="quick-menu">
              <div className="item">
                <a href="Home.html">Trang chủ</a>
              </div>
              <div className="item">
                <a href="Object.html">Sản phẩm</a>
              </div>
              <div className="item">
                <a href="About.html">Thông tin</a>
              </div>
              <div className="item">
                <a href="Contact.html">Phản hồi</a>
              </div>
            </ul>
          </div>
          <div className="box">
            <h3>LIÊN HỆ</h3>
            <form action="">
              <input type="text" placeholder="Địa chỉ email" />
              <button>Nhận tin</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.propTypes = {};

export default Object;
