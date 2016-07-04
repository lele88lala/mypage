/**
 * Created by lele88lala on 7/4/16.
 */
var teamData = document.querySelector('.team-data');
var modalTeamData = document.querySelector('.modal-team-data');
teamData.onclick = function() {
    modalTeamData.style.display = 'block';
    //modalTeamData.style.opacity = 1;
}

var close = document.querySelector('.modal-team-data .close');
close.onclick = function () {
    modalTeamData.style.display = 'none';
    //modalTeamData.style.opacity = 0;
}