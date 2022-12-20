import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {
      _id: "63043046432f9033d45410ea",
      id: "25462304",
      picture_url:
        "https://z1.muscache.cn/im/pictures/00d4074f-f66e-4bef-906c-53eab5047970.jpg?aki_policy=large",
      picture_urls: [
        "https://z1.muscache.cn/im/pictures/00d4074f-f66e-4bef-906c-53eab5047970.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/0dae08b9-b40a-48d3-b960-64f0dfefde32.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/f3fa6f48-f64d-49d1-be4d-2d04874d199c.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/a1358738-0fbc-48ed-a1ee-d14543984302.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/70197114-6ccb-4790-8b90-f5d8359003f1.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/15b67afd-ca63-4acd-a3d4-d5655a87c7d1.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/d9bf3e66-428b-4f65-a887-27a25c86b929.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/892d1d92-3c73-4e25-9688-becc6c311805.jpg?aki_policy=large",
        "https://z1.muscache.cn/im/pictures/86711049-ffc5-4f6e-96a8-98d23840318c.jpg?aki_policy=large",
      ],
      verify_info: {
        messages: ["整套公寓型住宅", "1室1.5卫1床"],
        text_color: "#767676",
      },
      name: "2.「菲立斯优品」豪华公寓 1.8米大床 拎包入住 空调电视冰箱洗衣机",
      price: 174,
      price_format: "￥174",
      star_rating_color: "#FF5A5F",
      reviews_count: 2,
      bottom_info: null,
      lat: 23.19968,
      lng: 113.25826,
      image_url: "/moreitems/9b0c8c1b8bcd97630f625e21f4e6e864.jpg",
    },
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload;
    },
  },
});

export const { changeDetailInfoAction } = detailSlice.actions;
export default detailSlice.reducer;
