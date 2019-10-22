var garbageDivs = ["mS99P", "_21_lj", "ztjWI _2GydY", "eDpei", "js-ab-regular", "ztjWI _2GydY", "_1Dc-f", "comments", "_3aR1y_3D2BN", "_2e92L_17oyS", "o7EYP", "_2MgSS _1ScGs"]

for (i = 0; i<garbageDivs.length; i++){
	if (document.getElementsByClassName(garbageDivs[i])){
		document.getElementsByClassName(garbageDivs[i])[0].innerHTML = ""
	}
}