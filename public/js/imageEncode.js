function dataUriEncode(imgPath) {
    var file = File(imgPath);
    var mime = {png: 'png', jpg:'jpeg'};
    debugger;
    var result = 'data:image/' + mime[file.extension] + ';base64,' + file.toBuffer().toString('base64');
    return result;
}

var imgData = dataUriEncode(ds.getModelFolder().path +"test.jpg")
