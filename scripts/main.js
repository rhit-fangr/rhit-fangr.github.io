var rhit = rhit || {};

/* Side Nav */
rhit.UserNavController = class {
	constructor() {
		document.querySelector("#menuAbout").onclick = (event) => {
			console.log("Yay");
			window.location.href = "index.html";
		}
		document.querySelector("#menuPortfolio").onclick = (event) => {
			window.location.href = "portfolio.html";
		}
		document.querySelector("#menuResume").onclick = (event) => {
			window.location.href = "resume.html";
		}
	}

}

rhit.initializePage = function () {

	if (document.querySelector("#aboutPage")) {
		console.log("about");
		new rhit.UserNavController();
		// new rhit.aboutPageController();
	}

	if (document.querySelector("#portfolioPage")) {
		console.log("portfolio");
		new rhit.UserNavController();
		// new rhit.portPageController();
	}

	if (document.querySelector("#resumePage")) {
		console.log("resume");
		new rhit.UserNavController();
		// new rhit.resumePageController();
	}
}


/* Main */
rhit.main = function () {
	console.log("Ready");
	rhit.initializePage();
};

rhit.main();
