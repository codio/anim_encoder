// Rename time sequenced files suitable for python processing
// 
// Input filename is 'screen_n.png' where n is the frame number
// Output filename is 'screen_12345678.png' where 12345678 is ms elapsed since (whenever)
// This is dependent on the fps value below (the frame rate at which we spit out the .png files)

var fps = 4    			// Frame per second 
var frameInc = 1000/fps;	// milliseconds per frame

var fs = require('fs')
var dir = process.argv[2];

// Read the contents of the specified directory 
// Rename each one in the 'screen_12345678' format

var srcFiles = fs.readdirSync(dir)
var tgtFiles = srcFiles
var msCtr=0;
for(x in tgtFiles) {
	if(tgtFiles[x].substr(0,6)=='screen') {
		fs.renameSync(dir + '/' + tgtFiles[x], dir + '/screen_' + msCtr + '.png')
		msCtr+=frameInc;
	}
}