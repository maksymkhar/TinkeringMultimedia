/**
 * Created by max on 9/01/16.
 */

var videoUrl = "https://r16---sn-h5q7dner.googlevideo.com/videoplayback?lmt=143972355564223" +
    "8&ratebypass=yes&expire=1452321940&mime=video%2Fmp4&requiressl=yes&ms=au&itag=22&initc" +
    "wndbps=1452500&dur=224.815&mv=m&mt=1452300262&id=o-AK9fJiwBAzii8i75qzmM32IiAiK0kB4jd3I" +
    "bJ-5IeW5w&sparams=dur%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2" +
    "Cms%2Cmv%2Cnh%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&fexp=9407536%2C94" +
    "07745%2C9416126%2C9417354%2C9418400%2C9419817%2C9420452%2C9421247%2C9422596%2C9423294%" +
    "2C9423662%2C9424773%2C9425402%2C9426214&sver=3&pl=20&mn=sn-h5q7dner&mm=31&ip=79.148.31" +
    ".16&key=yt6&source=youtube&upn=0WRRVf_fNcE&signature=BFB05696A3F89FEF838DE84FFA71735CC" +
    "73381DF.B5398D15998E87B83B72671052FAAF6844A59F&ipbits=0&nh=IgpwcjAxLm1hZDA2KgkxMjcuMC4wLjE";


function play()
{
    document.getElementById('video').play();
}

function pause()
{
    document.getElementById('video').pause();
}

function increaseVolume()
{
    document.getElementById('video').volume += 0.1;
}

function decreaseVolume()
{
    document.getElementById('video').volume -= 0.1;
}

function startForward()
{
    document.getElementById('video').playbackRate = 4.0;
}

function stopForward()
{
    document.getElementById('video').playbackRate = 1.0;
}

var intervalRewind;

function startRewind()
{
    intervalRewind = setInterval(function()
    {

        document.getElementById('video').currentTime -=0.1;

    }, 30);
}

function stopRewind()
{
    clearInterval(intervalRewind);
    play();
}