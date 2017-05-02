import rHeader from "../rHeader/cmpt";
import rMain from "../rMain/cmpt";

export default angular
	.module("zkyResume", [
		rHeader,
		rMain
	])
	.component("zkyResume", {
		templateUrl : "components/zkyResume/cmpt.html",
		controllerAs: "zr",
		controller  : ZkyResumeCtrl
	})
	.name;

function ZkyResumeCtrl() {}