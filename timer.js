content = document.getElementById("content");

var then = new Date(2025, 10, 6, 13);
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
    content.innerHTML = `<section> <p>Darryl Kenedy has a great story - it is relatable, motivational, and human - but the man has built a career around telling it, and we don't have a concrete structure. There is little scope for a story that is <em>new</em>. A peice covering his story will only ever be <em>fine</em>.</p> <p>Our <em>film-jam</em> submission was fine. But after resubmission was pushed up to 75%. We won't waste our own potential again.</p><p>This is docs without rules.<br>There are no rules - there is no security.</p><p><span>We are <em>pivotting</em> the project.</span></p></section><section><p>We are to make the film about <em>dogs</em> Drryl is an interesting man - but we have a story about dogs. We have a narrative structure, a well formed idea, and a core theme.</p><a href="pitch.html><h2>CLICK ME TO RECONTEXTUALISE<span></a></h2>`
}
}, 1000);