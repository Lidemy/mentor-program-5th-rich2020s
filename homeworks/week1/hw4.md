## 跟你朋友介紹 Git

###Git 是什麼？
一個版本管理的軟題。概念上 Git 跟我們新增好幾個資料夾有點像。但 Git 可以幫助我們更方便管理。
### 怎麼使用 Git？
裝好 Git 後，先將工作目錄切換到你想存笑話的地方。希望你已經會 command line 了，用 pwd 可以看你的工作目錄，用 cd 可以切換到你要存笑話的地方。使用 git init ，把這個地方變成 git 可以發揮的地方。   
1. 把你的笑話加入 git 的暫存區，使用 git add 你的笑話。  
2. git commit -am joke1。  
3. 用 git log 就可以看到自己第一次交的檔案，joke1。  
如果想要笑話有不同版本的演進，git 有個功能可以讓你方便管理。你可以創造新的分支，這個功能就像是把整個資料夾的資料，複製一個新的，接著你可以在這個新的資料夾盡情寫你的笑話。不會改到本來的笑話。
在 git 上這個功能的指令是 git branch newjoke1 。newjoke1 這個是名稱，你可以自己定。git checkout newjoke1 可以切換到這個分支。 你可以開很多的分支。git branch -v 可以讓你看現在分支有哪些版本。
### 笑話上線啦！
把笑話上傳到網路上，讓更多人可以幫助你的笑話。大家說不定會想到更好笑的梗，幫你的笑話再進化。要怎麼把笑話傳到網路上呢？這時候就用 Github 這個網站，把笑話給大家看，並管理的笑話版本。  
在你的笑話 commit 完了之後，可以在 github 上開一個新的 repo。使用 git remote add origin ＋「網址」。接著用 git push origin master 把你的笑話傳上去。  
如果笑話在 Github 上有所改變，可能跟別人提交的笑話合體、或是你在網路上直接做修正，要把檔案從雲端下載下來。就用 git pull origin master。
那如果是要把別人下的笑話載下來呢？ git clone ＋ 網址。就可以把別人的笑話載下來啦，但是沒辦法把笑話再傳上去。如果也想傳上 github，就要在別人的 github上按 fork，你自己的 repo 也會有這些笑話了。想上傳就一樣用 git push origin master 。
好啦，差不多就這樣子，記得請我一頓飯，這樣不過份吧。

