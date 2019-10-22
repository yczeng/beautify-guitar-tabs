var garbageDivs = ["mS99P", "_21_lj", "ztjWI _2GydY", "eDpei", "js-ab-regular", "ztjWI _2GydY", "_1Dc-f", "comments", "_3aR1y_3D2BN", "_2e92L_17oyS", "o7EYP", "_2MgSS _1ScGs", "_3aR1y _3D2BN", "_1wRYH"]

for (i = 0; i<garbageDivs.length; i++){
	let element = document.getElementsByClassName(garbageDivs[i])
	if (element[0]){
		element[0].parentNode.removeChild(element[0]);
	}
}