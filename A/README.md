# git-github
this project is only for learning
comaands
// adding origin to git.
	git remote add origin "https://github.com/johnnyjurcy/git-github.git"
//pull request for masert barnch(this extract all data in master barnch)
	master barnch all source code container
	 $git pull origin master
	 //if any error come like ssl/somthing set proxey
		export https_proxy=web-proxy.atl.hp.com:8080
//to get git status (this will shows the index tree , that contains files ready to commit)
	$git status
//to add file to index 
	$git add <filename.extension>
	$git add -A // to add all files to index
//comiting file to local repo
	$git commit -m <"messege">
	-m for messege
	$git commit -a -m <"messege"> // to commint all files to local repo, and also perfor git add for alrady exsting file 
// creating branch (brach will extract all data from brach and if you change any thing in your sub brach , 
	it will not effect master brach until you merge your sub branch to master.
		creating branch 
			$git branch <branchname>
		switching to branch
			$git checkout <branchname>
		merge branch 
			$git merege <branch name >
// git fect and git full
	git full ->pull all data and stores in master branch
	git fetch->pull all data and creats new branch 