/**表情符号存储与编译**/
function utf16toEntities(str) {
	var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
	// 检测utf16字符正则
	str = str.replace(patt, function(char) {
		var H, L, code;
		if (char.length === 2) {
			H = char.charCodeAt(0);
			// 取出高位
			L = char.charCodeAt(1);
			// 取出低位
			code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
			// 转换算法
			var ss = "&#" + code + ";";
			return ss;
		} else {
			return char;
		}
	});
	str = str.replace(/&#/g, '^^');
	return str;
}

//表情解码
function entitiestoUtf16(str) {
	// 检测出形如&#12345;形式的字符串
	var strObj = utf16toEntities(str);
	strObj = strObj.replace(/\^\^/g, '&#');
	var patt = /&#\d+;/g;
	var H, L, code;
	var arr = strObj.match(patt) || [];
	for (var i = 0; i < arr.length; i++) {
		code = arr[i];
		code = code.replace('&#', '').replace(';', '');
		// 高位
		H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
		// 低位
		L = (code - 0x10000) % 0x400 + 0xDC00;
		code = "&#" + code + ";";
		var s = String.fromCharCode(H, L);
		strObj.replace(code, s);
	}
	return strObj;
}

