# webhome
宫崎骏网站主页

## GPT使用说明
### 本地环境
1.启动本服务作为【前端】服务
   git@github.com:g29times/webhome.git
   主入口 浏览器打开home.html
2.启动【后端】服务 chat
   java -jar chat.jar

### 生产环境
   1. Nginx配置
   2. ```
      cd /opt/server/web
      
      # 确认ossutil
      git clone git@github.com:g29times/ossutil.git
      cd ossutil
      ./download_HK.sh 02/chat-0.0.1-SNAPSHOT.jar ..
      
      # 启动后端
      cd ..
      java -jar chat-0.0.1-SNAPSHOT.jar
      
      # 添加openai配置
      mkdir -p /opt/config/
      vi /opt/config/openai.properties
      
      # 测试
      curl http://localhost:8080/chat/chat?msg=Hi
      ```