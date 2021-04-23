// the html target element in which you want to put the sayings
var targetElement = document.getElementById('sun_tzu_quotes')

//old sayings library
var library = ['“Appear weak when you are strong, and strong when you are weak.”\n' +
'― Sun Tzu, The Art of War ',
  '“The supreme art of war is to subdue the enemy without fighting.”\n' +
  '― Sun Tzu, The Art of War ',
  '“If you know the enemy and know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.”\n' +
  '― Sun Tzu, The Art of War ',
  '“Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.”\n' +
  '― Sun Tzu, The Art of War ',
  '“Supreme excellence consists of breaking the enemy\'s resistance without fighting.”\n' +
  '― Sun Tzu, The Art of War ',
  '“All warfare is based on deception. Hence, when we are able to attack, we must seem unable; when using our forces, we must appear inactive; when we are near, we must make the enemy believe we are far away; when far away, we must make him believe we are near.”\n' +
  '― Sun tzu, The Art of War ',
  '“Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win”\n' +
  '― Sun Tzu, The Art of War ',
  '“In the midst of chaos, there is also opportunity”\n' +
  '― Sun Tzu, The Art of War ',
  '“If your enemy is secure at all points, be prepared for him. If he is in superior strength, evade him. If your opponent is temperamental, seek to irritate him. Pretend to be weak, that he may grow arrogant. If he is taking his ease, give him no rest. If his forces are united, separate them. If sovereign and subject are in accord, put division between them. Attack him where he is unprepared, appear where you are not expected .”\n' +
  '― Sun Tzu, The Art of War ',
  '“The greatest victory is that which requires no battle.”\n' +
  '― Sun Tzu, The Art of War ',
  '“Engage people with what they expect; it is what they are able to discern and confirms their projections. It settles them into predictable patterns of response, occupying their minds while you wait for the extraordinary moment — that which they cannot anticipate.”\n' +
  '― Sun Tzu, The Art of War ',
  '“There is no instance of a nation benefiting from prolonged warfare.”\n' +
  '― Sun Tzu, The Art of War ',
  '“Thus we may know that there are five essentials for victory:\n' +
  '1 He will win who knows when to fight and when not to fight.\n' +
  '2 He will win who knows how to handle both superior and inferior forces.\n' +
  '3 He will win whose army is animated by the same spirit throughout all its ranks.\n' +
  '4 He will win who, prepared himself, waits to take the enemy unprepared.\n' +
  '5 He will win who has military capacity and is not interfered with by the sovereign.”\n' +
  '― Sun Tzu, The Art of War ',
  '“Treat your men as you would your own beloved sons. And they will follow you into the deepest valley.”\n' +
  '― Sun Tzu, The Art of War ',
  '“Move swift as the Wind and closely-formed as the Wood. Attack like the Fire and be still as the Mountain.”\n' +
  '― Sun Tzu, The Art of War ',
  '“When you surround an army, leave an outlet free. Do not press a desperate foe too hard.”\n' +
  '― sun tzu, The Art of War ',
  '“There are not more than five musical notes, yet the combinations of these five give rise to more melodies than can ever be heard.\n' +
  '\n' +
  'There are not more than five primary colours, yet in combination\n' +
  'they produce more hues than can ever been seen.\n' +
  '\n' +
  'There are not more than five cardinal tastes, yet combinations of\n' +
  'them yield more flavours than can ever be tasted.”\n' +
  '― Sun Tzu, The Art of War ',
  '“The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.”\n' +
  '― Sun Tzu, The Art of War ',
  '“When the enemy is relaxed, make them toil. When full, starve them. When settled, make them move.”\n' +
  '― Sun Tzu, The Art of War ',
  '“who wishes to fight must first count the cost”\n' +
  '― Sun Tzu, The Art of War ',
  '“So in war, the way is to avoid what is strong, and strike at what is weak.”\n' +
  '― Sun Tzu, The Art of War ',
  '“To win one hundred victories in one hundred battles is not the acme of skill. To subdue the enemy without fighting is the acme of skill.”\n' +
  '― Sun Tzu, The Art of War ',
  '“Be extremely subtle even to the point of formlessness. Be extremely mysterious even to the point of soundlessness. Thereby you can be the director of the opponent\'s fate.”\n' +
  '― Sun Tzu, The Art of War ',
  '“What the ancients called a clever fighter is one who not only wins, but excels in winning with ease.”\n' +
  '― Sun Tzu, The Art of War ',
  '“The wise warrior avoids the battle.”\n' +
  '― Sun Tzu, The Art of War ',
  '“The whole secret lies in confusing the enemy, so that he cannot fathom our real intent.”\n' +
  '― Sun Tzu, The Art of War ',
  '“One may know how to conquer without being able to do it. ”\n' +
  '― Sun Tzu, The Art of War ',
  '“Rouse him, and learn the principle of his activity or inactivity. Force him to reveal himself, so as to find out his vulnerable spots.”\n' +
  '― Sun Tzu, The Art of War ',
  '“If you know the enemy and know yourself, your victory will not stand in doubt; if you know Heaven and know Earth, you may make your victory complete.”\n' +
  '― Sun Tzu, The Art of War ',
  '“He who is prudent and lies in wait for an enemy who is not, will be victorious.”\n' +
  '― Sun Tzu, The Art of War '
];

// return an old sayings from library randomly.
function getRandomSayings(library) {
  var len = library.length;
  // Math.random() generates a decimal [0, 1)
  return library[Math.floor(Math.random() * len)];
}

// main function, ran by setInterval()
function generateRandomSaying() {
  var randomSayings = getRandomSayings(library);
  targetElement.innerHTML = randomSayings;
}

// run the main function each 1000 miliseconds.
setInterval(generateRandomSaying, 20000);
new_quote_button.onclick = generateRandomSaying;
