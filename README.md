# eatWHU

a WeChat mini program

## components

存放常用的部分，如社区帖子和帖子内部的评论

## pages

需要完成的各个页面

## utils

各种工具，如网络请求模块，和常见的数据处理函数 operator

function.js:

## storege

1.  storeDraft(**function**)：储存草稿

| parameter | description  | default | requried |
| --------- | ------------ | ------- | -------- |
| address   | 草稿食堂     | 无      | 是       |
| text      | 草稿文字内容 | 无      | 是       |

**return** Promise 对象

2.  storePromise(**function**):getStorage 函数 promise 化

| parameter | description | default | requried |
| --------- | ----------- | ------- | -------- |
| key       | 数据的 key  | 无      | 是       |

**return** Promise 对象

3.  stampToTime(**function**):转化为格式为"几月几日" 或"几小时/分钟/秒前"

| parameter | description | default | requried |
| --------- | ----------- | ------- | -------- |
| time      | Date 对象   | 无      | 是       |

**return** string

## network

1.  requestPromise(**function**):wx.request 的 Promise 化

| parameter | description                            | default | requried |
| --------- | -------------------------------------- | ------- | -------- |
| json      | 包含 url，method，data，header 的 json | 无      | 是       |

**return** Promise 对象

---
