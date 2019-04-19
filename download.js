var fs = require('fs')
var yt = require('youtube-dl')
var ffmpeg = require('ffmpeg')
var downDir = require('downloads-folder')

function download(){
    let url = document.getElementById('url-form').value
    let video = yt(url, [],
        {
            cwd: downDir()
        })
        console.log(video)
    
    yt.exec(url, ['-x',
        '--audio-format','mp3',
        '-o','"%(title)s.%(ext)s"', 
        '--ffmpeg-location','./ffmpeg/bin/ffmpeg.exe'], {}, function(err, output){
        if (err) throw err;
        console.log(output.join('\n'));
    })

    /*video.on('info', function(info) {
        console.log('Download started');
        var name = info._filename;
        console.log('filename: ' + info._filename);
        console.log('size: ' + info.size);
        });
    video.on('end', function(info) {
        console.log(info._filename);
        });
    */
    //video.pipe(fs.createWriteStream("file.mp3"));

}