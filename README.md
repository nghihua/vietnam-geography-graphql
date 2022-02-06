<h1 align="center">🇻🇳 Vietnam Geography GraphQL API</h1>

<h2>Tiếng Việt</h2>


<h3>Info</h3>
<div>
Lấy ý tưởng từ <a href="https://github.com/trevorblades/countries">trevorblades' Countries GraphQL API</a>
</div>

<br>

GraphQL API về địa lý Việt Nam, chứa thông tin về miền (`region`), vùng (`subregion`), các tỉnh (`province`). Thông tin lấy từ Wikipedia.

Note: 

1. Key của từng object nằm trong property `code`. Property `code` này được đặt theo tên viết tắt của địa phương đó, VD của Tây Nam Bộ sẽ là `TNB`. Đối với tên các tỉnh, `code` đặt theo <a href="https://vi.wikipedia.org/wiki/B%E1%BA%A3n_m%E1%BA%ABu:K%C3%BD_ki%E1%BB%87u_quy_%C6%B0%E1%BB%9Bc_c%C3%A1c_t%E1%BB%89nh_th%C3%A0nh_Vi%E1%BB%87t_Nam">tên viết tắt tàu cá</a>, chữ Đ đổi thành DD.
2. Dữ liệu nằm trong thư mục data

<h3>GraphQL Playground</h3>

Thử API này ở [đây](https://vietnam-geography-graphql.herokuapp.com/).

<br>

<h1 align="center"></h1>
<h2>English</h2>

<h3>Info</h3>
<div>
Inspired by <a href="https://github.com/trevorblades/countries">trevorblades' Countries GraphQL API</a>
</div>

<br>

A public GraphQL API about Vietnam's regions, subregions and provinces. Information is retrieved from Wikipedia.

Note: 

1. The key/id is in the `code` property on each item. This `code` property is named after the abbreviation of each item, e.g: Tây Nam Bộ (Southwestern) is `TNB`. Provinces' codes are named according to <a href="https://vi.wikipedia.org/wiki/B%E1%BA%A3n_m%E1%BA%ABu:K%C3%BD_ki%E1%BB%87u_quy_%C6%B0%E1%BB%9Bc_c%C3%A1c_t%E1%BB%89nh_th%C3%A0nh_Vi%E1%BB%87t_Nam">abbreviations for boats' license plates</a>.
2. Data lies in the ./data folder

<h3>GraphQL Playground</h3>

Check out [the playground](https://vietnam-geography-graphql.herokuapp.com/) to explore the schema and test out some queries.
