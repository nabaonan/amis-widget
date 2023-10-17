/*
 * @Author: nbn
 * @Date: 2023-10-17 22:01:11
 * @LastEditors: nbn
 * @LastEditTime: 2023-10-17 22:46:34
 * @FilePath: /amis-widget/src/amis/自定义定时.js
 * @Description: 
 */


export default {

  type: 'page',
  body: [

    {
      "type": "table",
      "title": "表格1",
      "data": [
        {
          "engine": "Trident - tagmei",
          "browser": "Internet Explorer 4.0",
          "platform": "Win 95+",
          "count": "2023-10-17 23:44:13",
          "grade": "X",
          "badgeText": "默认",
          "id": 1
        }]
      ,
      "columns": [
        {
          "name": "engine",
          "label": "Engine"
        },
        {
          "name": "count",

          "label": "倒计时",
          "type": "custom",
          "onMount": (dom, value, onChange) => {







            const getTime = (dateString) => {
              var now = new Date();

              var target = new Date(dateString);

              var difference = target.getTime() - now.getTime();

              var day = parseInt(difference / (1000 * 60 * 60 * 24));



              var hour = parseInt((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

              var minute = parseInt((difference % (1000 * 60 * 60)) / (1000 * 60));

              var second = parseInt(difference % (1000 * 60) / 1000);

              var ms = difference % 1000;

              return [

                day,

                hour,

                minute,

                second,

                ms

              ];

            }




            dom.inter = setInterval(() => {
              const [day, hour, minute, ms] = getTime(value)
              dom.innerText = `${day}天${hour}时${minute}分${ms}秒`
              // onChange(count)  
            }, 1000)
          },

          "onUpdate": (dom, data, prevData) => {
            console.log("数据有变化", data);
          },
          "onUnmount": (dom) => {
            console.log("组件被销毁", dom);
          }
        }
      ]
    }
  ]
}