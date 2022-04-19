<template>
  <div id="websocket"></div>
</template>

<script>
import { Base64 } from "js-base64";
import { toRaw } from "vue";

export default {
  data() {
    return {
      path: "ws://192.168.157.128:3000",
      ws: {},

      global_id: "", //全局的消息包id

      ping_id: {}, //计时器id
      flush_id: {}, //主要心跳程序id

      // timeCount: 0, //计算延时
      heartMesId: 0, //心跳包id
      // heartFlag: 1, //是否要开始刷新计算心跳显示值
      heartPerTime: 2000, //每隔800ms发送一次心跳包
      maxHeartTime: 300, //最大能接受的网络延时
      reConnectTime: 3000, //冲脸的事件间隔
      lockReconnect: false, //是否真正建立连接

      pingValue: 0, //网络延迟值
      pingSendTime: 0, //发送心跳包之前的时间
      pingReceiveTime: 0, //接收心跳包之后的时间
    };
  },

  mounted() {
    this.init();
  },
  created() {},

  methods: {
    //init函数可在页面加载的时候就进行初始化或者根据自己的业务需求在需要打开通讯的时候在进行初始化
    init() {
      this.ws = new WebSocket(this.path);
      this.$store.commit("setGlobalWs", this); //定义成全局变量
    },

    //本地计时器
    pingrun() {
      if (this.heartFlag) {
        // document.getElementById("delay").innerHTML = this.timeCount;
        // console.log(this.timeCount);
        //$("#delay").val(INDEX);
        clearInterval(this.ping_id);
        //clearInterval(id2);
        //id2=setInterval(run, 1000);
        this.timeCount = 0;
        this.getHeartMesId();
      } else {
        this.timeCount+=1;
      }
    },

    // 计算网络延时的主要函数
    run() {
      if (!this.$store.state.readyState) return;
      let heartMes = {};
      heartMes["mes_type"] = 2;
      heartMes["heartMesId"] = this.heartMesId;
      this.heartFlag = 0;

      // this.ping_id = setInterval(this.pingrun, 1);

      this.ws.send(JSON.stringify(heartMes));

      this.pingSendTime = new Date().getTime();

      //延迟过高
      if (this.timeCount > this.maxHeartTime) {
        clearInterval(this.flush_id);
      }
    },
    //开始计算延时
    beginPing() {
      this.flush_id = setInterval(this.run, this.heartPerTime);
    },
    //辅助网络延时计算，清空当前计时器
    clearTime() {
      clearInterval(this.flush_id);
    },
    //辅助网络延时计算，获取当前心跳包id
    getHeartMesId() {
      this.heartMesId = (this.heartMesId + 1) % 1000;
    },

    //重连函数
    reConnect() {
      var that = this; // 不是很明白这里必须要用that接收this，否则this指向了一个奇怪的值
      if (that.lockReconnect) {
        return;
      }
      that.lockReconnect = true;
      setTimeout(function () {
        //没连接上会一直重连，设置延迟避免请求过多
        that.init();
        that.bind();
        that.lockReconnect = false;
      }, this.reConnectTime);
    },

    //定义绑定某些方法
    bind() {
      //打开时的方法
      this.ws.onopen = () => {
        this.$store.state.g_dialog.handleSuccess(); //打开成功消息提示
        this.$store.commit("setReadyState", 1);
      };

      //关闭时的方法
      this.ws.onclose = () => {
        console.log("close connection");
        // this.clearTime();
        this.$store.commit("setReadyState", 0);
        this.reConnect();
      };

      //处理消息
      this.ws.onmessage = (evt) => {
        if (evt.data.constructor == Blob) {
          const reader = new FileReader();

          reader.addEventListener("loadend", (e) => {
            //console.log(e.srcElement.result);
            console.log(e.srcElement.result);
            let text = JSON.parse(e.srcElement.result);
            //console.log(text);
            switch (text["mes_type"]) {
              case 0:
                //console.log("connect");
                this.global_id = text["uid"];
                // this.modify = 0;
                this.$store.commit("setModify", 0);
                //console.log(text['body']);

                var connet_text = "";
                for (let i = 0; i < text["body"].length; i++) {
                  if (i == text["body"].length - 1)
                    connet_text += Base64.decode(text["body"][i]);
                  else connet_text += Base64.decode(text["body"][i]) + "\n";
                }
                toRaw(this.$store.state.g_monaco).setValue(connet_text); //这里必须使用toRaw获取元数据，不然会导致卡死
                // this.modify = 1;
                this.$store.commit("setModify", 1);
                break;
              case 1:
                //console.log("message");
                //if (this.global_id != text["uid"]) {
                //   this.modify = 0;
                this.$store.commit("setModify", 0);
                var options = {
                  range: text["range"],
                  rangeLength: ["range"],
                  text: text["text"],
                  rangeOffset: text["rangeOffset"],
                  forceMoveMarkers: text["forceMoveMarkers"],
                };
                toRaw(this.$store.state.g_monaco).executeEdits(
                  this.this.$store.state.g_monaco.root,
                  [options]
                );
                //   this.modify = 1;
                this.$store.commit("setModify", 1);
                //}
                break;
              case 2:
                if (text["heartMesId"] == this.heartMesId) {
                  this.pingReceiveTime = new Date().getTime();
                  this.pingValue = this.pingReceiveTime - this.pingSendTime;
                  this.getHeartMesId();
                  console.log(this.pingValue);
                  this.heartFlag = 1;
                }
                break;
            }
            //console.log(global_id)
          });

          reader.readAsText(evt.data);
        } else if (evt.data.constructor == String) {
          let text = JSON.parse(evt.data);

          //if (this.global_id != text["uid"]) {
          // this.modify = 0;
          this.$store.commit("setModify", 0);
          var options = {
            range: text["range"],
            rangeLength: ["range"],
            text: text["text"],
            rangeOffset: text["rangeOffset"],
            forceMoveMarkers: text["forceMoveMarkers"],
          };
          toRaw(this.$store.state.g_monaco).executeEdits(
            this.$store.state.g_monaco.root,
            [options]
          );
          // this.modify = 1;
          this.$store.commit("setModify", 1);
          //}
        }
      };

      this.ws.onerror = () => {
        this.$store.commit("setReadyState", 0);
        this.reConnect();
      };
    },
  },
};
</script>
