module.exports = [
  {
    "title": "Taming Android Fragmentation: Characterizing and Detecting Compatibility Issues for Android Apps",
    "date": "2016",
    "authors": [
      "Lili Wei", "Yepang Liu", "Shing-Chi Cheung"
    ],
    "venue": "31st IEEE/ACM International Conference on Automated Software Engineering (ASE 2016), Singapore, Sept 2016",
    "venueShort": "ASE",
    "tags": [],
    "abstract": `
    Android ecosystem is heavily fragmented. The numerous combinations of different device models and operating system versions make it impossible for Android app developers to exhaustively test their apps. As a result, various compatibility issues arise, causing poor user experience. However, little is known on the characteristics of such fragmentation-induced compatibility issues and no mature tools exist to help developers quickly diagnose and fix these issues. To bridge the gap, we conducted an empirical study on 191 real-world compatibility issues collected from popular open-source Android apps. Our study characterized the symptoms and root causes of compatibility issues, and disclosed that the patches of these issues exhibit common patterns. With these findings, we propose a technique named FicFinder to automatically detect compatibility issues in Android apps. FicFinder performs static code analysis based on a model that captures Android APIs as well as their associated context by which compatibility issues are triggered. FicFinder reports actionable debugging information to developers when it detects potential issues. We evaluated FicFinder with 27 large-scale open-source Android apps. The results show that FicFinder can precisely detect compatibility issues in these apps and uncover previously-unknown issues.
    `,
    "paperUrl": "http://sccpu2.cse.ust.hk/ficfinder/ASE_FicFinder.pdf",
    "projectUrl": "http://sccpu2.cse.ust.hk/ficfinder/index.html",
    
    "bibtex": `
@inproceedings{Wei_ASE16,
	author    = {Lili Wei and Yepang Liu and
		    	 Shing{-}Chi Cheung},
	title     = {Taming Android Fragmentation: Characterizing and Detecting Compatibility Issues for Android Apps},
	booktitle = {Proceedings of the 31st IEEE/ACM International Conference on Automated Software Engineering, {ASE} 2016},
	year      = {2016}
}
    `
  }
]