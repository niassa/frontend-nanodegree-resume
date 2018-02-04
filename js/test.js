var fam1, fam2, bruce, madison, hunter;

fam1 = $('#family1');
fam2 = $('<div id="family2"><h1>Family 2</h1></div>');
bruce = $('<div id="bruce"><h2>Bruce</h2></div>');
madison = $('<div id="madison"><h3>Madison</h3></div>');
hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

fam2.insertAfter(fam1);
fam2.append(bruce);
bruce.append(madison);
bruce.append(hunter);