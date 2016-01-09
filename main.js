/**
 * Created by max on 9/01/16.
 */

function play(elementId)
{
    document.getElementById(elementId).play();
}

function pause(elementId)
{
    document.getElementById(elementId).pause();
}

function increaseVolume(elementId)
{
    document.getElementById(elementId).volume += 0.1;
}

function decreaseVolume(elementId)
{
    document.getElementById(elementId).volume -= 0.1;
}

function startForward(elementId)
{
    document.getElementById(elementId).playbackRate = 4.0;
}

function stopForward(elementId)
{
    document.getElementById(elementId).playbackRate = 1.0;
}

var videoIntervalRewind, audioIntervalRewind;

function startRewind(elementId)
{
    if (elementId == 'video')
    {
        videoIntervalRewind = setInterval(function()
        {
            document.getElementById(elementId).currentTime -= 0.1;
        }, 30);
    }
    else if (elementId == 'audio')
    {
        audioIntervalRewind = setInterval(function()
        {
            document.getElementById(elementId).currentTime -= 0.1;
        }, 100);
    }
}

function stopRewind(elementId)
{
    if (elementId == 'video') { clearInterval(videoIntervalRewind); }
    else if (elementId == 'audio') { clearInterval(audioIntervalRewind); }
}

function start(elementId)
{
    document.getElementById(elementId).currentTime = 0;
}

function end(elementId)
{
    document.getElementById(elementId).currentTime = document.getElementById(elementId).duration;
}