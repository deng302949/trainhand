####新项目如何上去github
-   1. 首先是繁琐的github上一轮猛如虎的操作，创建一个远程git项目仓库。
-   2. 本地项目，打开git here bash （我是powershall）
-   3. git init //初始化一下自己的本地项目
-   4. git add . //添加所有文件到暂存区
-   5. git commit -m '' //commit描述一下
-   6. git remote add origin 'url' //这里是远程git库
-   6. 5  git pull origin master  //这一步失败率很高所以需要一点骚操作
-   6. 6  git pull -rebase origin master //先合并远程分支-（很大原因是因为远程分支的readme造成的.）
-   7. git push -u origin master  //提交分支到远程上去
 