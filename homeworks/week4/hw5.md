## 請以自己的話解釋 API 是什麼
API 無處不在，像是在網路上網購，訂飯店，都會遇到 API。API 幫助我們進行資料交換和溝通，是一個交換資料的櫃檯窗口。可以透過發送請求，得到櫃檯所提供的服務。不過這個櫃檯是機器人，所以必須按照它們規定的方法格式，才能讓這個櫃檯聽得懂我們需要什麼。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
403 Forbidden:使用者沒有權限訪問這裡  
505 HTTP Version Not Supported：請求使用的 HTTP 版本不被伺服器支援。  
703 Explosion 爆炸！ （非官方搞笑的 status code)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
  
  
Base URL:https://restaurants.com

|    說明   | Method  | path  | 參數 | 範例 |
| ---------- | --- | ----- | ---- | ----- |
| 回傳所有餐廳 | GET |  /restaurants | limit: 限制回傳資料 | /restaurants?_limit=5 | 
| 回傳單一餐廳   | GET |  /restaurants/:id | 無 | /restaurants/10 |
| 新增餐廳 | POST | /restaurants | name: 餐廳名 address: 地址 | 無 |
| 刪除餐廳 | DELETE | /restaurants/:id | 無 | /restaurants/5 |
| 更改餐廳資訊 | PATCH | /restaurants/:id | name: 餐廳名 address: 地址 | 無 |

#### 參數說明：

* limit : 限制回傳資料，int。
* name :餐廳名稱， string。
* address :餐廳地址， string。
  
#### Example Request
`curl -X GET https://restaurants.com/restaurants?_limit=3`    --請求前3家餐廳的資料。

#### Example Response

```
[
	{
	"id": "1",
	"name": "丁呱呱",
	"address":"新北市天元區突破路27號"
	},
	{
	"id":"2",
	"name":"泰苗曉",
	"address":"苗栗國獨立路一段87號"
	},
	{
	"id":"",
	"name":"好蠔吃",
	"addrress":"基隆市深水村魚餌路11號"
	}
]
```