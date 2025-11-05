content = document.getElementById("content");

var then = new Date(2025, 10, 7);
console.log(then);
var thenMil = then.getTime();
console.log("then " + thenMil)

setInterval(function(){
    var now = new Date();
    var nowMil = now.getTime();
    // Getting current time
    var delta = thenMil - nowMil;
deltaClock = new Date(delta);

var days = Math.floor(deltaClock / (1000 * 60 * 60 * 24));
var hours = Math.floor((deltaClock % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((deltaClock % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((deltaClock % (1000 * 60)) / 1000);

if (nowMil < thenMil) {
    content.innerHTML = `<h2>${days}d / ${hours}h / ${minutes} m / ${seconds}s<h2>`;
} else {
    content.innerHTML = `<section> <p>Darryl Kenedy has a great story - it is relatable, motivational, and human - but the man has built a career around telling it. There is little scope for a story that is <em>new</em>. A peice covering his story will only ever be <em>fine</em>.</p> <p>Our <em>film-jam</em> submission was fine. But after resubmission was pushed up to 75%. Lets not waste our own potential again.</p><p>This is docs without rules.<br>There are no rules - there is no protection.</p><p><span>I am <em>taking control</em> of the project.</span></p></section><section><p>I'm going to make the film about <em>dogs</em>.</p></section>`
}
}, 1000);